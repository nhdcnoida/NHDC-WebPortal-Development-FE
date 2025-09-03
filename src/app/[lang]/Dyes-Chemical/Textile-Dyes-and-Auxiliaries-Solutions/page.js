import TextileDyesPage from "./TextileDyesPage";

export const metadata = {
  title: "Textile Dyes & Auxiliaries Solutions | NHDC",
  description: "Comprehensive range of textile dyes and auxiliaries including reactive, disperse, vat, and acid dyes. Compliant with international safety standards for garment processors and fabric manufacturers.",
  keywords: [
    "textile dyes",
    "dyeing auxiliaries",
    "reactive dyes",
    "disperse dyes",
    "vat dyes",
    "acid dyes",
    "fabric dyes",
    "dyeing chemicals",
    "textile processing",
    "color fastness solutions"
  ],
  openGraph: {
    title: "Premium Textile Dyes & Auxiliaries | NHDC Solutions",
    description: "Complete range of textile dyes and processing chemicals for garment and fabric manufacturers. Enhancing color fastness and processing efficiency.",
    url: "https://nhdc.org.in/en/Dyes-Chemical/Textile-Dyes-and-Auxiliaries-Solutions",
    images: [
      {
        url: "https://nhdc.org.in/NHDC.png",
        width: 1200,
        height: 630,
        alt: "NHDC Textile Dyes Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Textile Dyes & Auxiliaries Solutions | NHDC",
    images: ["https://nhdc.org.in/NHDC.png"],
  },
  alternates: {
    canonical: "https://nhdc.org.in/en/Dyes-Chemical/Textile-Dyes-and-Auxiliaries-Solutions",
    languages: {
      en: "https://nhdc.org.in/en/Dyes-Chemical/Textile-Dyes-and-Auxiliaries-Solutions",
      hi: "https://nhdc.org.in/hi/Dyes-Chemical/Textile-Dyes-and-Auxiliaries-Solutions",
    },
  },
};


const page = () => {
    return (
       <TextileDyesPage/>
    );
}

export default page;