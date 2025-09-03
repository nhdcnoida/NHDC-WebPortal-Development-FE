'use client'
import { useParams, usePathname } from 'next/navigation';
import ProfileCard from "./ProfileCard";
import Image from 'next/image';
import Link from 'next/link';

const team = [
  {
    name: "Commodore Rajiv Ashok (Retd.)",
    hiname: "कमोडोर राजीव अशोक (सेवानिवृत्त)",
    title_en: "Managing Director",
    title_hi: "प्रबंध निदेशक",
    email: "mdnhdc@nhdc.org.in",
    phone: "0120-2329601",
    image: "/assets/rajiv.jpg",
    moreInfo_en: `Commodore Rajiv Ashok (Retd.) is a second-generation military officer who retired from the Indian Navy after 31 years of distinguished service. During his naval career, he qualified as a Combat Diver and Skydiving Instructor (with two LIMCA Book records) and held numerous command, operational, staff, and training assignments.

His primary command assignments at sea included commanding INS Chamak, INS Taragiri, INS Ranvijay, and INS Ranvir. Ashore, he served as the Naval Officer-in-Charge (Gujarat), commanded INS Sardar Patel, and led both the Command Diving Team in Visakhapatnam and the Fleet Clearance Diving Team of the Eastern Fleet.

He transitioned from active military service in July 2022 as Managing Director of a CPSE — North Eastern Regional Agricultural Marketing Corporation (NERAMAC), Guwahati, Assam. At NERAMAC, the Corporation recorded profits for FY 2022-23 for the first time in a decade. His most significant contribution was exploring new avenues of business and creating multiple channels to reach the agriculture community while developing new revenue streams.

Notable activities included revival of two sick processing units and establishment of two new ones, GI certification of 30+ new products, enrolment of nearly 4,000 Authorized Users for 13 GI produce, and skill training for over 14,000 candidates in Agri, Food Processing, and Rubber sectors. NERAMAC also became a distributor for Bharat Dal, Atta, and other agri-products for NCCF. Extensive confidence-building efforts were undertaken with the eight North Eastern state governments to brand NERAMAC and undertake projects of various scales.

He took over as Managing Director of National Handloom Development Corporation on 11 February 2025.`,
    moreInfo_hi: `कमोडोर राजीव अशोक (सेवानिवृत्त) एक द्वितीय पीढ़ी के सैन्य अधिकारी हैं जिन्होंने भारतीय नौसेना से 31 वर्षों की विशिष्ट सेवा के बाद सेवानिवृत्ति ली। अपने नौसैनिक करियर के दौरान, उन्होंने कॉम्बैट डाइवर और स्काइडाइविंग इंस्ट्रक्टर के रूप में (दो लिम्का बुक रिकॉर्ड्स के साथ) योग्यता प्राप्त की और कई कमान, संचालन, स्टाफ और प्रशिक्षण नियुक्तियाँ निभाईं।

समुद्र में उनकी प्रमुख कमान नियुक्तियों में आईएनएस चमक, आईएनएस तारागिरी, आईएनएस रणविजय और आईएनएस रणवीर की कमान शामिल थी। किनारे पर, उन्होंने नौसेना अधिकारी-प्रभारी (गुजरात) के रूप में कार्य किया, आईएनएस सरदार पटेल की कमान संभाली, और विशाखापत्तनम में कमांड डाइविंग टीम और ईस्टर्न फ्लीट की फ्लीट क्लीयरेंस डाइविंग टीम का नेतृत्व किया।

उन्होंने जुलाई 2022 में सक्रिय सैन्य सेवा से स्थानांतरित होकर एक सीपीएसई — नॉर्थ ईस्टर्न रीजनल एग्रीकल्चरल मार्केटिंग कॉरपोरेशन (NERAMAC), गुवाहाटी, असम के प्रबंध निदेशक के रूप में कार्यभार संभाला। एनईआरएएमएसी में, निगम ने एक दशक में पहली बार वित्तीय वर्ष 2022-23 में लाभ दर्ज किया। उनका सबसे महत्वपूर्ण योगदान व्यवसाय के नए क्षेत्रों का अन्वेषण करना और कृषि समुदाय तक पहुँचने के लिए कई चैनलों का निर्माण करना था, साथ ही नए राजस्व स्रोतों का विकास करना।

उल्लेखनीय गतिविधियों में दो अस्वस्थ प्रसंस्करण इकाइयों का पुनरुद्धार और दो नई इकाइयों की स्थापना, 30+ नए उत्पादों का जीआई प्रमाणन, 13 जीआई उत्पादों के लिए लगभग 4,000 अधिकृत उपयोगकर्ताओं का नामांकन, और कृषि, खाद्य प्रसंस्करण और रबर क्षेत्रों में 14,000 से अधिक उम्मीदवारों के लिए कौशल प्रशिक्षण शामिल था। एनईआरएएमएसी ने एनसीसीएफ के लिए भारत दाल, आटा और अन्य कृषि-उत्पादों का वितरक भी बन गया। आठ उत्तर-पूर्वी राज्य सरकारों के साथ एनईआरएएमएसी को ब्रांड बनाने और विभिन्न स्तरों की परियोजनाओं को शुरू करने के लिए व्यापक विश्वास-निर्माण प्रयास किए गए।

उन्होंने 11 फरवरी 2025 को नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन के प्रबंध निदेशक के रूप में कार्यभार संभाला।`
  },
  {
    name: "Shri Dhirender Prakash",
      hiname: "श्री धीरेन्द्र प्रकाश",
    title_en: "Executive Director/Finance & CFO\nCompany Secretary (Addl. Charge)",
    title_hi: "कार्यकारी निदेशक (वित्त) और मुख्य वित्तीय अधिकारी\nकंपनी सचिव (अतिरिक्त प्रभार)",
    email: "dhirenderprakash@nhdc.org.in",
    phone: "0120-2329605",
    image: "/assets/shri_dhirender.png",
    moreInfo_en: `Shri Dhirender Prakash took charge as the Executive Director (Finance) at the National Handloom Development Corporation (NHDC) on November 29, 2024. Prior to his appointment as Executive Director-Finance in NHDC, he served as the General Manager (Finance) at the Dedicated Freight Corridor Corporation of India Limited (DFCCIL), a Schedule 'A' Railway CPSE. During his tenure at DFCCIL, he was responsible for a variety of functions, including Tendering & Finance Appraisal, Concurrence and Vetting, Contract Management (FIDIC), Internal Audit, Business Development, Costing, and Corporate Finance. Notably, he spent two weeks in Japan, participating in a training program on Japanese railways, which are renowned for their efficiency and technological advancements. Shri Prakash was also honored with the MD Appreciation Award for his significant contributions.

With almost 23 years of experience in finance and accounts, Shri Prakash has worked across multiple sectors, including Power, Insurance, Oil & Gas, and Railways Infrastructure. He is a graduate in Commerce from Delhi University and holds various professional qualifications. These include being a Fellow Member of the Institute of Cost Accountants of India (ICMAI), an Associate Member of The Institute of Company Secretaries of India (ICSI), and a holder of a Post Graduate Diploma in Treasury and Forex Management. He is also accredited with a Diploma in International Financial Reporting Standards (IFRS) from ACCA, London, UK.
`,
    moreInfo_hi: `श्री धीरेंद्र प्रकाश ने 29 नवंबर 2024 को नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन (एनएचडीसी) में कार्यकारी निदेशक (वित्त) का कार्यभार संभाला। एनएचडीसी में कार्यकारी निदेशक (वित्त) के रूप में नियुक्त होने से पहले, उन्होंने डेडिकेटेड फ्रेट कॉरिडोर कॉर्पोरेशन ऑफ इंडिया लिमिटेड (DFCCIL), जो कि एक अनुसूची 'A' रेलवे सीपीएसई है, में महाप्रबंधक (वित्त) के रूप में कार्य किया। DFCCIL में अपने कार्यकाल के दौरान, वह टेंडरिंग और वित्तीय मूल्यांकन, सहमति और परीक्षण, अनुबंध प्रबंधन (FIDIC), आंतरिक लेखा परीक्षा, व्यापार विकास, लागत निर्धारण और कॉर्पोरेट वित्त जैसे विभिन्न कार्यों के लिए जिम्मेदार थे। विशेष रूप से, उन्होंने जापान में दो सप्ताह का प्रशिक्षण कार्यक्रम किया, जिसमें उन्होंने जापानी रेलवे प्रणालियों के बारे में प्रशिक्षण प्राप्त किया, जो अपनी दक्षता और तकनीकी प्रगति के लिए प्रसिद्ध हैं। श्री प्रकाश को उनके महत्वपूर्ण योगदान के लिए एमडी प्रशंसा पुरस्कार से भी सम्मानित किया गया।

लगभग 23 वर्षों के वित्त और लेखा अनुभव के साथ, श्री प्रकाश ने पावर, बीमा, तेल और गैस, और रेलवे अवसंरचना सहित कई क्षेत्रों में कार्य किया है। वह दिल्ली विश्वविद्यालय से वाणिज्य में स्नातक हैं और उन्होंने कई पेशेवर योग्यताएं प्राप्त की हैं। इनमें इंस्टीट्यूट ऑफ कॉस्ट अकाउंटेंट्स ऑफ इंडिया (ICMAI) के फैलो सदस्य, द इंस्टीट्यूट ऑफ कंपनी सेक्रेटरीज ऑफ इंडिया (ICSI) के एसोसिएट सदस्य, ट्रेजरी और फॉरेक्स मैनेजमेंट में स्नातकोत्तर डिप्लोमा धारक शामिल हैं। इसके अतिरिक्त, उन्होंने लंदन, यूके स्थित ACCA से अंतरराष्ट्रीय वित्तीय रिपोर्टिंग मानकों (IFRS) में डिप्लोमा भी प्राप्त किया है।
`
  },
  {
    name: "Shri Jitendra Purohit",
     hiname: "श्री जितेन्द्र पुरोहित",
    title_en: "General Manager (Finance & Accounts) & Legal Head (Addl. Charge)",
    title_hi: "महाप्रबंधक (वित्त एवं लेखा) एवं विधि प्रमुख (अतिरिक्त प्रभार)",
    email: "jitendrapurohit@nhdc.org.in",
    phone: "0120-2329604",
    image: "/assets/jitendra_purohit.jpg",
    moreInfo_en:`Shri Jitendra Purohit assumed charge as General Manager (Finance & Accounts) at the National Handloom Development Corporation (NHDC). He joined NHDC on 29th March 2019. He also holds the additional charge of Legal Head.


Before joining NHDC, he held senior finance leadership roles in reputed organizations such as Saurer Textile Pvt. Ltd. (MNC), Setco Automotive Ltd., Gammon India Ltd., Hubach Colours, and Netweb Software.


Over his career of nearly 25 years, Shri Purohit has acquired rich and diverse experience across IT, Infrastructure, Automotive & Engineering, Chemicals, and Textile sectors. His professional expertise covers Finance, Accounts, Costing, Internal Audit, Budgeting, Corporate Finance, Business Development, and SAP Implementation. He has also served as a member of the Expert Committee of the Institute of Chartered Accountants of India (ICAI) for syllabus formulation.`,
moreInfo_hi:`श्री जितेंद्र पुरोहित ने राष्ट्रीय हथकरघा विकास निगम (एनएचडीसी) में महाप्रबंधक (वित्त एवं लेखा) का पदभार ग्रहण किया। वे 29 मार्च 2019 को एनएचडीसी में शामिल हुए। उनके पास विधि प्रमुख का अतिरिक्त प्रभार भी है।

एनएचडीसी में शामिल होने से पहले, उन्होंने सौरर टेक्सटाइल प्राइवेट लिमिटेड (एमएनसी), सेटको ऑटोमोटिव लिमिटेड, गैमन इंडिया लिमिटेड, हुबाक कलर्स और नेटवेब सॉफ्टवेयर जैसे प्रतिष्ठित संगठनों में वरिष्ठ वित्त नेतृत्वकारी पदों पर कार्य किया।

लगभग 25 वर्षों के अपने करियर में, श्री पुरोहित ने आईटी, अवसंरचना, ऑटोमोटिव एवं इंजीनियरिंग, रसायन और वस्त्र क्षेत्रों में समृद्ध और विविध अनुभव प्राप्त किया है। उनकी व्यावसायिक विशेषज्ञता में वित्त, लेखा, लागत निर्धारण, आंतरिक लेखा परीक्षा, बजट, कॉर्पोरेट वित्त, व्यवसाय विकास और एसएपी कार्यान्वयन शामिल हैं। उन्होंने पाठ्यक्रम निर्माण हेतु भारतीय चार्टर्ड एकाउंटेंट्स संस्थान (आईसीएआई) की विशेषज्ञ समिति के सदस्य के रूप में भी कार्य किया है।`
  },
  {
    name: "Shri Sanjay Kumar Joshi",
     hiname: "श्री संजय कुमार जोशी",
    title_en: "Dy. General Manager (Commercial)",
    title_hi: "उप महाप्रबंधक (वाणिज्य)",
    email: "sanjayjoshi@nhdc.org.in",
    phone: "0120-2329600",
    image: "/assets/sanjay.png"
  },
  {
    name: "Dr. Prasanna M.",
     hiname: "डॉ. प्रसन्ना एम.",
    title_en: "Dy. General Manager (HR)",
    title_hi: "उप महाप्रबंधक (मानव संसाधन)",
    email: "prasanna.m@nhdc.org.in",
    phone: "0120-2329600",
    image: "/assets/dhirender.png"
  }
];

export default function WhosWhoPage() {
  // const { lang } = usePathname();
    const { lang } = useParams();
    



  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-8">
        {lang === "hi" ? "कौन कौन हैं" : "Who's who"}
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, idx) => (
          <ProfileCard
            key={idx}
            name={lang === "hi" ? member.hiname : member.name}
            title={lang === "hi" ? member.title_hi : member.title_en}
            email={member.email}
            phone={member.phone}
            image={member.image}
            moreInfo={lang === "hi" ? member.moreInfo_hi || "" : member.moreInfo_en || ""}
          />
        ))}
      </div>

      <div className="mt-12 relative rounded-lg overflow-hidden shadow-md">
        <Image
        height={1000}
        width={1000}
          src="/assets/building.jpg"
          alt="Board of Directors"
          className="w-full h-52 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 text-white">
          <h2 className="text-xl font-semibold drop-shadow-md">
            {lang === "hi" ? "निर्देशक मंडल" : "Board of Directors"}
          </h2>
          <p className="text-sm mt-1 drop-shadow-sm">
            {lang === "hi"
              ? "एनएचडीसी के पीछे प्रमुख लोगों को जानें - भारत की हैंडलूम विरासत को आकार देने वाले मस्तिष्क।"
              : "Get to know the key people behind NHDC – the minds shaping India's handloom legacy."}
          </p>
          <Link
              href={`/${lang}/Board-of-Directors`}
            className="mt-3 inline-block underline text-sm drop-shadow-sm"
          >
            {lang === "hi" ? "पृष्ठ पर जाएं →" : "Go to page →"}
          </Link>
        </div>
      </div>
    </div>
  );
}