import React from "react";
import MOU from "./MOU";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const isHindi = lang === "hi";
  const baseUrl = "https://nhdc.org.in";

  return {
    title: isHindi
      ? "समझौता ज्ञापन (MoU) - एनएचडीसी"
      : "Memorandum of Understanding (MoU) - NHDC",
    description: isHindi
      ? "एनएचडीसी विभिन्न संगठनों और संस्थानों के साथ समझौता ज्ञापन (MoU) पर हस्ताक्षर करके सहयोग और विकास को बढ़ावा देता है।"
      : "NHDC signs Memorandums of Understanding (MoUs) with various organizations and institutions to promote collaboration and development.",
    keywords: isHindi
      ? "एनएचडीसी, समझौता ज्ञापन, MoU, सहयोग, साझेदारी, समझौते, विकास"
      : "NHDC, Memorandum of Understanding, MoU, Collaboration, Partnerships, Agreements, Development",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी समझौता ज्ञापन (MoU)"
        : "NHDC Memorandum of Understanding (MoU)",
      description: isHindi
        ? "एनएचडीसी द्वारा हस्ताक्षरित समझौता ज्ञापन विभिन्न संगठनों और संस्थानों के साथ सहयोग को दर्शाते हैं।"
        : "The MoUs signed by NHDC represent collaborations and partnerships with various organizations and institutions.",
      type: "website",
      images: [
        {
          url: `${baseUrl}/NHDC.png`,
          alt: isHindi ? "एनएचडीसी लोगो" : "NHDC Logo",
        },
      ],
    },
    alternates: {
      languages: {
        en: `${baseUrl}/en/mou`,
        hi: `${baseUrl}/hi/mou`,
      },
    },
  };
}

export default function Page() {
  return (
    <main>
      <MOU />
    </main>
  );
}
