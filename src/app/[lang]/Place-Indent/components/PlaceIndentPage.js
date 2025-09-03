'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function PlaceIndentPage() {
  const { lang } = useParams();

  const isHindi = lang === 'hi';

  return (
    <main className="flex flex-col items-start w-full px-4 sm:px-6 md:px-10 lg:px-20 py-8 max-w-screen-xl mx-auto">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#4b2c2c]">
        {isHindi ? 'इंडेंट रखें' : 'Place Indent'}
      </h1>

      {/* Banner Section */}
      <div className="w-full mb-6">
        <div className="w-full flex justify-center px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="w-full max-w-[978px] aspect-[978/336] border-2 border-blue-600 rounded-lg overflow-hidden">
            <Image
              height={1000}
              width={1000}
              src="/PlaceIndent.png"
              alt="NHDC Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-4 text-justify leading-relaxed">
        {isHindi
          ? `भारत सरकार की डिजिटल पहल के अनुरूप अपनी गतिविधियों में पारदर्शिता बढ़ाने और ‘डिजिटल इंडिया’ अभियान के साथ तालमेल स्थापित करने हेतु निगम ने ऑनलाइन लेन-देन के लिए ERP लागू किया है। ERP का उद्देश्य दक्षता बढ़ाना और संचालन क्षमता को बढ़ाने के लिए आवश्यक लेन-देन समय को कम करना है। इसके अलावा, ERP को स्मार्टफोन पर भी सुलभ बनाने के लिए NHDC ने e-dhaga मोबाइल ऐप भी लॉन्च किया है।`
          : `In line with the Govt. of India initiative of digitalization to further enhance transparency in its activities and create a sync with ‘Digital India’ campaign, launched by the Hon’ble Prime Minister of India in direction of e-governance, the Corporation has implemented ERP for Online transaction. The objective of the ERP is to increase the efficiency as well as to reduce the transaction time required to augment their operational capacity. Further, to make the ERP accessible even on smart phone, NHDC also launched the e-dhaga mobile app.`}
      </p>

      {/* Login Link */}
      <Link
        href="https://erp.nhdc.org.in/myportal/control/main"
        target="_blank"
        className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center mt-4"
      >
        {isHindi ? 'इंडेंट रखने के लिए लॉगिन करें' : 'Login here to place indent'} <span className="ml-1">→</span>
      </Link>
    </main>
  );
}
