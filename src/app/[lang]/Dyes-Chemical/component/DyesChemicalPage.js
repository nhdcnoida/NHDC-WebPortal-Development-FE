"use client";

import Image from "next/image";
import Head from "next/head";
import { useParams } from "next/navigation";

export default function DyesChemicalPage() {
  const { lang } = useParams(); // Get 'en' or 'hi' from URL
  const isHindi = lang === "hi";

  // ✅ Content dictionary for multilingual support
  const content = {
    en: {
      title: "Dyes & Chemicals | Handloom Corporation",
      meta: "Explore the complete range of high-quality dyes and chemicals for fabrics. Available in small packs for dyers across India at competitive prices.",
      heading: "Dyes & Chemicals",
      paragraphs: [
       "Dyes and Chemical is the basic input for coloring the fabrics & Corporation is undertaking to supply the complete range of dyes, auxiliaries & chemicals of standard quality from the leading manufacturers of the country at reasonable and competitive prices to various consumers across India.",
        "The Corporation has tied up the supplies from almost all the leading manufacturers of Govt. and private sector offering at reasonable and competitive prices to the end user.",
        "The Corporation has ensured the supply in original packing as received from the manufacturers to ensure the quality standards to yield the best results. For the benefit of small user agencies, small packets/ sachets of 50/100 gms have been specially got packed and being distributed regularly amongst the Dyers' community.",
        "Corporation used to provide technical support as well as new concepts and range on dyes and chemicals with the help of domain expert and corporation's own official to the end users.",
      ],
      downloadText: "AVAILABLE DYES & CHEMICAL PRODUCTS - (View)",
    },
    hi: {
      title: "रंग और रसायन | हैंडलूम निगम",
      meta: "कपड़ों को रंगने के लिए उच्च गुणवत्ता वाले रंग और रसायन उपलब्ध। छोटे पैक में रंगाई समुदाय के लिए किफायती कीमतों पर।",
      heading: "रंग और रसायन",
      paragraphs: [
        "रंग और रसायन कपड़ों को रंगने के लिए मूलभूत सामग्री हैं और निगम देश के प्रमुख निर्माताओं से गुणवत्तापूर्ण रंग, सहायक रसायन और अन्य रसायनों की पूरी श्रृंखला उचित और प्रतिस्पर्धी कीमतों पर उपभोक्ताओं को उपलब्ध कराने का कार्य कर रहा है।",
        "निगम ने सरकारी और निजी क्षेत्र के लगभग सभी प्रमुख निर्माताओं से आपूर्ति की व्यवस्था की है ताकि अंतिम उपयोगकर्ताओं को उचित कीमतों पर उत्पाद मिल सकें।",
        "गुणवत्ता सुनिश्चित करने हेतु निगम द्वारा उत्पादों की आपूर्ति निर्माता से प्राप्त मूल पैकिंग में की जाती है। छोटे उपयोगकर्ताओं की सुविधा हेतु 50/100 ग्राम के छोटे पैकेट्स/सैशे विशेष रूप से तैयार करवाए गए हैं जिन्हें नियमित रूप से रंगाई समुदाय में वितरित किया जा रहा है।",
        "निगम अंतिम उपयोगकर्ताओं को तकनीकी सहयोग, नई अवधारणाएं और रसायनों की नई श्रृंखला उपलब्ध कराने हेतु विशेषज्ञों और निगम के अधिकारियों की सहायता से सेवाएं प्रदान करता है।",
      ],
      downloadText: "उपलब्ध डाईज़ और केमिकल उत्पाद - (देखें)",
    },
  };

  const current = content[lang] || content.en;

  return (
    <>
      {/* ✅ SEO Head Tags */}
      <Head>
        <title>{current.title}</title>
        <meta name="description" content={current.meta} />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-10 font-sans w-full max-w-5xl mx-auto">
        {/* ✅ Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#4b2c2c] mb-8 text-center md:text-left">
          {current.heading}
        </h1>

        {/* ✅ Images with proper alt/title */}
        <section
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10"
          aria-label={isHindi ? "रंग और रसायन की छवियां" : "Dyes and Chemicals images"}
        >
          <figure className="w-full md:w-1/2">
            <Image
              src="/assets/dyes1.jpg"
              alt={isHindi ? "रंग-बिरंगे रंग" : "Rainbow colors for fabrics"}
              title={isHindi ? "रंग-बिरंगे रंग" : "Rainbow Colors"}
              width={1000}
              height={700}
              priority
              className="rounded-2xl shadow-md w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              {isHindi ? "रंग-बिरंगे कपड़ों के लिए रंग" : "Rainbow colors for fabrics"}
            </figcaption>
          </figure>

          <figure className="w-full md:w-1/2">
            <Image
              src="/assets/second_img.png"
              alt={isHindi ? "रंग पाउडर" : "Color powders"}
              title={isHindi ? "रंग पाउडर" : "Color Powders"}
              width={1000}
              height={700}
              className="rounded-2xl shadow-md w-full h-auto object-cover"
            />
            <figcaption className="sr-only">
              {isHindi ? "कपड़ों के लिए रंग पाउडर" : "Color powders for fabrics"}
            </figcaption>
          </figure>
        </section>

        {/* ✅ Paragraphs */}
        <section className="space-y-5 text-[16px] leading-relaxed">
          {current.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          {/* ✅ Download link (accessible, SEO-friendly) */}
          <p className="font-semibold mt-6">
            <a
              href="/DandC_Products.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label={
                isHindi
                  ? "उपलब्ध डाईज़ और केमिकल उत्पाद देखें (PDF)"
                  : "View available dyes and chemicals products (PDF)"
              }
            >
              {current.downloadText}
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
