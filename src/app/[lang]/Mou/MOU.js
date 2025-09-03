"use client";
import React, { Suspense } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

// Lazy load ScheduleTable
const ScheduleTable = dynamic(() => import("@/components/ScheduleTable"), {
  loading: () => (
    <div
      className="p-4 md:p-8 animate-pulse"
      role="status"
      aria-label="Loading table"
    >
      <div className="h-8 bg-gray-200 rounded mb-4 w-64"></div>
      <div className="h-32 bg-gray-200 rounded"></div>
    </div>
  ),
  ssr: true,
});

function MOU() {
  const { lang } = useParams();
  const isHindi = lang === "hi";

  const mouData = [
    {
      sno: "1",
      title: "Memorandum of Understanding 2017-2018",
      titleHi: "समझौता ज्ञापन 2017-2018",
      link: "/assets/pdfs/MOU_Eng.pdf",
    },
    // 👉 Add more rows up to 2025 if available
  ];

  return (
    <section
      className="p-4 md:p-8 min-h-[400px]"
      aria-labelledby="mou-heading"
      lang={isHindi ? "hi" : "en"}
    >
      <h1 id="mou-heading" className="text-2xl font-bold mb-6 text-gray-800">
        {isHindi ? "समझौता ज्ञापन (MoU)" : "Memorandum of Understanding (MoU)"}
      </h1>

      <Suspense
        fallback={
          <div
            className="animate-pulse"
            role="status"
            aria-label="Loading content"
          >
            <div className="h-8 bg-gray-200 rounded mb-4 w-64"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        }
      >
        <ScheduleTable
          lang={lang}
          title="MOU"
          titleHi="समझौता ज्ञापन"
          rows={mouData}
        />
      </Suspense>
    </section>
  );
}

export default MOU;
