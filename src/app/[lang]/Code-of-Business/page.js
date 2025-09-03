"use client";

import { useParams } from "next/navigation";
import ScheduleTable from "@/components/ScheduleTable";

const Page = () => {
  const { lang } = useParams();
  const isHindi = lang === "hi";

  const policiesRows = [
    {
      sno: 1,
      title: isHindi
        ? "वरिष्ठ प्रबंधन और बोर्ड सदस्यों के लिए आचार संहिता"
        : "Code Business Conduct Ethics Board Members Senior Management",
      link: `${process.env.NEXT_PUBLIC_STORAGE}/public/Policies/Code_Business_Conduct_Ethics_Board_Members_Senior_Management.pdf`,
    },
    {
      sno: 2,
      title: isHindi ? "जोखिम प्रबंधन नीति" : "Risk Management Policy",
      link: `${process.env.NEXT_PUBLIC_STORAGE}/public/Policies/Risk_Management_Policy.pdf`,
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <ScheduleTable
        lang={lang}
        title={
          isHindi
            ? "व्यवसाय आचार संहिता एवं नीतियां"
            : "Code of Business Conduct & Ethics / Policies"
        }
        rows={policiesRows}
        columns={
          isHindi
            ? ["क्रम संख्या", "शीर्षक", "कार्रवाई"]
            : ["Sr. No.", "Title", "Action"]
        }
      />
    </div>
  );
};

export default Page;
