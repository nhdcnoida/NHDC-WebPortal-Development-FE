"use client";
import { useState, useEffect } from "react";
import { FaGavel, FaSearch, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";

export default function TendersPage({ Tender, currentPage = 1, itemsPerPage = 20 }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { lang } = useParams();
  const [selectedTender, setSelectedTender] = useState(null);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || "");
  const [tenders, setTenders] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  // Language translations
  const translations = {
    tenders: {
      en: "Tenders",
      hi: "टेंडर"
    },
    searchPlaceholder: {
      en: "Search tenders...",
      hi: "टेंडर खोजें..."
    },
    noResults: {
      en: "No tenders found matching your criteria",
      hi: "आपकी खोज से मेल खाने वाला कोई टेंडर नहीं मिला"
    },
    closingDate: {
      en: "Closing Date:",
      hi: "समाप्ति तिथि:"
    },
    uploadDate: {
      en: "Uploading Date:",
      hi: "अपलोड तिथि:"
    },
    pageInfo: {
      en: "Page {currentPage} of {totalPages}",
      hi: "पृष्ठ {currentPage} में से {totalPages}"
    },
    additionalFiles: {
      en: "Additional Files",
      hi: "अतिरिक्त फाइलें"
    },
    downloadMainFile: {
      en: "Download Main File",
      hi: "मुख्य फाइल डाउनलोड करें"
    },
    uploadDateLabel: {
      en: "Upload Date",
      hi: "अपलोड तिथि"
    },
    closingDateLabel: {
      en: "Closing Date",
      hi: "समाप्ति तिथि"
    }
  };

  useEffect(() => {
    if (Tender && Tender.data) {
      setTenders(Tender.data);
      setTotalPages(Tender.pagination.pages);
    }
  }, [Tender, itemsPerPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set('search', searchTerm);
    params.set('page', '1');
    router.push(`?${params.toString()}`);
  };


  
  function isWithinSixMonths(dateString) {
  const uploadDate = new Date(dateString);
  const now = new Date();

  const monthsDiff =
    (now.getFullYear() - uploadDate.getFullYear()) * 12 +
    (now.getMonth() - uploadDate.getMonth());

  return monthsDiff < 2; // Show if less than 6 months
}

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);
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

      {/* Tenders Grid */}
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
                onClick={() => setSelectedTender(tender)}
              >
                <div className="flex justify-between items-start mb-2">
                  <FaGavel className="text-[#5a2c2c] w-5 h-5" />
                  <div className="rounded-full border border-[#5B7AE6] p-2">
                    <TiArrowRightThick className="text-blue-500 text-lg hover:text-blue-700" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-lg text-gray-900 my-2 mb-1">
                    {lang === 'hi' ? tender.HiName : tender.EnName} {isWithinSixMonths(tender.uploadDate) && (
  <span
    style={{
      display: "inline-block",
      background:
        "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)",
      backgroundSize: "300% 300%",
      animation: "gradientShift 2s ease infinite",
      color: "white",
      fontSize: "10px",
      fontWeight: "bold",
      padding: "2px 6px",
      borderRadius: "3px",
      marginLeft: "8px",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    }}
  >
    {lang === "hi" ? "नया" : "NEW"}
  </span>
)}

<style jsx>{`
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`}</style>
                  </h4>
                  <p className="text-base text-gray-700 line-clamp-4 mb-2">
                    {lang === 'hi' ? tender.HiDescription : tender.EnDescription}
                  </p>
                </div>
                
                <div className="w-full flex justify-between text-sm text-gray-500 mt-2">
                  {/* <span>
                    <strong>{t('closingDate')}</strong> {formatDate(tender.closingDate)}
                  </span> */}
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

      {/* Popup Modal */}
      {selectedTender && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div 
            className="bg-white p-6 w-full max-w-md rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => setSelectedTender(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={20} />
            </button>

            <div className="text-center gap-1 mb-4 flex items-center w-full justify-start ">
              <span className="w-[10%]">
                <FaGavel className="text-[#5a2c2c] w-8 h-8 mt-1" />
              </span>
              <h2 className="w-[85%] text-lg font-semibold text-[#5a2c2c]">
                {lang === 'hi' ? selectedTender.HiName : selectedTender.EnName}
              </h2>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-700 px-2 leading-relaxed">
                {lang === 'hi' ? selectedTender.HiDescription : selectedTender.EnDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-medium text-gray-600 text-sm">
                  {t('uploadDateLabel')}
                </p>
                <p className="text-gray-800 text-sm">
                  {formatDate(selectedTender.uploadDate)}
                </p>
              </div>
              {/* <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-medium text-gray-600 text-sm">
                  {t('closingDateLabel')}
                </p>
                <p className="text-gray-800 text-sm">
                  {formatDate(selectedTender.closingDate)}
                </p>
              </div> */}
            </div>

            {selectedTender.subFileLinks && selectedTender.subFileLinks.length > 0 && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-[#5a2c2c] mb-3">
                  {t('additionalFiles')}
                </h3>
                <div className="space-y-2">
                  {selectedTender.subFileLinks.map((file, index) => (
                    <Link
                      key={index}
                      href={`${process.env.NEXT_PUBLIC_STORAGE}${file.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded-md transition"
                    >
                      <span>{lang === 'hi' ? file.HiName : file.EnName || `File ${index + 1}`}</span>
                      <TiArrowRightThick className="ml-2 text-lg" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link
              href={`${process.env.NEXT_PUBLIC_STORAGE}${selectedTender.mainFileLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-[#5a2c2c] text-white text-sm px-6 py-2 rounded-md hover:bg-[#4a1f1f] transition"
            >
              {t('downloadMainFile')}
              <TiArrowRightThick className="ml-2 text-lg" />
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
}