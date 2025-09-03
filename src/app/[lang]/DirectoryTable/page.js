import React from 'react'
import HeadOfficeDirectory from './DirectoryTable'

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "कॉरपोरेट कार्यालय टेलीफोन डायरेक्टरी - एनएचडीसी"
      : "Corporate Office Telephone Directory - NHDC",
    description: isHindi
      ? "एनएचडीसी कॉरपोरेट कार्यालय टेलीफोन डायरेक्टरी में विभिन्न विभागों और अधिकारियों के संपर्क विवरण, इंटरकॉम नंबर और संचार जानकारी उपलब्ध है।"
      : "The NHDC Corporate Office Telephone Directory provides contact details, intercom numbers, and communication information of various departments and officials.",
    keywords: isHindi
      ? "एनएचडीसी, टेलीफोन डायरेक्टरी, कॉरपोरेट कार्यालय, इंटरकॉम डायरेक्टरी, संपर्क विवरण, अधिकारी, विभाग"
      : "NHDC, Telephone Directory, Corporate Office, Intercom Directory, Contact Details, Officials, Departments",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी कॉरपोरेट कार्यालय टेलीफोन डायरेक्टरी"
        : "NHDC Corporate Office Telephone Directory",
      description: isHindi
        ? "एनएचडीसी कॉरपोरेट कार्यालय के विभिन्न विभागों और अधिकारियों की संपर्क जानकारी।"
        : "Contact information of different departments and officials of NHDC Corporate Office.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "एनएचडीसी टेलीफोन डायरेक्टरी"
            : "NHDC Telephone Directory",
        },
      ],
    },
  };
}


export default function page() {
  return (
 <HeadOfficeDirectory/>
  )
}
