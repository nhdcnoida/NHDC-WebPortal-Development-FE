import React from 'react'
import CorporateOffice from './Corporate_Office'

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "कॉरपोरेट कार्यालय - एनएचडीसी"
      : "Corporate Office - NHDC",
    description: isHindi
      ? "एनएचडीसी का कॉरपोरेट कार्यालय संगठन की नीतियों, संचालन और विभिन्न गतिविधियों के प्रभावी प्रबंधन और क्रियान्वयन का मुख्य केंद्र है।"
      : "The Corporate Office of NHDC serves as the central hub for policy making, administration, and effective management of the corporation’s operations and activities.",
    keywords: isHindi
      ? "एनएचडीसी, कॉरपोरेट कार्यालय, मुख्यालय, नीतियां, प्रशासन, संचालन"
      : "NHDC, Corporate Office, Headquarters, Policies, Administration, Operations",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी कॉरपोरेट कार्यालय"
        : "NHDC Corporate Office",
      description: isHindi
        ? "एनएचडीसी का कॉरपोरेट कार्यालय संगठन की गतिविधियों के प्रबंधन और संचालन का मुख्यालय है।"
        : "The NHDC Corporate Office is the headquarters for managing and coordinating the organization’s activities.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "एनएचडीसी कॉरपोरेट कार्यालय"
            : "NHDC Corporate Office",
        },
      ],
    },
  };
}

export default function OrgChartPage() {
  return <CorporateOffice />
}
