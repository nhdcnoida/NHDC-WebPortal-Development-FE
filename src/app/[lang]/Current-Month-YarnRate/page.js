import YarnRatePage from "./component/YarnRatePage";
import { ssrFetch } from "@/lib/ssrFetch";

const sanitizeLang = (input) => {
  const map = { eng: "en", hindi: "hi" };
  return map[input] || input;
};

export async function generateMetadata({ params }) {
   const { lang } = await params;
  const sanitizedLang = sanitizeLang(lang);
  
  // Fetch both settings and yarn rates data in parallel
  const [{ AppSettings }, yarnRatesData] = await Promise.all([
    ssrFetch(['AppSettings']),
    fetch(`${process.env.NEXT_PUBLIC_Backe}/api/yarn-rates`, {
      headers: {
        'public-x-token': process.env.NEXT_PUBLIC_TOKEN,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    }).then(res => res.ok ? res.json() : { data: [] })
  ]);

  const settings = AppSettings?.data?.[0] || AppSettings;
  const latestYarnRate = yarnRatesData.data?.[0];
  
  // Get effective date in appropriate locale
  const effectiveDate = latestYarnRate?.EffectiveDateMonth 
    ? new Date(latestYarnRate.EffectiveDateMonth).toLocaleDateString(
        sanitizedLang === 'hi' ? 'hi-IN' : 'en-US',
        { year: 'numeric', month: 'long', day: 'numeric' }
      )
    : '';

  // Base metadata from settings
  const baseMetadata = {
    title: {
      HiName: settings.appName?.HiName || "राष्ट्रीय हथकरघा विकास निगम",
      EnName: settings.appName?.EnName || "National Handloom Development Corporation"
    },
    description: {
      HiName: settings.appDescription?.HiName || "एनएचडीसी का आधिकारिक पोर्टल",
      EnName: settings.appDescription?.EnName || "Official portal of NHDC"
    }
  };

  // Yarn rate specific metadata
  const yarnRateMetadata = {
    title: {
      HiName: `यार्न दर ${effectiveDate ? `(${effectiveDate})` : ''}`,
      EnName: `Yarn Rates ${effectiveDate ? `(${effectiveDate})` : ''}`
    },
    description: {
      HiName: `वर्तमान यार्न दरें और ऐतिहासिक डेटा। ${effectiveDate ? `${effectiveDate} तक प्रभावी` : ''}। पीडीएफ डाउनलोड करें।`,
      EnName: `Current yarn rates and historical data. ${effectiveDate ? `Effective ${effectiveDate}` : ''}. Download PDF.`
    },
    keywords: {
      HiName: "यार्न दर, यार्न मूल्य, सूत दर, कपास यार्न, सिंथेटिक यार्न, वर्तमान यार्न दरें",
      EnName: "yarn rate, yarn price, cotton yarn, synthetic yarn, current yarn rates, yarn price list"
    }
  };

  return {
    title: sanitizedLang === 'hi'
      ? `${yarnRateMetadata.title.HiName} | ${baseMetadata.title.HiName}`
      : `${yarnRateMetadata.title.EnName} | ${baseMetadata.title.EnName}`,
    
    description: sanitizedLang === 'hi'
      ? yarnRateMetadata.description.HiName
      : yarnRateMetadata.description.EnName,
    
    keywords: sanitizedLang === 'hi'
      ? yarnRateMetadata.keywords.HiName
      : yarnRateMetadata.keywords.EnName,
    
    alternates: {
      canonical: '/yarn-rates',
      languages: {
        'en': '/en/yarn-rates',
        'hi': '/hi/yarn-rates'
      },
    },
    
    openGraph: {
      title: sanitizedLang === 'hi'
        ? yarnRateMetadata.title.HiName
        : yarnRateMetadata.title.EnName,
      
      description: sanitizedLang === 'hi'
        ? yarnRateMetadata.description.HiName
        : yarnRateMetadata.description.EnName,
      
      url: '/yarn-rates',
      siteName: sanitizedLang === 'hi'
        ? baseMetadata.title.HiName
        : baseMetadata.title.EnName,
      
      images: [
        {
          url: settings.appLogos?.[0]?.logoLink || '/default-og-image.jpg',
          width: 1200,
          height: 630,
          alt: sanitizedLang === 'hi'
            ? settings.appLogos?.[0]?.HiName || "यार्न दर"
            : settings.appLogos?.[0]?.EnName || "Yarn Rates",
        },
      ],
      locale: sanitizedLang === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: sanitizedLang === 'hi'
        ? yarnRateMetadata.title.HiName
        : yarnRateMetadata.title.EnName,
      
      description: sanitizedLang === 'hi'
        ? yarnRateMetadata.description.HiName
        : yarnRateMetadata.description.EnName,
      
      images: [settings.appLogos?.[0]?.logoLink || '/default-twitter-image.jpg'],
    },
  };
}

async function getYarnRatesData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_Backe}/api/yarn-rates`, {
    headers: {
      'public-x-token': process.env.NEXT_PUBLIC_TOKEN,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error("Failed to fetch yarn rates data");
  }

  return await res.json();
}

export default async function Page({ params }) {
   const { lang } = await params;
  const sanitizedLang = sanitizeLang(lang);
  const data = await getYarnRatesData();

  return (
    <div>
      <YarnRatePage yarnrates={data} lang={sanitizedLang} />
    </div>
  );
}