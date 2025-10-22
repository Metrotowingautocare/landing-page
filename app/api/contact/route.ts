import React from 'react';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactEmailTemplate } from '../../../components/ContactEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

// Configuration - Update these with your actual email addresses
const TO_EMAIL = 'service@metrotowingautocare.com'; // Where contact messages should be sent
const FROM_EMAIL = 'Contact Form <onboarding@resend.dev>'; // Must be a verified domain on Resend

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json({ 
                error: 'All fields are required: name, email, subject, and message.' 
            }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ 
                error: 'Please enter a valid email address.' 
            }, { status: 400 });
        }

        // Validate field lengths
        if (name.length > 100) {
            return NextResponse.json({ 
                error: 'Name must be less than 100 characters.' 
            }, { status: 400 });
        }

        if (subject.length > 200) {
            return NextResponse.json({ 
                error: 'Subject must be less than 200 characters.' 
            }, { status: 400 });
        }

        if (message.length > 5000) {
            return NextResponse.json({ 
                error: 'Message must be less than 5000 characters.' 
            }, { status: 400 });
        }

        // Validate phone if provided (optional field)
        if (phone && phone.trim()) {
            const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/;
            if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
                return NextResponse.json({ 
                    error: 'Please enter a valid phone number.' 
                }, { status: 400 });
            }
        }

        // Sanitize inputs (basic HTML/script tag removal)
        const sanitizedData = {
            name: name.replace(/<[^>]*>/g, '').trim(),
            email: email.trim().toLowerCase(),
            phone: phone ? phone.replace(/<[^>]*>/g, '').trim() : '',
            subject: subject.replace(/<[^>]*>/g, '').trim(),
            message: message.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').trim()
        };

        // Generate email HTML from template
        const emailComponent = React.createElement(ContactEmailTemplate, sanitizedData);
        const emailHtml = await render(emailComponent);

        // Send notification email to admin
        const { data: adminData, error: adminError } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            subject: `Contact Form: ${sanitizedData.subject}`,
            html: emailHtml,
            replyTo: sanitizedData.email, // Allow easy reply to the sender
        });

        if (adminError) {
            console.error('Resend API Error (Admin):', adminError);
            return NextResponse.json({ 
                error: 'Failed to send your message. Please try again later.' 
            }, { status: 500 });
        }

        console.log('Contact email sent successfully!', adminData);
        
        return NextResponse.json({ 
            message: 'Thank you for your message! We\'ll get back to you soon.',
            success: true
        });

    } catch (err) {
        console.error('Server Error:', err);
        return NextResponse.json({ 
            error: 'An unexpected error occurred. Please try again later.' 
        }, { status: 500 });
    }
}

// Handle OPTIONS request for CORS (if needed)
export async function OPTIONS() {
    return NextResponse.json({}, { 
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
