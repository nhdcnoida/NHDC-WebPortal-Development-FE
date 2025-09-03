'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HandloomDashboard({ News }) {
  const { lang } = useParams();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();
  const sliderRef = useRef(null);

  // Process news data
  const recentNews = useMemo(() => {
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    // Get first 4 news items without date filtering
    const items = News?.data ? News.data.slice(0, 4) : [];
    
    return items.map((news) => ({
      id: news._id,
      type: 'news',
      date: formatDate(news.uploadDate || news.createdAt),
      title: lang === 'hi' ? news.HiName : news.EnName,
      desc: lang === 'hi' ? news.HiDescription : news.EnDescription,
      link: news.mainFileLink,
      isCustomLink: news.isCustomLink || false,
    }));
  }, [News?.data, lang]);

  // Animation control
  useEffect(() => {
    controls.start(isInView ? 'visible' : 'hidden');
  }, [isInView, controls]);

  // Slider settings (from provided AutoPlay component, adapted for responsiveness)
  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      slidesToShow: Math.min(3, recentNews.length),
      slidesToScroll: 1,
      autoplay: recentNews.length > 1,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: 'linear',
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(2, recentNews.length),
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    }),
    [recentNews.length]
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  if (recentNews.length === 0) {
    return (
      <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#62402A] font-bold mb-4">
            {lang === 'hi' ? 'कोई समाचार नहीं' : 'No News'}
          </h2>
          <p className="text-gray-600">
            {lang === 'hi'
              ? 'कोई समाचार उपलब्ध नहीं है।'
              : 'There are no news available.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mx-auto "
      >
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-8 md:mb-12 px-4"
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/assets/needle.png"
              alt={lang === 'hi' ? 'सुई' : 'Needle'}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h3 className="text-[#62402A] text-lg md:text-xl font-medium mb-1">
              {lang === 'hi' ? 'नवीनतम अपडेट' : 'Latest Updates'}
            </h3>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#62402A] font-bold">
              {lang === 'hi' ? 'समाचार और अंतर्दृष्टि' : 'News & Insights'}
            </h2>
            <p className="mt-2 text-gray-600 text-base md:text-lg max-w-3xl">
              {lang === 'hi'
                ? 'भारतीय हथकरघा उद्योग में नवीनतम घटनाक्रम के साथ अपडेट रहें।'
                : 'Stay updated with the latest developments in the Indian handloom industry.'}
            </p>
          </div>
        </motion.div>

        {/* News Cards Slider */}
        <div className="relative px-4 pb-8 py-2">
          <Slider ref={sliderRef} {...sliderSettings}>
            {recentNews.map((card) => (
              <div key={card.id} className="px-2 py-2 outline-none">
                <motion.div
                  className="h-full min-h-60 min-w-64 bg-[#FAFAFA] rounded-lg border border-[#F7D7D8] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
                  whileHover="hover"
                  variants={cardVariants}
                >
                  <div className="p-5 pb-4 flex-grow">
                    <div className="flex items-center gap-4">
                      <div className="border-r-2 border-[#5C4BA6] p-2 min-w-[60px] text-center">
                        <span className="font-bold text-lg sm:text-base">{card.date}</span>
                      </div>
                      <h4 className="text-lg sm:text-base font-semibold text-gray-800 line-clamp-2 sm:line-clamp-3">
                        {card.title}
                      </h4>
                    </div>
                    <p className="text-gray-500 mt-4 line-clamp-3 sm:line-clamp-4 text-sm md:text-base">
                      {card.desc}
                    </p>
                  </div>
                  <div className="px-5 pb-5">
                    <a
                      href={`/${lang}/News-Insights/${card.id}`}
                      target={card.isCustomLink ? '_blank' : '_self'}
                      rel={card.isCustomLink ? 'noopener noreferrer' : ''}
                      className="text-[#5C4BA6] font-medium text-sm md:text-base inline-flex items-center gap-1"
                    >
                      {lang === 'hi' ? 'समाचार पढ़ें' : 'Read News'}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </div>
  );
}