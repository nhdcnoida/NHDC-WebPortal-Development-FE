import ScheduleTable from "@/components/ScheduleTable";
import { ssrFetch } from "@/lib/ssrFetch";

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

export default async function Page({ params, searchParams }) {
  const { lang } = await params;
  const page = parseInt(searchParams.page) || 1;
  const limit = parseInt(searchParams.limit) || 20;
  
  const { Career } = await ssrFetch([{
    endpoint: 'Career',
    query: {
      page,
      limit,
      sort: '-uploadDate'
    }
  }]);

  // Transform API data to match ScheduleTable format
  const transformCareerData = (data, isArchive = false) => {
    return data
      .filter(item => item.isArchive === isArchive)
      .map((item, index) => {
        // Create actions array
        const actions = [];
        
        if (item.mainFileLink) {
          actions.push({
            type: "view",
            link: `https://storage.nhdc.org.in${item.mainFileLink}`,
            label: "View"
          });
        }
        
        // Check if there's an apply link (you might need to add this to your API)
        if (item.applyLink) {
          actions.push({
            type: "apply",
            link: item.applyLink,
            label: "Click here to Apply"
          });
        }
        
        // Create links array for subfiles
        const links = item.subFileLinks ? item.subFileLinks.map(subFile => ({
          text: subFile.EnName || "Download",
          url: `https://storage.nhdc.org.in${subFile.link}`
        })) : [];
        
        return {
          sno: index + 1,
          title: lang === 'hi' ? item.HiName || item.EnName : item.EnName,
          titleHi: item.HiName,
          isNew: item.isNew,
          date: new Date(item.uploadDate).toLocaleDateString('en-IN'),
          links: links,
          actions: actions
        };
      });
  };

  const currentOpenings = transformCareerData(Career?.data || [], false);
  const archivedOpenings = transformCareerData(Career?.data || [], true);

  return (
    <div style={{ paddingLeft: "20px", paddingRight: "20px", fontFamily: "Arial, sans-serif" }}>
      <ScheduleTable 
        title="Current Openings" 
        titleHi="वर्तमान रिक्तियाँ"
        rows={currentOpenings} 
        showDate={true} 
        lang={lang}
      />
      
      {archivedOpenings.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <ScheduleTable 
            title="Archived Openings" 
            titleHi="पुरानी रिक्तियाँ"
            rows={archivedOpenings} 
            showDate={true} 
            lang={lang}
          />
        </div>
      )}
    </div>
  );
}