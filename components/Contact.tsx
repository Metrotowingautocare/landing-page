'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import { useChat } from "./chatProvider";
import { SuccessModal } from "./SuccessModal";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const Contact = () => {
  const { openChat } = useChat();
  
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    // Phone validation (optional field)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/;
      if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.length > 200) {
      newErrors.subject = 'Subject must be less than 200 characters';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 5000) {
      newErrors.message = 'Message must be less than 5000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        // Success - show modal and reset form
        setShowSuccessModal(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                Need Help
                <br />
                <span className="bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent">
                  Right Now?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                We're available 24/7 for emergencies. Call, text, or chat with us in English or Spanish.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <Card className="p-6 border-2 border-emergency/20 hover:border-emergency transition-all duration-300 bg-card/80 backdrop-blur-sm group">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-emergency to-emergency/80 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-muted-foreground mb-1">Emergency Hotline</div>
                    <a href="tel:+14022140800" className="text-2xl font-black text-emergency hover:text-emergency/80 transition-colors">
                      (402) 214-0800
                    </a>
                    <div className="text-sm text-muted-foreground font-semibold mt-1">
                      Available 24/7 • Disponible 24/7
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-secondary/20 hover:border-secondary transition-all duration-300 bg-card/80 backdrop-blur-sm group">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-secondary to-warning rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-muted-foreground mb-1">Live Chat Support</div>
                    <button 
                      onClick={openChat}
                      className="text-2xl font-black text-secondary hover:text-secondary/80 transition-colors"
                    >
                      Start Chat Now
                    </button>
                    <div className="text-sm text-muted-foreground font-semibold mt-1">
                      Fastest response • Respuesta más rápida
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-primary transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary to-primary-light rounded-2xl shadow-md">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-muted-foreground mb-1">Email Us</div>
                    <a href="mailto:service@metrotowingautocare.com" className="text-xl font-bold text-foreground hover:text-secondary transition-colors">
                      service@metrotowingautocare.com
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Location & Hours */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 space-y-2 bg-card/80 backdrop-blur-sm">
                <MapPin className="w-8 h-8 text-secondary mb-2" />
                <div className="font-bold text-sm text-muted-foreground">Our Location</div>
                <div className="font-black text-foreground">
                  North Omaha, NE
                </div>
                <div className="text-sm text-muted-foreground">
                  Serving all of Omaha
                </div>
              </Card>

              <Card className="p-6 space-y-2 bg-card/80 backdrop-blur-sm">
                <Clock className="w-8 h-8 text-success mb-2" />
                <div className="font-bold text-sm text-muted-foreground">Hours</div>
                <div className="font-black text-success">
                  24/7/365
                </div>
                <div className="text-sm text-muted-foreground">
                  Always Open
                </div>
              </Card>
            </div>
          </div>

          {/* Right: Contact Form */}
          <Card className="p-8 border-2 hover:border-secondary transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-black mb-2">Send Us a Message</h3>
                <p className="text-muted-foreground font-medium">
                  Not an emergency? Fill out the form and we'll get back to you within 2 hours.
                </p>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-2 text-destructive">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{submitError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Name / Nombre *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe" 
                      className={`border-2 focus:border-secondary ${
                        errors.name ? 'border-destructive focus:border-destructive' : ''
                      }`}
                      maxLength={100}
                      required
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive font-medium">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Email / Correo *</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      className={`border-2 focus:border-secondary ${
                        errors.email ? 'border-destructive focus:border-destructive' : ''
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Phone / Teléfono</label>
                  <Input 
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(402) 214-0800" 
                    className={`border-2 focus:border-secondary ${
                      errors.phone ? 'border-destructive focus:border-destructive' : ''
                    }`}
                    maxLength={20}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive font-medium">{errors.phone}</p>
                  )}
                  <p className="text-xs text-muted-foreground">Optional - helps us respond faster</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Subject / Asunto *</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g., Emergency Towing, Battery Jump, General Inquiry" 
                    className={`border-2 focus:border-secondary ${
                      errors.subject ? 'border-destructive focus:border-destructive' : ''
                    }`}
                    maxLength={200}
                    required
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive font-medium">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Message / Mensaje *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your situation, location, and what help you need..."
                    rows={5}
                    className={`border-2 focus:border-secondary resize-none ${
                      errors.message ? 'border-destructive focus:border-destructive' : ''
                    }`}
                    maxLength={5000}
                    required
                  />
                  <div className="flex justify-between items-center">
                    {errors.message ? (
                      <p className="text-sm text-destructive font-medium">{errors.message}</p>
                    ) : (
                      <div></div>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {formData.message.length}/5000 characters
                    </p>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full text-lg font-bold bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  For emergencies, please call <strong>(402) 214-0800</strong> immediately
                </p>
              </form>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Message Sent Successfully!"
        message="Thank you for contacting Metro Towing! We'll get back to you within 2 hours."
      />
    </section>
  );
};
