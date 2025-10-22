# Contact Form System with Resend

This project includes a complete contact form system using Resend for email delivery. The system includes beautiful email templates, form validation, and auto-reply functionality.

## 🚀 Features

- **Professional Email Templates**: Beautiful, responsive HTML email templates
- **Dual Email System**: 
  - Admin notification email (for you to receive contact messages)
  - Auto-reply email (confirmation sent to the user)
- **Form Validation**: Client-side and server-side validation
- **Security**: Input sanitization and rate limiting considerations
- **Responsive Design**: Mobile-friendly contact form
- **Error Handling**: Comprehensive error handling and user feedback

## 📁 Files Created

### API Route
- `app/api/contact/route.ts` - Handles form submissions and email sending

### Email Templates
- `components/ContactEmailTemplate.tsx` - Admin notification email template
- `components/ContactAutoReplyTemplate.tsx` - User confirmation email template

### Frontend Component
- `components/ContactForm.tsx` - Complete contact form component

## ⚙️ Setup Instructions

### 1. Configure Resend API Key

1. Sign up for a [Resend account](https://resend.com)
2. Get your API key from the Resend dashboard
3. Add it to your `.env` file:

```env
RESEND_API_KEY=your_resend_api_key_here
```

### 2. Update Email Configuration

In `app/api/contact/route.ts`, update these variables:

```typescript
const TO_EMAIL = 'your-email@yourdomain.com'; // Where contact messages should be sent
const FROM_EMAIL = 'Contact Form <noreply@yourdomain.com>'; // Must be a verified domain
```

**Important**: The `FROM_EMAIL` domain must be verified in your Resend account.

### 3. Verify Your Domain (Required)

1. Go to your Resend dashboard
2. Add and verify your domain
3. Update the `FROM_EMAIL` to use your verified domain

### 4. Use the Contact Form

Import and use the ContactForm component in any page:

```tsx
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <ContactForm />
    </div>
  );
}
```

## 📧 Email Templates

### Admin Notification Email
- **Purpose**: Notifies you when someone submits the contact form
- **Features**: 
  - Professional design with gradient header
  - Contact information clearly displayed
  - Direct reply functionality
  - Timestamp and source tracking

### Auto-Reply Email
- **Purpose**: Confirms receipt to the person who submitted the form
- **Features**:
  - Friendly, welcoming tone
  - Expected response time information
  - Professional branding
  - Social links section

## 🔒 Security Features

- **Input Validation**: All fields are validated for type, length, and format
- **Sanitization**: HTML tags and scripts are stripped from inputs
- **Rate Limiting**: Consider implementing rate limiting for production use
- **CORS Handling**: Proper CORS headers for cross-origin requests

## 🎨 Customization

### Styling the Form
The ContactForm component uses Tailwind CSS. Modify the classes in `components/ContactForm.tsx` to match your design.

### Email Template Customization
Both email templates can be customized:
- Update colors in the `<style>` section
- Modify the content structure
- Add your branding/logo
- Update social links and contact information

### Form Fields
To add/remove form fields:
1. Update the `ContactFormData` interface
2. Add the field to the form JSX
3. Update the API validation
4. Modify the email templates accordingly

## 🧪 Testing

### Test the API Endpoint
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message."
  }'
```

### Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the page with your ContactForm component
3. Fill out and submit the form
4. Check your email for both the admin notification and auto-reply

## 📊 Monitoring

Monitor your contact form usage:
- Check Resend dashboard for email delivery status
- Monitor server logs for errors
- Consider adding analytics to track form submissions

## 🚨 Production Considerations

1. **Rate Limiting**: Implement rate limiting to prevent spam
2. **Captcha**: Consider adding reCAPTCHA for additional security
3. **Database Logging**: Store submissions in a database for backup
4. **Error Monitoring**: Set up error tracking (Sentry, etc.)
5. **Email Deliverability**: Monitor bounce rates and spam reports

## 🆘 Troubleshooting

### Common Issues

1. **Emails not sending**:
   - Check your Resend API key
   - Verify your domain in Resend
   - Check server logs for errors

2. **Domain verification issues**:
   - Ensure DNS records are properly configured
   - Wait for DNS propagation (up to 24 hours)

3. **Form not submitting**:
   - Check browser console for JavaScript errors
   - Verify API endpoint is accessible
   - Check network tab for request/response details

## 📞 Support

For additional help:
- Check the [Resend documentation](https://resend.com/docs)
- Review the [Next.js API routes documentation](https://nextjs.org/docs/api-routes/introduction)
- Check the browser console and server logs for error messages

---

**Note**: Remember to test thoroughly in a development environment before deploying to production!
