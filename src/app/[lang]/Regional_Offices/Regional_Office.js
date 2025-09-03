"use client"

import RegionalOrgChart from "@/components/RegionalOrgChart"
import { useParams } from "next/navigation"

export default function RegionalOffices() {
  const { lang } = useParams();

  return (
    <main className="min-h-screen relative bg-white">
      <h1 className="text-2xl font-bold text-center my-6">

    
  {lang === "en" ? "Organization Chart (Regional Office)" : "संगठन चार्ट (क्षेत्रीय कार्यालय)"}

      </h1>

      <RegionalOrgChart />


<div className="absolute bottom-4 left-4 text-lg text-black">
  {lang === "en" ? (
    <>
    
      <p>Updated on 21.08.2025</p>
    </>
  ) : (
    <p>अपडेट दिनांक 21.08.2025</p>
  )}
</div>



    </main>
  )
}