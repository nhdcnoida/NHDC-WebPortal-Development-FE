import DyesChemicalPage from './component/DyesChemicalPage'

export async function generateMetadata({ params }) {
  const { lang } = params;
  const isHindi = lang === 'hi';
  
  return {
    title: isHindi ? "रंग और रसायन | NHDC" : "Dyes & Chemicals | NHDC",
    description: isHindi 
      ? "निगम द्वारा प्रमुख निर्माताओं से गुणवत्तापूर्ण रंग और रसायनों की पूरी श्रृंखला उचित मूल्य पर उपलब्ध"
      : "Complete range of quality dyes and chemicals from leading manufacturers at competitive prices",
    keywords: [
      "textile dyes",
      "industrial chemicals",
      "fabric coloring",
      "dyeing chemicals",
      "chemical suppliers",
      ...(isHindi 
        ? ["रंग रसायन", "कपड़ा रंगाई", "रासायनिक आपूर्तिकर्ता"]
        : [])
    ],
    openGraph: {
      title: isHindi ? "रंग और रसायन समाधान" : "Dyes & Chemical Solutions",
      description: isHindi
        ? "गुणवत्तापूर्ण रंग और रसायनों की विस्तृत श्रृंखला"
        : "Premium quality dyes and chemicals for textile industry",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          width: 1200,
          height: 630,
          alt: isHindi ? "रंग और रसायन उत्पाद" : "Dyes and Chemicals Products"
        }
      ],
      url: `https://yourwebsite.com/${lang}/dyes-chemical`,
      type: "website",
    },
    alternates: {
      canonical: "https://yourwebsite.com/dyes-chemical",
      languages: {
        en: "https://nhdc.org.in/en/Dyes-Chemical",
        hi: "https://nhdc.org.in/hi/Dyes-Chemical",
      },
    },
  };
}


export default function DyesChemicalRoutePage(){
    return <DyesChemicalPage/>
}
