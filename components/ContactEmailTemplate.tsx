import React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactEmailTemplate({ name, email, phone, subject, message }: ContactEmailTemplateProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Form Submission</title>
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
          }
          .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 28px;
            font-weight: 700;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header p {
            color: #e2e8f0;
            margin: 8px 0 0 0;
            font-size: 16px;
          }
          .content {
            padding: 40px 30px;
          }
          .info-section {
            background-color: #f8fafc;
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 30px;
            border-left: 4px solid #667eea;
          }
          .info-row {
            display: flex;
            margin-bottom: 16px;
            align-items: flex-start;
          }
          .info-row:last-child {
            margin-bottom: 0;
          }
          .info-label {
            font-weight: 600;
            color: #374151;
            min-width: 80px;
            margin-right: 16px;
          }
          .info-value {
            color: #6b7280;
            flex: 1;
            word-break: break-word;
          }
          .message-section {
            background-color: #ffffff;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            padding: 24px;
          }
          .message-header {
            font-size: 18px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #f3f4f6;
          }
          .message-content {
            color: #4b5563;
            line-height: 1.7;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          .footer {
            background-color: #f8fafc;
            padding: 24px 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }
          .footer p {
            color: #6b7280;
            margin: 0;
            font-size: 14px;
          }
          .timestamp {
            color: #9ca3af;
            font-size: 12px;
            margin-top: 8px;
          }
          @media (max-width: 600px) {
            .container {
              margin: 0;
              border-radius: 0;
            }
            .header, .content, .footer {
              padding-left: 20px;
              padding-right: 20px;
            }
            .info-row {
              flex-direction: column;
            }
            .info-label {
              margin-bottom: 4px;
              margin-right: 0;
            }
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h1>📧 New Contact Message</h1>
            <p>Someone has reached out through your website</p>
          </div>
          
          <div className="content">
            <div className="info-section">
              <div className="info-row">
                <span className="info-label">👤 Name:</span>
                <span className="info-value">{name}</span>
              </div>
              <div className="info-row">
                <span className="info-label">📧 Email:</span>
                <span className="info-value">
                  <a href={`mailto:${email}`} style={{ color: '#667eea', textDecoration: 'none' }}>
                    {email}
                  </a>
                </span>
              </div>
              {phone && (
                <div className="info-row">
                  <span className="info-label">📞 Phone:</span>
                  <span className="info-value">
                    <a href={`tel:${phone}`} style={{ color: '#667eea', textDecoration: 'none' }}>
                      {phone}
                    </a>
                  </span>
                </div>
              )}
              <div className="info-row">
                <span className="info-label">📋 Subject:</span>
                <span className="info-value">{subject}</span>
              </div>
            </div>

            <div className="message-section">
              <div className="message-header">💬 Message</div>
              <div className="message-content">{message}</div>
            </div>
          </div>

          <div className="footer">
            <p>This message was sent from your website's contact form.</p>
            <p className="timestamp">Received on {new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
    </html>
  );
}
