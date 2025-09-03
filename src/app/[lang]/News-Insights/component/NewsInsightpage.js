"use client";
import { useState, useEffect } from "react";
import { FaNewspaper, FaSearch, FaTimes, FaArrowLeft, FaArrowRight, FaFilePdf } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

// Helper function to check if a file is PDF
const isPDF = (fileLink) => {
  if (!fileLink) return false;
  return fileLink.toLowerCase().endsWith('.pdf');
};

export default function NewsInsightpage({ Tender, currentPage = 1, itemsPerPage = 20 }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { lang } = useParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || "");
  const [tenders, setTenders] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  // Language translations
  const translations = {
    tenders: {
      en: "News",
      hi: "समाचार"
    },
    searchPlaceholder: {
      en: "Search news...",
      hi: "समाचार खोजें..."
    },
    noResults: {
      en: "No news found matching your criteria",
      hi: "आपकी खोज से मेल खाने वाला कोई समाचार नहीं मिला"
    },
    uploadDate: {
      en: "Published Date:",
      hi: "प्रकाशन तिथि:"
    },
    pageInfo: {
      en: "Page {currentPage} of {totalPages}",
      hi: "पृष्ठ {currentPage} में से {totalPages}"
    },
    additionalFiles: {
      en: "Related Documents",
      hi: "संबंधित दस्तावेज"
    },
    downloadMainFile: {
      en: "View Full News",
      hi: "पूरा समाचार देखें"
    },
    uploadDateLabel: {
      en: "Published Date",
      hi: "प्रकाशन तिथि"
    },
    pdfAvailable: {
      en: "PDF Available",
      hi: "PDF उपलब्ध"
    }
  };

  useEffect(() => {
    if (Tender && Tender.data) {
      setTenders(Tender.data);
      setTotalPages(Math.ceil(Tender.pagination.total / itemsPerPage));
    }
  }, [Tender, itemsPerPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set('search', searchTerm);
    params.set('page', '1');
    router.push(`?${params.toString()}`);
  };

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);
  };

  const handleNewsClick = (tender) => {
    const newsTitle = tender.EnName;
    const urlFriendlyTitle = newsTitle.replace(/\s+/g, '_').replace(/[^\w-]/g, '');
    router.push(`/${lang}/News-Insights/${tender._id}`);
  };

  const filteredTenders = tenders.filter(tender => {
    return (
      tender.EnName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.HiName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.EnDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.HiDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
    }),
  };

  const cardHover = {
    scale: 1.03,
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  const t = (key, vars = {}) => {
    let translation = translations[key]?.[lang] || key;
    Object.keys(vars).forEach(varKey => {
      translation = translation.replace(`{${varKey}}`, vars[varKey]);
    });
    return translation;
  };

  return (
    <div className="relative w-full min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-10">
      {/* Header and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-[#5a2c2c]">{t('tenders')}</h1>
        
        <form onSubmit={handleSearch} className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 text-sm outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="absolute top-2.5 right-3 text-gray-500 text-sm">
            <FaSearch />
          </button>
        </form>
      </div>

      {/* News Grid */}
      {filteredTenders.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg shadow-sm">
          <p className="text-gray-600">{t('noResults')}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredTenders.map((tender, index) => (
              <motion.div
                key={tender._id}
                className="bg-[#F5F5F5] p-4 rounded-xl flex flex-col min-h-[15rem] shadow-sm cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={cardHover}
                onClick={() => handleNewsClick(tender)}
              >
                <div className="flex justify-between items-start mb-2">
                  <FaNewspaper className="text-[#5a2c2c] w-5 h-5" />
                  <div className="rounded-full border border-[#5B7AE6] p-2">
                    <TiArrowRightThick className="text-blue-500 text-lg hover:text-blue-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="w-full h-56 relative mb-2 rounded-lg overflow-hidden bg-gray-200">
                    {tender.mainFileLink ? (
                      isPDF(tender.mainFileLink) ? (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-300 p-4">
                          <FaFilePdf className="text-red-500 text-5xl mb-3" />
                          <span className="text-center text-sm text-gray-700">
                            {t('pdfAvailable')}
                          </span>
                        </div>
                      ) : (
                        <Image 
                          src={`${process.env.NEXT_PUBLIC_STORAGE}${tender.mainFileLink}`} 
                          alt="News Image" 
                          width={1000} 
                          height={1000} 
                          className="w-full h-full object-cover"
                        />
                      )
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <span className="text-gray-500">No Image Available</span>
                      </div>
                    )}
                  </div>
                  <h4 className="font-medium text-lg text-gray-900 my-2 mb-1">
                    {lang === 'hi' ? tender.HiName : tender.EnName}
                  </h4>
                  <p className="text-base text-gray-700 line-clamp-4 mb-2">
                    {lang === 'hi' ? tender.HiDescription : tender.EnDescription}
                  </p>
                </div>
                
                <div className="w-full flex justify-between text-sm text-gray-500 mt-2">
                  <span>
                    <strong>{t('uploadDate')}</strong> {formatDate(tender.uploadDate)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className={`flex items-center justify-center w-10 h-10 rounded-full border border-[#000] text-[#000] hover:bg-gray-200 transition ${
                currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <FaArrowLeft />
            </button>
            
            <span className="text-sm text-gray-700">
              {t('pageInfo', { currentPage, totalPages })}
            </span>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className={`flex items-center justify-center w-10 h-10 rounded-full border border-[#000] text-[#000] hover:bg-gray-200 transition ${
                currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <FaArrowRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
}