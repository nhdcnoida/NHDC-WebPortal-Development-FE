import React from 'react'
import Empanelment from './Emplanelment'

export async function generateMetadata({ params }) {
  const { lang } = await params; // no need for await
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "पैनल में शामिल होना (Empanelment) - एनएचडीसी"
      : "Empanelment - NHDC",
    description: isHindi
      ? "एनएचडीसी की पैनल में शामिल होने की प्रक्रिया आपूर्तिकर्ताओं, सेवा प्रदाताओं और अन्य संस्थानों को संगठन के साथ कार्य करने का अवसर प्रदान करती है।"
      : "NHDC’s empanelment process provides suppliers, service providers, and institutions an opportunity to collaborate and work with the organization.",
    keywords: isHindi
      ? "एनएचडीसी, पैनल में शामिल होना, Empanelment, आपूर्तिकर्ता, सेवा प्रदाता, साझेदारी, सहयोग"
      : "NHDC, Empanelment, Suppliers, Service Providers, Partnership, Collaboration",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी पैनल में शामिल होना"
        : "NHDC Empanelment",
      description: isHindi
        ? "एनएचडीसी की एम्पैनलमेंट प्रक्रिया से योग्य संस्थान और सेवा प्रदाता संगठन के साथ सहयोग कर सकते हैं।"
        : "Through NHDC’s empanelment process, eligible institutions and service providers can collaborate with the organization.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "एनएचडीसी पैनल में शामिल होना"
            : "NHDC Empanelment",
        },
      ],
    },
  };
}


export default function page() {
  return (
 <Empanelment/>
  )
}
