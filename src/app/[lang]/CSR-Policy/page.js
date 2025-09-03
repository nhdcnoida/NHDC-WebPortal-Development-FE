import CSRPolicyDocument from "./CSRPolicy";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  return {
    title: isHindi 
      ? "एनएचडीसी CSR नीति | कॉर्पोरेट सामाजिक उत्तरदायित्व" 
      : "CSR Policy | NHDC Limited - Corporate Social Responsibility",
    description: isHindi
      ? "एनएचडीसी की CSR नीति सतत विकास, शिक्षा, स्वास्थ्य सेवा, कौशल विकास, सामुदायिक कल्याण और पर्यावरण संरक्षण पर केंद्रित है।"
      : "Read NHDC Limited’s CSR Policy focused on sustainable development, community welfare, education, healthcare, skill development, and environmental protection.",
    keywords: isHindi
      ? "एनएचडीसी, CSR नीति, कॉर्पोरेट सामाजिक उत्तरदायित्व, सामुदायिक विकास, स्वास्थ्य सेवा, शिक्षा, कौशल विकास, सतत विकास, पर्यावरण संरक्षण"
      : "CSR Policy, Corporate Social Responsibility, NHDC CSR, CSR Initiatives, Community Development, Healthcare, Education, Skill Development, Sustainable Growth, Environmental Protection",
    metadataBase: new URL("https://nhdc.org.in"),
    alternates: {
      canonical: isHindi
        ? "https://nhdc.org.in/hi/csr-policy"
        : "https://nhdc.org.in/en/csr-policy",
    },
    openGraph: {
      title: isHindi
        ? "एनएचडीसी CSR नीति | कॉर्पोरेट सामाजिक उत्तरदायित्व"
        : "CSR Policy | NHDC Limited - Corporate Social Responsibility",
      description: isHindi
        ? "एनएचडीसी की CSR नीति शिक्षा, स्वास्थ्य, कौशल विकास और सामुदायिक कल्याण के माध्यम से सतत विकास को बढ़ावा देती है।"
        : "NHDC’s CSR Policy emphasizes education, healthcare, skill development, community welfare, and sustainable development.",
      type: "website",
      url: isHindi
        ? "https://nhdc.org.in/hi/csr-policy"
        : "https://nhdc.org.in/en/csr-policy",
      images: [
        {
          url: "https://nhdc.org.in/assets/images/csr-policy-banner.jpg",
          alt: isHindi
            ? "एनएचडीसी CSR नीति"
            : "NHDC CSR Policy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isHindi
        ? "एनएचडीसी CSR नीति"
        : "NHDC CSR Policy",
      description: isHindi
        ? "एनएचडीसी की CSR नीति शिक्षा, स्वास्थ्य सेवा, कौशल विकास और पर्यावरण संरक्षण पर केंद्रित है।"
        : "NHDC’s CSR Policy focuses on education, healthcare, skill development, and environmental sustainability.",
      images: ["https://nhdc.org.in/assets/images/csr-policy-banner.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}


const page = () => {
  return (
   <CSRPolicyDocument/>
  );
}

export default page;