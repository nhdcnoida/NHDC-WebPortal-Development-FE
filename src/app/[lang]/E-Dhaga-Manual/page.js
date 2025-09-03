'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const manuals = [
  { language: 'English', images: ['/assets/edhagaM1.jpg', '/assets/edhagaM2.jpg'] },
  { language: 'Hindi', images: ['/assets/edhagaM3.jpg', '/assets/edhagaM4.jpg'] },
  { language: 'Bengla', images: ['/assets/edhagaM5.jpg', '/assets/edhagaM6.jpg'] },
  { language: 'Urdu', images: ['/assets/edhagaM7.jpg', '/assets/edhagaM8.jpg'] },
  { language: 'Kannada', images: ['/assets/edhagaM9.jpg', '/assets/edhaga0.jpg'] },
  { language: 'Tamil', images: ['/assets/edhagaM11.jpg', '/assets/edhagaM12.jpg'] },
  { language: 'Telugu', images: ['/assets/edhagaM13.jpg', '/assets/edhagaM14.jpg'] },
  { language: 'Malyalam', images: ['/assets/edhagaM15.jpg', '/assets/edhagaM16.jpg'] },
  { language: 'Odia', images: ['/assets/edhagaM17.jpg', '/assets/edhagaM18.jpg'] },
];

// Hindi translations
const languageNamesHindi = {
  English: 'अंग्रेज़ी',
  Hindi: 'हिंदी',
  Bengla: 'बांग्ला',
  Urdu: 'उर्दू',
  Kannada: 'कन्नड़',
  Tamil: 'तमिल',
  Telugu: 'तेलुगु',
  Malyalam: 'मलयालम',
  Odia: 'उड़िया',
};

export default function Page() {
  const { lang } = useParams();
  const isHindi = lang === 'hi';

  const [popupOpen, setPopupOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPopup = (images, index) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setPopupOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-10">
        {isHindi ? 'उपयोगकर्ता पुस्तिका' : 'User Manual'}
      </h1>

      {manuals.map((manual) => (
        <div key={manual.language} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {isHindi
              ? `ईधागा (मोबाइल ऐप) के लिए उपयोगकर्ता पुस्तिका - ${languageNamesHindi[manual.language]}`
              : `User Manual for eDhaga (Mobile App) - ${manual.language}`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {manual.images.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow border cursor-pointer"
                onClick={() => openPopup(manual.images, index)}
              >
                <Image
                  src={src}
                  alt={
                    isHindi
                      ? `${languageNamesHindi[manual.language]} पुस्तिका ${index + 1}`
                      : `${manual.language} Manual ${index + 1}`
                  }
                  width={600}
                  height={400}
                  className="w-full h-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Popup Modal */}
      {popupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setPopupOpen(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // prevent close on image click
          >
            <Image
              src={currentImages[currentIndex]}
              alt="Popup Image"
              width={800}
              height={600}
              className="rounded-lg"
            />
            {/* Next Button */}
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
