import React from 'react'
import MSME from './MSME'


export async function generateMetadata({ params }) {
  const { lang } = await params; 
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "एमएसएमई (सूक्ष्म, लघु और मध्यम उद्यम) - एनएचडीसी"
      : "MSME (Micro, Small & Medium Enterprises) - NHDC",
    description: isHindi
      ? "एनएचडीसी एमएसएमई उद्यमों को सशक्त बनाने के लिए विभिन्न योजनाओं, समर्थन सेवाओं और पहलों के माध्यम से कौशल विकास, विपणन और व्यवसाय विस्तार को प्रोत्साहित करता है।"
      : "NHDC supports MSMEs through various schemes, initiatives, and support services aimed at skill development, marketing, and business expansion for Micro, Small, and Medium Enterprises.",
    keywords: isHindi
      ? "एनएचडीसी, एमएसएमई, सूक्ष्म उद्यम, लघु उद्यम, मध्यम उद्यम, व्यवसाय समर्थन, कौशल विकास"
      : "NHDC, MSME, Micro Enterprises, Small Enterprises, Medium Enterprises, Business Support, Skill Development",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी एमएसएमई समर्थन"
        : "NHDC MSME Support",
      description: isHindi
        ? "एनएचडीसी द्वारा एमएसएमई उद्यमों के लिए योजनाएं और समर्थन।"
        : "NHDC’s initiatives and support for MSME enterprises.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "एनएचडीसी एमएसएमई"
            : "NHDC MSME",
        },
      ],
    },
  };
}


export default function page() {
  return (
 <MSME/>
  )
}
