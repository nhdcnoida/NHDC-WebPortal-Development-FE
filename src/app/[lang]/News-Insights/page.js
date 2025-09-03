
import { ssrFetch } from "@/lib/ssrFetch";
import NewsInsightpage from "./component/NewsInsightpage";

export default async function Page({ searchParams }) {
 const page = parseInt(await searchParams.page ?? '1', 1);
  const limit = parseInt( await searchParams.limit ?? '20', 10); // Default to 20 items per page
  
  const { News } = await ssrFetch([{
    endpoint: 'News',
    query: {
      page,
      limit,
      sort: '-uploadDate' // Sort by newest first
    }
  }]);

  return <NewsInsightpage Tender={News} currentPage={page} itemsPerPage={limit} />;
}