"use client";

import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";

const InfoCardList = ({ InfoCard }) => {
  const { lang } = useParams();
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
const scrollProgressRef = useRef(0);
  const [isMounted, setIsMounted] = useState(false);
  const duration = 30; // seconds for full scroll
  const accumulatedTimeRef = useRef(0);

  const bgImages = [
    "/assets/Cards_bg.png",
    "/assets/Cards_bg2.png",
    "/assets/Cards_bg3.png",
    "/assets/Cards_bg4.png",
  ];

  // Set isMounted with useEffect
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const getLink = (item) => {
    if (item.isCustomLink) {
      return item.Link;
    } else {
      const cleanLink = item.Link.replace(/^[#/]+/, "");
      return `/${lang}/${cleanLink}`;
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const sortedData = [...InfoCard.data].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  // Calculate total width needed for all cards
  const cardWidth = 320; // Approximate card width with padding
  const totalWidth = sortedData.length * cardWidth;

  // Animation logic with useLayoutEffect
// Animation logic with useLayoutEffect
useLayoutEffect(() => {
    if (!isMounted) return;

    let animationFrameId;
    let startTime;
    let lastTimestamp = 0;
    
    // Read from the ref's .current property
    accumulatedTimeRef.current = scrollProgressRef.current * duration * 1000;

    const animateScroll = (timestamp) => {
        if (!isMounted) return;

        if (!startTime) startTime = timestamp;
        if (lastTimestamp === 0) lastTimestamp = timestamp;

        if (!isHovered) {
            const delta = timestamp - lastTimestamp;
            accumulatedTimeRef.current += delta;
        }

        lastTimestamp = timestamp;

        const currentProgress = (accumulatedTimeRef.current / 1000) % duration / duration;
        
        // Write to the ref's .current property instead of setting state
        scrollProgressRef.current = currentProgress;

        const xPos = -currentProgress * totalWidth * 2;

        controls
            .start({
                x: xPos,
                transition: { duration: 0 },
            })
            .catch((error) => console.error("Animation error:", error));

        animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    };
    // The dependency array is now correct and doesn't need scrollProgressRef
}, [isHovered, totalWidth, isMounted, controls, duration]);
  return (
    <div
      className="px-4 py-6 md:px-8 lg:px-12 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex"
        animate={controls}
        style={{ width: `${totalWidth * 2}px` }} // Double width for seamless loop
      >
        {/* Original items */}
        {sortedData.map((item, idx) => {
          const bgImage = bgImages[idx % bgImages.length];
          const title = lang === "hi" ? item.HiName : item.EnName;

          return (
            <motion.div
              key={`${item._id}-${idx}`}
              className="px-2 py-5 flex-shrink-0"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={idx}
              whileHover="hover"
              style={{ width: `${cardWidth}px` }}
            >
              <a
                href={getLink(item)}
                target={item.isCustomLink ? "_blank" : "_self"}
                className="relative flex w-60 sm:w-72 md:w-80 lg:w-78 min-h-40 rounded-xl shadow-md overflow-hidden"
              >
                <Image
                  src={bgImage}
                  alt={title}
                  fill
                  className="object-cover"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <span className="text-white font-semibold text-base sm:text-lg md:text-xl text-center leading-snug">
                    {title}
                  </span>
                </div>
              </a>
            </motion.div>
          );
        })}

        {/* Duplicate items for seamless looping */}
        {sortedData.map((item, idx) => {
          const bgImage = bgImages[idx % bgImages.length];
          const title = lang === "hi" ? item.HiName : item.EnName;

          return (
            <motion.div
              key={`${item._id}-dup-${idx}`}
              className="px-2 py-5 flex-shrink-0"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={idx}
              whileHover="hover"
              style={{ width: `${cardWidth}px` }}
            >
              <a
                href={getLink(item)}
                target={item.isCustomLink ? "_blank" : "_self"}
                className="relative flex w-60 sm:w-72 md:w-80 lg:w-78 min-h-40 rounded-xl shadow-md overflow-hidden"
              >
                <Image
                  src={bgImage}
                  alt={title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <span className="text-white font-semibold text-base sm:text-lg md:text-xl text-center leading-snug">
                    {title}
                  </span>
                </div>
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default InfoCardList;