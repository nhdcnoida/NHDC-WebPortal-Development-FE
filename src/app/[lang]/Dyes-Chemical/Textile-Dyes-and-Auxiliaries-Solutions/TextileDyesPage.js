"use client"
import { useParams } from "next/navigation";
import Image from "next/image";



export default function TextileDyesPage() {
  const { lang } = useParams();
  const isHindi = lang === "hi";

  const content = {
    en: {
      heading: "Textile Dyes and Auxiliaries Solutions",
      intro: "At NHDC, we offer a comprehensive range of textile dyes and auxiliaries tailored to meet the needs of dye houses, garment processors, and fabric manufacturers.",
      paragraphs: [
        "Our product portfolio includes reactive dyes, disperse dyes, vat dyes, acid dyes, and a full line of textile auxiliaries such as pre-treatment agents, dyeing assistants, fixing agents, and finishing chemicals.",
        "We work closely with clients to understand their specific requirements and deliver solutions that enhance color fastness, dye uptake, fabric feel, and processing efficiency. Our products are sourced from trusted manufacturers and are compliant with international safety and environmental standards.",
        "Whether you're looking for brilliant shades, consistency in production, or eco-friendly alternatives, NHDC is your reliable source for quality and performance in every batch."
      ],
      productTypes: {
        title: "Our Product Range:",
        items: [
          "Reactive Dyes",
          "Disperse Dyes",
          "Vat Dyes",
          "Acid Dyes",
          "Pre-treatment Agents",
          "Dyeing Assistants",
          "Fixing Agents",
          "Finishing Chemicals"
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
      heading: "टेक्सटाइल डाई और सहायक उपकरण समाधान",
      intro: "एनएचडीसी में, हम डाई हाउस, गारमेंट प्रोसेसर और फैब्रिक निर्माताओं की आवश्यकताओं को पूरा करने के लिए टेक्सटाइल डाई और सहायक उपकरणों की एक व्यापक श्रृंखला प्रदान करते हैं।",
      paragraphs: [
        "हमारे उत्पाद पोर्टफोलियो में रिएक्टिव डाई, डिस्पर्स डाई, वैट डाई, एसिड डाई और टेक्सटाइल सहायक उपकरणों की पूरी श्रृंखला शामिल है जैसे कि प्री-ट्रीटमेंट एजेंट, डाईंग असिस्टेंट, फिक्सिंग एजेंट और फिनिशिंग केमिकल्स।",
        "हम ग्राहकों के साथ मिलकर उनकी विशिष्ट आवश्यकताओं को समझते हैं और ऐसे समाधान प्रदान करते हैं जो कलर फास्टनेस, डाई अपटेक, फैब्रिक फील और प्रोसेसिंग दक्षता को बढ़ाते हैं। हमारे उत्पाद विश्वसनीय निर्माताओं से प्राप्त किए जाते हैं और अंतरराष्ट्रीय सुरक्षा और पर्यावरण मानकों का पालन करते हैं।",
        "चाहे आप उत्कृष्ट शेड्स, उत्पादन में स्थिरता या पर्यावरण-अनुकूल विकल्प ढूंढ रहे हों, एनएचडीसी हर बैच में गुणवत्ता और प्रदर्शन का आपका विश्वसनीय स्रोत है।"
      ],
      productTypes: {
        title: "हमारे उत्पाद श्रृंखला:",
        items: [
          "रिएक्टिव डाई",
          "डिस्पर्स डाई",
          "वैट डाई",
          "एसिड डाई",
          "प्री-ट्रीटमेंट एजेंट",
          "डाईंग असिस्टेंट",
          "फिक्सिंग एजेंट",
          "फिनिशिंग केमिकल्स"
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

  const current = content[lang] || content.en;

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
        <h3 className="font-bold text-lg mb-3">{current.productTypes.title}</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-5">
          {current.productTypes.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

<div className="mt-10 bg-[#fff9ee] p-6 rounded-lg border border-[#ffe5b4]">
  <h3 className="font-bold text-lg mb-2">{current.orderInfo.heading}</h3>
  <p className="text-[16px] text-justify">
    {current.orderInfo.text}{" "}
    {current.orderInfo.websiteText}{" "}
    <a
      href={current.orderInfo.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      {current.orderInfo.websiteUrl}
    </a>
    .{" "}
    {isHindi
      ? "किसी भी अन्य सहायता के लिए वे हमारे मुख्य कार्यालय को "
      : "For any further assistance, they may also reach out to our Head Office via email at "}
    <span className="whitespace-nowrap">
      <a href={`mailto:${current.orderInfo.email}`} className="text-blue-600 underline">
        {current.orderInfo.email}
      </a>
    </span>
    {isHindi ? " पर ईमेल कर सकते हैं या " : " or call us at "}
    <span className="whitespace-nowrap">
      <a href={`tel:${current.orderInfo.phone}`} className="text-blue-600 underline">
        {current.orderInfo.phone}
      </a>
    </span>
    {isHindi ? " पर कॉल कर सकते हैं।" : "."}
  </p>
</div>


    </div>
  );
}