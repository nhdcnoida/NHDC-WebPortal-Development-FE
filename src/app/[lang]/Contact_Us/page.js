// app/[lang]/contact/page.jsx
import Contact from './Contact';

export async function generateMetadata({ params }) {
  const lang = await params?.lang || 'en'; // Fallback in case lang is missing
  const isHindi = lang === 'hi';

  const title = isHindi ? 'NHDC - संपर्क करें' : 'NHDC - Contact Us';
  const description = isHindi
    ? 'राष्ट्रीय हथकरघा विकास निगम (NHDC) से संपर्क करें। आपके प्रश्न, सुझाव और जानकारी के लिए हम उपलब्ध हैं।'
    : 'Get in touch with National Handloom Development Corporation (NHDC). We are available for your queries, suggestions, and information.';

  const keywords = isHindi
    ? 'NHDC, संपर्क करें, हथकरघा, जानकारी, सहायता, फीडबैक'
    : 'NHDC, Contact Us, Handloom, Information, Support, Feedback';

  return {
    title,
    description, // Ensure a proper description is returned here
    keywords,
    openGraph: {
      title,
      description,
      url: `https://nhdc.org.in/${lang}/contact`,
      type: 'website',
      images: [
        {
          url: 'https://nhdc.org.in/assets/contact-banner.jpg',
          width: 1200,
          height: 630,
          alt: isHindi ? 'एनएचडीसी संपर्क बैनर' : 'NHDC Contact Banner',
        },
      ],
    },
    alternates: {
      canonical: `https://nhdc.org.in/${lang}/contact`,
    },
    other: {
      'application/ld+json': JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": title,
        "description": description,
        "url": `https://nhdc.org.in/${lang}/contact`,
        "publisher": {
          "@type": "Organization",
          "name": "National Handloom Development Corporation",
          "url": "https://nhdc.org.in",
          "logo": {
            "@type": "ImageObject",
            "url": "https://nhdc.org.in/assets/images/logo.png",
          },
        },
      }),
    },
  };
}

export default function Page() {
  return <Contact />;
}
