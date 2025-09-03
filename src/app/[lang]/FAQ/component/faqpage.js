// app/faq/components/FAQPage.js
'use client';
import Image from "next/image";
import { useState } from "react";
import { useRouter, useParams } from 'next/navigation';

export default function FAQPage({ FAQ, currentPage, itemsPerPage }) {
  const [openIndex, setOpenIndex] = useState(null);
  const router = useRouter();
  const { lang } = useParams();
 // Handle search
     const [query, setQuery] = useState("");
  

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/en/Ask-NHDC-Ai?q=${encodeURIComponent(query)}`);
        }
      
    };
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handlePageChange = (newPage) => {
    router.push(`/${lang}/faq?page=${newPage}&limit=${itemsPerPage}`);
  };

  // Function to render text with line breaks
  const renderTextWithBreaks = (text) => {
    return text.split('\n').map((paragraph, i) => (
      <p key={i} className="mb-2">
        {paragraph || <br />}
      </p>
    ));
  };

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[280px] md:h-[350px]">
        <Image height={1000} width={1000}
          src="/assets/building.jpg"
          alt="FAQ Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
            {lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
          </h1>
          <div className="relative w-full max-w-md">
             <form onSubmit={handleSearch} role="search">
            <input
              type="text"
               value={query}
                    onChange={(e) => setQuery(e.target.value)}
              placeholder={lang === 'hi' ? 'किसी भी कीवर्ड को खोजें...' : 'Search any keyword...'}
              className="w-full bg-white rounded-full py-3 px-5 pr-12 text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-base"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
              🔍
            </span>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-6 md:p-8">
          {FAQ?.data?.map((item, index) => (
            <div key={item._id} className="border-b last:border-none transition-all duration-300">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left py-4 text-sm sm:text-base font-semibold text-gray-800 hover:bg-gray-50 px-2 rounded"
              >
                <span className="w-[90%] text-left">
                  {lang === 'hi' ? item.HiQuestion : item.EnQuestion}
                </span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              
              {openIndex === index && (
                <div className="pb-5 px-4 text-gray-600 text-sm sm:text-base overflow-hidden transition-all duration-300">
                  {renderTextWithBreaks(lang === 'hi' ? item.HiAnswer : item.EnAnswer)}
                  {item.Link && (
                    <a 
                      href={item.Link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline mt-2 inline-block"
                    >
                      {lang === 'hi' ? 'अधिक जानें' : 'Learn more'}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination - Only show if more than one page exists */}
      {FAQ?.pagination?.pages > 1 && (
        <div className="flex justify-center my-8">
          <div className="flex space-x-2">
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                {lang === 'hi' ? 'पिछला' : 'Previous'}
              </button>
            )}
            
            {Array.from({ length: Math.min(5, FAQ.pagination.pages) }, (_, i) => {
              // Show limited page numbers (max 5)
              let pageNum;
              if (FAQ.pagination.pages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= FAQ.pagination.pages - 2) {
                pageNum = FAQ.pagination.pages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-4 py-2 border rounded-md ${currentPage === pageNum ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            {currentPage < FAQ.pagination.pages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                {lang === 'hi' ? 'अगला' : 'Next'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Yarn Balls Section */}
      <div className="flex justify-center gap-6 pb-12 px-4">
        <Image height={1000} width={1000} src="/assets/pink.png" alt="yarn pink" className="w-14 sm:w-16 md:w-20" />
        <Image height={1000} width={1000} src="/assets/beige.png" alt="yarn cream" className="w-14 sm:w-16 md:w-20" />
        <Image height={1000} width={1000} src="/assets/green.png" alt="yarn green" className="w-14 sm:w-16 md:w-20" />
      </div>
    </div>
  );
}