"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaArrowLeft, FaFileAlt, FaTimes, FaSortAmountDown } from 'react-icons/fa';
import { TiArrowRightThick } from "react-icons/ti";
import { FaGavel } from "react-icons/fa";
import { motion, useInView } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { Roboto } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';

// SEO & Performance: Added `display: 'swap'` for better Core Web Vitals.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function TabbedCards({ Tender, News, Forms }) {
  const { lang } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Tenders');
  const [startIndex, setStartIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [sortByUploadDate, setSortByUploadDate] = useState(true);
  const popupRef = useRef(null);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null); // Ref to store what opened the popup

  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Prepare the data structure from props with uploadDate
  const tabData = {
    Tenders: (Tender?.data?.map(item => ({
      id: item._id,
      title: lang === 'hi' ? item.HiName : item.EnName,
      titleHindi: item.HiName,
      titleEnglish: item.EnName,
      description: lang === 'hi' ? item.HiDescription : item.EnDescription,
      descriptionHindi: item.HiDescription,
      descriptionEnglish: item.EnDescription,
      closingDate: item.closingDate,
      uploadDate: item.uploadDate,
      mainFileLink: item.mainFileLink,
      subFileLinks: item.subFileLinks
    })) || []).sort((a, b) => {
      const dateA = new Date(a.uploadDate);
      const dateB = new Date(b.uploadDate);
      return sortByUploadDate ? dateB - dateA : dateA - dateB;
    }),
    News: News?.data?.map(item => ({
      id: item._id,
      title: lang === 'hi' ? item.HiName : item.EnName,
      titleHindi: item.HiName,
      titleEnglish: item.EnName,
      description: lang === 'hi' ? item.HiDescription : item.EnDescription,
      descriptionHindi: item.HiDescription,
      descriptionEnglish: item.EnDescription,
      closingDate: item.closingDate,
      uploadDate: item.uploadDate,
      mainFileLink: item.mainFileLink,
      subFileLinks: item.subFileLinks
    })) || [],
    Forms: Forms?.data?.map(item => ({
      id: item._id,
      title: lang === 'hi' ? item.HiName : item.EnName,
      titleHindi: item.HiName,
      titleEnglish: item.EnName,
      description: lang === 'hi' ? item.HiDescription : item.EnDescription,
      descriptionHindi: item.HiDescription,
      descriptionEnglish: item.EnDescription,
      closingDate: item.closingDate,
      uploadDate: item.uploadDate,
      mainFileLink: item.mainFileLink,
      subFileLinks: item.subFileLinks
    })) || []
  };

  const tabNames = {
    Tenders: lang === 'hi' ? 'टेंडर' : 'Tenders',
    News: lang === 'hi' ? 'समाचार' : 'News',
    Forms: lang === 'hi' ? 'फॉर्म' : 'Forms'
  };

  const itemsPerPage = 6;
  const data = tabData[activeTab];
  const paginated = data.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < data.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  function isWithinSixMonths(dateString) {
    const uploadDate = new Date(dateString);
    const now = new Date();
    const monthsDiff = (now.getFullYear() - uploadDate.getFullYear()) * 12 + (now.getMonth() - uploadDate.getMonth());
    return monthsDiff < 2;
  }

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const handleCardClick = (item, event) => {
    triggerRef.current = event.currentTarget; // Store the triggering element
    if (activeTab === 'News') {
      router.push(`/${lang}/News-Insights/${item.id}`);
    } else {
      setSelectedItem(item);
      setShowPopup(true);
    }
  };

  const closePopup = (e) => {
    if (e) e.stopPropagation();
    setShowPopup(false);
    setSelectedItem(null);
    // Accessibility: Return focus to the element that opened the popup
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  const toggleSortByUploadDate = () => {
    setSortByUploadDate(!sortByUploadDate);
    setStartIndex(0);
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };

    if (showPopup) {
      document.addEventListener('keydown', handleKeydown);
      // Accessibility: Focus the popup when it opens
      popupRef.current?.focus();
    } else {
      document.removeEventListener('keydown', handleKeydown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [showPopup]);

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 } }),
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 } }),
  };
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 } },
  };
  const tabHover = { scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } };
  const cardHover = { scale: 1.03, boxShadow: '0 8px 16px rgba(0,0,0,0.1)', transition: { duration: 0.3, ease: 'easeOut' } };

  const formatDate = (dateString) => {
    if (!dateString) return lang === 'hi' ? 'कोई समाप्ति तिथि नहीं' : 'No closing date';
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    // SEO & Accessibility: Use a `<section>` tag for semantic landmarking.
    <section className="relative w-full h-full bg-white py-10" aria-labelledby="updates-heading">
      <h2 id="updates-heading" className="sr-only">
        {lang === 'hi' ? 'नवीनतम अपडेट' : 'Latest Updates'}
      </h2>
      
      {/* Accessibility: Mark decorative background image as hidden from screen readers. */}
      <motion.div className="absolute inset-0 z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} aria-hidden="true">
        <Image src="/assets/Tab_bg.png" alt="" fill className="object-cover" priority />
      </motion.div>

      {/* Accessibility: Added `role="tablist"` for proper ARIA tab implementation. */}
      <div className={`${playfair.className} flex gap-5 mb-0 relative w-[90%] mx-auto`} role="tablist" aria-label={lang === 'hi' ? 'सामग्री श्रेणियाँ' : 'Content Categories'}>
        {Object.keys(tabData).map((tab, index) => (
          <motion.button
            key={tab}
            id={`tab-${tab}`}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls="tabpanel-content"
            onClick={() => { setActiveTab(tab); setStartIndex(0); }}
            className={`
              relative px-8 sm:px-16 md:px-8 lg:px-14 py-2 sm:py-3 items-center flex justify-center
              text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-all
              ${activeTab === tab ? 'bg-white/50 text-[#62402A] z-10' : 'bg-gray-200 text-gray-600 z-10'}
              clip-tab
              border-t-2 border-r-2 border-b border-white
              ${index !== 0 ? '-ml-4 sm:-ml-5 md:-ml-6' : 'border-l-2 rounded'}
            `}
            variants={tabVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={index}
            whileHover={tabHover}
          >
            {tabNames[tab]}
          </motion.button>
        ))}
      </div>

      {/* Accessibility: Added `role="tabpanel"` to associate content with the active tab. */}
      <div
        ref={sectionRef}
        id="tabpanel-content"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className={`p-6 rounded-b-2xl rounded-tr-2xl bg-[#E9E9E9CC]/60 backdrop-blur-sm w-[90%] lg:min-h-[39rem] flex flex-col justify-between mx-auto shadow-md z-10 relative border-3 border-white ${roboto.className}`}
      >
        {data.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600">{lang === 'hi' ? 'फिलहाल कोई डेटा उपलब्ध नहीं है' : 'No data available at the moment'}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {paginated.map((item, index) => (
                // Accessibility: Changed `div` to `button` for keyboard focus and interaction, styled to look identical.
                <motion.button
                  key={item.id}
                  className="bg-[#F5F5F5] p-4 rounded-xl flex flex-col min-h-[15rem] shadow-sm cursor-pointer text-left"
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  custom={index}
                  whileHover={cardHover}
                  onClick={(e) => handleCardClick(item, e)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <FaGavel className="text-[#5a2c2c] w-5 h-5" aria-hidden="true" />
                    <Link
                      href={`${process.env.NEXT_PUBLIC_STORAGE}${item.mainFileLink}`}
                      target="_blank"
                      className='rounded-full border border-[#5B7AE6] p-2'
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${item.title} - ${lang === 'hi' ? 'फ़ाइल डाउनलोड करें' : 'Download File'}`}
                    >
                      <FaArrowRight className="text-blue-500 text-lg hover:text-blue-700" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-lg text-gray-900 my-2 mb-1">
                      {item.title}
                      {isWithinSixMonths(item.uploadDate) && (
                        <span
                          style={{
                            display: "inline-block",
                            background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)",
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
                      <style jsx>{` @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } } `}</style>
                    </h4>
                    <p className="text-sm sm:text-md text-gray-700 line-clamp-4 mb-2">{item.description}</p>
                  </div>
                  <div className="mt-1 text-xs text-gray-400">
                    {lang === 'hi' ? 'अपलोड तिथि:' : 'Uploaded:'} {formatDate(item.uploadDate)}
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div className="flex justify-end gap-4 mt-6" variants={buttonVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              {activeTab === 'Tenders' && (
                <Link href={`/${lang}/Tenders`} className='items-center flex text-[#000] font-semibold'>
                  {lang === 'hi' ? 'और देखें' : 'View More'}
                </Link>
              )}
              {activeTab === 'News' && (
                <Link href={`/${lang}/News-Insights`} className='items-center flex text-[#000] font-semibold'>
                  {lang === 'hi' ? 'और देखें' : 'View More'}
                </Link>
              )}
              
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                aria-label={lang === 'hi' ? 'पिछला पृष्ठ' : 'Previous Page'}
                className={`w-10 h-10 rounded-full border border-[#000] text-[#000] flex items-center justify-center hover:bg-gray-200 hover:text-black transition ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <FaArrowLeft aria-hidden="true" />
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + itemsPerPage >= data.length}
                aria-label={lang === 'hi' ? 'अगला पृष्ठ' : 'Next Page'}
                className={`w-10 h-10 rounded-full border border-[#000] text-[#000] flex items-center justify-center hover:bg-gray-200 hover:text-black transition ${startIndex + itemsPerPage >= data.length ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <FaArrowRight aria-hidden="true" />
              </button>
            </motion.div>
          </>
        )}
      </div>

      {showPopup && selectedItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4" onClick={closePopup}>
          {/* Accessibility: Added roles and labels for a proper modal dialog. */}
          <motion.div
            ref={popupRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            tabIndex={-1} // Makes the div focusable programmatically
            className="bg-white p-6 w-full max-w-md rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              aria-label={lang === 'hi' ? 'बंद करें' : 'Close'}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={20} aria-hidden="true" />
            </button>
            <div className="text-center mb-4 flex items-center w-full justify-start gap-2">
              <FaFileAlt className="text-[#5a2c2c] w-8 h-8 mt-1" aria-hidden="true" />
              <h2 id="popup-title" className="text-lg font-semibold text-[#5a2c2c]">
                {lang === 'hi' ? selectedItem.titleHindi : selectedItem.titleEnglish}
              </h2>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-700 px-2 leading-relaxed">
                {lang === 'hi' ? selectedItem.descriptionHindi : selectedItem.descriptionEnglish}
              </p>
            </div>
            <div className="text-sm text-gray-500 mb-4">
              <strong>
                {lang === 'hi' ? 'अपलोड तिथि:' : 'Upload Date:'}
              </strong> {formatDate(selectedItem.uploadDate)}
            </div>
            <div className="space-y-3 mb-4">
              {selectedItem.subFileLinks?.map((file, index) => (
                <Link
                  key={index}
                  href={`${process.env.NEXT_PUBLIC_STORAGE}${file.link}`}
                  target="_blank"
                  aria-label={lang === 'hi' ? file.HiName : file.EnName}
                  className="inline-flex items-center justify-center w-full bg-gray-200 text-gray-800 text-sm px-6 py-2 rounded-md hover:bg-gray-300 transition"
                >
                  {lang === 'hi' ? file.HiName : file.EnName}
                  <TiArrowRightThick className="ml-2 text-lg" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <Link
              href={`${process.env.NEXT_PUBLIC_STORAGE}${selectedItem.mainFileLink}`}
              target="_blank"
              aria-label={lang === 'hi' ? 'मुख्य फाइल डाउनलोड करें' : 'Download Main File'}
              className="inline-flex items-center justify-center w-full bg-[#5a2c2c] text-white text-sm px-6 py-2 rounded-md hover:bg-[#4a1f1f] transition"
            >
              {lang === 'hi' ? 'मुख्य फाइल डाउनलोड करें' : 'Download Main File'}
              <TiArrowRightThick className="ml-2 text-lg" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      )}
    </section>
  );
}