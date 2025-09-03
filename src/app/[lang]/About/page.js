import AboutUsPage from "./component/AboutUsPage";

export const metadata = {
  title: "About Us - National Handloom Development Corporation",
  description:
    "Learn about NHDC, a Government of India enterprise under the Ministry of Textiles dedicated to handloom development since 1983.", // ✅ meta description
  keywords: [
    "handloom",
    "NHDC",
    "textiles ministry",
    "government enterprise",
    "handloom development",
    "Indian handloom",
    "weaving",
    "textile corporation",
  ],
  alternates: {
    canonical: "https://nhdc.org.in/en/About", // ✅ canonical link
    languages: {
      en: "https://nhdc.org.in/en/About",
      hi: "https://nhdc.org.in/hi/About", // ✅ hreflang
    },
  },
  openGraph: {
    title: "About NHDC - National Handloom Development Corporation",
    description:
      "Government of India enterprise promoting the handloom sector since 1983",
    url: "https://nhdc.org.in/en/About",
    siteName: "NHDC",
    images: [
      {
        url: "https://nhdc.org.in/og-about-us.jpg",
        width: 1200,
        height: 630,
        alt: "NHDC Head Office",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About NHDC - National Handloom Development Corporation",
    description:
      "Government of India enterprise promoting the handloom sector since 1983",
    images: ["https://nhdc.org.in/NHDC.png"],
  },
};

export default function Page() {
  return (
    <main>
      <AboutUsPage />
    </main>
  );
}
  