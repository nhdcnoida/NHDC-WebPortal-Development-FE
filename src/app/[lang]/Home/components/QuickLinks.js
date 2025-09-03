'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Playfair_Display, Roboto } from 'next/font/google';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function QuickLinks({ BannerQuick }) {
  const { lang } = useParams();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: i * 0.2,
      },
    }),
  };

  const cardHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeOut' },
  };

  const getLink = (item) => {
    return item.isCustomLink ? item.Link : `/${lang}${item.Link}`;
  };

  // OPTIMIZATION: Root <div> changed to <section> and given a ref and aria-labelledby.
  // The inner <section> was removed to simplify the DOM. No UI change.
  return (
    <section 
      ref={sectionRef} 
      aria-labelledby="quick-links-title"
      className="bg-[#F7D7D8] py-10 px-4 sm:px-6 lg:px-6"
    >
      <div className="w-full mx-auto flex flex-col gap-6">
        <motion.h2
          // OPTIMIZATION: Added an ID for the aria-labelledby attribute.
          id="quick-links-title"
          className={`${playfair.className} flex flex-row items-start text-4xl md:text-5xl font-bold text-[#62402A] mb-14 text-center`}
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <span>
            {lang === 'hi'
              ? BannerQuick?.title?.HiName || 'त्वरित लिंक'
              : BannerQuick?.title?.EnName || 'Looking For ?'}
          </span>
        </motion.h2>

        {/* OPTIMIZATION: Changed grid <div> to a semantic <nav> containing a <ul>. No UI change. */}
        <nav aria-label="Quick links">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
            {BannerQuick?.quickLinks?.map((item, index) => (
              // OPTIMIZATION: Changed motion.div to motion.li for a semantic list item.
              <motion.li
                // SEO: Use a stable, unique key if available (e.g., item.id or item.Link)
                key={item.Link || index}
                className="group flex justify-center"
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={index}
                whileHover={cardHover}
                // A11Y: Added whileFocus to provide feedback for keyboard users.
                whileFocus={{ ...cardHover }}
              >
                <Link 
                  href={getLink(item)}
                  target={item.isCustomLink ? "_blank" : "_self"}
                  // SEO & A11Y: Added rel attribute for security on external links.
                  rel={item.isCustomLink ? "noopener noreferrer" : undefined}
                  className="relative w-full max-w-xs aspect-[4/3] overflow-hidden bg-white rounded-lg shadow-md transition-shadow duration-300"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE}${item.ImageLink}`}
                    fill
                    className="w-full h-full object-cover"
                    alt={lang === 'hi' ? item.HiName : item.EnName || "Quick Link Image"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={index < 4}

                  />
                  <div className="absolute bottom-0 w-full bg-[rgba(0,0,0,0.65)] p-4 text-white text-center">
                    <span className={`${roboto.className} text-lg font-medium`}>
                      {lang === 'hi' ? item.HiName : item.EnName}
                      {/* A11Y: Inform screen reader users that a link opens in a new tab. */}
                      {item.isCustomLink && <span className="sr-only"> (opens in a new tab)</span>}
                    </span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}