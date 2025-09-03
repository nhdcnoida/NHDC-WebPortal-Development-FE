// app/[lang]/career/page.js

import { ssrFetch } from "@/lib/ssrFetch";
import CareerClientPage from "./CareerClientPage";


export async function generateMetadata({ params }) {
  // Your metadata function remains the same, no changes needed here.
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

export default async function Page({ params, searchParams }) {
  const { lang } = params;

  // 1. Read state from URL search parameters
  const page = parseInt(searchParams.page) || 1;
  const limit = parseInt(searchParams.limit) || 10; // Let's use 10 for better pagination demo
  const showArchived = searchParams.show === 'archive';

  // 2. Fetch data based on the state (current or archived)
  const { Career } = await ssrFetch([{
    endpoint: 'Career',
    query: {
      page,
      limit,
      sort: '-uploadDate',
      isArchive: showArchived // <-- This tells the API to filter for us
    }
  }]);

  // 3. Transform the fetched data
  const transformCareerData = (data) => {
    return data.map((item, index) => {
      const actions = [];
      if (item.mainFileLink) {
        actions.push({
          type: "view",
          link: `${process.env.NEXT_PUBLIC_STORAGE}${item.mainFileLink}`,
          label: "View"
        });
      }
      if (item.applyLink) {
        actions.push({
          type: "apply",
          link: item.applyLink,
          label: "Click here to Apply"
        });
      }
      const links = item.subFileLinks ? item.subFileLinks.map(subFile => ({
        text: lang === 'hi' ? subFile.HiName || subFile.EnName : subFile.EnName,
        url: `${process.env.NEXT_PUBLIC_STORAGE}${subFile.link}`
      })) : [];
      
      return {
        // Calculate sno based on page and limit for consistent numbering
        sno: (page - 1) * limit + index + 1,
        title: lang === 'hi' ? item.HiName || item.EnName : item.EnName,
        isNew: item.isNew,
        // date: new Date(item.uploadDate).toLocaleDateString('en-IN'),
        links: links,
        actions: actions
      };
    });
  };

  const tableRows = transformCareerData(Career?.data || []);
  const paginationData = Career?.pagination;

  // 4. Render the Client Component with the fetched data
  return (
    <CareerClientPage
      lang={lang}
      initialRows={tableRows}
      pagination={paginationData}
      showArchived={showArchived}
    />
  );
}