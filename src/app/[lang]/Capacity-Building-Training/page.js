import Capicity from "./Capicity";



export async function generateMetadata({ params }) {
   const { lang } = await params;
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "मौजूदा/उम्मीदवार अनुसूचित जाति/अनुसूचित जनजाति उद्यमियों के लिए क्षमता निर्माण प्रशिक्षण कार्यक्रम"
      : "Capacity building training programs for existing/aspiring SC/ST entrepreneurs",
    description: isHindi
      ? "एनएचडीसी द्वारा आयोजित प्रशिक्षण कार्यक्रम जो अनुसूचित जाति और अनुसूचित जनजाति उद्यमियों की क्षमता, कौशल और व्यावसायिक विकास को बढ़ाने हेतु डिजाइन किए गए हैं।"
      : "Training programs organized by NHDC designed to enhance the skills, capacity, and business development of existing and aspiring SC/ST entrepreneurs.",
    keywords: isHindi
      ? "एनएचडीसी, अनुसूचित जाति उद्यमी, अनुसूचित जनजाति उद्यमी, प्रशिक्षण, क्षमता निर्माण, कौशल विकास, व्यवसाय विकास"
      : "NHDC, SC/ST entrepreneurs, training, capacity building, skill development, business development",
    openGraph: {
      title: isHindi
        ? "मौजूदा/उम्मीदवार अनुसूचित जाति/अनुसूचित जनजाति उद्यमियों के लिए क्षमता निर्माण प्रशिक्षण कार्यक्रम"
        : "Capacity building training programs for existing/aspiring SC/ST entrepreneurs",
      description: isHindi
        ? "एनएचडीसी द्वारा अनुसूचित जाति और अनुसूचित जनजाति उद्यमियों के लिए आयोजित प्रशिक्षण कार्यक्रम।"
        : "Training programs for SC/ST entrepreneurs organized by NHDC.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "अनुसूचित जाति/अनुसूचित जनजाति प्रशिक्षण कार्यक्रम"
            : "SC/ST Training Program",
        },
      ],
    },
  };
}


const page = () => {
    return (
       <Capicity/>
    );
}

export default page;