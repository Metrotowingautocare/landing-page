export function StructuredData() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "@id": "https://metrotow.com/#business",
      "name": "MetroTow Auto Care & Towing",
      "alternateName": "MetroTow",
      "description": "Professional 24/7 emergency towing and roadside assistance service in North Omaha, Nebraska. Fast response times, bilingual support, and transparent pricing.",
      "url": "https://metrotow.com",
      "telephone": "(402) 214-0800",
      "email": "help@metrotow.com",
      "image": [
        "https://metrotow.com/hero-tow-truck.jpg",
        "https://metrotow.com/metrotow-logo.png"
      ],
      "logo": "https://metrotow.com/metrotow-logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "North Omaha",
        "addressLocality": "Omaha",
        "addressRegion": "NE",
        "postalCode": "68111",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.2565,
        "longitude": -95.9345
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 41.2565,
          "longitude": -95.9345
        },
        "geoRadius": "50000"
      },
      "priceRange": "$45-$150",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card, Debit Card",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Towing and Roadside Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Towing",
              "description": "24/7 emergency vehicle towing service"
            },
            "price": "75",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Battery Jump Start",
              "description": "Professional battery jump start service"
            },
            "price": "45",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Roadside Assistance",
              "description": "Comprehensive roadside assistance services"
            },
            "price": "50",
            "priceCurrency": "USD"
          }
        ]
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Omaha",
          "containedInPlace": {
            "@type": "State",
            "name": "Nebraska"
          }
        }
      ],
      "knowsLanguage": ["English", "Spanish"],
      "slogan": "North Omaha's Fastest Towing Service",
      "foundingDate": "2020",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://metrotow.com/#website",
      "url": "https://metrotow.com",
      "name": "MetroTow - 24/7 Emergency Towing Service",
      "description": "Professional towing and roadside assistance in North Omaha, Nebraska",
      "publisher": {
        "@id": "https://metrotow.com/#business"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://metrotow.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://metrotow.com/#organization",
      "name": "MetroTow Auto Care & Towing",
      "url": "https://metrotow.com",
      "logo": "https://metrotow.com/metrotow-logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "(402) 214-0800",
          "contactType": "emergency service",
          "availableLanguage": ["English", "Spanish"],
          "areaServed": "US-NE"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/MetroTowOmaha",
        "https://www.instagram.com/metrotowomaha",
        "https://twitter.com/MetroTowOmaha"
      ]
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
