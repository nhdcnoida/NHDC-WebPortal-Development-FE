
import AnnualAccount from './AnnualAccount';

export async function generateMetadata({ params }) {
   const { lang } = await params;
  
  if (lang === 'hi') {
    return {
      title: "एनएचडीसी वार्षिक खाता - वित्तीय विवरण और पारदर्शिता",
      description: "एनएचडीसी का वार्षिक खाता, वित्तीय वर्ष के दौरान परियोजनाओं और गतिविधियों का संक्षिप्त विवरण प्रदान करता है।",
      keywords: "एनएचडीसी, वार्षिक खाता, वित्तीय विवरण, परियोजनाएं, रिपोर्ट, पारदर्शिता",
      openGraph: {
        title: "एनएचडीसी वार्षिक खाता - वित्तीय विवरण और पारदर्शिता",
        description: "वित्तीय वर्ष के दौरान एनएचडीसी की परियोजनाओं और गतिविधियों का सारांश।",
        type: "website",
      },
    };
  }

  return {
    title: "NHDC Annual Account - Financial Overview & Transparency",
    description: "NHDC's Annual Account provides a summary of projects and activities carried out during the financial year.",
    keywords: "NHDC, annual account, financial report, projects, transparency, yearly summary",
    openGraph: {
      title: "NHDC Annual Account - Financial Overview & Transparency",
      description: "Summary of NHDC's projects and activities during the financial year",
      type: "website",
    },
  };
}

const page = () => {
  return (
    <AnnualAccount/>
  );
}

export default page;
