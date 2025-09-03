"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

export default function Buyseller() {
  const { lang } = useParams();

  // Text content in both languages
  const heading = lang === "hi" ? "खरीदार विक्रेता बैठक" : "Buyer Seller Meet";
  const paragraph =
    lang === "hi"
      ? "भारत के विभिन्न हिस्सों में स्थित विभिन्न स्पिनिंग मिलों द्वारा निर्मित विभिन्न काउंट और किस्मों के धागों तथा प्रतिष्ठित रंग और रसायन निर्माताओं द्वारा निर्मित विभिन्न रंग और रसायनों के उपयोग और उपलब्धता के बारे में बुनकरों में जागरूकता पैदा करने के लिए, एनएचडीसी द्वारा देश के विभिन्न स्थानों पर समय-समय पर खरीदार-विक्रेता बैठक का आयोजन किया जाता है।"
      : "For creating awareness among the handloom weavers about the various counts and varieties of yarn manufactured by different spinning mills in different parts of India and also availing and uses of different dyes and chemicals in handloom sector manufactured by reputed dyes and chemicals manufacturers, a buyer-seller meet is used to organise by NHDC at regular interval of time at various places of the country.";

  return (
    <div className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-10 font-sans w-full max-w-4xl mx-auto">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-6 text-center md:text-left">
        {heading}
      </h1>

      {/* Images */}
      <div className="flex flex-row md:flex-row gap-6 justify-center items-center mb-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_STORAGE}/public/Uploads/buyer-seller1.jpg`}
          alt={lang === "hi" ? "इंद्रधनुषी रंग" : "Rainbow Colors"}
          className="rounded shadow-md w-full md:w-1/2 h-auto object-cover"
          width={1000}
          height={1000}
        />
      </div>

      {/* Text Content */}
      <div className="space-y-4 text-[16px] leading-relaxed">
        <p>{paragraph}</p>
      </div>
    </div>
  );
}
