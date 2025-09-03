import { ssrFetch } from "@/lib/ssrFetch";
import DetailedGalleryView from "./Components/DetailedGalleryView";




export async function generateMetadata({ params }) {
  const { lang, Slug } = params;
  const isHindi = lang === 'hi';

  // Fetch the gallery item dynamically using the slug
  const { ImageGallery } = await ssrFetch([{
    endpoint: 'ImageGallery',
    query: { search: Slug, limit: 1 }
  }]);

  const item = ImageGallery?.data?.[0];

  if (!item) {
    return {
      title: isHindi ? "गैलरी आइटम नहीं मिला" : "Gallery Item Not Found",
      description: isHindi ? "अनुरोधित गैलरी आइटम उपलब्ध नहीं है।" : "The requested gallery item is not available.",
      openGraph: {
        title: isHindi ? "गैलरी आइटम नहीं मिला" : "Gallery Item Not Found",
        description: isHindi ? "अनुरोधित गैलरी आइटम उपलब्ध नहीं है।" : "The requested gallery item is not available.",
        type: "website"
      }
    };
  }

  return {
    title: isHindi ? item.HiName : item.EnName,
    description: isHindi ? item.HiName : item.EnName,
    keywords: item.keywords || (isHindi ? "गैलरी, NHDC, चित्र" : "gallery, NHDC, images"),
    openGraph: {
      title: isHindi ? item.title_hi || item.title_en : item.title_en,
      description: isHindi ? item.HiName : item.EnName,
      type: "website",
      images: [
        {
          url: item.image || '/assets/gallery-banner.jpg',
          alt: isHindi ? item.title_hi || item.title_en : item.title_en
        }
      ]
    }
  };
}



export default async function Page({ params }) {
  const { lang, Slug } = params;
  
  // Fetch only the specific slug data
  const { ImageGallery } = await ssrFetch([{
    endpoint: `ImageGallery`,
    query: {
      search: Slug,
      limit: 1
    }
  }]);

  if (!ImageGallery?.data?.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {lang === 'hi' ? 'गैलरी आइटम नहीं मिला' : 'Gallery item not found'}
      </div>
    );
  }

  return <DetailedGalleryView galleryItem={ImageGallery.data[0]} lang={lang} />;
}