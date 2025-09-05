"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Head from "next/head";

export default function OutreachTransformationPage() {
  const { lang } = useParams();
  const isHindi = lang === "hi";

  // English content
  const en = {
    metaTitle: "Outreach & Transformation | NHDC Handloom Blockchain & IoT Pilot Project",
    metaDesc:
      "NHDC’s Outreach & Transformation initiative integrates IoT and Blockchain for handloom product traceability in Ladakh & J&K. Learn how artisans benefit from transparency, authenticity, and sustainability.",
    metaKeywords:
      "NHDC, IoT handloom, Blockchain handloom, Handloom traceability, Digital Product Passport, Weavers, Textile Innovation",
    ogTitle: "Outreach & Transformation Initiative | NHDC",
    ogDesc:
      "Discover NHDC’s pilot project using IoT and Blockchain to ensure authenticity and transparency in handloom production, empowering artisans in Ladakh & J&K.",
    mainHeading: "Outreach and Transformation Initiatives",
    heading:
      "IoT-Based Handloom Product Traceability Using Blockchain Technology",
    intro:
    "The IoT-Based Handloom Product Traceability Pilot Project, initiated by NHDC was launched to transform the handloom industry in India by integrating Internet of Things (IoT) and Blockchain technologies, aligning with the concept of Digital Product Passport (DPP). Implemented in Leh, Kargil, Taruk (Ladakh UT) and Basohli (Jammu & Kashmir), the pilot project digitized the handloom supply chain, from weaving to delivery, to create a transparent and verifiable record of each product’s journey. By deploying 100 IoT devices and QR Taffeta tags, the initiative enabled real-time tracking, ensured product authenticity and enhanced transparency, mirroring the objectives of DPP. The DPP framework provides a digital record of a product’s lifecycle, ensuring traceability, authenticity and compliance with fair trade standards. This pilot project empowered local artisans, boosted consumer trust, reduced counterfeiting and promoted sustainable practices, preserving India’s handloom heritage while fostering economic growth through a DPP-aligned, technology-driven approach.",
    keyGoals: [
      "Enable real-time monitoring and data collection via IoT devices in selected districts of Ladakh(UT) and Jammu & Kashmir .",
      "Improve efficiency and transparency in the textile sector."
    ],
    projectLocations:
      "Leh (Ladakh UT), Kargil (Ladakh UT), Taruk (Ladakh UT) and Basohli (Jammu & Kashmir).",
    systemIntegrator: "SSB Digital Pvt Ltd.",
    deliveryDate: "28th May 2025",
    totalDevices: "100 IoT devices",
    timeline: [
      "Project Initiated: 01-May-2025",
      "Software Customization: May 2025",
      "QR Taffeta Design: May 2025",
      "Team Allocation for Delivery, Installation, Deployment, Operation and Training: May 2025",
      "IoT Device Delivery (50 Qty to Ladakh and 50 Qty to J&K): 28th May 2025",
      "System Integrator - SSBD Team Visit for Installation, Deployment, Operation, and Training: 16th June 2025 to 22nd June 2025"
    ],
    currentStatus:
      "The pilot project is complete, with 100 devices operational. Over 144 products are traceable via Blockchain and QR tags.",
    trainingWorkshopsIntro:
      "Comprehensive training sessions were conducted to equip artisans with the skills to use the IoT mobile application, QR tags and Blockchain system.",
    trainings: [
        "Leh (Ladakh): 34 artisans trained; mobile app installed for digitizing weaving processes.",
      "Kargil (Ladakh): 12 artisans (including a master weaver) trained; apps installed on 9 weavers' phones.",
      "Taruk (Ladakh): 10 artisans trained; 8 IoT devices deployed.",
      "Basohli (J&K): 52 artisans trained over June 21-22; 50 IoT devices set up."
    ],
    objectives: [
       { obj: "Enable end-to-end visibility between weavers and buyers", status: "Achieved" },
      { obj: "Integrate IoT sensors to track handloom, dye and weaving stages", status: "Achieved" },
      { obj: "Implement a tamper-proof Blockchain ledger for traceability", status: "Achieved" },
      { obj: "Build a public QR-based authentication interface", status: "Achieved" },
      { obj: "Improve artisan recognition and fair-trade compliance", status: "Achieved" }
    ],
    warranty: [
      "Warranty Period: 1 year from final acceptance or completion of installation, commissioning and testing.",
      "Ongoing Support: Weekly VC meetings with weaver heads; dedicated helpdesk for grievances."
    ]
  };

  // Hindi content
  const hi = {
    metaTitle: "आउटरीच और परिवर्तन | एनएचडीसी ब्लॉकचेन और IoT पायलट प्रोजेक्ट",
    metaDesc:
      "एनएचडीसी का आउटरीच और परिवर्तन प्रोजेक्ट लद्दाख और जम्मू-कश्मीर में हथकरघा उत्पाद अनुरेखण के लिए IoT और ब्लॉकचेन तकनीक को जोड़ता है। पारदर्शिता, प्रामाणिकता और स्थिरता से लाभ उठाइए।",
    metaKeywords:
      "एनएचडीसी, हथकरघा IoT, ब्लॉकचेन हथकरघा, हथकरघा अनुरेखण, डिजिटल प्रोडक्ट पासपोर्ट, बुनकर, वस्त्र नवाचार",
    ogTitle: "आउटरीच और परिवर्तन पहल | एनएचडीसी",
    ogDesc:
      "एनएचडीसी का पायलट प्रोजेक्ट हथकरघा उत्पादन में IoT और ब्लॉकचेन का उपयोग कर प्रामाणिकता और पारदर्शिता सुनिश्चित करता है।",
    mainHeading: "आउटरीच और परिवर्तन पहल",
    heading: "ब्लॉकचेन तकनीक के साथ IoT-आधारित हथकरघा उत्पाद अनुरेखण",
    intro:
    "एनएचडीसी द्वारा शुरू किया गया IoT-आधारित हथकरघा उत्पाद अनुरेखण पायलट प्रोजेक्ट भारत के हथकरघा उद्योग को बदलने के लिए इंटरनेट ऑफ थिंग्स (IoT) और ब्लॉकचेन तकनीकों को एकीकृत करने के लिए शुरू किया गया था, जो डिजिटल प्रोडक्ट पासपोर्ट (DPP) की अवधारणा के अनुरूप है। यह प्रोजेक्ट लद्दाख (यूटी) के लेह, कारगिल, तारुक और जम्मू-कश्मीर के बसोहली में लागू किया गया, जिसमें बुनाई से लेकर डिलीवरी तक हथकरघा आपूर्ति श्रृंखला को डिजिटाइज किया गया ताकि प्रत्येक उत्पाद की यात्रा का पारदर्शी और सत्यापन योग्य रिकॉर्ड तैयार किया जा सके। 100 IoT उपकरणों और QR टैफेटा टैग्स की तैनाती के माध्यम से, इस पहल ने वास्तविक समय ट्रैकिंग, उत्पाद की प्रामाणिकता सुनिश्चित करने और पारदर्शिता बढ़ाने में मदद की। यह प्रोजेक्ट स्थानीय कारीगरों को सशक्त बनाता है, उपभोक्ता विश्वास को बढ़ाता है, नकली उत्पादों को कम करता है और सतत प्रथाओं को बढ़ावा देता है।",
    keyGoals: [
      "लद्दाख (यूटी) और जम्मू एवं कश्मीर के चयनित जिलों में IoT उपकरणों के माध्यम से वास्तविक समय निगरानी और डेटा संग्रह सक्षम करना।",
      "वस्त्र/बुनाई क्षेत्र में दक्षता और पारदर्शिता।"
    ],
    projectLocations: "लेह, कारगिल, तारुक (लद्दाख) और बसोहली (जम्मू एवं कश्मीर)।",
    systemIntegrator: "एसएसबी डिजिटल प्राइवेट लिमिटेड।",
    deliveryDate: "28 मई 2025",
    totalDevices: "100 IoT उपकरण",
    timeline: [
       "प्रोजेक्ट शुरू: 01-मई-2025",
      "सॉफ़्टवेयर अनुकूलन: मई 2025",
      "QR टैफेटा डिज़ाइन: मई 2025",
      "डिलीवरी, इंस्टॉलेशन, डिप्लॉयमेंट, संचालन और प्रशिक्षण के लिए टीम आवंटन: मई 2025",
      "IoT डिवाइस डिलीवरी (50 इकाई लद्दाख और 50 इकाई J&K): 28 मई 2025",
      "सिस्टम इंटीग्रेटर - एसएसबीडी टीम इंस्टॉलेशन, डिप्लॉयमेंट, संचालन और प्रशिक्षण के लिए दौरा: 16 जून 2025 से 22 जून 2025"
    ],
    currentStatus:
      "पायलट प्रोजेक्ट पूरा हो चुका है, सभी 100 डिवाइस चालू हैं। अब 144 से अधिक उत्पाद ब्लॉकचेन और QR टैग्स के माध्यम से ट्रेस किए जा सकते हैं।",
    trainingWorkshopsIntro:
     "कारीगरों को IoT मोबाइल एप्लिकेशन, QR टैग्स और ब्लॉकचेन सिस्टम का उपयोग करने के कौशल से लैस करने के लिए व्यापक प्रशिक्षण सत्र आयोजित किए गए।",
    trainings: [
      "लेह (लद्दाख): 34 कारीगर प्रशिक्षित; बुनाई प्रक्रियाओं को डिजिटाइज करने के लिए मोबाइल ऐप इंस्टॉल किया।",
      "कारगिल (लद्दाख): 12 कारीगर (एक मास्टर वीवर सहित) प्रशिक्षित; 9 बुनकरों के फोन पर ऐप इंस्टॉल किए गए।",
      "तारुक (लद्दाख): 10 कारीगर प्रशिक्षित; 8 IoT उपकरण तैनात।",
      "बसोहली (J&K): 21-22 जून को 52 कारीगर प्रशिक्षित; 50 IoT उपकरण सेटअप किए गए।"
    ],
    objectives: [
      { obj: "बुनकरों और खरीदारों के बीच एंड-टू-एंड दृश्यता सक्षम करना", status: "पूर्ण" },
      { obj: "हथकरघा, डाई और बुनाई चरणों को ट्रैक करने के लिए IoT सेंसर एकीकृत करना", status: "पूर्ण" },
      { obj: "अनुरेखण के लिए छेड़छाड़-रोधी ब्लॉकचेन लेजर लागू करना", status: "पूर्ण" },
      { obj: "सार्वजनिक QR-आधारित प्रमाणीकरण इंटरफ़ेस बनाना", status: "पूर्ण" },
      { obj: "कारीगर की पहचान और फेयर-ट्रेड अनुपालन में सुधार", status: "पूर्ण" }
    ],
    warranty: [
       "वारंटी अवधि: अंतिम स्वीकृति या इंस्टॉलेशन, कमीशनिंग और परीक्षण की पूर्णता से 1 वर्ष।",
      "निरंतर समर्थन: बुनकर प्रमुखों के साथ साप्ताहिक VC बैठकें; शिकायतों के लिए समर्पित हेल्पडेस्क।"
    ]
  };

  const content = isHindi ? hi : en;

  return (
    <>
      {/* ✅ SEO Head */}
      <Head>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDesc} />
        <meta name="keywords" content={content.metaKeywords} />
        <meta property="og:title" content={content.ogTitle} />
        <meta property="og:description" content={content.ogDesc} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://www.yourdomain.com/${lang}/outreach-transformation`} />
      </Head>

      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 text-center">
            {content.mainHeading}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#2b2b2b] mb-4">
            {content.heading}
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            {content.intro}
          </p>

          {/* Key Goals */}
          <h3 className="text-lg font-medium mt-4 mb-2">
            {isHindi ? "मुख्य लक्ष्य" : "Key Goals"}
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {content.keyGoals.map((g, i) => (
              <li key={i} className="mb-1">{g}</li>
            ))}
          </ul>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <p className="text-sm"><strong>{isHindi ? "प्रोजेक्ट स्थान:" : "Project Locations:"}</strong> {content.projectLocations}</p>
              <p className="text-sm mt-2"><strong>{isHindi ? "सिस्टम इंटीग्रेटर:" : "System Integrator:"}</strong> {content.systemIntegrator}</p>
              <p className="text-sm mt-2"><strong>{isHindi ? "डिवाइस डिलीवरी तिथि:" : "Device Delivery Date:"}</strong> {content.deliveryDate}</p>
              <p className="text-sm mt-2"><strong>{isHindi ? "कुल डिवाइस:" : "Total Devices:"}</strong> {content.totalDevices}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">{isHindi ? "प्रोजेक्ट समयरेखा" : "Project Timeline"}</h4>
              <ul className="list-disc pl-6 text-sm text-gray-700">
                {content.timeline.map((t, idx) => (
                  <li key={idx} className="mb-1">{t}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Current Status */}
          <p className="mt-6 text-sm text-gray-800">
            <strong>{isHindi ? "वर्तमान स्थिति:" : "Current Status:"}</strong> {content.currentStatus}
          </p>

          {/* Trainings */}
          <h4 className="mt-6 font-medium">{isHindi ? "प्रशिक्षण कार्यशालाएं" : "Training Workshops"}</h4>
          <p className="text-sm text-gray-700 mt-2">{content.trainingWorkshopsIntro}</p>
          <ul className="list-disc pl-6 mt-2 text-sm text-gray-700">
            {content.trainings.map((tr, i) => (
              <li key={i} className="mb-1">{tr}</li>
            ))}
          </ul>

          {/* Objectives */}
          <h4 className="mt-6 font-medium">{isHindi ? "उद्देश्य और स्थिति" : "Objectives & Status"}</h4>
          <div className="mt-3">
            {content.objectives.map((o, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
                <div className="text-sm text-gray-800">{o.obj}</div>
                <div className="text-sm font-medium text-green-600">{o.status}</div>
              </div>
            ))}
          </div>

          {/* Warranty */}
          <h4 className="mt-6 font-medium">{isHindi ? "वारंटी और समर्थन" : "Warranty & Support"}</h4>
          <ul className="list-disc pl-6 mt-2 text-sm text-gray-700">
            {content.warranty.map((w, i) => (
              <li key={i} className="mb-1">{w}</li>
            ))}
          </ul>

          {/* Images */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {["o&t1.png", "o&t2.png", "o&t3.png", "outreachdata1.jpg"].map((img, idx) => (
              <div
                key={idx}
                className="w-full h-56 md:h-64 relative rounded-lg overflow-hidden bg-gray-100 group"
              >
                <Image
                  src={`/assets/${img}`}
                  alt={isHindi ? `आउटरीच छवि ${idx + 1}` : `Outreach Image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}