"use client"

import { useParams } from "next/navigation"
import ScheduleTable from "@/components/ScheduleTable"

const Page = () => {
    const { lang } = useParams()
    const isHindi = lang === "hi"

    const vigilanceRows = [
        {
            sno: 1,
            title: isHindi ? "ई-प्रतिज्ञा" : "ePledge",
            link: "https://pledge.mygov.in/cvc/",
        },
        {
            sno: 2,
            title: isHindi ? "सतर्कता जागरूकता सप्ताह 2024" : "Vigilance Awareness Week 2024",
            link: `${process.env.NEXT_PUBLIC_STORAGE}/public/Vigilance/Vigilance-Awareness-Week-2024.pdf`,
        },
        {
            sno: 3,
            title: isHindi ? "सीवीसी दिशानिर्देश / परिपत्र" : "CVC Guidelines/Circulars",
            link: "https://cvc.gov.in/guidelines.html",
        },
        {
            sno: 4,
            title: isHindi ? "संपर्क करें" : "Contact us",
            link: `${lang}/Vigilance/Contact-us`,
        },
        {
            sno: 5,
            title: isHindi ? "सीवीसी की वेबसाइट पर शिकायत दर्ज करें , ईमेल या डाक द्वारा सीवीओ, एनएचडीसी को शिकायत भेजें" : "Complaints may be sent directly to CVO, NHDC by Post or by e-mail",
            actions: [
                {
                    type: "view",
                    label: `Chief Vigilance Officer,
National Handloom Corporation Limited,
A2-A5, Sector 2, Udyog Marg,
NOIDA-201301`,
                    link: "#",
                },
                {
                    type: "view",
                    label: isHindi
                        ? "cvo@nhdc.org.in "
                        : "cvo@nhdc.org.in",
                    link: "mailto:cvo@nhdc.org.in",
                },
                {
                    type: "view",
                    label: isHindi
                        ? "vigilance@nhdc.org.in "
                        : "vigilance@nhdc.org.in",
                    link: "mailto:vigilance@nhdc.org.in",
                },
            ],
        },
        {
            sno: 6,
            title: isHindi ? "व्हिसल ब्लोअर नीति" : "Whistle Blower Policy",
            link: `${lang}/Whistle-Blower-Policy`,
        },
        {
            sno: 7,
            title: isHindi ? "पीआईडीपीआई शिकायतें" : "PIDPI Complaints",
            link: "https://cvc.gov.in/pidpi.html",
        },
    ]

    return (
        <div className="p-4 md:p-8">
            <ScheduleTable
                lang={lang}
                title={isHindi ? "सतर्कता" : "Vigilance"}
                rows={vigilanceRows}
                columns={isHindi ? ["क्रम संख्या", "शीर्षक", "कार्रवाई"] : ["Sr. No.", "Title", "Action"]}
            />
        </div>
    )
}

export default Page
