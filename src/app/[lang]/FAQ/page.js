

// app/faq/page.js
import FAQPage from './component/faqpage'
import { ssrFetch } from "@/lib/ssrFetch";

export default async function Page({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const limit = parseInt(searchParams.limit) || 40;
  
  const { FAQ } = await ssrFetch([{
    endpoint: 'FAQ',
    query: {
      page,
      limit,
      sort: 'displayOrder' // Sort by displayOrder
    }
  }]);

  return <FAQPage FAQ={FAQ} currentPage={page} itemsPerPage={limit} />;
}