import Tantrika from "./components/TantrikaPage";


export async function generateMetadata({ params }) {
   const { lang } = await params;
  
  if (lang === 'hi') {
    return {
      title: "एनएचडीसी आउटरीच - भारतीय हथकरघा पारिस्थितिकी तंत्र का परिवर्तन",
      description: "एनएचडीसी का आउटरीच, ट्रांसफॉर्मेशन और प्रोजेक्ट्स डिवीजन भारत के हथकरघा क्षेत्र को जोड़ने, नवाचार करने और सशक्त बनाने के लिए समर्पित है।",
      keywords: "हथकरघा, एनएचडीसी, भारतीय हथकरघा, बुनकर सशक्तिकरण, हथकरघा परियोजनाएं, विजन 2047",
      openGraph: {
        title: "एनएचडीसी आउटरीच - भारतीय हथकरघा पारिस्थितिकी तंत्र का परिवर्तन",
        description: "भारत के हथकरघा क्षेत्र के लिए रणनीतिक पहल और विकासात्मक परियोजनाएं",
        type: "website",
      },
    };
  }

  return {
    title: "NHDC Outreach - Transforming India's Handloom Ecosystem",
    description: "The Outreach, Transformation & Projects Division of NHDC connects, innovates and empowers India's handloom sector through strategic initiatives.",
    keywords: "handloom, NHDC, Indian handloom, weaver empowerment, handloom projects, Vision 2047, textile transformation",
    openGraph: {
      title: "NHDC Outreach - Transforming India's Handloom Ecosystem",
      description: "Strategic initiatives and developmental projects for India's handloom sector",
      type: "website",
    },
  };
}

export default function Page() {
  return <Tantrika/>
}
