import Gallary from "./Components/Gallary";
import { ssrFetch } from "@/lib/ssrFetch";



export async function generateMetadata({ params }) {
   const { lang } = await params;
  const isHindi = lang === 'hi';

  return {
    title: isHindi ? "एनएचडीसी गैलरी" : "NHDC Gallery",
    description: isHindi
      ? "राष्ट्रीय हथकरघा विकास निगम (NHDC) की छवियों और कार्यक्रमों की गैलरी देखें। यहाँ NHDC की गतिविधियों, कार्यक्रमों और आउटरीच के चित्र उपलब्ध हैं।"
      : "Explore the National Handloom Development Corporation (NHDC) image gallery showcasing events, programs, and outreach activities.",
    keywords: isHindi
      ? "NHDC, गैलरी, छवियाँ, कार्यक्रम, आउटरीच, हथकरघा"
      : "NHDC, gallery, images, events, programs, outreach, handloom",
    openGraph: {
      title: isHindi ? "एनएचडीसी गैलरी" : "NHDC Gallery",
      description: isHindi
        ? "NHDC की गतिविधियों और कार्यक्रमों की छवियाँ।"
        : "Images of NHDC events and programs.",
      type: "website",
      images: [
        {
          url: "/assets/gallery-banner.jpg",
          alt: isHindi ? "NHDC गैलरी" : "NHDC Gallery",
        },
      ],
    },
  };
}


export default async function Page({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const limit = parseInt(searchParams.limit) || 20;
  
  const { ImageGallery } = await ssrFetch([{
    endpoint: 'ImageGallery',
    query: {
      page,
      limit,
      sort: 'displayOrder'
    }
  }]);

  return <Gallary ImageGallery={ImageGallery} currentPage={page} itemsPerPage={limit} />;
}