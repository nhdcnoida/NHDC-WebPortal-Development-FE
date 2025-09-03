"use client"
import Image from "next/image";
import Head from "next/head";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function YarnPage() {
  const { lang } = useParams();
  const isHindi = lang === "hi";

  return (
    <>
      <Head>
        <title>{isHindi ? "हैंडलूम बुनकरों के लिए यार्न आपूर्ति | एनएचडीसी" : "Yarn Supply for Handloom Weavers | NHDC"}</title>
        <meta 
          name="description" 
          content={isHindi 
            ? "एनएचडीसी, भारत सरकार की यार्न सप्लाई स्कीम के तहत, हैंडलूम बुनकरों, सहकारी समितियों और निर्यातकों को प्रतिस्पर्धी कीमतों पर गुणवत्तापूर्ण यार्न उपलब्ध कराता है।" 
            : "NHDC provides quality yarn supplies to handloom weavers, cooperatives, and exporters at competitive prices under the Government of India's Yarn Supply Scheme."} 
        />
        <meta 
          name="keywords" 
          content={isHindi 
            ? "यार्न सप्लाई, हैंडलूम यार्न, मिल गेट प्राइस स्कीम, बुनकर यार्न, एनएचडीसी यार्न, ई-धागा ऐप" 
            : "yarn supply, handloom yarn, mill gate price scheme, weaver yarn, NHDC yarn, e-dhaga app"} 
        />
        <meta property="og:title" content={isHindi ? "हैंडलूम बुनकरों के लिए यार्न आपूर्ति | एनएचडीसी" : "Yarn Supply for Handloom Weavers | NHDC"} />
        <meta 
          property="og:description" 
          content={isHindi 
            ? "एनएचडीसी द्वारा हैंडलूम उत्पादन के लिए प्रतिस्पर्धी कीमतों पर गुणवत्तापूर्ण यार्न की आपूर्ति।" 
            : "Quality yarn supplies for handloom production at competitive prices from NHDC."} 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.yourdomain.com/yarn" />
      </Head>

      <div className="w-full flex justify-center py-10">
        <div className="w-full max-w-[978px] px-4 md:px-6">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#500a0a] mb-6">
            {isHindi ? "यार्न" : "Yarn"}
          </h1>

          {/* Main Image */}
          <div className="w-full h-48 sm:h-64 md:h-80 relative mb-6">
            <Image
              src="/assets/yarn_img.png"
              alt={isHindi ? "हैंडलूम बुनाई के लिए यार्न आपूर्ति" : "Yarn supplies for handloom weaving"}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-gray-700 text-justify text-sm sm:text-base leading-relaxed">
            <p>
              {isHindi
                ? "यार्न हैंडलूम उत्पादन के लिए मूल कच्चा माल है, और निगम सभी प्रकार के गुणवत्तापूर्ण यार्न की आपूर्ति करने में सक्षम है। इसका विभिन्न प्रमुख स्पिनिंग मिलों और यार्न निर्माताओं के साथ समझौता है, जिससे बुनकरों को उचित और प्रतिस्पर्धी दरों पर यार्न उपलब्ध कराया जाता है।"
                : "The yarn is the basic input for the handloom production, and the Corporation is well-equipped to supply all types of quality yarn to the handloom agencies. It has tie-ups with spinners from almost all the leading group of spinning mills, yarn manufacturers, to offer the same at reasonable and competitive prices to the handloom weavers."}
            </p>
            <p>
              {isHindi
                ? "हैंडलूम बुनकर, उद्यमियों के साथ काम करने वाले व्यक्तिगत बुनकर, निर्यातक, सहकारी समितियां, शीर्ष संस्थाएं, एनजीओ, निगम और अन्य जो घरेलू या निर्यात उद्देश्यों के लिए हैंडलूम कपड़ों के उत्पादन से जुड़े हैं, इस निगम की यार्न आपूर्ति का नियमित रूप से लाभ उठा रहे हैं।"
                : "The handloom weavers, individual weavers working with entrepreneurs, exporters, co-operative societies, apex bodies, NGOs, Corporations and any other who are associated with the production of Handloom Fabrics for domestic or export purposes have regularly been taking the advantage of the yarn supplies by this Corporation."}
            </p>
            <p>
              {isHindi
                ? "निगम भारत सरकार – यार्न सप्लाई स्कीम (पूर्व में 1992 से मिल गेट प्राइस स्कीम) लागू कर रहा है और लगातार नई ऊंचाइयों को प्राप्त कर रहा है। भारत सरकार – यार्न सप्लाई स्कीम के अलावा, निगम अपनी सामान्य नीति के तहत भी यार्न आपूर्ति करता है, जिसमें यार्न की उपलब्धता लागत मूल्य के साथ निगम की सेवा शुल्क पर सुनिश्चित की जाती है।"
                : "The Corporation is implementing Govt. of India – Yarn Supply Scheme (formerly known as Mill Gate Price Scheme since 1992) and is regularly attaining new heights. Apart from the Govt. of India – Yarn Supply Scheme, the Corporation is equipped to supply yarn under its normal policy, which ensures the availability of yarn at cost of material along with the service charges for this Corporation."}
            </p>
            <p>
              {isHindi
                ? "परिवहन लागत को कम करने और व्यक्तिगत बुनकरों व अन्य लोगों को उनकी आवश्यकता के अनुसार यार्न उपलब्ध कराने के लिए, निगम ने बुनकर केंद्रित क्षेत्रों में स्थित यार्न डिपो/वेयरहाउस से आपूर्ति की व्यवस्था भी की है।"
                : "To lower down the cost of transportation and ensure the availability of yarn to individual weavers and others as per their desired quantity, Corporation have also made arrangement to supply the same from Yarn Depots/ Warehouses stationed across the weavers concentrated areas."}
            </p>
            <p>
              {isHindi
                ? "भारत सरकार की डिजिटलाइजेशन पहल के अनुरूप, अपनी गतिविधियों में और अधिक पारदर्शिता लाने और डिजिटल इंडिया अभियान के साथ तालमेल बनाने के लिए, निगम ने ऑनलाइन लेन-देन हेतु ईआरपी लागू किया है। इसका उद्देश्य कार्यकुशलता बढ़ाना और परिचालन क्षमता में वृद्धि करना है। साथ ही, स्मार्टफोन पर भी ईआरपी की सुविधा उपलब्ध कराने के लिए एनएचडीसी ने ई-धागा मोबाइल ऐप लॉन्च किया है।"
                : "In line with the Govt. of India initiative of digitalization to further enhance transparency in its activities and create a sync with Digital India campaign, launched by the Hon'ble Prime Minister of India in direction of e-governance, the Corporation has implemented ERP for Online transaction. The objective of the ERP is to increase the efficiency as well as to reduce the transaction time required to augment their operational capacity. Further, to make the ERP accessible even on smart phone, NHDC also launched the e-dhaga mobile app."}
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-bold my-6 md:my-8">
            {isHindi ? "आपके लिए और भी" : "More for you"}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              { src: "/assets/second_img.png", label: isHindi ? "रंग और रसायन" : "Dyes & Chemical" , Link: "/Dyes-Chemical" },
              { src: "/assets/third_img.png", label: isHindi ? "यार्न" : "Yarn", Link: "/Yarn" },
              { src: "/assets/fourth_img.png", label: isHindi ? "खरीदार विक्रेता बैठक" : "Buy Seller Meet" , Link: "/Buy-Seller-Meet" },
              { src: "/assets/fifth_img.png", label: isHindi ? "भारतीय हैंडलूम ब्रांड" : "Indian Handloom Brand" , Link: "/Indian-Handloom-Brand" },
            ].map((item, i) => (
              <Link
                href={`/${lang}${item.Link}`}
                key={i}
                className="w-full h-auto bg-white shadow rounded-lg overflow-hidden group hover:shadow-md transition-shadow"
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.label}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="p-4 border-t">
                  <p className="text-center text-sm md:text-md font-medium text-gray-800">{item.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
