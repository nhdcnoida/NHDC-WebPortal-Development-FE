import React from 'react'
import CitizenCharter from './CitizenCharter'

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "नागरिक चार्टर - राष्ट्रीय हथकरघा विकास निगम लिमिटेड"
      : "Citizen Charter - National Handloom Development Corporation Limited",
    description: isHindi
      ? "एनएचडीसी का नागरिक चार्टर - हमारा विजन, मिशन, मूल्य और हथकरघा बुनकरों के लिए सेवाएं। कच्चे माल की आपूर्ति, 15% मूल्य सब्सिडी, मार्केटिंग सहायता और तकनीकी प्रशिक्षण कार्यक्रम।"
      : "NHDC's Citizen Charter outlines our vision, mission, values and comprehensive services for handloom weavers including raw material supply, 15% price subsidy, marketing support and technical training programs.",
    keywords: isHindi
      ? "एनएचडीसी, नागरिक चार्टर, हथकरघा, बुनकर, कच्चा माल, यार्न, रंग, रसायन, मार्केटिंग, प्रशिक्षण, आरएमएसएस, सब्सिडी"
      : "NHDC, Citizen Charter, Handloom, Weavers, Raw Materials, Yarn, Dyes, Chemicals, Marketing, Training, RMSS, Subsidy, Government Services",
    
    // Enhanced Open Graph
    openGraph: {
      title: isHindi
        ? "एनएचडीसी नागरिक चार्टर - हथकरघा विकास सेवाएं"
        : "NHDC Citizen Charter - Handloom Development Services",
      description: isHindi
        ? "हथकरघा बुनकरों के लिए एनएचडीसी की संपूर्ण सेवाएं - कच्चे माल की आपूर्ति, 15% मूल्य सब्सिडी, मार्केटिंग सहायता, तकनीकी प्रशिक्षण और शिकायत निवारण प्रणाली।"
        : "Comprehensive NHDC services for handloom weavers - raw material supply, 15% price subsidy, marketing support, technical training and grievance redressal system.",
      type: "website",
      locale: isHindi ? 'hi_IN' : 'en_US',
      siteName: isHindi 
        ? "राष्ट्रीय हथकरघा विकास निगम" 
        : "National Handloom Development Corporation",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          width: 1200,
          height: 630,
          alt: isHindi
            ? "एनएचडीसी नागरिक चार्टर - हथकरघा विकास सेवाएं"
            : "NHDC Citizen Charter - Handloom Development Services",
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      site: '@NHDC_Official',
      title: isHindi
        ? "एनएचडीसी नागरिक चार्टर"
        : "NHDC Citizen Charter",
      description: isHindi
        ? "हथकरघा बुनकरों के लिए एनएचडीसी की सेवाएं और प्रतिबद्धताएं"
        : "NHDC services and commitments for handloom weavers",
      images: ["https://nhdc.org.in/NHDC.png"],
    },

    // Canonical and language alternates
    alternates: {
      canonical: isHindi 
        ? 'https://nhdc.org.in/hi/citizen-charter' 
        : 'https://nhdc.org.in/en/citizen-charter',
      languages: {
        'hi': 'https://nhdc.org.in/hi/citizen-charter',
        'en': 'https://nhdc.org.in/en/citizen-charter',
        'x-default': 'https://nhdc.org.in/en/citizen-charter',
      },
    },

    // Additional metadata
    category: isHindi ? 'सरकारी सेवाएं' : 'Government Services',
    classification: isHindi ? 'सार्वजनिक क्षेत्र' : 'Public Sector',
    
    // Author and organization
    authors: [{ 
      name: isHindi 
        ? 'राष्ट्रीय हथकरघा विकास निगम लिमिटेड' 
        : 'National Handloom Development Corporation Limited' 
    }],

    // Additional Open Graph properties
    other: {
      'og:contact_point:phone_number': '+91-120-2329600',
      'og:contact_point:email': 'conhdc@nhdc.org.in',
      'og:locality': 'Greater Noida',
      'og:region': 'Uttar Pradesh',
      'og:country_name': 'India',
      'og:postal_code': '201306',
    },
  };
}

export default function page() {
  return <CitizenCharter />
}
