'use client';

import { useParams } from 'next/navigation';
import Banner from './Banner';

export default function TantrikaPage() {

    const { lang } = useParams();
  

  return (
    <main className="flex flex-col w-full px-4 sm:px-6 md:px-10 lg:px-20 py-8 max-w-screen-xl mx-auto">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#4b2c2c]">
        {lang === 'hi' ? "आउटरीच के बारे में" : "About Outreach"}
      </h1>

      {/* Banner Only */}
  

      {/* About Outreach Section */}
      <section>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg text-justify leading-relaxed mb-4">
          {lang === 'hi'
            ? "एनएचडीसी का आउटरीच, ट्रांसफॉर्मेशन और प्रोजेक्ट्स डिवीजन भारत के हैंडलूम पारिस्थितिकी तंत्र को जोड़ने, नवाचार करने और सशक्त बनाने के लिए एक रणनीतिक इकाई के रूप में कार्य करता है। यह हितधारकों की भागीदारी, तकनीकी उन्नति और विकासात्मक पहलों को एकीकृत करता है, जिससे एक मजबूत और भविष्य-तैयार हैंडलूम क्षेत्र का निर्माण होता है।"
            : "The Outreach, Transformation & Projects Division of NHDC serves as a strategic vertical to connect, innovate, and empower India’s handloom ecosystem. It integrates stakeholder engagement, technological advancement and developmental initiatives to create a resilient and future-ready handloom sector."}
        </p>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg text-justify leading-relaxed mb-4">
          {lang === 'hi'
            ? "आउटरीच बुनकरों, डिजाइनरों, संस्थानों और अन्य हितधारकों के साथ जुड़कर मजबूत फॉरवर्ड और बैकवर्ड लिंक तैयार करने पर केंद्रित है। सूचना साझा करने, परामर्श सेवाओं और ब्रांड निर्माण प्रयासों के माध्यम से, यह सामुदायिक भागीदारी को मजबूत करता है और राष्ट्रीय एवं अंतर्राष्ट्रीय स्तर पर हैंडलूम उत्पादों की दृश्यता को बढ़ाता है।"
            : "Outreach focuses on building robust forward and backward linkages by engaging with weavers, designers, institutions and other stakeholders. Through information sharing, consultancy services, and brand-building efforts, it strengthens community participation and enhances the visibility of handloom products nationally and globally."}
        </p>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg text-justify leading-relaxed mb-4">
          {lang === 'hi'
            ? "ट्रांसफॉर्मेशन अनुसंधान एवं विकास, क्षमता निर्माण, रणनीतिक योजना और प्रौद्योगिकी अपनाने को एकीकृत करके नवाचार और बदलाव को बढ़ावा देता है। यह मार्केट इंटेलिजेंस, डिजिटल टूल, ब्लॉकचेन, इंडस्ट्री 5.0 और सतत प्रथाओं जैसे भविष्य-उन्मुख दृष्टिकोणों को प्रोत्साहित करता है, जिससे यह क्षेत्र बाजार की मांगों के अनुरूप विकसित होते हुए अपनी विरासत को संरक्षित रखता है।"
            : "Transformation drives innovation and changes by integrating Research & Development, Capacity Building, Strategic Planning, and Technology Adoption. It promotes future-oriented approaches such as market intelligence, digital tools, block chain, Industry 5.0 and sustainable practices—ensuring the sector evolves with market demands while preserving its heritage."}
        </p>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg text-justify leading-relaxed">
          {lang === 'hi'
            ? "प्रोजेक्ट्स उन पहलों की योजना, क्रियान्वयन और प्रभाव-आधारित कार्यान्वयन की देखरेख करता है, जिनका उद्देश्य बुनकरों और संबद्ध श्रमिकों का समर्थन करना है। ये प्रोजेक्ट आर्थिक सशक्तिकरण, कौशल संवर्धन और सांस्कृतिक संरक्षण को बढ़ावा देते हैं, जो विजन 2047 के अनुरूप जमीनी स्तर पर लागू किए जा सकते हैं।"
            : "Projects oversee the planning, execution and impact-driven implementation of initiatives aimed at supporting weavers and allied workers. These projects promote economic empowerment, skill enhancement and cultural preservation through scalable, grassroots-level interventions aligned with Vision 2047."}
        </p>
      </section>
    </main>
  );
}
