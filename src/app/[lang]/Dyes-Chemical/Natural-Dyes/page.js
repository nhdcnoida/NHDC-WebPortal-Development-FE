import NaturalDyesPage from "./Natural";


export const metadata = {
  title: "Natural Dyes & Sustainable Color Solutions | NHDC",
  description: "Discover NHDC's premium plant-based natural dyes - eco-friendly, GOTS & ZDHC certified alternatives to synthetic dyes. Perfect for sustainable textile production.",
  keywords: [
    "natural dyes",
    "eco-friendly dyes",
    "plant-based colors",
    "sustainable textile dyes",
    "GOTS certified dyes",
    "ZDHC compliant dyes",
    "organic fabric dyes",
    "Ama Herbal dyes",
    "Sodhani Biotech",
    "non-toxic textile colors"
  ],
  openGraph: {
    title: "Sustainable Natural Dyes by NHDC | Eco-Friendly Textile Solutions",
    description: "Premium plant-based dyes for sustainable textile production. Certified by GOTS and ZDHC standards. Partnered with Ama Herbal & Sodhani Biotech.",
    url: "https://nhdc.org.in/en/Dyes-Chemical/Natural-Dye",
    siteName: "NHDC",
    images: [
      {
        url: "https://nhdc.org.in/NHDC.png",
        width: 1200,
        height: 630,
        alt: "NHDC Natural Dyes Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainable Natural Dyes by NHDC",
    description: "Eco-friendly plant-based dyes for textile industry. GOTS & ZDHC certified. Partnered with industry leaders.",
    images: ["https://nhdc.org.in/NHDC.png"],
  },
  alternates: {
    canonical: "https://nhdc.org.in/en/Dyes-Chemical/Natural-Dye",
    languages: {
      en: "https://nhdc.org.in/en/Dyes-Chemical/Natural-Dye",
      hi: "https://nhdc.org.in/hi/Dyes-Chemical/Natural-Dye",
    },
  },
};

export default function Page() {
  return <NaturalDyesPage />;
}