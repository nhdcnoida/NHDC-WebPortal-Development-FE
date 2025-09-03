"use client"

import { useParams } from "next/navigation"
import ScheduleTable from "@/components/ScheduleTable"


const AnnualAccount = () => {
  const { lang } = useParams()
  const isHindi = lang === "hi"

  const annualAccountRows = [
    {
      sno: 1,
      title: isHindi ? "वार्षिक रिपोर्ट 2023-24" : "Annual Report 2023-24",
      link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/NHDC_Annual_Report_FY_2023-24.pdf`,
    },
    {
      sno: 2,
      title: isHindi ? "वार्षिक रिपोर्ट 2022-23" : "Annual Report 2022-23",
      link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/NHDC_Annual_Report_FY_2022-23.pdf`,
    },
    {
      sno: 3,
      title: isHindi ? "वार्षिक रिपोर्ट 2021-22" : "Annual Report 2021-22",
      link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/NHDC_Annual_Report_FY_2021-22.pdf`,
    },
    {
      sno: 4,
      title: isHindi ? "वार्षिक रिपोर्ट 2020-21" : "Annual Report 2020-21",
      link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/Annual_Report_2020-21.pdf`,
    },
    {
      sno: 5,
      title: isHindi ? "वार्षिक रिपोर्ट 2019-20" : "Annual Report 2019-20",
      link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/Annual_Report_FY_2019-20.pdf`,
    },
    {
      sno: 6,
      title: isHindi ? "वार्षिक रिपोर्ट 2018-19" : "Annual Report 2018-19",
      link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/Annual_Report_2018-19.pdf`,
    },
    {
      sno: 7,
      title: isHindi ? "वार्षिक रिपोर्ट 2017-18" : "Annual Report 2017-18",
      link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/NHDC-AnnualReport-2017-18.pdf`,
    },
    {
      sno: 8,
      title: isHindi ? "वार्षिक लेखा 2016-17" : "Annual Account 2016-17",
      actions: [
        {
          type: "view",
          label: isHindi ? "वार्षिक लेखा" : "Annual Account",
          link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/Annual-Accounts-2016-17.pdf`,
        },
        {
          type: "view",
          label: isHindi ? "वार्षिक रिपोर्ट" : "Annual Report",
          link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/NHDC_Annual_Report_2016_17_Website.pdf`,
        },
      ],
    },
    {
      sno: 9,
      title: isHindi ? "वार्षिक लेखा 2015-16" : "Annual Account 2015-16",
      actions: [
        {
          type: "view",
          label: isHindi ? "वार्षिक लेखा" : "Annual Account",
          link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/Annual%20Accounts%202015-16.pdf`,
        },
        {
          type: "view",
          label: isHindi ? "वार्षिक रिपोर्ट" : "Annual Report",
          link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/AnnualAccount/AnnualReport2015-16.pdf`,
        },
      ],
    },
    {
      sno: 10,
      title: isHindi ? "वार्षिक लेखा 2014-15" : "Annual Account 2014-15",
      link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/Annual%20Report%202014-2015%20(English)%20(1).pdf`,
    },
    {
      sno: 11,
      title: isHindi ? "वार्षिक लेखा 2013-14" : "Annual Account 2013-14",
      actions: [
        {
          type: "view",
          label: isHindi ? "वार्षिक लेखा" : "Annual Account",
          link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/Annual-Accounts-2013-14.pdf`,
        },
        {
          type: "view",
          label: isHindi ? "वार्षिक रिपोर्ट" : "Annual Report",
          link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/Annual%20Report%202013-14.pdf`,
        },
      ],
    },
    {
      sno: 12,
      title: isHindi ? "वार्षिक लेखा 2012-13" : "Annual Account 2012-13",
      actions: [
        {
          type: "view",
          label: isHindi ? "वार्षिक लेखा" : "Annual Account",
          link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/av.pdf`,
        },
        {
          type: "view",
          label: isHindi ? "वार्षिक रिपोर्ट" : "Annual Report",
          link: `${process.env.NEXT_PUBLIC_STORAGE}/public/AnnualAccount/Annual%20accounts%202012-13.pdf`,
        },
      ],
    },
  ]

  return (
    <div className="p-4 md:p-8">
      <ScheduleTable
      lang={lang}
        title={isHindi ? "वार्षिक लेखा" : "Annual Account"}
        rows={annualAccountRows}
        columns={isHindi ? ["क्रम संख्या", "शीर्षक", "कार्रवाई"] : ["Sr. No.", "Title", "Action"]}
      />
    </div>
  )
}

export default AnnualAccount
