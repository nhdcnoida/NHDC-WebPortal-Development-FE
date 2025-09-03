"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const content = {
  en: {
    aboutUs: "About Us",
    nhdcFull: "National Handloom Development Corporation Limited (NHDC)",
    description1: "was set up on 22nd February 1983 by the",
    government: "Government of India",
    as: "as a Schedule 'C' Central Public Sector Enterprise (CPSE), under the administrative control of",
    ministry: "Ministry of Textiles, Government of India.",
    paragraph: "The objective was the creation of a national level agency to assist the speedy development of the handloom sector. ",
    paragraph1: "On 27th September 2010, NHDC Limited was upgraded from a Schedule 'C' to a Schedule 'B' Central Public Sector Enterprise (CPSE), marking a significant milestone in the Corporation's growth and performance.",
    paragraph2: "The Corporation is presently the Implementing Agency of the MoT, Raw Material Supply Scheme (RMSS). This scheme ensures all types of natural yarns are supplied at Mill Gate rates across India. Towards this, the Corporation, empanels Mills and handloom weavers and ensures that the guidelines of the scheme, that includes, yarn and transport subsidy, reaches those in need. The Corporation also actively undertakes sale of Dyes and Chemicals including Natural, as part of its business strategy and to assist stakeholders.",
    paragraph3: "The National Handloom Development Corporation, has brought synergy to the multiple facets of the handloom ecosystem, right from input supplies to design assistance, recognition and promotion of Geographical Indication (GI) certified products, to marketing. The recent addition of an Outreach department will ensure greater impact and reach into far-flung and relatively inaccessible areas.",
    paragraph4: "The Corporation operates through its Eight Regional Offices (ROs) and 27 Branch Offices (BOs) and 39 warehouses. Where establishing a warehouse is not viable, the facility of a yarn bank has been extended to Cooperatives and societies by setting yarn banks which are over 500 presently across the length and breadth of the Nation. Market linkages have been ensured by conduct of national and regional level expos and exhibitions apart from a novel Mobile Marketing initiative in Delhi NCR.",
    paragraph5: "NHDC remains committed to the upliftment of the handloom sector and is taking giant strides for meeting the aspirations of stakeholders."
  },
  hi: {
    aboutUs: "हमारे बारे में",
    nhdcFull: "राष्ट्रीय हथकरघा विकास निगम लिमिटेड (एनएचडीसी)",
    description1: "22 फरवरी 1983 को स्थापित किया गया था",
    government: "भारत सरकार",
    as: "द्वारा एक अनुसूची 'सी' केंद्रीय सार्वजनिक क्षेत्र उद्यम (सीपीएसई) के रूप में, के प्रशासनिक नियंत्रण में",
    ministry: "कपड़ा मंत्रालय, भारत सरकार |",
    paragraph: "उद्देश्य हथकरघा क्षेत्र के त्वरित विकास में सहायता के लिए एक राष्ट्रीय स्तर की एजेंसी का निर्माण करना था। ",
    paragraph1: "27 सितंबर 2010 को, एनएचडीसी लिमिटेड को अनुसूची 'सी' से अनुसूची 'बी' केंद्रीय सार्वजनिक क्षेत्र उद्यम (सीपीएसई) में उन्नत किया गया, जो निगम की वृद्धि और प्रदर्शन में एक महत्वपूर्ण मील का पत्थर था।",
    paragraph2: "निगम वर्तमान में मोट, कच्चा माल आपूर्ति योजना (आरएमएसएस) की कार्यान्वयन एजेंसी है। यह योजना सुनिश्चित करती है कि सभी प्रकार के प्राकृतिक धागे पूरे भारत में मिल गेट दरों पर आपूर्ति किए जाते हैं। इसके लिए, निगम मिलों और हथकरघा बुनकरों को पैनल में शामिल करता है और यह सुनिश्चित करता है कि योजना के दिशानिर्देश, जिसमें धागा और परिवहन सब्सिडी शामिल है, जरूरतमंदों तक पहुंचे। निगम प्राकृतिक सहित डाई और रसायनों की बिक्री भी सक्रिय रूप से करता है, जो इसकी व्यावसायिक रणनीति का हिस्सा है और हितधारकों की सहायता करता है।",
    paragraph3: "राष्ट्रीय हथकरघा विकास निगम ने हथकरघा पारिस्थितिकी तंत्र के कई पहलुओं में तालमेल लाया है, इनपुट आपूर्ति से लेकर डिजाइन सहायता, भौगोलिक संकेत (जीआई) प्रमाणित उत्पादों की मान्यता और प्रचार से लेकर विपणन तक। आउटरीच विभाग की हालिया स्थापना से दूरदराज और अपेक्षाकृत दुर्गम क्षेत्रों में अधिक प्रभाव और पहुंच सुनिश्चित होगी।",
    paragraph4: "निगम अपने आठ क्षेत्रीय कार्यालयों (आरओ) और 27 शाखा कार्यालयों (बीओ) और 39 गोदामों के माध्यम से कार्य करता है। जहां गोदाम स्थापित करना व्यवहार्य नहीं है, वहां सहकारी समितियों और सोसाइटियों को यार्न बैंक स्थापित करके यार्न बैंक की सुविधा प्रदान की गई है जो वर्तमान में देश भर में 500 से अधिक हैं। दिल्ली एनसीआर में एक नवीन मोबाइल मार्केटिंग पहल के अलावा राष्ट्रीय और क्षेत्रीय स्तर के प्रदर्शनियों और प्रदर्शनियों के आयोजन से बाजार संबंध सुनिश्चित किए गए हैं।",
    paragraph5: "एनएचडीसी हथकरघा क्षेत्र के उत्थान के प्रति प्रतिबद्ध है और हितधारकों की आकांक्षाओं को पूरा करने के लिए बड़े कदम उठा रहा है।"
  }
};

export default function AboutUsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const pathParts = pathname.split("/");
    const langFromUrl = pathParts[1];
    if (langFromUrl === "en" || langFromUrl === "hi") {
      setLanguage(langFromUrl);
    }
  }, [pathname]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "hi" : "en";
    setLanguage(newLanguage);
    const newPath =
      pathname.replace(/^\/(en|hi)/, `/${newLanguage}`) || `/${newLanguage}`;
    router.push(newPath);
  };

  const currentContent = content[language];

  return (
    <div className="bg-[#fdfcfa] w-full">
      {/* ✅ Optimized Banner */}
      <div className="relative w-full h-[300px] sm:h-[380px] md:h-[520px]">
     <Image
  src="/assets/building.jpg"
  alt="NHDC Building Banner"
  fill
  sizes="100vw"
  className="object-cover z-0"
  priority
/>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

        {/* Circular Image */}
        <div className="absolute z-30">
          {/* Desktop */}
          <div
            className="hidden sm:block absolute rounded-full overflow-hidden border-[6px] border-white bg-white shadow-lg"
            style={{
              width: "340px",
              height: "340px",
              top: "266px",
              left: "32px",
            }}
          >
          <Image
  src="/assets/nhdcbuilding.png"
  alt="NHDC Building"
  fill
  sizes="(max-width: 768px) 150px, 340px"
  className="object-cover"
  loading="lazy"
/>
          </div>

          {/* Mobile */}
          <div
            className="sm:hidden absolute rounded-full overflow-hidden border-4 border-white bg-white shadow-lg"
            style={{
              width: "150px",
              height: "150px",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Image
              src="/assets/nhdcbuilding.png"
              alt="NHDC Mobile"
              width={150}
              height={150}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="sm:mt-5 w-full items-center justify-center flex flex-col">
        <h2 className="text-5xl my-5 text-[#4b2c2c]">{currentContent.aboutUs}</h2>
        <div className="w-[70%] mt-5">
          {[
            `${currentContent.nhdcFull} ${currentContent.description1} ${currentContent.government} ${currentContent.as} ${currentContent.ministry} ${currentContent.paragraph}`,
            currentContent.paragraph1,
            currentContent.paragraph2,
            currentContent.paragraph3,
            currentContent.paragraph4,
            currentContent.paragraph5,
          ].map((text, i) => (
            <p
              key={i}
              className="text-gray-700 text-sm sm:text-base md:text-lg text-justify leading-relaxed mb-4"
            >
              {text}
            </p>
          ))}
        </div>
      </section>

      {/* Yarn Balls */}
      <div className="mx-auto mt-10 mb-10 flex justify-center gap-4 sm:gap-8 w-full px-4 flex-wrap">
        {["pink", "beige", "green"].map((color, i) => (
        <Image
  key={i}
  src={`/assets/${color}.png`}
  alt={`${color} Yarn`}
  width={96}
  height={96}
  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
  className="object-contain"
  loading="lazy"
/>
        ))}
      </div>
    </div>
  );
}