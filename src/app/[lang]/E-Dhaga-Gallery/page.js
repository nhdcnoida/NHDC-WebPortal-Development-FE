'use client';

import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import { useParams } from 'next/navigation';

const images = [
  '/assets/1.jpg', '/assets/2.jpg', '/assets/3.jpg',
  '/assets/4.jpg', '/assets/5.jpg', '/assets/6.jpg',
  '/assets/7.jpg', '/assets/8.jpg', '/assets/9.jpg',
  '/assets/1.jpg', '/assets/4.jpg', '/assets/5.jpg',
  '/assets/6.jpg', '/assets/7.jpg'
];

export default function Page() {
  const [popupImage, setPopupImage] = useState(null);
  const { lang } = useParams();

  const text = {
    en: {
      heading: "Welcome to the E-Dhaga Media Gallery",
      description: "Explore the E-Dhaga Media Gallery showcasing events, activities, and memories captured in vibrant photographs."
    },
    hi: {
      heading: "ई-धागा मीडिया गैलरी में आपका स्वागत है",
      description: "ई-धागा मीडिया गैलरी देखें जिसमें आयोजनों, गतिविधियों और यादों की जीवंत तस्वीरें शामिल हैं।"
    }
  };

  const currentText = text[lang] || text["en"];

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>{currentText.heading}</title>
        <meta name="description" content={currentText.description} />
        <meta property="og:title" content={currentText.heading} />
        <meta property="og:description" content={currentText.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/4.jpg" />
      </Head>

      <div className="bg-white min-h-screen px-4 py-8 md:px-12 lg:px-20">
        {/* ✅ Header Section: stacked images + heading */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          {/* Polaroid-style stacked images */}
          <div className="relative w-[100px] h-[100px] shrink-0">
            <Image
              width={1000}
              height={1000}
              src="/assets/4.jpg"
              alt="Gallery preview image 1"
              loading="lazy"
              className="w-[80px] h-[80px] object-contain absolute rotate-[15deg] top-[30px] left-[20px] z-10 shadow-lg border border-white bg-white transition-transform duration-300 hover:scale-110"
            />
            <Image
              width={1000}
              height={1000}
              src="/assets/5.jpg"
              alt="Gallery preview image 2"
              loading="lazy"
              className="w-[80px] h-[80px] object-contain absolute rotate-[-10deg] top-[10px] left-[10px] z-20 shadow-lg border border-white bg-white transition-transform duration-300 hover:scale-110"
            />
            <Image
              width={1000}
              height={1000}
              src="/assets/6.jpg"
              alt="Gallery preview image 3"
              loading="lazy"
              className="w-[80px] h-[80px] object-contain absolute rotate-[5deg] top-0 left-0 z-30 shadow-lg border border-white bg-white transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Heading */}
          <h1 className="text-center sm:text-left text-2xl md:text-3xl font-semibold text-gray-800">
            {currentText.heading}
          </h1>
        </div>

        {/* ✅ Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[10px] gap-y-[10px] justify-items-center">
          {images.map((imgSrc, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`Open image ${index + 1}`}
              onClick={() => setPopupImage(imgSrc)}
              onKeyDown={(e) => e.key === 'Enter' && setPopupImage(imgSrc)}
              className="w-[397px] h-[242px] relative cursor-pointer transition-transform duration-300 hover:scale-[1.05]"
            >
              <Image
                src={imgSrc}
                alt={`Event image ${index + 1}`}
                fill
                priority={index < 3} // load first 3 faster
                className="object-cover rounded shadow-md"
                sizes="(max-width: 768px) 100vw, 397px"
              />
            </div>
          ))}
        </div>

        {/* ✅ Image Popup Modal */}
        {popupImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center animate-fadeIn"
            onClick={() => setPopupImage(null)}
          >
            <div className="relative w-[90%] max-w-3xl">
              <Image
                src={popupImage}
                alt="Popup full view"
                width={1000}
                height={1000}
                className="w-full h-auto rounded shadow-lg animate-zoomIn"
              />
              <button
                aria-label="Close popup"
                className="absolute top-2 right-2 text-white text-3xl font-bold"
                onClick={() => setPopupImage(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ✅ Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        .animate-zoomIn {
          animation: zoomIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}
