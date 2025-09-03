"use client"

import { useParams } from "next/navigation"
import ScheduleTable from "@/components/ScheduleTable"

export default function Page() {
  const { lang } = useParams()

  const isHindi = lang === "hi"

  const venueBookingRows = [
    {
      sno: 1,
      title: isHindi ? "संपर्क विवरण" : "Contact Details",
        link: `${process.env.NEXT_PUBLIC_STORAGE}/public/Uploads/Contact_Lucknow_05092023.pdf`,
    },
    {
      sno: 2,
      title: isHindi
        ? "शहीद पथ, गोमती नगर एक्सटेंशन, लखनऊ में NHDC प्रदर्शनी स्थल के आवंटन हेतु दिशानिर्देश"
        : "Guidelines for Allotment of NHDC Exhibition Ground at Shaheed Path, Gomti Nagar Extension, Lucknow",
        link: `${process.env.NEXT_PUBLIC_STORAGE}/public/Uploads/Guidelines_for_allotment_of_NHDC_Exhibition_Ground.pdf`,
    },
  ]

  return (
    <div className="md:px-8 px-4">
      <ScheduleTable
        title={isHindi ? "स्थल बुकिंग" : "Venue Booking"}
        rows={venueBookingRows}
        columns={
          isHindi
            ? ["क्रम संख्या", "शीर्षक", "कार्रवाई"]
            : ["Sr. No.", "Title", "Action"]
        }
        showDate={false}
      />
    </div>
  )
}
