"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function NaturalDyesPage() {
  const { lang } = useParams();
  const isHindi = lang === "hi";

  const content = {
    en: {
      heading: "Sustainable Color Solutions, Powered by Nature",
      intro: "At NHDC, we are proud to offer a premium range of natural dyes—plant-based, eco-friendly alternatives to synthetic dyes—developed through our trusted partnerships with industry pioneers Ama Herbal and Sodhani Biotech.",
      paragraphs: [
        "These collaborations enable us to bring you high-quality, certified natural colorants that align with modern sustainability goals while delivering exceptional performance.",
        "Our natural dye portfolio includes shades derived from renewable botanical sources like indigo, madder, turmeric, and more, suitable for dyeing cotton, wool, silk, and blended fabrics. These dyes are non-toxic, biodegradable, and meet stringent global standards such as GOTS (Global Organic Textile Standard) and ZDHC (Zero Discharge of Hazardous Chemicals).",
        "Whether you're a brand embracing eco-conscious manufacturing or a textile mill seeking cleaner alternatives, our natural dye solutions offer the perfect balance of tradition, innovation, and environmental responsibility."
      ],
      keyFeatures: {
        title: "Key Features:",
        items: [
          "100% plant-based & biodegradable",
          "Certified by GOTS, ZDHC, and other global standards",
          "Backed by cutting-edge R&D from Ama Herbal & Sodhani Biotech",
          "Suitable for fashion, home textiles, and artisanal applications"
        ]
      },
        orderInfo: {
    heading: "How to Place an Order with NHDC:",
    text: "Indenters can connect with the relevant Regional Office using the details provided in our",
    websiteText: "Contact Us section of website",
    websiteUrl: "https://www.nhdc.org.in/en/Contact_Us",
    email: "connhdc@nhdc.org.in",
    phone: "0120-2329600"
  }
    },
    hi: {
      heading: "प्रकृति द्वारा संचालित, सतत रंग समाधान",
      intro: "एनएचडीसी में, हम प्राकृतिक रंगों की एक प्रीमियम श्रृंखला पेश करने पर गर्व करते हैं - सिंथेटिक रंगों के पौधे-आधारित, पर्यावरण-अनुकूल विकल्प - जो उद्योग के अग्रणी अमा हर्बल और सोधानी बायोटेक के साथ हमारे विश्वसनीय साझेदारी के माध्यम से विकसित किए गए हैं।",
      paragraphs: [
        "ये साझेदारियाँ हमें उच्च गुणवत्ता वाले, प्रमाणित प्राकृतिक रंग प्रदान करने में सक्षम बनाती हैं जो आधुनिक स्थिरता लक्ष्यों के साथ संरेखित होते हैं और उत्कृष्ट प्रदर्शन प्रदान करते हैं।",
        "हमारे प्राकृतिक रंग पोर्टफोलियो में नील, मैडर, हल्दी और अन्य नवीकरणीय वनस्पति स्रोतों से प्राप्त रंग शामिल हैं, जो कपास, ऊन, रेशम और मिश्रित कपड़ों को रंगने के लिए उपयुक्त हैं। ये रंग गैर-विषैले, बायोडिग्रेडेबल हैं और GOTS (ग्लोबल ऑर्गेनिक टेक्सटाइल स्टैंडर्ड) और ZDHC (जीरो डिस्चार्ज ऑफ हैजर्डस केमिकल्स) जैसे कठोर वैश्विक मानकों को पूरा करते हैं।",
        "चाहे आप एक इको-कॉन्शियस निर्माण अपनाने वाला ब्रांड हों या एक टेक्सटाइल मिल जो स्वच्छ विकल्प ढूंढ रही हो, हमारे प्राकृतिक रंग समाधान परंपरा, नवाचार और पर्यावरणीय जिम्मेदारी का सही संतुलन प्रदान करते हैं।"
      ],
      keyFeatures: {
        title: "मुख्य विशेषताएँ:",
        items: [
          "100% पौध-आधारित और बायोडिग्रेडेबल",
          "GOTS, ZDHC और अन्य वैश्विक मानकों द्वारा प्रमाणित",
          "अमा हर्बल और सोधानी बायोटेक के अत्याधुनिक अनुसंधान द्वारा समर्थित",
          "फैशन, होम टेक्सटाइल और कारीगर अनुप्रयोगों के लिए उपयुक्त"
        ]
      },
       orderInfo: {
    heading: "NHDC में ऑर्डर कैसे करें:",
    text: "इंडेंटर्स हमारे",
    websiteText: "वेबसाइट के संपर्क करें सेक्शन",
    websiteUrl: "https://www.nhdc.org.in/en/Contact_Us",
    email: "connhdc@nhdc.org.in",
    phone: "0120-2329600"
  }
    }
  };

  const current = content[lang] || content["en"];

  return (
    <div className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-10 font-sans w-full max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#4b2c2c] mb-6 text-center md:text-left">
        {current.heading}
      </h1>

     

      <div className="space-y-4 text-[16px] leading-relaxed mb-8">
        <p className="font-medium text-justify">{current.intro}</p>
        {current.paragraphs.map((p, idx) => (
          <p key={idx} className="text-justify">{p}</p>
        ))}
      </div>

      <div className="bg-[#f8f5f0] p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-3">{current.keyFeatures.title}</h3>
        <ul className="list-disc pl-5 space-y-2">
          {current.keyFeatures.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>


     <div className="mt-10 bg-[#fff9ee] p-6 rounded-lg border border-[#ffe5b4]">
  <h3 className="font-bold text-lg mb-2">{current.orderInfo.heading}</h3>
  <p className="text-[16px] text-justify">
    {current.orderInfo.text}{" "}
    {current.orderInfo.websiteText }{" "}
    <a
      href={current.orderInfo.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      {current.orderInfo.websiteUrl}
    </a>
    . {isHindi
      ? "किसी भी अन्य सहायता के लिए वे हमारे मुख्य कार्यालय को "
      : "For any further assistance, they may also reach out to our Head Office via email at "
    }
    <a href={`mailto:${current.orderInfo.email}`} className="text-blue-600 underline">
      {current.orderInfo.email}
    </a>
    {isHindi ? " पर ईमेल कर सकते हैं या " : " or call us at "}
    <a href={`tel:${current.orderInfo.phone}`} className="text-blue-600 underline">
      {current.orderInfo.phone}
    </a>
    {isHindi ? " पर कॉल कर सकते हैं।" : "."}
  </p>
</div>

    </div>
  );
}