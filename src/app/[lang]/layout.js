import LanguageSwitcher from "@/components/LanguageSwitcher";
import MainHeader from "./GlobalComp/Header/MainHeader";
import Footer from "./GlobalComp/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Roboto } from "next/font/google";
import { ssrFetch } from "@/lib/ssrFetch";
import SocialSidebar from "./GlobalComp/SocialSidebar";
import ExternalLinkWarning from "@/components/ExternalLinkWarning";
import TantuAi from "./GlobalComp/TantuAi";
import Breadcrumbs from "@/components/BreadCrumb";
import { RightSidebar } from "./GlobalComp/Rightsidebaar";
import PopUp from "./GlobalComp/PopUp";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const sanitizeLang = (input) => {
  const map = { eng: "en", hindi: "hi" };
  return map[input] || input;
};

// --- START: METADATA FUNCTION WITH CORRECT IMAGE URL LOGIC ---
export async function generateMetadata({ params }) {
  const { lang } = await params;
  const sanitizedLang = sanitizeLang(lang);
  const { AppSettings } = await ssrFetch(['AppSettings']);
  
  const settings = AppSettings?.data?.[0];
  if (!settings) {
    return {
      title: "National Handloom Development Corporation",
      description: "Official portal of NHDC.",
    };
  }

  const seoData = settings.seo || {};
  const contactData = settings.contactInfo || {};
  const siteUrl = seoData.canonicalUrl || 'https://nhdc.org.in';
  
  // --- UPDATED HELPER FUNCTION ---
  // Uses the correct storage base URL for all images.
  const createAbsoluteUrl = (path) => {
    if (!path || path.startsWith('http')) return path;
    const storageBaseUrl = 'https://storage.nhdc.org.in/nhdc';
    // Ensure there's no double slash between base and path
    const finalUrl = `${storageBaseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
    return finalUrl;
  };
  
  const socialMediaUrls = settings.socialMedia
    ?.filter(platform => platform.isActive && platform.url)
    .map(platform => platform.url) || [];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: sanitizedLang === 'hi'
          ? settings.appName?.HiName
          : settings.appName?.EnName,
        url: siteUrl,
        logo: createAbsoluteUrl(settings.appLogos?.[0]?.logoLink),
        sameAs: socialMediaUrls,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: contactData.phoneNumbers?.[0],
          contactType: 'Customer Service',
          email: contactData.email,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: sanitizedLang === 'hi'
            ? contactData.address?.HiName
            : contactData.address?.EnName,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: sanitizedLang === 'hi'
          ? settings.appName?.HiName
          : settings.appName?.EnName,
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return {
    title: sanitizedLang === 'hi' 
      ? seoData.metaTitle?.HiName || settings.appName?.HiName
      : seoData.metaTitle?.EnName || settings.appName?.EnName,
    
    description: sanitizedLang === 'hi'
      ? seoData.metaDescription?.HiName || settings.appDescription?.HiName
      : seoData.metaDescription?.EnName || settings.appDescription?.EnName,
    
    keywords: sanitizedLang === 'hi'
      ? seoData.metaKeywords?.HiName
      : seoData.metaKeywords?.EnName,
    
    openGraph: {
      title: sanitizedLang === 'hi'
        ? seoData.ogTitle?.HiName || settings.appName?.HiName
        : seoData.ogTitle?.EnName || settings.appName?.EnName,
      description: sanitizedLang === 'hi'
        ? seoData.ogDescription?.HiName || settings.appShortDescription?.HiName
        : seoData.ogDescription?.EnName || settings.appShortDescription?.EnName,
      images: [
        {
          url: createAbsoluteUrl(seoData.ogImage || settings.appLogos?.[0]?.logoLink),
          width: 1200,
          height: 630,
          alt: sanitizedLang === 'hi' 
            ? settings.appLogos?.[0]?.HiName
            : settings.appLogos?.[0]?.EnName,
        },
      ],
      locale: sanitizedLang === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
      url: siteUrl,
      siteName: sanitizedLang === 'hi'
        ? settings.appName?.HiName
        : settings.appName?.EnName,
    },
    
    twitter: {
      card: 'summary_large_image',
      title: sanitizedLang === 'hi'
        ? seoData.ogTitle?.HiName || settings.appName?.HiName
        : seoData.ogTitle?.EnName || settings.appName?.EnName,
      description: sanitizedLang === 'hi'
        ? seoData.ogDescription?.HiName || settings.appShortDescription?.HiName
        : seoData.ogDescription?.EnName || settings.appShortDescription?.EnName,
      images: [createAbsoluteUrl(seoData.ogImage || settings.appLogos?.[0]?.logoLink)],
    },
    
    alternates: {
      canonical: siteUrl,
      languages: {
        'en': `${siteUrl}/en`,
        'hi': `${siteUrl}/hi`,
      },
    },
    
    other: {
      'google-site-verification': settings.googleAnalyticsId,
      'facebook-domain-verification': settings.facebookPixelId,
      'application/ld+json': JSON.stringify(structuredData),
    },
  };
}
// --- END: METADATA FUNCTION ---

let externalWarningInitialized = false;

export default async function LangLayout({ children, params: paramsPromise }) {
  const { lang } = await paramsPromise;
  const sanitizedLang = sanitizeLang(lang);
  const { navigation, AppSettings, FooterData, UsefulLink } = await ssrFetch(['navigation', 'AppSettings', 'FooterData', 'UsefulLink']);
  
  const Footernew = FooterData?.data?.[0] || FooterData;
  const settings = AppSettings?.data?.[0] || AppSettings;

  const showExternalLinkWarning = !externalWarningInitialized;
  if (showExternalLinkWarning) {
    externalWarningInitialized = true;
  }

  return (
    <div lang={sanitizedLang} className={`${roboto.className} p-0 m-`}>
      <MainHeader navigation={navigation} AppSettings={settings} />
      <Breadcrumbs/>
      <SocialSidebar AppSettings={AppSettings} />
      {showExternalLinkWarning && <ExternalLinkWarning />}
      {children}
      <TantuAi />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5GSSGD1K0H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5GSSGD1K0H');
          `}
        </Script>
      <PopUp/>
      <Footer FooterData={Footernew} AppSettings={settings} UsefulLink={UsefulLink} />
    </div>
  );
}