'use client';
import React from 'react';
import Image from 'next/image';
import { BsFillCameraReelsFill } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { FaRegArrowAltCircleRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const Gallary = ({ ImageGallery }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const { lang } = useParams();
  const isHindi = lang === 'hi';

  const currentPage = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 20;
  const totalPages = ImageGallery?.pagination?.pages || 1;

  const handlePagination = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="w-full bg-white shadow-md px-6 py-6 flex justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-6 max-w-5xl w-full">
          <div className="relative w-[100px] h-[100px] mb-4 sm:mb-0">
            <Image height={1000} width={1000} src="/assets/strip2.png" alt="img3" className="w-[80px] h-[80px] object-cover absolute rotate-[15deg] top-[30px] left-[20px] z-10 shadow-lg border border-white" />
            <Image height={1000} width={1000} src="/assets/strip3.png" alt="img2" className="w-[80px] h-[80px] object-cover absolute rotate-[-10deg] top-[10px] left-[10px] z-20 shadow-lg border border-white" />
            <Image height={1000} width={1000} src="/assets/sari.png" alt="img1" className="w-[80px] h-[80px] object-cover absolute rotate-[5deg] top-0 left-0 z-30 shadow-lg border border-white" />
          </div>

          <div className="text-center flex-1 flex flex-col items-center px-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {isHindi ? 'एनएचडीसी गैलरी में आपका स्वागत है' : 'Welcome to the NHDC Gallery'}
            </h1>
            <p className="text-gray-600 mt-1 text-sm max-w-xl">
              {isHindi ? 'भारत की समृद्ध हैंडलूम विरासत और उसे संजोने में एनएचडीसी के प्रयासों की एक दृश्य यात्रा' : 'A visual journey through India\'s rich handloom heritage and NHDC\'s enduring efforts to nurture it'}
            </p>
            {/* <div className="mt-2 flex justify-center gap-6">
              <button className="flex items-center gap-2 text-sm font-semibold border border-blue-600 text-blue-600 px-3 py-1 rounded hover:bg-blue-50 transition">
                <BsFillCameraReelsFill />
                <span>{isHindi ? 'इन फोकस' : 'In Focus'}</span>
              </button>
              <button className="flex items-center gap-2 text-sm font-semibold border-b-2 border-black text-black hover:text-black transition">
                <RiInboxArchiveLine />
                <span>{isHindi ? 'आर्काइव' : 'Archive'}</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6 py-4">
        {ImageGallery?.data?.map((item, idx) => (
          <Link 
            key={idx} 
            href={`/${lang}/Photo-Gallery/${item.slug}`}
            className="relative w-full bg-white rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition"
          >
            <div className="w-full aspect-[5/3] relative">
              <Image 
                height={1000} 
                width={1000} 
                  src={`${process.env.NEXT_PUBLIC_STORAGE}${item.coverImage}`}
                alt={isHindi ? item.HiName : item.EnName} 
                className="w-full h-full object-cover rounded-t" 
              />
            </div>
            <div className="flex justify-between items-center px-4 py-3 bg-[#5a0000] text-white text-sm font-medium min-h-[55px]">
              <span className="truncate">{isHindi ? item.HiName : item.EnName}</span>
              <FaRegArrowAltCircleRight className="text-lg flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center py-8 gap-2">
          <button
            onClick={() => handlePagination(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <FaChevronLeft />
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            return (
              <button
                key={pageNum}
                onClick={() => handlePagination(pageNum)}
                className={`w-10 h-10 rounded-full ${currentPage === pageNum ? 'bg-[#5a0000] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => handlePagination(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallary;