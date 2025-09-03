import React from 'react'
import TermsConditionsPage from './TermsCondition'

export async function generateMetadata({ params }) {
  const { lang } = await params; 
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "नियम और शर्तें - एनएचडीसी"
      : "Terms & Conditions - NHDC",
    description: isHindi
      ? "एनएचडीसी वेबसाइट के उपयोग हेतु नियम और शर्तें उपयोगकर्ताओं को वेबसाइट सामग्री, सेवाओं और अधिकारों के संबंध में मार्गदर्शन प्रदान करती हैं।"
      : "The Terms & Conditions of NHDC website provide users with guidance regarding the use of website content, services, and user rights.",
    keywords: isHindi
      ? "एनएचडीसी, नियम और शर्तें, उपयोग की शर्तें, वेबसाइट नीतियां, उपयोगकर्ता अधिकार"
      : "NHDC, Terms and Conditions, Terms of Use, Website Policies, User Rights",
        cacheControl: "public, max-age=3600",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी नियम और शर्तें"
        : "NHDC Terms & Conditions",
      description: isHindi
        ? "एनएचडीसी वेबसाइट उपयोग की शर्तें और नीतियां।"
        : "NHDC website terms of use and policies.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "एनएचडीसी नियम और शर्तें"
            : "NHDC Terms & Conditions",
        },
      ],
    },
  };
}


export default function page() {
  return (
   <TermsConditionsPage/>
  )
}
