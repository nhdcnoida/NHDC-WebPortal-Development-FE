'use client';

import Image from "next/image";
import { useParams } from "next/navigation";

export default function Exhibition() {
  const { lang } = useParams();
  const isHindi = lang === 'hi';

  const content = {
    title: isHindi ? "प्रदर्शनी" : "Exhibition",
    para1: isHindi
      ? "हथकरघा उत्पादों की मार्केटिंग सहायता प्रदान करने के लिए, एनएचडीसी विकास आयुक्त (हथकरघा) के कार्यालय के सहयोग से पूरे भारत में विभिन्न प्रदर्शनियों / आयोजनों का आयोजन करता है। निगम नियमित रूप से सिल्क फैब, वूल फैब और नेशनल हैंडलूम जैसे मेलों का आयोजन करता है।"
      : "To provide marketing support of the finished product of handloom, NHDC with the support of office of Development Commissioner (Handlooms) used to organise various exhibitions/Events on pan India basis. The Corporation frequently organizes exhibitions such as Silk Fab, Wool Fab, and National Handloom.",
    para2: isHindi
      ? "यह प्रदर्शनियां बुनकरों को उनके उत्पाद बेचने में मदद करने के लिए आयोजित की जाती हैं।"
      : "Expo to support the weavers to sell their products.",
    silkFab: isHindi
      ? "सिल्क फैब प्रदर्शनी विशेष रूप से बुनकरों को उनके रेशमी कपड़े और रेशम से बने अन्य उत्पादों को बेचने के लिए प्रोत्साहित और समर्थन देने हेतु आयोजित की जाती है।"
      : "Silk Fab exhibition is exclusively organized to promote and support weavers to sell their silk fabric cloth and other creations of silk fabric.",
    woolFab: isHindi
      ? "वूल फैब प्रदर्शनी विशेष रूप से बुनकरों को उनके ऊनी कपड़े और अन्य ऊन उत्पादों को बेचने के लिए प्रोत्साहित और समर्थन देने हेतु आयोजित की जाती है।"
      : "Wool Fab exhibition is exclusively organized to promote and support weavers to sell their wool fabric cloth and other creations of silk fabric.",
    moreForYou: isHindi ? "आपके लिए और भी" : "More for you",
    cards: isHindi
      ? [
          { src: "/assets/second_img.png", label: "रंग और रसायन" },
          { src: "/assets/third_img.png", label: "यार्न" },
          { src: "/assets/fourth_img.png", label: "खरीदार विक्रेता बैठक" },
          { src: "/assets/fifth_img.png", label: "भारतीय हैंडलूम ब्रांड" },
        ]
      : [
          { src: "/assets/second_img.png", label: "Dyes & Chemical" },
          { src: "/assets/third_img.png", label: "Yarn" },
          { src: "/assets/fourth_img.png", label: "Buy Seller Meet" },
          { src: "/assets/fifth_img.png", label: "Indian Handloom Brand" },
        ],
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-[978px] px-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-[#500a0a] mb-6">{content.title}</h1>

        {/* Main Image */}
        <div className="w-full h-[336px] relative mb-6">
          <Image
            src="/assets/IOB49100_IMG_5462.jpeg"
            alt="Exhibition Hall"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Paragraphs */}
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">{content.para1}</p>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">{content.para2}</p>

        <p className="text-gray-700 mb-2 text-sm leading-relaxed">
          <strong>{isHindi ? "सिल्क फैब प्रदर्शनी –" : "Silk Fab Exhibition –"}</strong>{" "}
          {content.silkFab}
        </p>

        <p className="text-gray-700 mb-6 text-sm leading-relaxed">
          <strong>{isHindi ? "वूल फैब प्रदर्शनी –" : "Wool Fab Exhibition –"}</strong>{" "}
          {content.woolFab}
        </p>

        {/* Logos (language-based image change) */}
        <div className="flex justify-center gap-12 mb-10">
          <Image
            src={isHindi ? "/assets/SilkFab-hi.png" : "/assets/silkfab_logo.png"}
            alt="Silk Fab"
            width={150}
            height={100}
          />
          <Image
            src={isHindi ? "/assets/woolfab-hi.jpg" : "/assets/woolfab_logo.png"}
            alt="Wool Fab"
            width={150}
            height={100}
          />
        </div>

        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-4">{content.moreForYou}</h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-between gap-y-6">
          {content.cards.map((item, i) => (
            <div
              key={i}
              className="w-[465px] h-[269px] bg-white shadow rounded-lg overflow-hidden group"
            >
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="h-[69px] flex items-center justify-center border-t">
                <p className="text-center text-md font-medium text-gray-800">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
