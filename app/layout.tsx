import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '../components/footer';
import { ChatProvider } from '../components/chatProvider';
import { StructuredData } from '../components/structuredData';
import { LeadMagnet } from '../components/LeadMagnet';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Auto Repair & Maintenance in North Omaha | MetroTow Auto Care – 24/7 Towing Available',
    template: '%s | MetroTow Auto Care - North Omaha Auto Repair'
  },
  description: 'Full-service auto repair shop in North Omaha. Certified mechanics for brakes, diagnostics, oil changes & more. 24/7 towing available to bring your vehicle to our shop.',
  keywords: [
    'auto repair North Omaha',
    'brake repair Omaha',
    'engine diagnostics Nebraska',
    'oil change North Omaha',
    'tire service Omaha',
    'car maintenance North Omaha',
    'certified mechanics Omaha',
    'auto repair shop Nebraska',
    'brake service Omaha',
    'check engine light repair',
    'tire rotation Omaha',
    'vehicle maintenance North Omaha',
    'bilingual auto repair',
    'emergency towing Omaha',
    'roadside assistance Omaha',
    'professional auto repair'
  ],
  authors: [{ name: 'MetroTow', url: 'https://metrotowingautocare.com/' }],
  creator: 'MetroTow Auto Care & Towing',
  publisher: 'MetroTow Auto Care & Towing',
  metadataBase: new URL('https://metrotowingautocare.com/'),
  alternates: {
    canonical: 'https://metrotowingautocare.com/',
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Auto Repair & Maintenance in North Omaha | MetroTow Auto Care',
    description: 'Full-service auto repair shop in North Omaha. Certified mechanics for brakes, diagnostics, oil changes & more. 24/7 towing available to bring your vehicle to our shop.',
    url: 'https://metrotowingautocare.com/',
    siteName: 'MetroTow Auto Care - North Omaha Auto Repair',
    images: [
      {
        url: '/hero-tow-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional auto mechanic repairing vehicle at MetroTow Auto Care in North Omaha',
      },
      {
        url: '/logo.svg',
        width: 800,
        height: 600,
        alt: 'MetroTow Auto Care - Full-Service Auto Repair and 24/7 Towing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Repair & Maintenance in North Omaha | MetroTow Auto Care',
    description: 'Full-service auto repair shop. Certified mechanics for brakes, diagnostics, oil changes & more. 24/7 towing available.',
    images: ['/hero-tow-truck.jpg'],
    creator: '@MetroTowOmaha',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'Automotive Services',
  classification: 'Auto Repair and Maintenance Shop',
  other: {
    'business.type': 'Auto Repair Shop',
    'service.area': 'North Omaha, Nebraska',
    'response.time': '30-45 minutes',
    'availability': '24/7/365',
    'languages': 'English, Spanish',
    'phone': '(402) 214-0800',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="US-NE" />
        <meta name="geo.placename" content="North Omaha, Nebraska" />
        <meta name="geo.position" content="41.2565;-95.9345" />
        <meta name="ICBM" content="41.2565, -95.9345" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <StructuredData />
        <ChatProvider>
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <LeadMagnet autoOpen={true} />
          </div>
        </ChatProvider>
      </body>
    </html>
  );
}