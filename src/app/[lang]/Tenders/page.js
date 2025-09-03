import TendersPage from "./components/TendersPage";
import { ssrFetch } from "@/lib/ssrFetch";




export async function generateMetadata({ params }) {
   const { lang } = await params;
  const isHindi = lang === 'hi';

  return {
    title: isHindi ? "NHDC - निविदाएँ" : "NHDC - Tenders",
    description: isHindi
      ? "राष्ट्रीय हथकरघा विकास निगम (NHDC) में उपलब्ध नवीनतम निविदाएँ और खरीद संबंधी सूचना।"
      : "Latest tenders and procurement notices available at National Handloom Development Corporation (NHDC).",
    keywords: isHindi
      ? "NHDC, निविदाएँ, खरीद, सार्वजनिक सूचना, टेंडर"
      : "NHDC, tenders, procurement, public notice, bid",
    openGraph: {
      title: isHindi ? "NHDC - निविदाएँ" : "NHDC - Tenders",
      description: isHindi
        ? "NHDC में नवीनतम निविदाओं और खरीद संबंधित सूचनाओं की सूची।"
        : "List of latest tenders and procurement notices at NHDC.",
      type: "website",
      images: [
        {
          url: "/assets/tenders-banner.jpg",
          alt: isHindi ? "NHDC निविदाएँ" : "NHDC Tenders",
        },
      ],
    },
  };
}




export default async function Page({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const limit = parseInt(searchParams.limit) || 20; // Default to 10 items per page
  
  const { Tender } = await ssrFetch([{
    endpoint: 'Tender',
    query: {
      page,
      limit,
      sort: '-uploadDate' // Sort by newest first
    }
  }]);

  return <TendersPage Tender={Tender} currentPage={page} itemsPerPage={limit} />;
}