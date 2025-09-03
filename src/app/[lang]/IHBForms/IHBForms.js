'use client';
import Image from "next/image";
import { useParams } from "next/navigation";

export default function IndiaHandloomBrand() {
  const params = useParams();
  const lang = params?.lang || 'en'; 

  // English content
  const content = {
    en: {
      title: "India Handloom Brand",
      introduction: `India Handloom brand has been launched by the Hon'ble Prime Minister of India on the occasion of the first National Handloom Day on August 7, 2015. The Handloom Mark Scheme was launched by the Government of India on June 28, 2006 to provide assurance to the consumers about authenticity of handloom products. However, it did not cover the aspect of product quality assurance. Therefore, the India Handloom brand has been launched with an initiative of the following aspects,`,
      points: [
        "Branding of high quality handloom products with zero defects and zero effect on the environment.",
        "It would differentiate high quality handloom products and help in earning trust of customers by endorsing their quality in terms of raw materials, processing, embellishments, weaving design and other quality parameters and by ensuring social and environmental compliances in their production.",
        "The registration for India Handloom will be granted to certain specified eligible entities in respect of identified product categories which meet prescribed quality parameters."
      ],
      objectivesTitle: "Objectives:",
      objectives: [
        "To earn the trust of consumers by endorsing the quality of handloom products in terms of raw materials, processing, embellishments, weaving design and other quality parameters.",
        "To ensure social and environmental compliances in production of handlooms.",
        "To create a niche market space for high quality handloom products which cater especially to the demand for diverse products among the younger generation and export markets with high growth potential.",
        "To increase the earnings of the weavers."
      ],
      benefitsTitle: "Benefits:",
      benefitsIntro: `The India Handloom brand initiative is intended to bring the following benefits to various stakeholders of the handloom sector:`,
      benefits: [
        "Handloom products with the premium India Handloom brand would be differentiated from other products in terms of quality.",
        "Through the brand, the customer will be assured that the product quality is high because of proper texture, use of good quality yarns and dyeing with safe dyes which are free from banned amines.",
        "Bulk buyers and exporters will be able to source quality branded fabrics as per their designs.",
        "Weavers will be able to get bulk orders and higher wages by interacting directly with the market.",
        "Weaver entrepreneurs and other manufacturers will take up production and marketing of quality handloom fabrics in bulk within and outside the country.",
        "Ministry of Textiles will actively promote the brand through media campaigns to raise awareness among manufacturers as well as consumers and create demand for products with the India Handloom brand."
      ],
      roleTitle: "Role of NHDC in India Handloom Brand:",
      roleContent: [
        `The Office of Development Commissioner for Handlooms, Government of India, Ministry of Textiles has engaged National Handloom Development Corporation (NHDC) Ltd., as the Implementing agency for promotion of Indian Handlooms as a Brand, undertaking 360 degree campaign for promoting hand-woven articles in overseas and domestic Media Campaigns, participate in overseas and in domestic events and production of creative and publicity material under the 'Indian Handlooms' brand line.`,
        `The primary objective of these campaigns is to develop a premium brand, promoting them as niche products based on high quality defect free, socially and environmentally compliant products. NHDC under the umbrella of Office of DC (Handloom) intends to begin its campaign portraying the strengths of Indian Handlooms and hand wovens, highlighting the intrinsic craftsmanship and extraordinary skills. The campaign will use various media to generate a special market space and increased earning to the weavers.`,
        `Branding "India Handloom" India has a long tradition of excellence in making high quality handloom products with extraordinary skills and craftsmanship which are unparalleled in the world. These products are not just cloth material or traditional wear but it is symbolic to the Indian culture, tradition and civilization.`,
        `The handloom product basket consists of generic products of mass consumption to the high value added products of high reputation and demand. The intricate workmanship of the handloom products not only provides this segment a unique identity of its own but also guarantees its future success.`,
        `Further, to-days' market demands a socially compliant defect free product, meeting the quality need of the socio- environmentally conscious consumers. Therefore, there is a need for focusing on the production of high value cloths of reputation, which are socio-environmentally friendly and defect free. Further, there must be continuous efforts for innovation and experimentation across regional weaves and fibers according to the fashion change for unique products to woo the niche market segment without compromising the social and environmental compliances. Such an effort will sustain development of the industry and also for substantial increase in the income of the artisans. These unique niche products needs to be promoted under 'Brand India Handloom' for generating a special market space and increased earnings to the weavers. Thus the Concept of Brand India Handloom is to brand the niche handloom products which are exclusively catering to the demand of the high end consumers.`,
        `Accordingly, the concept behind the program aims is developing:`
      ],
      programAims: [
        "A premium brand for the Indian Handloom Products;",
        "Leverage on the contemporary and traditional designs;",
        "Assure quality and reap the benefit of reputation of the Indian handlooms;",
        "Providing an assurance to the customers on the defect free product of the sector;",
        "Producing a socially and environmentally compliant product as demanded by the modern consumers"
      ],
      registrationFormsTitle: "INDIA HANDLOOM BRAND REGISTRATION FORMS",
      forms: [
        { text: "IHB application-form for Producer Registration", link: "/assets/pdfs/IHB application-form-2016.pdf" },
        { text: "IHB application form e commerce", link: "/assets/pdfs/IHB APPLICATION FORM E COMMERCE.pdf" },
        { text: "IHB application form Garment Manufactureres", link: "/assets/pdfs/IHB APPLICATION FORM GARMENT MANUFACTURERES.pdf" },
        { text: "IHB application form Product", link: "/assets/pdfs/IHB APPLICATION FORM PRODUCT.pdf" },
        { text: "IHB application form Retail Stores", link: "/assets/pdfs/IHB APPLICATION FORM RETAIL STORES.pdf" }
      ],
      brochureTitle: "INDIA HANDLOOM BRAND INFORMATION BROCHURE",
      brochures: [
        { text: "IHB India Handloom Brochure English", link: "/assets/pdfs/IHB India_Handloom_Brochure_English.pdf" },
        { text: "IHB India Handloom Brochure Hindi", link: "/assets/pdfs/IHB India_Handloom_Brochure_Hindi.pdf" }
      ],
      productManualTitle: "INDIA HANDLOOM BRAND PRODUCTS MANUAL",
      productManual: [
        { text: "India Handloom Brand Product catalog", link: "/assets/pdfs/IHB-PRODUCT-MANUAL.pdf" }
      ],
      consumerFlyerTitle: "INDIA HANDLOOM BRAND CONSUMER FLYER",
      flyers: [
        { text: "India Handloom Flyer Hindi", link: "/assets/pdfs/IHB-Flyer-Hindi.pdf" },
        { text: "India Handloom Flyer English", link: "/assets/pdfs/IHB-Flyer-English.pdf" },
        { text: "India Handloom Flyer Bengla", link: "/assets/pdfs/IHB-Flyer-Bangla.pdf" },
        { text: "India Handloom Flyer Urdu", link: "/assets/pdfs/IHB-Flyer-Urdu.pdf" },
        { text: "India Handloom Flyer Kannada", link: "/assets/pdfs/IHB-Flyer-Kannada.pdf" },
        { text: "India Handloom Flyer Tamil", link: "/assets/pdfs/IHB-Flyer-Tamil.pdf" },
        { text: "India Handloom Flyer Telugu", link: "/assets/pdfs/IHB-Flyer-Telugu.pdf" },
        { text: "India Handloom Flyer Malayalam", link: "/assets/pdfs/IHB-Flyer-Malayalam.pdf" },
        { text: "India Handloom Flyer Odia", link: "/assets/pdfs/IHB-Flyer-Odia.pdf" }
      ]
    },
    hi: {
      title: "भारत हथकरघा ब्रांड",
      introduction: `भारत हथकरघा ब्रांड को 7 अगस्त, 2015 को पहले राष्ट्रीय हथकरघा दिवस के अवसर पर भारत के माननीय प्रधान मंत्री द्वारा लॉन्च किया गया था। हथकरघा मार्क योजना 28 जून, 2006 को भारत सरकार द्वारा हथकरघा उत्पादों की प्रामाणिकता के बारे में उपभोक्ताओं को आश्वासन प्रदान करने के लिए शुरू की गई थी। हालाँकि, इसमें उत्पाद गुणवत्ता आश्वासन का पहलू शामिल नहीं था। इसलिए, भारत हथकरघा ब्रांड को निम्नलिखित पहलुओं की पहल के साथ लॉन्च किया गया है:`,
      points: [
        "पर्यावरण पर शून्य दोष और शून्य प्रभाव के साथ उच्च गुणवत्ता वाले हथकरघा उत्पादों का ब्रांडिंग।",
        "यह उच्च गुणवत्ता वाले हथकरघा उत्पादों को अलग करेगा और कच्चे माल, प्रसंस्करण, अलंकरण, बुनाई डिजाइन और अन्य गुणवत्ता मापदंडों के संदर्भ में उनकी गुणवत्ता का समर्थन करके और उनके उत्पादन में सामाजिक और पर्यावरणीय अनुपालन सुनिश्चित करके ग्राहकों का विश्वास अर्जित करने में मदद करेगा।",
        "भारत हथकरघा के लिए पंजीकरण निर्धारित गुणवत्ता मापदंडों को पूरा करने वाली पहचानी गई उत्पाद श्रेणियों के संबंध में कुछ निर्दिष्ट पात्र संस्थाओं को प्रदान किया जाएगा।"
      ],
      objectivesTitle: "उद्देश्य:",
      objectives: [
        "कच्चे माल, प्रसंस्करण, अलंकरण, बुनाई डिजाइन और अन्य गुणवत्ता मापदंडों के संदर्भ में हथकरघा उत्पादों की गुणवत्ता का समर्थन करके उपभोक्ताओं का विश्वास अर्जित करना।",
        "हथकरघा के उत्पादन में सामाजिक और पर्यावरणीय अनुपालन सुनिश्चित करना।",
        "उच्च गुणवत्ता वाले हथकरघा उत्पादों के लिए एक विशेष बाजार स्थान बनाना जो विशेष रूप से युवा पीढ़ी और उच्च विकास क्षमता वाले निर्यात बाजारों में विविध उत्पादों की मांग को पूरा करता है।",
        "बुनकरों की आय में वृद्धि करना।"
      ],
      benefitsTitle: "लाभ:",
      benefitsIntro: `भारत हथकरघा ब्रांड पहल का उद्देश्य हथकरघा क्षेत्र के विभिन्न हितधारकों को निम्नलिखित लाभ प्रदान करना है:`,
      benefits: [
        "प्रीमियम भारत हथकरघा ब्रांड वाले हथकरघा उत्पादों को गुणवत्ता के मामले में अन्य उत्पादों से अलग किया जाएगा।",
        "ब्रांड के माध्यम से, ग्राहक को आश्वासन दिया जाएगा कि उचित बनावट, अच्छी गुणवत्ता वाले यार्न के उपयोग और सुरक्षित रंगों के साथ रंगाई के कारण उत्पाद की गुणवत्ता उच्च है जो निषिद्ध एमाइन से मुक्त हैं।",
        "थोक खरीदार और निर्यातक अपने डिजाइन के अनुसार गुणवत्ता वाले ब्रांडेड कपड़े प्राप्त करने में सक्षम होंगे।",
        "बुनकर सीधे बाजार के साथ बातचीत करके थोक आदेश और उच्च मजदूरी प्राप्त करने में सक्षम होंगे।",
        "बुनकर उद्यमी और अन्य निर्माता देश के भीतर और बाहर गुणवत्ता वाले हथकरघा कपड़ों का थोक उत्पादन और विपणन करेंगे।",
        "कपड़ा मंत्रालय निर्माताओं के साथ-साथ उपभोक्ताओं के बीच जागरूकता बढ़ाने और भारत हथकरघा ब्रांड वाले उत्पादों की मांग पैदा करने के लिए मीडिया अभियानों के माध्यम से ब्रांड को सक्रिय रूप से बढ़ावा देगा।"
      ],
      roleTitle: "भारत हथकरघा ब्रांड में एनएचडीसी की भूमिका:",
      roleContent: [
        `कपड़ा मंत्रालय, भारत सरकार के हथकरघा आयुक्त कार्यालय ने राष्ट्रीय हथकरघा विकास निगम (एनएचडीसी) लिमिटेड को 'इंडियन हैंडलूम्स' ब्रांड लाइन के तहत विदेशी और घरेलू मीडिया अभियानों में हाथ से बुने हुए लेखों को बढ़ावा देने, विदेशी और घरेलू कार्यक्रमों में भाग लेने और रचनात्मक और प्रचार सामग्री के उत्पादन के लिए एक ब्रांड के रूप में भारतीय हथकरघा को बढ़ावा देने के लिए कार्यान्वयन एजेंसी के रूप में नियुक्त किया है।`,
        `इन अभियानों का प्राथमिक उद्देश्य एक प्रीमियम ब्रांड विकसित करना है, जो उन्हें उच्च गुणवत्ता वाले दोष मुक्त, सामाजिक और पर्यावरण के अनुकूल उत्पादों के आधार पर विशेष उत्पादों के रूप में बढ़ावा देता है। डीसी (हथकरघा) कार्यालय के तत्वावधान में एनएचडीसी भारतीय हथकरघा और हाथ से बुने हुए उत्पादों की ताकत को चित्रित करते हुए अपना अभियान शुरू करना चाहता है, जो आंतरिक शिल्प कौशल और असाधारण कौशल को उजागर करता है। यह अभियान बुनकरों के लिए एक विशेष बाजार स्थान और बढ़ी हुई कमाई उत्पन्न करने के लिए विभिन्न मीडिया का उपयोग करेगा।`,
        `ब्रांडिंग "भारत हथकरघा" भारत में असाधारण कौशल और शिल्प कौशल के साथ उच्च गुणवत्ता वाले हथकरघा उत्पादों को बनाने में उत्कृष्टता की एक लंबी परंपरा है जो दुनिया में अद्वितीय है। ये उत्पाद सिर्फ कपड़े की सामग्री या पारंपरिक पहनावा नहीं हैं बल्कि यह भारतीय संस्कृति, परंपरा और सभ्यता का प्रतीक है।`,
        `हथकरघा उत्पाद टोकरी में बड़े पैमाने पर खपत के सामान्य उत्पादों से लेकर उच्च प्रतिष्ठा और मांग वाले उच्च मूल्य वर्धित उत्पाद शामिल हैं। हथकरघा उत्पादों की जटिल कारीगरी न केवल इस क्षेत्र को अपनी एक अद्वितीय पहचान प्रदान करती है बल्कि इसके भविष्य की सफलता की गारंटी भी देती है।`,
        `इसके अलावा, आज के बाजार को एक सामाजिक रूप से अनुरूप दोष मुक्त उत्पाद की आवश्यकता है, जो सामाजिक-पर्यावरण के प्रति जागरूक उपभोक्ताओं की गुणवत्ता की आवश्यकता को पूरा करता है। इसलिए, प्रतिष्ठा के उच्च मूल्य वाले कपड़ों के उत्पादन पर ध्यान केंद्रित करने की आवश्यकता है, जो सामाजिक-पर्यावरण के अनुकूल और दोष मुक्त हों। इसके अलावा, सामाजिक और पर्यावरणीय अनुपालन से समझौता किए बिना अद्वितीय उत्पादों के लिए फैशन परिवर्तन के अनुसार क्षेत्रीय बुनाई और फाइबर में नवाचार और प्रयोग के लिए निरंतर प्रयास होने चाहिए ताकि विशेष बाजार खंड को आकर्षित किया जा सके। इस तरह का प्रयास उद्योग के सतत विकास और कारीगरों की आय में substantial वृद्धि के लिए भी होगा। इन अद्वितीय विशेष उत्पादों को बुनकरों के लिए एक विशेष बाजार स्थान और बढ़ी हुई कमाई उत्पन्न करने के लिए 'ब्रांड इंडिया हैंडलूम' के तहत बढ़ावा देने की आवश्यकता है। इस प्रकार ब्रांड इंडिया हैंडलूम की अवधारणा उच्च अंत उपभोक्ताओं की मांग को पूरा करने वाले विशेष हथकरघा उत्पादों को ब्रांड करना है।`,
        `तदनुसार, कार्यक्रम के पीछे की अवधारणा का उद्देश्य विकास करना है:`
      ],
      programAims: [
        "भारतीय हथकरघा उत्पादों के लिए एक प्रीमियम ब्रांड;",
        "समकालीन और पारंपरिक डिजाइनों का लाभ उठाना;",
        "गुणवत्ता सुनिश्चित करें और भारतीय हथकरघा की प्रतिष्ठा का लाभ उठाएं;",
        "क्षेत्र के दोष मुक्त उत्पाद पर ग्राहकों को आश्वासन प्रदान करना;",
        "आधुनिक उपभोक्ताओं द्वारा मांगे गए सामाजिक और पर्यावरण के अनुकूल उत्पाद का उत्पादन करना"
      ],
      registrationFormsTitle: "भारत हथकरघा ब्रांड पंजीकरण फॉर्म",
      forms: [
        { text: "निर्माता पंजीकरण के लिए आईएचबी आवेदन फॉर्म", link: "/assets/pdfs/IHB application-form-2016.pdf" },
        { text: "ई-कॉमर्स के लिए आईएचबी आवेदन फॉर्म", link: "/assets/pdfs/IHB APPLICATION FORM E COMMERCE.pdf" },
        { text: "गारमेंट निर्माताओं के लिए आईएचबी आवेदन फॉर्म", link: "/assets/pdfs/IHB APPLICATION FORM GARMENT MANUFACTURERES.pdf" },
        { text: "उत्पाद के लिए आईएचबी आवेदन फॉर्म", link: "/assets/pdfs/IHB APPLICATION FORM PRODUCT.pdf" },
        { text: "रिटेल स्टोर्स के लिए आईएचबी आवेदन फॉर्म", link: "/assets/pdfs/IHB APPLICATION FORM RETAIL STORES.pdf" }
      ],
      brochureTitle: "भारत हथकरघा ब्रांड सूचना पुस्तिका",
      brochures: [
        { text: "आईएचबी भारत हथकरघा पुस्तिका अंग्रेजी", link: "/assets/pdfs/IHB India_Handloom_Brochure_English.pdf" },
        { text: "आईएचबी भारत हथकरघा पुस्तिका हिंदी", link: "/assets/pdfs/IHB India_Handloom_Brochure_Hindi.pdf" }
      ],
      productManualTitle: "भारत हथकरघा ब्रांड उत्पाद मैनुअल",
      productManual: [
        { text: "भारत हथकरघा ब्रांड उत्पाद सूची", link: "/assets/pdfs/IHB-PRODUCT-MANUAL.pdf" }
      ],
      consumerFlyerTitle: "भारत हथकरघा ब्रांड उपभोक्ता फ्लायर",
      flyers: [
        { text: "भारत हथकरघा फ्लायर हिंदी", link: "/assets/pdfs/IHB-Flyer-Hindi.pdf" },
        { text: "भारत हथकरघा फ्लायर अंग्रेजी", link: "/assets/pdfs/IHB-Flyer-English.pdf" },
        { text: "भारत हथकरघा फ्लायर बांग्ला", link: "/assets/pdfs/IHB-Flyer-Bangla.pdf" },
        { text: "भारत हथकरघा फ्लायर उर्दू", link: "/assets/pdfs/IHB-Flyer-Urdu.pdf" },
        { text: "भारत हथकरघा फ्लायर कन्नड़", link: "/assets/pdfs/IHB-Flyer-Kannada.pdf" },
        { text: "भारत हथकरघा फ्लायर तमिल", link: "/assets/pdfs/IHB-Flyer-Tamil.pdf" },
        { text: "भारत हथकरघा फ्लायर तेलुगु", link: "/assets/pdfs/IHB-Flyer-Telugu.pdf" },
        { text: "भारत हथकरघा फ्लायर मलयालम", link: "/assets/pdfs/IHB-Flyer-Malayalam.pdf" },
        { text: "भारत हथकरघा फ्लायर ओडिया", link: "/assets/pdfs/IHB-Flyer-Odia.pdf" }
      ]
    }
  };

  const currentContent = content[lang] || content.en;

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: "2rem",
          color: "#62402A",
          marginBottom: "30px",
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        {currentContent.title}
      </h1>

      <div className="w-full h-48 sm:h-64 md:h-120 relative mb-6">
        <Image
          src="/assets/handloom_Brand.png"
          alt="Yarn supplies for handloom weaving"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          priority
        />
      </div>

      {/* Introduction */}
      <p style={{ fontSize: "16px", textAlign: "justify", marginBottom: "20px" }}>
        {currentContent.introduction}
      </p>

      <ul style={{ paddingLeft: "30px", marginBottom: "30px" }}>
        {currentContent.points.map((point, index) => (
          <li key={index} style={{ marginBottom: "15px", fontSize: "15px" }}>
            {point}
          </li>
        ))}
      </ul>

      {/* Objectives Section */}
      <h2
        style={{
          fontSize: "2rem",
          color: "#2c3e50",
          marginBottom: "20px",
          marginTop: "40px",
        }}
      >
        {currentContent.objectivesTitle}
      </h2>
      <ul style={{ paddingLeft: "30px", marginBottom: "30px" }}>
        {currentContent.objectives.map((objective, index) => (
          <li key={index} style={{ marginBottom: "15px", fontSize: "15px" }}>
            {objective}
          </li>
        ))}
      </ul>

      {/* Benefits Section */}
      <h2
        style={{
          fontSize: "2rem",
          color: "#2c3e50",
          marginBottom: "20px",
          marginTop: "40px",
        }}
      >
        {currentContent.benefitsTitle}
      </h2>
      <p style={{ fontSize: "16px", marginBottom: "20px", textAlign: "justify" }}>
        {currentContent.benefitsIntro}
      </p>
      <ul style={{ paddingLeft: "30px", marginBottom: "30px" }}>
        {currentContent.benefits.map((benefit, index) => (
          <li key={index} style={{ marginBottom: "15px", fontSize: "15px" }}>
            {benefit}
          </li>
        ))}
      </ul>

      {/* Role of NHDC Section */}
      <h2
        style={{
          fontSize: "2rem",
          color: "#2c3e50",
          marginBottom: "20px",
          marginTop: "40px",
        }}
      >
        {currentContent.roleTitle}
      </h2>
      {currentContent.roleContent.map((paragraph, index) => (
        <p key={index} style={{ fontSize: "16px", textAlign: "justify", marginBottom: "20px" }}>
          {paragraph}
        </p>
      ))}
      <p style={{ fontSize: "16px", marginBottom: "20px" , textAlign:"justify"}}>
        {currentContent.roleContent[currentContent.roleContent.length - 1]}
      </p>
      <ul style={{ paddingLeft: "30px", marginBottom: "40px" }}>
        {currentContent.programAims.map((aim, index) => (
          <li key={index} style={{ marginBottom: "15px", fontSize: "15px" }}>
            {aim}
          </li>
        ))}
      </ul>

      {/* Registration Forms */}
      <h2
        style={{
          fontSize: "1.3rem",
          color: "#2c3e50",
          marginBottom: "20px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
      >
        {currentContent.registrationFormsTitle}
      </h2>
      <ul style={{ paddingLeft: "30px", marginBottom: "30px" }}>
        {currentContent.forms.map((form, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <a
              href={form.link}
              style={{
                color: "#4285f4",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              {form.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Brochures */}
      <h2
        style={{
          fontSize: "1.3rem",
          color: "#2c3e50",
          marginBottom: "20px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
      >
        {currentContent.brochureTitle}
      </h2>
      <ul style={{ paddingLeft: "30px", marginBottom: "30px" }}>
        {currentContent.brochures.map((brochure, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <a
              href={brochure.link}
              style={{
                color: "#4285f4",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              {brochure.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Product Manual */}
      <h2
        style={{
          fontSize: "1.3rem",
          color: "#2c3e50",
          marginBottom: "20px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
      >
        {currentContent.productManualTitle}
      </h2>
      <ul style={{ paddingLeft: "30px", marginBottom: "30px" }}>
        {currentContent.productManual.map((manual, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <a
              href={manual.link}
              style={{
                color: "#4285f4",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              {manual.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Consumer Flyers */}
      <h2
        style={{
          fontSize: "1.3rem",
          color: "#2c3e50",
          marginBottom: "20px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
      >
        {currentContent.consumerFlyerTitle}
      </h2>
      <ul style={{ paddingLeft: "30px", marginBottom: "30px" }}>
        {currentContent.flyers.map((flyer, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <a
              href={flyer.link}
              style={{
                color: "#4285f4",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              {flyer.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}