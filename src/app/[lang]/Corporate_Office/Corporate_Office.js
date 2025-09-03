'use client';

import OrgChart from '@/components/OrgChart';
import { useParams } from 'next/navigation';

export default function CorporateOffice() {
  const { lang } = useParams();

  return (
    <main className="relative min-h-screen bg-white">
      {/* Info Box - positioned at top right, hidden on very small screens to avoid overlap */}
      <div className="absolute top-2 right-2 bg-gray-100 border border-gray-300 p-2 rounded shadow text-xs max-w-xs md:max-w-sm md:top-6 md:right-6 md:p-3 sm:top-4 sm:right-3 sm:max-w-48 z-10 hidden sm:block">
        <p className="text-center text-xs md:text-lg sm:text-sm">
          <strong>
            {lang === 'hi' ? 'कॉर्पोरेट कार्यालय ' : 'Corporate Office '}
          </strong>
          <br className="sm:hidden" />
          {lang === 'hi'
            ? `अपडेट किया गया दिनांक 02/09/2025`
            : `updated on 02/09/2025`}
        </p>
      </div>

      {/* Info Box for mobile - positioned below title */}
      <div className="block sm:hidden mx-4 mt-2 bg-gray-100 border border-gray-300 p-2 rounded shadow">
        <p className="text-center text-xs">
          <strong>
            {lang === 'hi' ? 'कॉर्पोरेट कार्यालय ' : 'Corporate Office '}
          </strong>
          <br />
          {lang === 'hi'
            ? `अपडेट किया गया दिनांक 02/09/2025`
            : `updated on 02/09/2025`}
        </p>
      </div>

      {/* Header section with title */}
      <div className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-semibold text-center mt-2 mb-4 md:mt-8 sm:mt-4">
          {lang === 'hi' ? 'संगठन चार्ट' : 'Organization Chart'}
        </h1>
      </div>

      {/* Organization Chart with proper spacing */}
      <div className="mt-4">
        <OrgChart />
      </div>

      {/* Footer abbreviations */}
      <div className=" pb-8 flex justify-center items-center mt-4 px-4">
        <p className="text-lg max-w-[80%] text-center   md:text-lg sm:text-sm xs:text-xs">
          {lang === 'hi'
            ? `डीसी (हैंडलूम) = विकास आयुक्त (हैंडलूम),
               सीवीओ = मुख्य सतर्कता अधिकारी, ईडी = कार्यकारी निदेशक, 
               डीजीएम = उप महाप्रबंधक, सीएस = कंपनी सचिव,
               जीएम (वित्त एवं लेखा) = महाप्रबंधक (वित्त एवं लेखा)`
            : `DC (Handloom) = Development Commissioner (Handloom), 
               CVO = Chief Vigilance Officer, ED = Executive Director, 
               DGM = Deputy General Manager, CS = Company Secretary,
               GM (F&A) = General Manager (Finance & Accounts)`}
        </p>
      </div>
    </main>
  );
}