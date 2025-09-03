'use client';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ProfileCard({ image, name, title, email, phone, moreInfo }) {
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();
  const isHindi = pathname.includes('/hi');

  return (
    <>
      {/* Card */}
      <div
        className="relative bg-[#f8e5e3] text-brown p-4 rounded-2xl text-center flex flex-col items-center shadow-lg transition-transform duration-300 hover:scale-105"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <Image
        height={1000}
        width={1000}
          src={image}
          alt={name}
          className="w-24 h-24 object-fill p-[1px] rounded-full border-4 border-white mb-2"
        />
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="text-sm whitespace-pre-line">{title}</p>
        <a href={`mailto:${email}`} className="text-sm underline">{email}</a>
        <a href={`tel:${phone}`} className="text-sm block">{phone}</a>

        {/* Show Read More button on hover */}
        {showButton && (
          <button
            onClick={() => setShowModal(true)}
            className="mt-3 bg-[#f58220] text-white px-4 py-1 rounded-full text-sm shadow hover:bg-orange-600 transition"
          >
            {isHindi ? "अधिक पढ़ें" : "Read More"}
          </button>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white max-w-2xl w-full rounded-md shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-4 text-2xl font-semibold text-gray-500 hover:text-red-600"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
            <h3 className="text-sm text-gray-600 mb-4">{title}</h3>
            <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
              {moreInfo?.trim()
                ? moreInfo
                : isHindi
                ? "अधिक जानकारी जल्द ही उपलब्ध होगी।"
                : "More information coming soon."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
