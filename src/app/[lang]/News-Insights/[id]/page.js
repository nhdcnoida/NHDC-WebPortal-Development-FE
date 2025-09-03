// app/[lang]/News-Insights/[id]/page.jsx
import { FaCalendarAlt, FaArrowLeft, FaFilePdf } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getSuggestedNews(lang) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/News?limit=4&sort=-uploadDate`, {
    headers: {
      'public-x-token': process.env.NEXT_PUBLIC_TOKEN,
      'Content-Type': 'application/json',
    }
  });
  return await res.json();
}

// Helper function to check if a file is PDF
const isPDF = (fileLink) => {
  if (!fileLink) return false;
  return fileLink.toLowerCase().endsWith('.pdf');
};

export default async function Page({ params }) {
  const { lang, id } = params;

  // Fetch current article
  const articleRes = await fetch(`${process.env.NEXT_PUBLIC_API}/News/${id}`, {
    headers: {
      'public-x-token': process.env.NEXT_PUBLIC_TOKEN,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 } // Optional: Revalidate every 60 seconds
  });

  if (!articleRes.ok) return notFound();
  
  const { data: article } = await articleRes.json();
  if (!article) return notFound();

  // Check if any of the files are PDFs
  const hasMainPDF = isPDF(article.mainFileLink);
  const hasSubPDFs = article.subFiles?.some(file => isPDF(file.link));
  const hasPDFs = article.pdfs?.some(pdf => isPDF(pdf.link));
  const showPDFIcon = hasMainPDF || hasSubPDFs || hasPDFs;

  // Fetch suggested news
  const suggestedNews = await getSuggestedNews(lang);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button */}
      <div className="mb-6">
        <Link 
          href={`/${lang}/News-Insights`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft className="mr-2" />
          {lang === 'hi' ? "समाचार पर वापस जाएं" : "Back to News"}
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content - left side */}
        <div className="lg:w-2/3">
          {/* Article heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {lang === 'hi' ? article.HiName : article.EnName}
          </h1>

          {/* Upload date and PDF icon */}
          <div className="flex items-center text-gray-500 mb-6">
            <FaCalendarAlt className="mr-2" />
            <span>{formatDate(article.uploadDate)}</span>
            {showPDFIcon && (
              <span className="ml-4 text-red-500 flex items-center">
                <FaFilePdf className="mr-1" />
                <span>{lang === 'hi' ? "PDF उपलब्ध" : "PDF Available"}</span>
              </span>
            )}
          </div>

          {/* Article image or PDF placeholder */}
          <div className="w-full h-64 sm:h-96 relative rounded-lg overflow-hidden mb-6 bg-gray-200">
            {article.mainFileLink ? (
              isPDF(article.mainFileLink) ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-300 p-4">
                  <FaFilePdf className="text-red-500 text-6xl mb-4" />
                  <Link 
                    href={`${process.env.NEXT_PUBLIC_STORAGE}${article.mainFileLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {lang === 'hi' ? "PDF देखें" : "View PDF"}
                  </Link>
                </div>
              ) : (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STORAGE}${article.mainFileLink}`}
                  alt={lang === 'hi' ? article.HiName : article.EnName}
                  fill
                  className="object-cover"
                  priority
                />
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <span className="text-gray-500 text-lg">
                  {lang === 'hi' ? "कोई छवि उपलब्ध नहीं" : "No Image Available"}
                </span>
              </div>
            )}
          </div>

          {/* Article description */}
          <div className="prose max-w-none">
            <p className="whitespace-pre-line text-gray-700">
              {lang === 'hi' ? article.HiDescription : article.EnDescription}
            </p>
          </div>

          {/* PDF download links if available */}
          {(hasSubPDFs || hasPDFs) && (
            <div className="mt-8 border-t pt-6">
              <h3 className="font-bold text-lg mb-4">
                {lang === 'hi' ? "संलग्न फाइलें" : "Attached Files"}
              </h3>
              <div className="space-y-3">
                {hasMainPDF && (
                  <div>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_STORAGE}${article.mainFileLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <FaFilePdf className="mr-2 text-red-500" />
                      {lang === 'hi' ? "मुख्य फाइल" : "Main File"}
                    </Link>
                  </div>
                )}
                {article.subFiles?.map((file, index) => isPDF(file.link) && (
                  <div key={index}>
                    <Link 
                      href={`${process.env.NEXT_PUBLIC_STORAGE}${file.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <FaFilePdf className="mr-2 text-red-500" />
                      {lang === 'hi' ? `अतिरिक्त फाइल ${index + 1}` : `Additional File ${index + 1}`}
                    </Link>
                  </div>
                ))}
                {article.pdfs?.map((pdf, index) => isPDF(pdf.link) && (
                  <div key={index}>
                    <Link 
                      href={`${process.env.NEXT_PUBLIC_STORAGE}${pdf.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <FaFilePdf className="mr-2 text-red-500" />
                      {pdf.name || (lang === 'hi' ? `दस्तावेज़ ${index + 1}` : `Document ${index + 1}`)}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Suggested news - right side */}
        <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {lang === 'hi' ? "संबंधित समाचार" : "Suggested News"}
          </h2>

          <div className="space-y-6">
            {suggestedNews.data?.map((news) => (
              <Link 
                key={news._id} 
                href={`/${lang}/News-Insights/${news._id}`}
                className="block group"
              >
                <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                  {/* News image */}
                  <div className="w-full sm:w-1/3 lg:w-full h-40 relative rounded-lg overflow-hidden bg-gray-200">
                    {news.mainFileLink ? (
                      isPDF(news.mainFileLink) ? (
                        <div className="w-full h-full flex items-center justify-center bg-gray-300">
                          <FaFilePdf className="text-red-500 text-4xl" />
                        </div>
                      ) : (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_STORAGE}${news.mainFileLink}`}
                          alt={lang === 'hi' ? news.HiName : news.EnName}
                          fill
                          className="object-cover group-hover:opacity-90 transition"
                        />
                      )
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <span className="text-gray-500 text-sm">
                          {lang === 'hi' ? "कोई छवि नहीं" : "No Image"}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* News content */}
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition">
                      {lang === 'hi' ? news.HiName : news.EnName}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {formatDate(news.uploadDate)}
                    </p>
                    {isPDF(news.mainFileLink) && (
                      <span className="inline-flex items-center text-xs text-red-500 mt-1">
                        <FaFilePdf className="mr-1" />
                        PDF
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}