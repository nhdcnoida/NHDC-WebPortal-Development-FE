'use client';
import dynamic from 'next/dynamic';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Roboto, Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { handloomData } from '@/components/handloom-data-all-states';
import { handloomStates } from '@/components/handloom-states';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { regionMarkers } from '@/components/region-markers-local';

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

const WeaversMapClient = dynamic(() => import('./WeaversMapClient'), {
  ssr: false,
  // Accessibility: Added role and text for screen readers during loading.
  loading: () => <div role="status" aria-live="polite" className="w-full h-full bg-gray-100 animate-pulse rounded-lg"><span className="sr-only">Loading map...</span></div>
});

export default function WeaversMapSection({ StateMap }) {
  const { lang } = useParams();
  const [selectedRegion, setSelectedRegion] = useState('All India');
  const [selectedDataType, setSelectedDataType] = useState('workers');
  const [isMobile, setIsMobile] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleClick = (event, state) => {
    setAnchorEl(event.currentTarget);
    setSelectedState(state);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedState(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 },
    }),
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  // Text content based on language (remains unchanged)
  const content = {
    legacy: {
      en: "Our Legacy",
      hi: "हमारी विरासत"
    },
    title: {
      en: "Weaving India's Heritage",
      hi: "भारत की विरासत को बुनना"
    },
    description: {
      en: "India's handloom industry embodies tradition, culture, and craftsmanship. Every region boasts unique weaving styles, from Banarasi silk (Uttar Pradesh) to Kanjeevaram sarees (Tamil Nadu). This sector sustains millions of artisans, preserving age-old techniques while driving economic growth.",
      hi: "भारत का हथकरघा उद्योग परंपरा, संस्कृति और शिल्प कौशल का प्रतीक है। हर क्षेत्र में बनारसी रेशम (उत्तर प्रदेश) से लेकर कंजीवरम साड़ी (तमिलनाडु) तक अद्वितीय बुनाई शैलियाँ हैं। यह क्षेत्र लाखों कारीगरों को जीविका प्रदान करता है, सदियों पुरानी तकनीकों को संरक्षित करते हुए आर्थिक विकास को गति देता है।"
    },
    visualize: {
      en: "Visualize: Weavers Across India",
      hi: "देखें: पूरे भारत में बुनकर"
    },
    stats: {
      en: "There's reported to be a total of 26.73 lakh (2,673,000) weavers across India",
      hi: "भारत भर में कुल 26.73 लाख (2,673,000) बुनकरों की सूचना है"
    },
    selectData: {
      en: "Select Data Type:",
      hi: "डेटा प्रकार चुनें:"
    }
  };

  const getTotalCount = () => {
    const totalCounts = { workers: 3522512, weavers: 2673891, households: 2545312, householdsWithLooms: 2178293 };
    return totalCounts[selectedDataType];
  };

  return (
    // SEO & Accessibility: Changed `div` to `<section>` for semantic landmarking and added `aria-labelledby`.
    <section
      ref={sectionRef}
      className={`${roboto.className} grid grid-cols-1 min-h-[40rem] md:grid-cols-2 gap-4 sm:gap-6 bg-[#F7DADA] my-6 sm:my-8 md:my-12 lg:my-16 xl:my-20 overflow-hidden`}
      aria-labelledby="weavers-map-heading"
    >
      {/* Left Side */}
      <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 p-4 md:p-8 overflow-hidden">
        <motion.header
          className="flex items-start"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Image
            height={80}
            width={80}
            src="/assets/needle.png"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain mt-1"
            // SEO & Accessibility: More descriptive alt text.
            alt={lang === 'hi' ? 'हथकरघा बुनाई की कला का प्रतीक एक सुई' : 'A needle, symbolizing the craft of handloom weaving'}
          />
          <div className="ml-2 sm:ml-3 md:ml-4">
            {/* SEO & Accessibility: Changed `h3` to `p` for correct semantic hierarchy. */}
            <p className="text-[#62402A] text-lg mb-1">
              {content.legacy[lang]}
            </p>
            {/* SEO & Accessibility: Added `id` to be referenced by the section's `aria-labelledby`. */}
            <h2 id="weavers-map-heading" className={`md:text-4xl text-2xl ${playfair.className} text-[#62402A] font-bold`}>
              {content.title[lang]}
            </h2>
          </div>
        </motion.header>

        <motion.div variants={textVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} custom={0}>
          <p className="text-[#333] text-xs sm:text-sm md:text-base leading-relaxed sm:leading-relaxed md:leading-relaxed overflow-hidden">
            {content.description[lang]}
          </p>
        </motion.div>

        <div>
          <motion.h3
            className={`${playfair.className} text-base mb-2 sm:text-lg md:text-xl lg:text-2xl font-bold text-[#62402A]`}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
          >
            {content.visualize[lang]}
          </motion.h3>
          <motion.div
            className="mt-1 sm:mt-2 bg-[#62402A] text-white rounded-full px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 text-xs sm:text-sm md:text-base shadow overflow-hidden"
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
          >
            {lang === "en" ? `Total Handloom Workers : 35,22,512, As per Fourth All India HANDLOOM Census 2019-20` : `कुल हथकरघा श्रमिक: 35,22,512, चौथी अखिल भारतीय हथकरघा जनगणना 2019-20 के अनुसार`}
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 mt-2 sm:mt-3 overflow-y-auto min-h-32 pb-2">
          {handloomStates?.map((state, index) => (
            <motion.button
              key={state.id || `${state.name}-${index}`}
              onClick={(e) => handleClick(e, state)}
              className={`px-3 py-1 rounded-full border text-sm flex-shrink-0 ${selectedState?.state === state.state ? " text-[#62402A]  bg-[#FFFFFF] border-[#5B7AE6#5B7AE6] font-semibold" : "text-[#333] border-[#fcaeae] bg-transparent"}`}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {lang === "en" ? state.state : state.state_hindi}
            </motion.button>
          ))}

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            transformOrigin={{ vertical: "bottom", horizontal: "center" }}
            className="overflow-visible"
          >
            {selectedState && (
              <div className="p-4 w-72 max-h-80 overflow-y-auto">
                <div className="flex justify-between items-center mb-3">
                  <Typography variant="h6" component="h4">{selectedState.state}</Typography>
                  {/* Accessibility: Added explicit aria-label for the close button. */}
                  <IconButton size="small" onClick={handleClose} aria-label={lang === 'hi' ? 'बंद करें' : 'Close'}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </div>

                <table className="w-full border border-gray-300 rounded-md overflow-hidden text-sm">
                  {/* Accessibility: Added `<caption>` for table context. */}
                  <caption className="sr-only">{`Handloom data for ${selectedState.state}`}</caption>
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-3 py-2 text-left font-semibold border-b border-gray-300">
                        State Wise
                      </th>
                      <th scope="col" className="px-3 py-2 text-right font-semibold border-b border-gray-300">
                        Count
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 py-2 border-b border-gray-200">Total Workers</td>
                      <td className="px-3 py-2 border-b border-gray-200 text-right font-medium">{selectedState.data.total_workers.toLocaleString()}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 py-2 border-b border-gray-200">Total Weavers</td>
                      <td className="px-3 py-2 border-b border-gray-200 text-right font-medium">{selectedState.data.total_weavers.toLocaleString()}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 py-2 border-b border-gray-200">Weaver Households</td>
                      <td className="px-3 py-2 border-b border-gray-200 text-right font-medium">{selectedState.data.total_weaver_households.toLocaleString()}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-3 py-2">Households with Looms</td>
                      <td className="px-3 py-2 text-right font-medium">{selectedState.data.total_households_with_looms.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </Popover>
        </div>
      </div>

      {/* Right Side (Dynamic Map) */}
      <motion.div
        className="w-full h-[450px] xs:h-[300px] sm:h-[350px] md:h-full relative overflow-hidden"
        variants={mapVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {isClient && (
          <WeaversMapClient
            selectedRegion={selectedRegion}
            data={regionMarkers}
            selectedDataType={selectedDataType}
            handloomData={handloomData}
            stateMapData={StateMap}
            lang={lang}
            isMobile={isMobile}
          />
        )}
      </motion.div>
    </section>
  );
}