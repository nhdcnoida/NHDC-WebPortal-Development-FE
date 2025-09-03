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
  // Using the second item in the array (index 1) as requested
  const previousYarnRate = yarnRatesData.data?.[1];
  
  // Get effective date in appropriate locale
  const effectiveDate = previousYarnRate?.EffectiveDateMonth 
    ? new Date(previousYarnRate.EffectiveDateMonth).toLocaleDateString(
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

  // Yarn rate specific metadata using the previous month's data
  const yarnRateMetadata = {
    title: {
      HiName: `पिछले महीने की यार्न दर ${effectiveDate ? `(${effectiveDate})` : ''}`,
      EnName: `Previous Month Yarn Rates ${effectiveDate ? `(${effectiveDate})` : ''}`
    },
    description: {
      HiName: `पिछले महीने की यार्न दरें और ऐतिहासिक डेटा। ${effectiveDate ? `${effectiveDate} को प्रभावी` : ''}। पीडीएफ डाउनलोड करें।`,
      EnName: `Previous month's yarn rates and historical data. ${effectiveDate ? `Effective ${effectiveDate}` : ''}. Download PDF.`
    },
    keywords: {
      HiName: "पिछले महीने की यार्न दर, यार्न मूल्य, सूत दर, कपास यार्न, सिंथेटिक यार्न",
      EnName: "previous month yarn rate, yarn price history, cotton yarn rates, synthetic yarn prices"
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
      canonical: '/yarn-rates/previous',
      languages: {
        'en': '/en/yarn-rates/previous',
        'hi': '/hi/yarn-rates/previous'
      },
    },
    
    openGraph: {
      title: sanitizedLang === 'hi'
        ? yarnRateMetadata.title.HiName
        : yarnRateMetadata.title.EnName,
      
      description: sanitizedLang === 'hi'
        ? yarnRateMetadata.description.HiName
        : yarnRateMetadata.description.EnName,
      
      url: '/yarn-rates/previous',
      siteName: sanitizedLang === 'hi'
        ? baseMetadata.title.HiName
        : baseMetadata.title.EnName,
      
      images: [
        {
          url: settings.appLogos?.[0]?.logoLink || '/default-og-image.jpg',
          width: 1200,
          height: 630,
          alt: sanitizedLang === 'hi'
            ? settings.appLogos?.[0]?.HiName || "पिछले महीने की यार्न दर"
            : settings.appLogos?.[0]?.EnName || "Previous Month Yarn Rates",
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