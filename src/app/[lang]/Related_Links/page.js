
import Relatedlinks from './RelatedLinks'

export async function generateMetadata({ params }) {
  const { lang } = params; // no need for await
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "संबंधित लिंक - एनएचडीसी"
      : "Related Links - NHDC",
    description: isHindi
      ? "एनएचडीसी के संबंधित लिंक उपयोगकर्ताओं को महत्वपूर्ण सरकारी पोर्टल, मंत्रालयों और अन्य संगठनों की आधिकारिक वेबसाइटों तक पहुंच प्रदान करते हैं।"
      : "NHDC's related links provide users with access to important government portals, ministries, and other official organization websites.",
    keywords: isHindi
      ? "एनएचडीसी, संबंधित लिंक, उपयोगी लिंक, सरकारी पोर्टल, मंत्रालय, संगठन"
      : "NHDC, Related Links, Useful Links, Government Portals, Ministries, Organizations",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी संबंधित लिंक"
        : "NHDC Related Links",
      description: isHindi
        ? "एनएचडीसी द्वारा प्रदान किए गए उपयोगी और आधिकारिक संबंधित लिंक।"
        : "Useful and official related links provided by NHDC.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "एनएचडीसी संबंधित लिंक"
            : "NHDC Related Links",
        },
      ],
    },
  };
}

export default function page() {
  return (
   <Relatedlinks/>
  )
}
