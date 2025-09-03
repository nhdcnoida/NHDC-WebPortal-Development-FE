'use client';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Roboto } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

// SEO & Performance: Added `display: 'swap'` to prevent render-blocking and improve Core Web Vitals.
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

export default function VisionMission({ VisionData }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '0px',
  });

  const { lang } = useParams();

  useEffect(() => {
    const handleHashChange = () => {
      // Added a check for sectionRef.current to prevent potential null reference errors.
      if (window.location.hash === '#vision' && sectionRef.current) {
        const header = document.querySelector('.bg-[#F7D7D8]');
        const headerHeight = header ? header.offsetHeight : 60;
        const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionTop - headerHeight,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.3 },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
  };

  const cardHover = {
    scale: 1.02,
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    transition: { duration: 0.3 },
  };

  return (
    // Accessibility: Added `aria-labelledby` to link this section to its main heading for screen readers.
    <section
      ref={sectionRef}
      className={`${roboto.className} px-6 py-12 bg-white relative z-10 scroll-mt-[120px]`}
      id="vision"
      style={{ overflowAnchor: 'none' }}
      aria-labelledby="vision-mission-heading"
    >
      {/* SEO & Accessibility: Changed `div` to `motion.header` for better semantic structure. */}
      <motion.header
        className={`${playfair.className} flex mb-10 items-center`}
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Accessibility: Removed `figure` wrapper as it's not necessary for a single decorative image. */}
        <Image
          src={'/assets/needle.png'}
          // SEO & Accessibility: Changed `alt` text to be more descriptive for screen readers and search engines.
          alt="Illustration of a needle, symbolizing craftsmanship and our mission"
          width={56} // More realistic size hint
          height={80} // More realistic size hint
          className="w-10 h-10 md:h-20 md:w-14 mr-4"
        />
        <div>
          {/* SEO & Accessibility: Changed `h3` to `p` for better semantic hierarchy. This is a subtitle, not a new section heading. */}
          <p className="text-[#62402A] text-lg font-semibold mb-1">
            {lang === 'hi' ? VisionData?.subTitle?.HiName : VisionData?.subTitle?.EnName}
          </p>
          <h2 id="vision-mission-heading" className={` ${playfair.className} md:text-4xl text-2xl text-[#62402A] font-bold`}>
            {lang === 'hi' ? VisionData?.sectionTitle?.HiName : VisionData?.sectionTitle?.EnName}
          </h2>
        </div>
      </motion.header>

      <div className="flex flex-col-reverse lg:flex-row gap-6 text-[#444444]">
        {/* Left side - Cards */}
        {/* Accessibility: Added `role="list"` to the container to signify it's a list of items. */}
        <div className="flex-1 flex flex-col gap-6" role="list">
          {/* Top row - Box 1 and Box 2 side by side */}
          <div className="flex flex-col md:flex-row gap-6">
            {VisionData?.missionCards?.slice(0, 2).map((card, index) => (
              <motion.div
                key={index}
                className="flex-1 border border-[#CFCFCF] px-7 pb-3 bg-white shadow-sm overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={index}
                whileHover={cardHover}
                // Accessibility: Added `role` and `tabIndex` to make cards understandable and focusable for keyboard users.
                role="listitem"
                tabIndex={0}
              >
                <h3 className="font-bold text-lg mb-2">{lang === 'hi' ? card.HiTitle : card.EnTitle}</h3>
                <p className="text-md font-normal">{lang === 'hi' ? card.HiDescription : card.EnDescription}</p>
              </motion.div>
            ))}
          </div>

          {/* Box 3 - Full width */}
          {VisionData?.missionCards?.[2] && (
            <motion.div
              className="w-full border border-[#CFCFCF] px-7 pb-3 bg-white shadow-sm overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={2}
              whileHover={cardHover}
              role="listitem"
              tabIndex={0}
            >
              <h3 className="font-bold text-lg mb-2 items-center gap-2 flex">
                {lang === 'hi' ? VisionData.missionCards[2].HiTitle : VisionData.missionCards[2].EnTitle}
                <Image
                  alt="NHDC company logo"
                  title="NHDC LOGO"
                  height={56}
                  width={72}
                  src={"https://storage.nhdc.org.in/nhdc/public/AppSettings/NHDC.png"}
                  className='w-18 '
                />
              </h3>
              <p className="text-md font-normal">{lang === 'hi' ? VisionData.missionCards[2].HiDescription : VisionData.missionCards[2].EnDescription}</p>
            </motion.div>
          )}

          {/* Box 4 - Full width */}
          {VisionData?.missionCards?.[3] && (
            <motion.div
              className="w-full border border-[#CFCFCF] px-7 pb-3 bg-white shadow-sm overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={3}
              whileHover={cardHover}
              role="listitem"
              tabIndex={0}
            >
              <h3 className="font-bold text-lg mb-2 items-center gap-2 flex">
                {lang === 'hi' ? VisionData.missionCards[3].HiTitle : VisionData.missionCards[3].EnTitle}
                <Image
                  alt="Tantrika company logo"
                  title="Tantrika LOGO"
                  height={64}
                  width={64}
                  src={"https://storage.nhdc.org.in/nhdc/public/AppSettings/TantrikaLogo.png"}
                  className='w-16 '
                />
              </h3>
              <p className="text-md font-normal">{lang === 'hi' ? VisionData.missionCards[3].HiDescription : VisionData.missionCards[3].EnDescription}</p>
            </motion.div>
          )}
        </div>

        {/* Right side - Image */}
        <motion.div
          className="flex-1 h-full"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="w-full h-full relative min-h-[400px] lg:min-h-[600px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_STORAGE}${VisionData?.mainImage}`}
              // SEO & Accessibility: Added a much more descriptive alt text.
              alt="A vibrant scene representing our company's vision for the future"
              fill
              loading="eager"
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}