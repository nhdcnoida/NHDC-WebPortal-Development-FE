import React from 'react'
import WhistleBlowerPolicy from './WhistleBlowerPolicy'

export async function generateMetadata({ params }) {
  const { lang } = params; // no need for await
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "व्हिसल ब्लोअर नीति - एनएचडीसी"
      : "Whistle Blower Policy - NHDC",
    description: isHindi
      ? "एनएचडीसी की व्हिसल ब्लोअर नीति संगठन में पारदर्शिता, जवाबदेही और नैतिकता सुनिश्चित करने के लिए बनाई गई है। यह कर्मचारियों और हितधारकों को किसी भी प्रकार की अनियमितता या भ्रष्टाचार की रिपोर्ट करने की सुविधा प्रदान करती है।"
      : "NHDC's Whistle Blower Policy is designed to ensure transparency, accountability, and ethics within the organization. It enables employees and stakeholders to report any misconduct, irregularities, or corruption without fear.",
    keywords: isHindi
      ? "एनएचडीसी, व्हिसल ब्लोअर नीति, पारदर्शिता, जवाबदेही, नैतिकता, भ्रष्टाचार विरोध, अनियमितता रिपोर्टिंग"
      : "NHDC, Whistle Blower Policy, Transparency, Accountability, Ethics, Anti-corruption, Misconduct Reporting",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी व्हिसल ब्लोअर नीति"
        : "NHDC Whistle Blower Policy",
      description: isHindi
        ? "एनएचडीसी की व्हिसल ब्लोअर नीति कर्मचारियों और हितधारकों को सुरक्षित तरीके से अनियमितताओं और भ्रष्टाचार की शिकायत दर्ज करने की सुविधा देती है।"
        : "NHDC's Whistle Blower Policy provides a secure mechanism for employees and stakeholders to report irregularities and corruption.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "एनएचडीसी व्हिसल ब्लोअर नीति"
            : "NHDC Whistle Blower Policy",
        },
      ],
    },
  };
}


export default function page() {
  return (
<WhistleBlowerPolicy/>
  )
}
