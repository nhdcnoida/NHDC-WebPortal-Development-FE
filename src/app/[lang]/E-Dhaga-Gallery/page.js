'use client';

import Image from 'next/image';
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
      heading: "Welcome to the E-Dhaga Media Gallery"
    },
    hi: {
      heading: "ई-धागा मीडिया गैलरी में आपका स्वागत है"
    }
  };

  const currentText = text[lang] || text["en"];

  return (
    <div className="bg-white min-h-screen px-4 py-8 md:px-12 lg:px-20">

      {/* ✅ Header Section: stacked images + heading */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
        {/* Polaroid-style stacked images */}
        <div className="relative w-[100px] h-[100px] shrink-0">
          <Image
          width={1000}
          height={1000}
            src="/assets/4.jpg"
            alt="img3"
            className="w-[80px] h-[80px] object-contain absolute rotate-[15deg] top-[30px] left-[20px] z-10 shadow-lg border border-white bg-white"
          />
          <Image
          width={1000}
          height={1000}
            src="/assets/5.jpg"
            alt="img2"
            className="w-[80px] h-[80px] object-contain absolute rotate-[-10deg] top-[10px] left-[10px] z-20 shadow-lg border border-white bg-white"
          />
          <Image
          width={1000}
          height={1000}
            src="/assets/6.jpg"
            alt="img1"
            className="w-[80px] h-[80px] object-contain absolute rotate-[5deg] top-0 left-0 z-30 shadow-lg border border-white bg-white"
          />
        </div>

        {/* Heading */}
        <h1 className="text-center sm:text-left text-2xl md:text-3xl font-semibold text-gray-800">
          {currentText.heading}
        </h1>
      </div>

      {/* ✅ Gallery Grid (with tight gaps) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[10px] gap-y-[10px] justify-items-center">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="w-[397px] h-[242px] relative cursor-pointer"
            onClick={() => setPopupImage(imgSrc)}
          >
            <Image
            width={1000}
            height={1000}
              src={imgSrc}
              alt={`Event ${index + 1}`}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100vw, 397px"
            />
          </div>
        ))}
      </div>

      {/* ✅ Image Popup Modal */}
      {popupImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setPopupImage(null)}
        >
          <div className="relative w-[90%] max-w-3xl">
            <Image
            width={1000}
            height={1000}
              src={popupImage}
              alt="Popup"
              className="w-full h-auto rounded shadow-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={() => setPopupImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
