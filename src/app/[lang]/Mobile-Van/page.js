import Van from "./Van";



export async function generateMetadata({ params }) {
   const { lang } = await params;
  const isHindi = lang === "hi";

  return {
    title: isHindi ? "NHDC - मोबाइल वैन" : "NHDC - Mobile Van",
    description: isHindi
      ? "एनएचडीसी की मोबाइल वैन पहल: भारत की हथकरघा विरासत को बढ़ावा देने और स्थानीय कारीगरों को सशक्त बनाने के लिए।"
      : "NHDC Mobile Van initiative: Promoting India's handloom heritage while empowering local artisans.",
    keywords: isHindi
      ? "NHDC, मोबाइल वैन, हथकरघा, कारीगर, आउटरीच, हस्तशिल्प, भारत"
      : "NHDC, Mobile Van, Handloom, Artisans, Outreach, Craft, India",
    openGraph: {
      title: isHindi ? "NHDC - मोबाइल वैन" : "NHDC - Mobile Van",
      description: isHindi
        ? "एनएचडीसी मोबाइल वैन के माध्यम से कारीगरों को सीधे उपभोक्ताओं तक पहुंच प्रदान करना।"
        : "Providing direct market access to artisans through NHDC Mobile Van initiative.",
      type: "website",
      images: [
        {
          url: "/assets/tantrika.jpg",
          alt: isHindi ? "एनएचडीसी मोबाइल वैन" : "NHDC Mobile Van",
        },
      ],
    },
  };
}
const page = () => {
    return (
      <Van/>
    );
}

export default page;