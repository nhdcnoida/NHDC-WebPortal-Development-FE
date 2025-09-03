



import ScheduleTable from "@/components/ScheduleTable"


const sampleData = [
  {
    sno: 1,
    title: "Applications are Invited for Finance & Accounts Officials on Contract Basis - Dated: 31.08.2025",
    isNew: true,
    actions: [{ type: "view", link: "https://storage.nhdc.org.in/nhdc/public/Career/Sr.%20Officer%20Finance%20Advt%20for%20website.pdf", label: "View" }],
  },

  {
    sno: 2,
    title: "Applications are Invited for Finance & Accounts Officials on Contract Basis - Dated: 25.08.2025",
    isNew: true,
    links: [
      { text: "Corrigendum 1", url: "https://storage.nhdc.org.in/nhdc/public/Career/Officer%20Finance%20Corrigendum.pdf" }
    ],
    actions: [{ type: "view", link: "https://storage.nhdc.org.in/nhdc/public/Career/Finance%20officer%20Advt%20for%20Website.pdf", label: "View" }],
  },
  {
    sno: 3,
    title: "Written Test & Group Discussion for the post of Assistant Manager (F&A) - Dated: 02.08.2025",
    isNew: true,
     links: [
      { text: "Result", url: "https://storage.nhdc.org.in/nhdc/public/News/1756729693151-Website%20result%20AM%20(F&A).pdf" }
    ],
    actions: [{ type: "view", link: "/assets/pdfs/Shortlisted_candidates_list_for_website_AM.pdf", label: "View" }],
  },
   {
    sno: 4,
    title: "Advertisement Cancellation Notice for the post of Jr.Officer - Office Order No. 569 - Dated: 14.07.2025",
    
    actions: [{ type: "view", link: "/assets/pdfs/Advt-Cancellation-Notice-Jr.-Officer-Post.pdf", label: "View" }],
  },
  {
    sno: 5,
    title: "Corrigendum-I for Post of Junior Officer - 08 (06 UR, 01 ST, 01 EWS Category)",
    
    actions: [{ type: "view", link: "/assets/pdfs/Corrigendum_Jr_Officer_Advt_Dt_03052025.pdf", label: "View" }],
  },
  {
    sno: 6,
    title: "Post for the Junior Officer - 08 (06 UR, 01 ST, 01 EWS Category)",
     
    actions: [
      { type: "viewAdvertisement", link: "/assets/pdfs/Jr-Officer-Advt-03-05-2025.pdf", label: "View Advertisement" },
      { type: "apply", link: "https://nhdc.org.in/ApplicationLogin.aspx?pid=67&advid=27", label: "Click here to Apply" },
    ],
  },
  {
    sno: 7,
    title: "Result - Engagement of Officer on Special Duty (OSD) on Fixed Term Basis",
     
    actions: [{ type: "view", link: "/assets/pdfs/Result_Engagement_of_Officer_Special_Duty_Fixed_Term_Basis_25042025.pdf", label: "View" }],
  },
  {
    sno: 8,
    title:
      "Expression of Interest for Empanelment of Sr. Advocates / Advocates on Contract basis in NHDC\n\nAdvertisement No. NHDC/HR/DR-C/Legal/2025/03\n\nSubmission Start Date: 19.04.2025\n\nSubmission End Date: 16.05.2025",
    
      actions: [{ type: "view", link: "/assets/pdfs/EOI-NHDC-HR-DR-C-Legal-2025-03.pdf", label: "View" }],
  },
 
  {
    sno: 9,
    title: "Corrigendum - Company Secretary - (01 UR Category) CS-FA/DR/25/1/01 - Advt. Date 15.03.2025",
    actions: [{ type: "view", link: "/assets/pdfs/Corrigendum-Company-Secretary-CS-FADR25101-15032025.pdf", label: "View" }],
  },
  {
    sno: 10,
    title: "Cancellation Notice Advertisement No. NHDC/HR/RE/24/3 Dated: 10.08.2025 Post for Company Secretary",
    actions: [{ type: "view", link: "/assets/pdfs/Cancellation_Notice_NHDCHRRE243_Company_Secretary.pdf", label: "View" }],
  },
  {
    sno: 11,
    title: "Grievance Mechanism",

    actions: [{ type: "view", link: "/assets/pdfs/Grievance_Mechanism.pdf", label: "View" }],
  },
  {
    sno: 12,
    title: "Refund & Cancellation Guidelines",
    actions: [{ type: "view", link: "/assets/pdfs/Refund_Cancellation_Guidelines.pdf", label: "View" }],
  },
]



export async function generateMetadata({ params }) {
   const { lang } = await params;
  const isHindi = lang === 'hi';

  return {
    title: isHindi ? "NHDC - करियर और वर्तमान भर्तियाँ" : "NHDC - Careers & Current Openings",
    description: isHindi
      ? "राष्ट्रीय हथकरघा विकास निगम (NHDC) में उपलब्ध वर्तमान रिक्त पदों और रोजगार अवसरों की जानकारी। आवेदन प्रक्रिया और आवश्यक दस्तावेज।"
      : "Explore current job openings and career opportunities at National Handloom Development Corporation (NHDC) with details on application process and required documents.",
    keywords: isHindi
      ? "NHDC, करियर, नौकरी, वर्तमान भर्तियाँ, आवेदन, रोजगार अवसर"
      : "NHDC, career, jobs, current openings, application, employment opportunities",
    openGraph: {
      title: isHindi ? "NHDC - करियर और वर्तमान भर्तियाँ" : "NHDC - Careers & Current Openings",
      description: isHindi
        ? "एनएचडीसी में उपलब्ध वर्तमान रिक्त पदों और अवसरों की जानकारी।"
        : "Current job openings and opportunities at NHDC.",
      type: "website",
      images: [
        {
          url: "/assets/career-banner.jpg",
          alt: isHindi ? "NHDC करियर" : "NHDC Career",
        },
      ],
    },
  };
}

const page = () => {
  return (
    <div style={{ paddingLeft: "20px", paddingRight:"20px", fontFamily: "Arial, sans-serif" }}>
      <ScheduleTable title="Current Openings" rows={sampleData} showDate={false} />
    </div>
  );
};

export default page;


