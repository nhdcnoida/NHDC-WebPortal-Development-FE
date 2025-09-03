"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@mui/material"
import ScheduleTable from "@/components/ScheduleTable"

export default function RTI() {
  const { lang } = useParams()
  const [isApplicationFeeOpen, setIsApplicationFeeOpen] = useState(false)
  const [selectedYear, setSelectedYear] = useState("All")

  const content = {
    en: {
      title: "Right to Information Act",
      applicationFeeTitle: "Application Fee!",
      applicationFeeText: "For seeking Information under RTI Act, application should be accompanied by an application fee of Rs. 10/- by way of cash against proper receipt/demand draft/banker cheque or postal order in the name of DGM (Finance & Accounts /Account Officer NHDC)",
      noFeeText: "No Fee Shall be Charged from the Person Who are of Below Poverty Line",
      introText: "Pursuant to the enforcement to the Right to Information Act 2005 and its applicability to the corporation, the following are appointed as Public Information Officer, Alternate Public Information Officer & Appellate Authority at Head Office & Regional Offices:",
      reportsTitle: "Monthly and Quarterly Report:",
      showingText: (filteredCount, totalCount, year) => `Showing ${filteredCount} of ${totalCount} reports${year !== "All" ? ` for ${year}` : ""}`,
      section4Title: "Information Under Section 4.1(B)",
      formsTitle: "Forms of Application for Seeking Information",
      orgChartTitle: "NHDC - RTI Processing Organization Chart, as per Office Order No. 03, Dated 07.04.2025",
      years: ["All", "2025", "2024", "2023", "2022", "2021 & Below"]
    },
    hi: {
      title: "सूचना का अधिकार अधिनियम",
      applicationFeeTitle: "आवेदन शुल्क!",
      applicationFeeText: "आरटीआई अधिनियम के तहत सूचना प्राप्त करने के लिए, आवेदन के साथ 10/- रुपये का आवेदन शुल्क उचित रसीद/डिमांड ड्राफ्ट/बैंकर चेक या डीजीएम (वित्त एवं लेखा/लेखा अधिकारी एनएचडीसी) के नाम पर पोस्टल ऑर्डर के रूप में नकद में जमा करना होगा।",
      noFeeText: "गरीबी रेखा से नीचे के व्यक्तियों से कोई शुल्क नहीं लिया जाएगा",
      introText: "सूचना का अधिकार अधिनियम 2005 के प्रवर्तन और निगम पर इसकी लागूता के अनुसरण में, मुख्यालय और क्षेत्रीय कार्यालयों में सार्वजनिक सूचना अधिकारी, वैकल्पिक सार्वजनिक सूचना अधिकारी और अपीलीय प्राधिकरण के रूप में निम्नलिखित को नियुक्त किया गया है:",
      reportsTitle: "मासिक और त्रैमासिक रिपोर्ट:",
      showingText: (filteredCount, totalCount, year) => `${filteredCount} रिपोर्ट दिखाई जा रही हैं ${totalCount} में से${year !== "सभी" ? ` ${year} के लिए` : ""}`,
      section4Title: "धारा 4.1(बी) के तहत जानकारी",
      formsTitle: "सूचना मांगने के लिए आवेदन फॉर्म",
      orgChartTitle: "एनएचडीसी - आरटीआई प्रसंस्करण संगठन चार्ट, कार्यालय आदेश संख्या 03, दिनांक 07.04.2025 के अनुसार",
      years: ["सभी", "2025", "2024", "2023", "2022", "2021 और नीचे"]
    }
  }

  const currentContent = content[lang] || content.en

  const RtiData = [
    {
      sno: 1,
      title: "Monthly & Quarterly Report - April | June 2025",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अप्रैल | जून 2025",
      link: "/assets/pdfs/RTI_Quarterly_Report_Apr_Jun_2025.pdf",
    },
    {
      sno: 2,
      title: "Monthly & Quarterly Report - January | March 2025",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जनवरी | मार्च 2025",
      link: "/assets/pdfs/RTI_Quarterly_Report_Jan_Mar_2025.pdf",
    },
    {
      sno: 3,
      title: "Monthly & Quarterly Report - October | December 2024",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अक्टूबर | दिसंबर 2024",
      link: "/assets/pdfs/RTI_Quarterly_Report_Oct_Dec_2024.pdf",
    },
    {
      sno: 4,
      title: "Monthly & Quarterly Report - July | September 2024",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जुलाई | सितंबर 2024",
      link: "/assets/pdfs/RTI_Quarterly_Report_July-Sep_2024.pdf",
    },
    {
      sno: 5,
      title: "Monthly & Quarterly Report - April | June 2024",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अप्रैल | जून 2024",
      link: "/assets/pdfs/RTI_Quarterly_Report_April-June_2024.pdf",
    },
    {
      sno: 6,
      title: "Monthly & Quarterly Report - January | March 2024",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जनवरी | मार्च 2024",
      link: "/assets/pdfs/RTI_Quarterly_Report_Jan-Mar_2024.pdf",
    },
    {
      sno: 7,
      title: "Monthly & Quarterly Report - October | December 2023",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अक्टूबर | दिसंबर 2023",
      link: "/assets/pdfs/RTI-Qrt-Report_Oct_Dec_2023.pdf",
    },
    {
      sno: 8,
      title: "Monthly & Quarterly Report - July | September 2023",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जुलाई | सितंबर 2023",
      link: "/assets/pdfs/RTI-Qrt-Report_July_Sep_2023.pdf",
    },
    {
      sno: 9,
      title: "Monthly & Quarterly Report - April | June 2023",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अप्रैल | जून 2023",
      link: "/assets/pdfs/RTI-Qrt-Report_April_June_2023.pdf",
    },
    {
      sno: 10,
      title: "Monthly & Quarterly Report - January | March 2023",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जनवरी | मार्च 2023",
      link: "/assets/pdfs/RTI-Qrt-Report_Jan-Mar_2023.pdf",
    },
    {
      sno: 11,
      title: "Monthly & Quarterly Report - October | November | December 2022",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अक्टूबर | नवंबर | दिसंबर 2022",
      link: "/assets/pdfs/RTI-Report-Oct-Nov-Dec-2022.pdf",
    },
    {
      sno: 12,
      title: "Monthly & Quarterly Report - July | August | September 2022",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जुलाई | अगस्त | सितंबर 2022",
      link: "/assets/pdfs/RTI-Report-July-August-September-2022.pdf",
    },
    {
      sno: 13,
      title: "Monthly & Quarterly Report - April | May | June 2022",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अप्रैल | मई | जून 2022",
      link: "/assets/pdfs/RTI-Report-Apr-May-June-2022.pdf",
    },
    { 
      sno: 14, 
      title: "Monthly & Quarterly Report - January 2022",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जनवरी 2022", 
      link: "/assets/pdfs/RTI-Report-January-2022.pdf" 
    },
    {
      sno: 15,
      title: "Monthly & Quarterly Report - October | December 2021",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अक्टूबर | दिसंबर 2021",
      link: "/assets/pdfs/RTI_Report_Oct-Dec_2021.pdf",
    },
    {
      sno: 16,
      title: "Monthly & Quarterly Report - July | September 2021",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जुलाई | सितंबर 2021",
      link: "/assets/pdfs/Monthly_Quarterly_Report_July_Sept_2021.pdf",
    },
    {
      sno: 17,
      title: "Monthly & Quarterly Report - June 2021",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जून 2021",
      link: "/assets/pdfs/Monthly_Quarterly_Report_June_2021.pdf",
    },
    {
      sno: 18,
      title: "Monthly & Quarterly Report - January | March 2021",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जनवरी | मार्च 2021",
      link: "/assets/pdfs/Monthly_Quarterly_Report_March_2021.pdf",
    },
    {
      sno: 19,
      title: "Monthly & Quarterly Report - December 2020 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - दिसंबर 2020 - अनुलग्नक-I",
      link: "/assets/pdfs/MonthlyQuarterlyReport_December_2020.pdf",
    },
    {
      sno: 20,
      title: "Monthly & Quarterly Report - September 2020 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - सितंबर 2020 - अनुलग्नक-I",
      link: "/assets/pdfs/MonthlyQuarterlyReport_September_2020.pdf",
    },
    {
      sno: 21,
      title: "Monthly & Quarterly Report - June 2020 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जून 2020 - अनुलग्नक-I",
      link: "/assets/pdfs/MonthlyQuarterlyReport_June_2020.pdf",
    },
    {
      sno: 22,
      title: "Monthly & Quarterly Report - March 2020 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - मार्च 2020 - अनुलग्नक-I",
      link: "/assets/pdfs/MonthlyQuarterlyReport_March_2020.pdf",
    },
    {
      sno: 23,
      title: "Monthly & Quarterly Report - February 2020 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - फरवरी 2020 - अनुलग्नक-I",
      link: "/assets/pdfs/Report_RTI_Feb_2020.pdf",
    },
    {
      sno: 24,
      title: "Monthly & Quarterly Report - December 2019 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - दिसंबर 2019 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-December-2019.pdf",
    },
    {
      sno: 25,
      title: "Monthly & Quarterly Report - August 2019 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अगस्त 2019 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-Aug-2019.pdf",
    },
    {
      sno: 26,
      title: "Monthly & Quarterly Report - July 2019 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जुलाई 2019 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-July-2019.pdf",
    },
    {
      sno: 27,
      title: "Monthly & Quarterly Report - June 2019 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जून 2019 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-June-2019.pdf",
    },
    {
      sno: 28,
      title: "Monthly & Quarterly Report - May - 2019 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - मई - 2019 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-May-2019.pdf",
    },
    {
      sno: 29,
      title: "Monthly & Quarterly Report - April 2019 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अप्रैल 2019 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-April-2019.pdf",
    },
    {
      sno: 30,
      title: "Monthly & Quarterly Report - March 2019 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - मार्च 2019 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-March-2019.pdf",
    },
    {
      sno: 31,
      title: "Monthly & Quarterly Report - February 2019 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - फरवरी 2019 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-Feb-2019.pdf",
    },
    {
      sno: 32,
      title: "Monthly & Quarterly Report - January 2019 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जनवरी 2019 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-Jan-2019.pdf",
    },
    {
      sno: 33,
      title: "Monthly & Quarterly Report - December 2018 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - दिसंबर 2018 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-Dec-2018.pdf",
    },
    {
      sno: 34,
      title: "Monthly & Quarterly Report - November 2018 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - नवंबर 2018 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-Nov-2018.pdf",
    },
    {
      sno: 35,
      title: "Monthly & Quarterly Report - October 2018 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अक्टूबर 2018 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-Oct-2018.pdf",
    },
    {
      sno: 36,
      title: "Monthly & Quarterly Report - September 2018 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - सितंबर 2018 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-Sep-2018.pdf",
    },
    {
      sno: 37,
      title: "Monthly & Quarterly Report - August 2018 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अगस्त 2018 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-Aug-2018.pdf",
    },
    {
      sno: 38,
      title: "Monthly & Quarterly Report - July 2018 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जुलाई 2018 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-July-2018.pdf",
    },
    {
      sno: 40,
      title: "Monthly & Quarterly Report - June 2018 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - जून 2018 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-June-2018.pdf",
    },
    {
      sno: 41,
      title: "Monthly & Quarterly Report - May 2018 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - मई 2018 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-May-2018.pdf",
    },
    {
      sno: 42,
      title: "Monthly & Quarterly Report - April 2018 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अप्रैल 2018 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-April-2018.pdf",
    },
    {
      sno: 43,
      title: "Monthly & Quarterly Report - March 2018 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - मार्च 2018 - अनुलग्नक-I",
      link: "/assets/pdfs/Report-RTI-March-2018.pdf",
    },
    { 
      sno: 44, 
      title: "Monthly & Quarterly Report - February 2018 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - फरवरी 2018 - अनुलग्नक-I",
      link: "/assets/pdfs/RTI_Feb2018.pdf" 
    },
    {
      sno: 45,
      title: "Monthly & Quarterly Report - December 2017 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - दिसंबर 2017 - अनुलग्नक-I",
      link: "/assets/pdfs/RTI_Report_Dec_2017.pdf",
    },
    {
      sno: 46,
      title: "Monthly & Quarterly Report - November 2017 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - नवंबर 2017 - अनुलग्नक-I",
      link: "/assets/pdfs/RTI_Report_Nov_2017.pdf",
    },
    {
      sno: 47,
      title: "Monthly & Quarterly Report - September 2017 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - सितंबर 2017 - अनुलग्नक-I",
      link: "/assets/pdfs/RTI_Report_Sep_2017.pdf",
    },
    {
      sno: 48,
      title: "Monthly & Quarterly Report - August 2017 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अगस्त 2017 - अनुलग्नक-I",
      link: "/assets/pdfs/RTI_Report_Aug_2017.pdf",
    },
    {
      sno: 49,
      title: "Monthly & Quarterly Report - May 2017 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - मई 2017 - अनुलग्नक-I",
      link: "/assets/pdfs/RTI_Report_May_2017.pdf",
    },
    {
      sno: 50,
      title: "Monthly & Quarterly Report - April 2017 - Annexure-I",
      titleHi: "मासिक और त्रैमासिक रिपोर्ट - अप्रैल 2017 - अनुलग्नक-I",
      link: "/assets/pdfs/RTI_Report_April_2017.pdf",
    },
  ]

  // Function to filter data based on selected year
  const getFilteredData = () => {
    if (selectedYear === "All" || selectedYear === "सभी") {
      return RtiData
    }

    if (selectedYear === "2021 & Below" || selectedYear === "2021 और नीचे") {
      return RtiData.filter((item) => {
        const year = extractYearFromTitle(item.title)
        return year <= 2021
      })
    }

    return RtiData.filter((item) => {
      const year = extractYearFromTitle(item.title)
      return year.toString() === selectedYear
    })
  }

  // Helper function to extract year from title
  const extractYearFromTitle = (title) => {
    const yearMatch = title.match(/(\d{4})/)
    if (yearMatch) {
      return Number.parseInt(yearMatch[1])
    }
    return 0
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Main Title */}
      <h1 className="text-4xl font-bold text-[#62402A] mb-8">{currentContent.title}</h1>

      {/* Application Fee Section */}
      <Card className="mb-8 border-green-200">
        <div
          className="flex items-center justify-between p-4 cursor-pointer bg-green-50 hover:bg-green-100 transition-colors"
          onClick={() => setIsApplicationFeeOpen(!isApplicationFeeOpen)}
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">₹</span>
            </div>
            <h2 className="text-lg font-semibold text-green-700">{currentContent.applicationFeeTitle}</h2>
          </div>
          {isApplicationFeeOpen ? (
            <ChevronUp className="w-5 h-5 text-green-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-green-600" />
          )}
        </div>

        {isApplicationFeeOpen && (
          <CardContent className="pt-4">
            <p className="text-gray-700 mb-4 text-justify">
              {currentContent.applicationFeeText}
            </p>
            <p className="font-semibold text-gray-800 text-justify">
              {currentContent.noFeeText}
            </p>
          </CardContent>
        )}
      </Card>

      {/* Introductory Paragraph */}
      <p className="text-gray-700 mb-8 leading-relaxed text-justify">
        {currentContent.introText}
      </p>

      {/* Year Filter Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 border-b border-gray-200">
          {currentContent.years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                selectedYear === year ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Results Counter */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 text-justify">
          {currentContent.showingText(getFilteredData().length, RtiData.length, selectedYear)}
        </p>
      </div>

      {/* Monthly and Quarterly Report Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{currentContent.reportsTitle}</h3>
      </div>

      {/* Schedule Table */}
      <ScheduleTable 
        title="" 
        titleHi=""
        rows={getFilteredData()} 
        lang={lang}
      />

      {/* Additional Links */}
      <div className="mt-8">
        <p className="text-lg font-regular text-blue-500 my-4 block text-justify">{currentContent.section4Title}</p>
        <a
          href="/assets/pdfs/application_form.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-regular text-blue-500 my-4 block hover:underline"
        >
          {currentContent.formsTitle}
        </a>
        <a
          href="/assets/pdfs/Reconstitution_of_RTI_Processing_Organization_07042025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-regular text-blue-500 mb-4 block hover:underline"
        >
          {currentContent.orgChartTitle}
        </a>
      </div>
    </div>
  )
}