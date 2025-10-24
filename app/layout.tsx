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
    default: '24/7 Emergency Towing Service North Omaha | MetroTow - Fast & Reliable',
    template: '%s | MetroTow - North Omaha Towing Service'
  },
  description: 'MetroTow provides 24/7 emergency towing and roadside assistance in North Omaha, NE. Fast 30-45 minute response time, bilingual service, transparent pricing. Call (402) 214-0800 now!',
  keywords: [
    'emergency towing Omaha',
    'North Omaha towing service',
    '24/7 towing Nebraska',
    'roadside assistance Omaha',
    'car towing near me',
    'truck towing service',
    'battery jump start Omaha',
    'flat tire service',
    'lockout service Omaha',
    'winch out recovery',
    'fuel delivery service',
    'bilingual towing service',
    'fast towing response',
    'reliable towing company',
    'affordable towing rates',
    'professional towing service'
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
    title: '24/7 Emergency Towing Service North Omaha | MetroTow',
    description: 'Fast, reliable 24/7 towing service in North Omaha. 30-45 min response time, bilingual support, transparent pricing. Emergency roadside assistance available now!',
    url: 'https://metrotowingautocare.com/',
    siteName: 'MetroTow - North Omaha Towing Service',
    images: [
      {
        url: '/hero-tow-truck.jpg',
        width: 1200,
        height: 630,
        alt: 'MetroTow professional tow truck providing emergency towing service in North Omaha, Nebraska',
      },
      {
        url: '/logo.svg',
        width: 800,
        height: 600,
        alt: 'MetroTow - 24/7 Emergency Towing and Auto Care Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Emergency Towing Service North Omaha | MetroTow',
    description: 'Fast, reliable towing service. 30-45 min response time, bilingual support. Call (402) 214-0800 for emergency assistance!',
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
  classification: 'Emergency Towing and Roadside Assistance',
  other: {
    'business.type': 'Towing Service',
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