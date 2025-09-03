import React from 'react'
import RegionalOffice from './Regional_Office'

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "क्षेत्रीय कार्यालय - एनएचडीसी"
      : "Regional Offices - NHDC",
    description: isHindi
      ? "एनएचडीसी के क्षेत्रीय कार्यालय विभिन्न राज्यों में संगठन की सेवाओं, शाखा कार्यालयों और गोदामों के संचालन और समन्वय का केंद्र हैं।"
      : "NHDC Regional Offices act as nodal centers across states for managing operations, coordinating branch offices and warehouses, and ensuring outreach of services.",
    keywords: isHindi
      ? "एनएचडीसी, क्षेत्रीय कार्यालय, शाखा कार्यालय, गोदाम, संचालन, सेवाएं, राज्य"
      : "NHDC, Regional Office, Branch Office, Warehouse, Operations, Services, States",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी क्षेत्रीय कार्यालय"
        : "NHDC Regional Offices",
      description: isHindi
        ? "एनएचडीसी के क्षेत्रीय कार्यालय देशभर में संगठन की गतिविधियों, शाखाओं और गोदामों का प्रबंधन करते हैं।"
        : "The Regional Offices of NHDC manage organizational activities, branches, and warehouses across India.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "एनएचडीसी क्षेत्रीय कार्यालय"
            : "NHDC Regional Offices",
        },
      ],
    },
  };
}


export default function RegionalOrgChartPage() {
  return (
<RegionalOffice/>
  )
}
