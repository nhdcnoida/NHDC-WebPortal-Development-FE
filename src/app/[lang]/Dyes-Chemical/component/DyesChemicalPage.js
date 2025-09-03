"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function DyesChemicalPage() {
  const { lang } = useParams(); // get 'en' or 'hi' from URL
  const isHindi = lang === "hi"; // ✅ FIX: define isHindi

  const content = {
    en: {
      heading: "Dyes & Chemical",
      paragraphs: [
        "Dyes and Chemical is the basic input for coloring the fabrics & Corporation is undertaking to supply the complete range of dyes, auxiliaries & chemicals of standard quality from the leading manufacturers of the country at reasonable and competitive prices to various consumers across India.",
        "The Corporation has tied up the supplies from almost all the leading manufacturers of Govt. and private sector offering at reasonable and competitive prices to the end user.",
        "The Corporation has ensured the supply in original packing as received from the manufacturers to ensure the quality standards to yield the best results. For the benefit of small user agencies, small packets/ sachets of 50/100 gms have been specially got packed and being distributed regularly amongst the Dyers' community.",
        "Corporation used to provide technical support as well as new concepts and range on dyes and chemicals with the help of domain expert and corporation's own official to the end users.",
        "AVAILABLE DYES & CHEMICALS PRODUCTS - (View)"
      ]
    },

    hi: {
      heading: "रंग और रसायन",
      paragraphs: [
        "रंग और रसायन कपड़ों को रंगने के लिए मूलभूत सामग्री हैं और निगम देश के प्रमुख निर्माताओं से गुणवत्तापूर्ण रंग, सहायक रसायन और अन्य रसायनों की पूरी श्रृंखला उचित और प्रतिस्पर्धी कीमतों पर उपभोक्ताओं को उपलब्ध कराने का कार्य कर रहा है।",
        "निगम ने सरकारी और निजी क्षेत्र के लगभग सभी प्रमुख निर्माताओं से आपूर्ति की व्यवस्था की है ताकि अंतिम उपयोगकर्ताओं को उचित कीमतों पर उत्पाद मिल सकें।",
        "गुणवत्ता सुनिश्चित करने हेतु निगम द्वारा उत्पादों की आपूर्ति निर्माता से प्राप्त मूल पैकिंग में की जाती है। छोटे उपयोगकर्ताओं की सुविधा हेतु 50/100 ग्राम के छोटे पैकेट्स/सैशे विशेष रूप से तैयार करवाए गए हैं जिन्हें नियमित रूप से रंगाई समुदाय में वितरित किया जा रहा है।",
        "निगम अंतिम उपयोगकर्ताओं को तकनीकी सहयोग, नई अवधारणाएं और रसायनों की नई श्रृंखला उपलब्ध कराने हेतु विशेषज्ञों और निगम के अधिकारियों की सहायता से सेवाएं प्रदान करता है।",
        "उपलब्ध रंग और रसायन उत्पाद - (देखें)"
      ]
    }
  };

  const current = content[lang] || content["en"];

  return (
    <div className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-10 font-sans w-full max-w-4xl mx-auto">
      <h1 className=" sm:text-3xl md:text-4xl font-bold text-5xl  text-[#4b2c2c] mb-6 text-center md:text-left">
        {current.heading}
      </h1>

      <figure className="flex flex-row md:flex-row gap-6 justify-center items-center mb-8">
        <Image
          width={1000}
          height={1000}
          src="/assets/dyes1.jpg"
          alt="Rainbow Colors"
          title="Rainbow Colors"
          className="rounded shadow-md w-full md:w-1/2 h-auto object-cover"
        />
        <Image
          width={1000}
          height={1000}
          src="/assets/second_img.png"
          alt="Color Powders"
          title="Color Powders"
          className="rounded shadow-md w-full md:w-1/2 h-auto object-cover"
        />
      </figure>

      <div className="space-y-4 text-[16px] leading-relaxed">
        {current.paragraphs.slice(0, 4).map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}

        <div className="font-semibold">
          <div>
            {isHindi ? (
              <a
                href="/DandC_Products.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                उपलब्ध डाईज़ और केमिकल उत्पाद - (देखें)
              </a>
            ) : (
              <a
                href="/DandC_Products.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                AVAILABLE DYES & CHEMICAL PRODUCTS - (View)
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
