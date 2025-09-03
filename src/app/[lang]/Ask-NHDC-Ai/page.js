import AskAi from "./AskAi";


export async function generateMetadata({ params }) {
   const { lang } = await params;

  if (lang === 'hi') {
    return {
      title: "तंतु एआई - आपका डिजिटल हथकरघा सहायक",
      description: "तंतु एआई, भारत के हथकरघा क्षेत्र से जुड़ी जानकारी, परियोजनाओं और संसाधनों तक तुरंत पहुँच प्रदान करता है।",
      keywords: "तंतु एआई, NHDC, डिजिटल सहायक, हथकरघा जानकारी, परियोजनाएं, स्मार्ट सहायता",
      openGraph: {
        title: "तंतु एआई - आपका डिजिटल हथकरघा सहायक",
        description: "भारत के हथकरघा क्षेत्र की जानकारी और परियोजनाओं के लिए स्मार्ट डिजिटल सहायक।",
        type: "website",
      },
    };
  }

  return {
    title: "Tantu AI - Your Digital Handloom Assistant",
    description: "Tantu AI provides instant access to information, projects, and resources related to India's handloom sector.",
    keywords: "Tantu AI, NHDC, AI bot, digital assistant, handloom information, projects, smart assistance",
    openGraph: {
      title: "Tantu AI - Your Digital Handloom Assistant",
      description: "Smart digital assistant for information and projects related to India's handloom sector",
      type: "website",
    },
  };
}

const page = () => {
    return (
      <AskAi/>
    );
}

export default page;