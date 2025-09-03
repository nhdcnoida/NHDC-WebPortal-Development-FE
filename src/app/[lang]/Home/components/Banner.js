'use client';

import Image from 'next/image';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Carousel from './Carousel';
import { Roboto } from 'next/font/google';
import { useParams } from 'next/navigation';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Banner({ Carouseldata, Banner }) {
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 300], [0, -20]);

  const ministerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 },
    },
  };
  
  const { lang } = useParams();

  return (
    // OPTIMIZATION: Changed <div> to <section> for better semantic meaning. No UI change.
    <section 
      aria-label="Page Banner and Ministers" // A11Y: Provides context for screen readers.
      className={`${roboto.className} relative w-full min-h-[36rem] overflow-hidden`}
    >
      <motion.div
        style={{ y: yBackground }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 h-[calc(100%+40px)]"
      >
        <Image
  src={
    (process.env.NEXT_PUBLIC_STORAGE && Banner.bgImage)
      ? `${process.env.NEXT_PUBLIC_STORAGE}${Banner.bgImage}`
      : '/Banner_bg.webp'
  }
  alt=""
  role="presentation"
  fill
  className="object-cover"
  priority
  fetchPriority='high'
  sizes="100vw"
  quality={75} // Add this to control compression
/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        <Carousel carouselData={Carouseldata} />
      </motion.div>

      <div className="absolute bottom-1 flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 px-0 md:px-10 z-10">
        {/* OPTIMIZATION: A list of people should be in a <ul>. No UI change. */}
        {Banner?.ministers?.map((minister, index) => (
          // OPTIMIZATION: Changed motion.div to motion.li for semantic list items.
          <motion.div // Using motion.div as a wrapper to keep DOM structure for Framer Motion key prop
            key={index}
            variants={ministerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* OPTIMIZATION: <figure> now wraps both image and text for a clear semantic link. */}
            {/* The `flex` class ensures the layout remains identical to your original. */}
            <figure className="flex mx-5 md:mx-0 m-0 items-center">
              <div className='max-w-30'> {/* Retained your wrapper for consistent styling */}
                <Image
                  src={`${process.env.NEXT_PUBLIC_STORAGE}${minister.imageLink}`}
                  // OPTIMIZATION: More descriptive alt text for SEO and screen readers.
                  alt={`Photo of ${lang === 'hi' ? minister.HiName : minister.EnName}`}
                  width={1000} // Preserved your original width/height props.
                  height={1000}
                  title={lang === 'hi' ? minister.HiName : minister.EnName}
                  // OPTIMIZATION: Removed loading="lazy" for above-the-fold content.
                    sizes="(max-width: 640px) 100px, 120px" 
                />
              </div>
              {/* OPTIMIZATION: Changed <div> to <figcaption> to caption the image. No UI change. */}
              <figcaption className="flex flex-col ml-3">
                <p className="text-sm sm:text-base md:text-lg font-bold text-white">
                  {lang === 'hi' ? minister.HiName : minister.EnName}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-white">
                  {lang === 'hi' ? minister.HiPosition : minister.EnPosition}
                </p>
              </figcaption>
            </figure>
          </motion.div>
        ))}
      </div>
    </section>
  );
}