'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'next/navigation';

// Custom Left Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-0 -translate-y-1/2 w-9 h-14 sm:w-10 sm:h-16 bg-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.8)] z-20 rounded-r-full flex items-center justify-center cursor-pointer"
    onClick={onClick}
  >
    <Image src="/assets/arrow_left.png"   style={{ width: "auto", height: "auto" }}
 alt="Left" width={14} height={14} />
  </div>
);

// Custom Right Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-0 -translate-y-1/2 w-9 h-14 sm:w-10 sm:h-16 bg-[rgba(255,255,255,0.6)] hover:bg-[rgba(255,255,255,0.8)] z-20 rounded-l-full flex items-center justify-center cursor-pointer"
    onClick={onClick}
  >
    <Image  src="/assets/arrow_right.png"   style={{ width: "auto", height: "auto" }}
 alt="Right" width={14} height={14} />
  </div>
);

export default function SlickCarousel({ carouselData }) {
  const { lang } = useParams();

  if (!carouselData?.data?.length) return null;
  
  const {
    autoplay = true,
    autoplaySpeed = 4000,
    arrows = true,
    dots = false,
    infinite = true,
    speed = 600,
    captchaText = 'CAPTCHA: NHDC24',
  } = carouselData.settings || {};

  const settings = {
    autoplay,
    autoplaySpeed,
    arrows,
    dots,
    infinite,
    speed,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
   

    <div className="absolute inset-0 pt-10 px-4 sm:px-6 md:px-10 z-10 flex">
      <div className="relative w-full max-w-[820px] h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-lg">
        <Slider {...settings}>
          {carouselData.data.map((img, idx) => (
            <div key={idx} className="relative bg-[#F7D7D8] w-full h-[200px] sm:h-[250px] md:h-[300px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_STORAGE}${img.url}`}
                alt={lang === 'hi' ? img.HiCaption : img.EnCaption}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 820px"
                className=" object-center rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs sm:text-sm text-center py-1 rounded-b-lg">
                 {lang === 'hi' ? img.HiCaption : img.EnCaption}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}