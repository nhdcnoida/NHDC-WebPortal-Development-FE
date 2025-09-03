import React from 'react'
import SitemapPage from './SiteMap'
import Head from 'next/head'

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "साइटमैप - एनएचडीसी"
      : "Sitemap - NHDC",
    description: isHindi
      ? "एनएचडीसी का साइटमैप उपयोगकर्ताओं को वेबसाइट पर उपलब्ध सभी महत्वपूर्ण अनुभागों और पृष्ठों तक आसानी से पहुंचने में मदद करता है।"
      : "The NHDC sitemap helps users easily navigate and access all important sections and pages of the website.",
    keywords: isHindi
      ? "एनएचडीसी, साइटमैप, वेबसाइट संरचना, नेविगेशन, लिंक, पृष्ठ"
      : "NHDC, Sitemap, Website Structure, Navigation, Links, Pages",
    openGraph: {
      title: isHindi
        ? "एनएचडीसी साइटमैप"
        : "NHDC Sitemap",
      description: isHindi
        ? "एनएचडीसी वेबसाइट पर उपलब्ध सभी प्रमुख अनुभागों और पृष्ठों की संरचना।"
        : "Structure of all major sections and pages available on the NHDC website.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png",
          alt: isHindi
            ? "एनएचडीसी साइटमैप"
            : "NHDC Sitemap",
        },
      ],
    },
  };
}

export default function Page() {
  return (
    <>
      <Head>
        <meta name="description" content="The NHDC sitemap helps users easily navigate and access all important sections and pages of the website." />
        <meta name="keywords" content="NHDC, Sitemap, Website Structure, Navigation, Links, Pages" />
        <meta property="og:title" content="NHDC Sitemap" />
        <meta property="og:description" content="Structure of all major sections and pages available on the NHDC website." />
        <meta property="og:image" content="https://nhdc.org.in/NHDC.png" />
      </Head>
      <SitemapPage />
    </>
  );
}
