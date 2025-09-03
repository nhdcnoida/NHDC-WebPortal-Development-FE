// app/[lang]/events/[Slug]/page.js
import { ssrFetch } from "@/lib/ssrFetch";
import EventClient from './EventClient';

export async function generateMetadata({ params }) {
  const { lang, Slug } = await params;
  const { Eventtable } = await ssrFetch([`Eventtable?search=${Slug}`]);
  
  if (!Eventtable?.data?.length) {
    return {
      title: lang === 'hi' ? 'इवेंट नहीं मिला' : 'Event Not Found',
      description: lang === 'hi' ? 'यह इवेंट उपलब्ध नहीं है' : 'This event is not available',
    };
  }

  const firstItem = Eventtable.data[0];
  const title = lang === 'hi' ? firstItem?.HiName : firstItem?.EnName || 'Event';
  const description = lang === 'hi' 
    ? firstItem?.HiHtmlData?.replace(/<[^>]*>/g, '').substring(0, 160) 
    : firstItem?.HtmlData?.replace(/<[^>]*>/g, '').substring(0, 160) || 'Event details';

  const imageUrl = firstItem?.ImagesLink?.length > 0 
    ? `${process.env.NEXT_PUBLIC_STORAGE}${firstItem.ImagesLink[0].Link}`
    : null;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: imageUrl ? [{ url: imageUrl }] : [],
      locale: lang === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      languages: {
        'en': `/en/events/${Slug}`,
        'hi': `/hi/events/${Slug}`,
      },
    },
  };
}

const Page = async ({ params, searchParams }) => {
  const { lang, Slug } = await params;
  const { archive } = await searchParams;
  const { Eventtable } = await ssrFetch([`Eventtable?search=${Slug}`]);
  
  // Check if data is available
  if (!Eventtable?.data?.length) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl w-full font-bold mb-6 text-start text-[#62402A]">
          {lang === 'hi' ? 'डेटा उपलब्ध नहीं है' : 'Data not found for this event'}
        </h1>
        <p className="text-lg">
          {lang === 'hi' ? 'कृपया बाद में पुनः प्रयास करें' : 'Please try again later'}
        </p>
      </div>
    );
  }

  const firstItem = Eventtable.data[0];

  return (
    <EventClient 
      firstItem={firstItem} 
      lang={lang} 
      Slug={Slug} 
      archiveView={archive === 'true'} 
    />
  );
}

export default Page;