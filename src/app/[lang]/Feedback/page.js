import React from 'react'
import Feedback from './FeedbackComp'

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "प्रतिक्रिया - एनएचडीसी"
      : "Feedback - NHDC",
    description: isHindi
      ? "एनएचडीसी के लिए अपनी प्रतिक्रिया, सुझाव या शिकायत दर्ज करें। आपकी राय संगठन की सेवाओं को बेहतर बनाने और पारदर्शिता सुनिश्चित करने में मदद करती है।"
      : "Submit your feedback, suggestions, or complaints to NHDC. Your inputs help in improving services and ensuring transparency in operations.",
    keywords: isHindi
      ? "एनएचडीसी, प्रतिक्रिया, सुझाव, शिकायत, फीडबैक फॉर्म, शिकायत निवारण, पारदर्शिता"
      : "NHDC, Feedback, Suggestions, Complaints, Feedback Form, Grievance Redressal, Transparency",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी प्रतिक्रिया"
        : "NHDC Feedback",
      description: isHindi
        ? "एनएचडीसी को अपनी प्रतिक्रिया और सुझाव साझा करें ताकि संगठन बेहतर सेवाएं और पारदर्शिता प्रदान कर सके।"
        : "Share your feedback and suggestions with NHDC to help improve services and enhance transparency.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "एनएचडीसी प्रतिक्रिया"
            : "NHDC Feedback",
        },
      ],
    },
  };
}


export default function page() {
  return (
  <Feedback/>
  )
}
