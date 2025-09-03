import React from 'react'
import RTI from './RTI'

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "सूचना का अधिकार (RTI) - एनएचडीसी"
      : "Right to Information (RTI) - NHDC",
    description: isHindi
      ? "सूचना का अधिकार अधिनियम, 2005 के अंतर्गत एनएचडीसी द्वारा पारदर्शिता और जवाबदेही सुनिश्चित करने हेतु आवश्यक जानकारी और खुलासे उपलब्ध कराए जाते हैं।"
      : "Under the Right to Information Act, 2005, NHDC provides necessary disclosures and information to ensure transparency and accountability.",
    keywords: isHindi
      ? "सूचना का अधिकार, RTI, एनएचडीसी, पारदर्शिता, जवाबदेही, आरटीआई अधिनियम 2005, जन सूचना"
      : "Right to Information, RTI, NHDC, Transparency, Accountability, RTI Act 2005, Public Information",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी - सूचना का अधिकार (RTI)"
        : "NHDC - Right to Information (RTI)",
      description: isHindi
        ? "एनएचडीसी सूचना का अधिकार अधिनियम, 2005 के तहत नागरिकों को आवश्यक जानकारी और पारदर्शिता प्रदान करता है।"
        : "NHDC ensures transparency and provides essential information to citizens under the Right to Information Act, 2005.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "एनएचडीसी आरटीआई"
            : "NHDC RTI",
        },
      ],
    },
  };
}


export default function page() {
  return (
 <RTI/>
  )
}
