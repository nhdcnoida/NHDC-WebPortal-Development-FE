import Buyseller from "./Buyseller";



export async function generateMetadata({ params }) {
   const { lang } = await params;

  if (lang === 'hi') {
    return {
      title: "NHDC - खरीदार विक्रेता बैठक",
      description: "भारत में हथकरघा बुनकरों के लिए विभिन्न धागों, रंगों और रसायनों के उपयोग और उपलब्धता के बारे में जागरूकता बढ़ाने हेतु NHDC द्वारा आयोजित खरीदार-विक्रेता बैठक।",
      keywords: "NHDC, खरीदार विक्रेता बैठक, हथकरघा, बुनकर जागरूकता, धागे, रंग, रसायन",
      openGraph: {
        title: "NHDC - खरीदार विक्रेता बैठक",
        description: "भारत में हथकरघा बुनकरों के लिए विभिन्न धागों और रंगों की जानकारी हेतु NHDC द्वारा आयोजित बैठक।",
        type: "website",
        images: [
          {
            url: "/public/Uploads/buyer-seller1.jpg",
            alt: "खरीदार विक्रेता बैठक",
          },
        ],
      },
    };
  }

  return {
    title: "NHDC - Buyer Seller Meet",
    description: "NHDC organizes buyer-seller meets at various locations in India to create awareness among handloom weavers about different yarn counts, varieties, dyes, and chemicals.",
    keywords: "NHDC, Buyer Seller Meet, handloom, weaver awareness, yarn, dyes, chemicals",
    openGraph: {
      title: "NHDC - Buyer Seller Meet",
      description: "Creating awareness among handloom weavers about yarn varieties, dyes, and chemicals through NHDC organized meets.",
      type: "website",
      images: [
        {
          url: "/public/Uploads/buyer-seller1.jpg",
          alt: "Buyer Seller Meet",
        },
      ],
    },
  };
}
const page = () => {
    return (
       <Buyseller/>
    );
}

export default page;