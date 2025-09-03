'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Bangers } from 'next/font/google';

const banger = Bangers({
  weight: '400',
  subsets: ['latin'],
});

export default function PopUp() {
  const [show, setShow] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

   useEffect(() => {
    const hasClosed = sessionStorage.getItem('popupClosed');
    if (!hasClosed) {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('popupClosed', 'true'); // persists until tab/browser is closed
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-2"
      style={{ background: 'rgba(0, 0, 0, 0.05)' }}
    >
      <div className="relative w-full max-w-6xl p-2">
        <button
          onClick={handleClose}
          className="absolute top-5 bg-white right-5 text-black rounded-full p-1 shadow-md z-50 hover:text-red-500"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="bg-[#0C1543] w-full h-auto md:h-[600px] rounded-md shadow-2xl overflow-hidden flex flex-col md:flex-row p-0 m-0 relative">
          <div className="w-full md:w-1/2 h-64 md:h-full relative bg-[#0C1543]">
            <Image
              src="/Popup.jpg"
              alt="The Quest for the Sacred Cloth"
              fill
              className="object-contain"
              priority
fetchPriority="high"
            />
          </div>

          <div className="w-full md:w-1/2 h-auto md:h-full text-white p-6 md:p-8 flex flex-col justify-center">
            <h3 className={`${banger.className} text-yellow-400 text-2xl md:text-7xl font-bold uppercase`}>
              Comics
            </h3>
            <h2 className="text-2xl font-bold text-yellow-400 mt-2">The Quest for the Sacred Cloth</h2>
            {/* <p className="text-sm text-gray-300 mt-1 mb-4">
              Released by Neelam Shami Rao
            </p> */}
            <p className="text-gray-200 text-sm md:text-base mb-6">
             {`Fashion curator Prasad Bidapa’s visual journey into sacred handlooms, conceptualised by Commodore Rajiv Ashok (Retd) and brought to life by Nagendra Prasad, was released by Ms Neelam Shami Rao, Secretary Textiles, GoI.`}
            </p>

            {!showVideo ? (
              <button
                className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
                onClick={() => setShowVideo(true)}
              >
                View More
              </button>
            ) : (
              <div className="mt-4">
                <video
                  controls
                  className="w-full rounded-md shadow-lg"
                >
                  <source src="https://storage.nhdc.org.in/nhdc/public/Video/WhatsApp%20Video%202025-08-06%20at%2011.40.44_096cfc94.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
