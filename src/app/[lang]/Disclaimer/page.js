import React from 'react'
import DisclaimerPage from './Disclaimer'

export async function generateMetadata({ params }) {
  const { lang } = await params; // no need for await
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "अस्वीकरण - एनएचडीसी"
      : "Disclaimer - NHDC",
    description: isHindi
      ? "यह अस्वीकरण एनएचडीसी वेबसाइट पर उपलब्ध जानकारी की शुद्धता और उपयोग से संबंधित सीमाओं और जिम्मेदारियों को स्पष्ट करता है।"
      : "This disclaimer outlines the limitations and responsibilities regarding the accuracy and use of information available on the NHDC website.",
    keywords: isHindi
      ? "एनएचडीसी, अस्वीकरण, वेबसाइट जानकारी, उत्तरदायित्व, सीमाएं"
      : "NHDC, Disclaimer, Website Information, Liability, Limitations",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी अस्वीकरण"
        : "NHDC Disclaimer",
      description: isHindi
        ? "एनएचडीसी वेबसाइट की जानकारी और उपयोग से संबंधित शर्तें और अस्वीकरण।"
        : "Disclaimer and terms related to the information and use of the NHDC website.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "एनएचडीसी अस्वीकरण"
            : "NHDC Disclaimer",
        },
      ],
    },
  };
}


export default function page() {
  return (
  <DisclaimerPage/>
  )
}
