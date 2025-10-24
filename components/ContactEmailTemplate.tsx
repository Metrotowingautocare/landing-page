import React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactEmailTemplate({ name, email, phone, subject, message }: ContactEmailTemplateProps) {
  const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Form Submission</title>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f8fafc', fontFamily }}>
        <table
          role="presentation"
          style={{ width: '100%', borderCollapse: 'collapse' }}
          cellPadding="0"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <td align="center" style={{ padding: '20px 0' }}>
                <table
                  role="presentation"
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    borderCollapse: 'collapse',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden'
                  }}
                  cellPadding="0"
                  cellSpacing="0"
                >
                  <tbody>
                    {/* Header */}
                    <tr>
                      <td style={{ backgroundColor: '#dc2626', padding: '40px 30px', textAlign: 'center' }}>
                        <h1 style={{ color: '#ffffff', margin: 0, fontSize: '28px', fontWeight: 700 }}>
                          📧 New Contact Message
                        </h1>
                        <p style={{ color: '#fecaca', margin: '8px 0 0 0', fontSize: '16px' }}>
                          From Metro Towing & Auto Care Website
                        </p>
                      </td>
                    </tr>

                    {/* Content */}
                    <tr>
                      <td style={{ padding: '40px 30px' }}>
                        {/* Info Section */}
                        <table
                          role="presentation"
                          style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            backgroundColor: '#f8fafc',
                            borderRadius: '8px',
                            borderLeft: '4px solid #dc2626',
                            marginBottom: '30px'
                          }}
                          cellPadding="0"
                          cellSpacing="0"
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: '24px' }}>
                                <table role="presentation" style={{ width: '100%', borderCollapse: 'collapse' }} cellPadding="0" cellSpacing="0">
                                  <tbody>
                                    {renderInfoRow('👤 Name', name)}
                                    {renderInfoRow('📧 Email', <a href={`mailto:${email}`} style={{ color: '#dc2626', textDecoration: 'none' }}>{email}</a>)}
                                    {phone && renderInfoRow('📞 Phone', <a href={`tel:${phone}`} style={{ color: '#dc2626', textDecoration: 'none' }}>{phone}</a>)}
                                    {renderInfoRow('📋 Subject', subject)}
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        {/* Message Section */}
                        <table
                          role="presentation"
                          style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                          }}
                          cellPadding="0"
                          cellSpacing="0"
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: '24px' }}>
                                <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#374151', marginTop: 0, marginBottom: '16px', paddingBottom: '8px', borderBottom: '2px solid #f3f4f6' }}>
                                  💬 Message
                                </h2>
                                <p style={{ color: '#4b5563', lineHeight: 1.7, whiteSpace: 'pre-wrap', wordWrap: 'break-word', margin: 0 }}>
                                  {message}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td style={{ backgroundColor: '#f8fafc', padding: '24px 30px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
                        <p style={{ color: '#6b7280', margin: 0, fontSize: '14px' }}>
                          Metro Towing & Auto Care
                        </p>
                        <p style={{ color: '#9ca3af', fontSize: '12px', margin: '8px 0 0 0' }}>
                          Received on {new Date().toLocaleString()}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}

function renderInfoRow(label: string, value: React.ReactNode) {
  return (
    <tr>
      <td style={{ paddingBottom: '16px' }}>
        <p style={{ fontWeight: 600, color: '#374151', margin: '0 0 4px 0' }}>{label}</p>
        <p style={{ color: '#6b7280', margin: 0, wordBreak: 'break-word' }}>{value}</p>
      </td>
    </tr>
  );
}
