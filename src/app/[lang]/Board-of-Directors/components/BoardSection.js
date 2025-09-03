"use client";

import { useParams } from "next/navigation";
import ProfileCard from './ProfileCard.js';
import Image from "next/image";
import Link from "next/link";

export default function BoardSection() {
  const { lang } = useParams();

  const data = {
    en: {
      heading: "Board of Directors",
      readMoreText: "Read More",
      members: [
        {
          name: "Dr. M. Beena, IAS",
          title: "Development Commissioner (Handlooms)",
          src: "/assets/beena.jpg",
          moreInfo: `Dr. M. Beena, IAS assumed the charge as Chairperson, National Handloom Development Corporation Limited on 11.10.2023.
          A native of Trivandrum, Dr. Beena is a medical doctor by qualification and joined the Indian Administrative Services from Kerala Cadre in the year 1999. She has served in various capacities in the state including Assistant Collector, Sub Collector, and Director of various departments. She has also served as District Collector of Thrissur and Ernakulam.
          She served as the Chairperson of the Cochin Port Trust prior to joining NHDC. She has also worked as the Managing Director of KSIDC and CEO of Smart City Trivandrum. In addition, she was the Managing Director of Roads & Bridges Development Corporation, Vyttila Mobility Hub, Kerala Books & Publications Ltd, and SUPPLYCO.
          During her 24 years of service, she has gained multifaceted experience in various sectors such as port management, infrastructure development, transportation, industrial development, airport cargo handling, financial services, and more.
          Under her leadership, KSIDC achieved its highest recorded profit in the year 2015-16. During her five-year tenure as Chairperson of the Cochin Port Trust, the port achieved its highest turnover of ₹763.56 crore.`
        },
        {
          name: "Commodore Rajiv Ashok (Retd.)",
          title: "Managing Director",
          src: "/assets/rajiv.jpg",
          moreInfo: `Commodore Rajiv Ashok (Retd) is a second-generation military officer who retired from the Indian Navy after 31 years of distinguished service. During his naval career, he qualified as a Combat Diver and Skydiving Instructor (with two LIMCA Book records), and held numerous command, operational, staff, and training assignments. His primary command assignments at sea included commanding INS Chamak, INS Taragiri, INS Ranvijay, and INS Ranvir. Ashore, he served as the Naval Officer-in-Charge (Gujarat), commanded INS Sardar Patel, and led both the Command Diving Team in Visakhapatnam and the Fleet Clearance Diving Team of the Eastern Fleet.
          He transitioned from active military service in July 2022 as Managing Director of a CPSE, North Eastern Regional Agricultural Marketing Corporation (NERAMAC), at Guwahati, Assam. At NERAMAC, the Corporation from FY 2022-23, recorded profits for the first time in a decade. His most significant contribution was to explore new avenues of business and create multiple venues to reach the agriculture community while developing new streams of revenue for the Corporation. Some significant activities include, revival of two sick processing units and establishment of two new ones, work in both GI certification (30+ new products taken up) and Authorised User enrolment (close to 4000 for 13 GI produce), over 14,000 candidates were imparted skill training in Agri, Food Processing and Rubber sectors, NERAMAC became the distributor for Bharat Dal, Atta, and other agri-produce, for NCCF, considerable confidence building activities were undertaken with the eight NER state governments to brand NERAMAC appropriately and undertake projects of different scales.
          He took over as Managing Director of National Handloom Development Corporation on 11 February 2025.`
        },
        {
          name: "Sh. Dhirendra Kumar",
          title: "Director (IFW) – Ministry of Textiles",
          src: "/assets/dhirender.jpg",
          moreInfo: `Shri Dhirendra Kumar has joined as Government Director on the Board of NHDC w.e.f. 16th June, 2023.
          Presently working as Director (IFW) in Ministry of Textiles since March 2023.
          He is holding degree of BSc., M.A History & M.B.A in Finance. He has joined service of Government of India in 1991.He has been associated in Ministry of Environment and Forest, Ministry of Finance and Food and Public Distribution.
          He has successfully handled various assignments such as- International Cooperation and UNDP etc.`
        }
      ]
    },
    hi: {
      heading: "निर्देशक मंडल",
      readMoreText: "अधिक पढ़ें",
      members: [
        {
          name: "डॉ. एम. बीना, आईएएस",
          title: "विकास आयुक्त (हथकरघा)",
          src: "/assets/beena.jpg",
          moreInfo: `डॉ. एम. बीना, आईएएस ने 11.10.2023 को राष्ट्रीय हथकरघा विकास निगम लिमिटेड (NHDC) की अध्यक्ष के रूप में कार्यभार संभाला।
          त्रिवेंद्रम निवासी डॉ. बीना एक चिकित्सक (एमबीबीएस) हैं और उन्होंने वर्ष 1999 में केरल कैडर से भारतीय प्रशासनिक सेवा (IAS) में प्रवेश किया। उन्होंने राज्य में सहायक कलेक्टर, उप कलेक्टर तथा विभिन्न विभागों की निदेशक के रूप में कार्य किया है। वे त्रिशूर और एर्नाकुलम की जिलाधिकारी भी रह चुकी हैं।
          NHDC से जुड़ने से पहले, वे कोचीन पोर्ट ट्रस्ट की चेयरपर्सन थीं। इसके अतिरिक्त, वे केएसआईडीसी (KSIDC) की प्रबंध निदेशक और स्मार्ट सिटी त्रिवेंद्रम की सीईओ भी रही हैं। उन्होंने रोड्स एंड ब्रिजेस डेवलपमेंट कॉर्पोरेशन, वायत्तिला मोबिलिटी हब, केरल बुक्स एंड पब्लिकेशन लिमिटेड और SUPPLYCO की प्रबंध निदेशक के रूप में भी सेवाएं दी हैं।
          अपने 24 वर्षों के सेवाकाल में उन्होंने पोर्ट प्रबंधन, बुनियादी ढांचा विकास, परिवहन, औद्योगिक विकास, एयरपोर्ट कार्गो संचालन, वित्तीय सेवाओं आदि जैसे कई क्षेत्रों में व्यापक अनुभव प्राप्त किया है।
          डॉ. बीना के नेतृत्व में, KSIDC ने वर्ष 2015-16 में अब तक का सबसे अधिक लाभ अर्जित किया। कोचीन पोर्ट ट्रस्ट में उनके पाँच वर्ष के कार्यकाल के दौरान, बंदरगाह ने ₹763.56 करोड़ का सर्वाधिक टर्नओवर हासिल किया।`
        },
        {
          name: "कमोडोर राजीव अशोक (सेवानिवृत्त)",
          title: "प्रबंध निदेशक",
          src: "/assets/rajiv.jpg",
          moreInfo: `कमोडोर राजीव अशोक (सेवानिवृत्त) एक द्वितीय पीढ़ी के सैन्य अधिकारी हैं, जिन्होंने 31 वर्षों की उत्कृष्ट सेवा के बाद भारतीय नौसेना से सेवानिवृत्ति ली।
          अपनी नौसेना सेवा के दौरान, वे एक कॉम्बैट डाइवर और स्काईडाइविंग प्रशिक्षक के रूप में योग्य घोषित हुए (दो लिम्का बुक रिकॉर्ड्स के साथ), और उन्होंने कई कमान, संचालन, स्टाफ और प्रशिक्षण संबंधी पदों पर कार्य किया। समुद्र में उनकी प्रमुख कमानें थीं: आईएनएस चमक, आईएनएस तरागिरी, आईएनएस रणविजय, और आईएनएस रणवीर। स्थल पर, उन्होंने गुजरात के नौसेना प्रभारी अधिकारी, आईएनएस सरदार पटेल के कमांडिंग ऑफिसर के रूप में सेवा की, साथ ही विशाखापत्तनम में कमांड डाइविंग टीम और पूर्वी बेड़े की फ्लीट क्लीयरेंस डाइविंग टीम का नेतृत्व किया।
          उन्होंने जुलाई 2022 में सक्रिय सैन्य सेवा से बाहर आकर, असम के गुवाहाटी स्थित एक सार्वजनिक क्षेत्र उपक्रम NERAMAC (North Eastern Regional Agricultural Marketing Corporation) में प्रबंध निदेशक के रूप में पदभार संभाला। वित्त वर्ष 2022-23 में, NERAMAC ने एक दशक में पहली बार लाभ दर्ज किया।
          उनका सबसे महत्वपूर्ण योगदान था—नए व्यावसायिक अवसरों की खोज करना, कृषि समुदाय तक पहुंचने के लिए कई माध्यम बनाना, और निगम के लिए नए राजस्व स्रोत तैयार करना। उनकी प्रमुख उपलब्धियों में शामिल हैं:
          दो बंद प्रसंस्करण इकाइयों का पुनरुद्धार और दो नई इकाइयों की स्थापना
          GI प्रमाणन में कार्य (30+ नए उत्पाद) और प्राधिकृत उपयोगकर्ता पंजीकरण (13 GI उत्पादों के लिए लगभग 4,000 उपयोगकर्ता)
          कृषि, खाद्य प्रसंस्करण और रबर क्षेत्रों में 14,000 से अधिक उम्मीदवारों को कौशल प्रशिक्षण
          NERAMAC ने भारत दाल, आटा और अन्य कृषि उत्पादों का NCCF के लिए वितरक बनने का गौरव प्राप्त किया
          पूर्वोत्तर के सभी आठ राज्यों की सरकारों के साथ विश्वास निर्माण कर, NERAMAC ब्रांड की पहचान मजबूत की और विभिन्न स्तरों की परियोजनाएं संचालित कीं
          उन्होंने 11 फरवरी 2025 को राष्ट्रीय हथकरघा विकास निगम (NHDC) के प्रबंध निदेशक के रूप में पदभार ग्रहण किया।`
        },
        {
          name: "श्री धिरेन्द्र कुमार",
          title: "निदेशक (आईएफडब्ल्यू) – वस्त्र मंत्रालय",
          src: "/assets/dhirender.jpg",
          moreInfo: `श्री धिरेन्द्र कुमार ने राष्ट्रीय हथकरघा विकास निगम (NHDC) के बोर्ड में सरकारी निदेशक के रूप में कार्यभार 16 जून 2023 से ग्रहण किया।
          वर्तमान में वे भारत सरकार के वस्त्र मंत्रालय में निदेशक (आईएफडब्ल्यू) के पद पर मार्च 2023 से कार्यरत हैं।
          उनके पास बी.एससी., एम.ए. (इतिहास) और एम.बी.ए. (वित्त) की शैक्षणिक डिग्रियाँ हैं। उन्होंने 1991 में भारत सरकार की सेवा में प्रवेश किया। अपने करियर में उन्होंने पर्यावरण एवं वन मंत्रालय, वित्त मंत्रालय, तथा खाद्य एवं सार्वजनिक वितरण विभाग सहित कई महत्वपूर्ण विभागों में कार्य किया है।
          उन्होंने अंतर्राष्ट्रीय सहयोग, यूएनडीपी परियोजनाओं आदि जैसे कई महत्वपूर्ण दायित्वों का सफलतापूर्वक संचालन किया है।`
        }
      ]
    }
  };

  const current = data[lang] || data["en"];

  return (
    <div className="min-h-screen bg-white px-4">
  <div className="pt-6 sm:px-6 lg:px-12 max-w-screen-xl mx-auto">

        {/* Section Heading */}
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center sm:text-left">
            {current.heading}
          </h1>
        </header>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {current.members.map((person, idx) => (
            <ProfileCard
              key={idx}
              {...person}
              readMoreText={current.readMoreText}
            />
          ))}
        </div>

        {/* Banner */}
        <div className="relative mt-16 h-64 w-full max-w-screen-xl mx-auto rounded-b-2xl overflow-hidden">
          <Image
            src="/assets/building.jpg"
            alt="NHDC campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">
              {lang === "hi" ? "कौन कौन हैं" : "Who's who"}
            </h2>
            <p className="text-white mt-2 max-w-lg text-sm sm:text-base">
              {lang === "hi"
                ? "NHDC के प्रमुख व्यक्तियों से मिलें — जो भारत की हथकरघा विरासत को आकार दे रहे हैं।"
                : "Get to know the key people behind NHDC — the minds shaping India's handloom legacy."}
            </p>
            <Link
              href={`/${lang}/who`}
              className="mt-4 inline-flex items-center gap-2 text-white group w-fit"
            >
              {lang === "hi" ? "पेज पर जाएं" : "Go to page"}
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
