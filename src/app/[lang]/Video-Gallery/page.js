"use client";

import { BsCameraReelsFill } from "react-icons/bs";
import { RiInboxArchiveLine } from "react-icons/ri";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const pathname = usePathname();
  const isHindi = pathname.includes("/hi");

  // ✅ Add your video(s) here
  const videoData = [
    {
      title: "VIRAASAT",
      youtubeId: "kotX8L9uSNA",
    },
    {
      title: "NHDC Sthapana Diwas HQ",
      youtubeId: "WKVXuP1rArk",
    },
    {
      title: "Silk Fab Exhibition Vijayawada",
      youtubeId: "bNbuABpIjRU",
    },
    {
      title: "KULLU Shawl Documentary",
      youtubeId: "QXcqwSYTcW8&t",
    },
    {
      title: "India Handloom Brand TVC",
      youtubeId: "ZZr2bmMU4LY",
    },
    {
      title: "India Handloom Domestic Film",
      youtubeId: "trxjndMtMHQ&t",
      
    },
    {
      title: "IH International Brand Film",
      youtubeId: "xuDEEN4MGK0&t",
    },
    {
      title: "MINISTRY of Textiles",
      youtubeId: "jG6MH3Gox",
    },
    {
      title: "Indian Ministry on textiles on crafts",
      youtubeId: "uPqj2LZCE60&t",
    },
    {
      title: "VTS",
      youtubeId: "oGWFCBWcf1U&t",
    },
    {
      title: "Indian Handloom TVC",
      youtubeId: "3DDDEHYxDgM",
    },
    {
      title: "Ministry of textiles 10 sec",
      youtubeId: "AQt66ai4J84",
    },
    {
      title: "Minsitry of textile 30 sec",
      youtubeId: "W1OyN2vYPuo",
    },
    {
      title: "Indian Handloom TVC 2",
      youtubeId: "bdkYTa7wZSQ",
    },
    {
      title:"Handloom Day",
      youtubeId: "wlmm7nqOZhc&t",
    },
  

  ];

  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white px-4 md:px-16 lg:px-28 py-10 font-sans">
      {/* Top Section */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex flex-wrap justify-center items-center gap-6 text-center">
          {/* Filmstrip */}
          <div className="relative w-[250px] h-[100px]">
            <Image
              src="/assets/filmstrip.png"
              alt="filmstrip"
              fill
              className="object-contain"
            />
            <div className="absolute top-[25px] left-[50px] z-10 flex gap-[7px]">
              <Image height={1000} width={1000}
                src="/assets/strip1.png"
                alt="strip1"
                style={{ width: "40px", height: "48px", objectFit: "cover" }}
              />
              <Image height={1000} width={1000}
                src="/assets/strip2.png"
                alt="strip2"
                style={{ width: "55px", height: "48px", objectFit: "cover" }}
              />
              <Image height={1000} width={1000}
                src="/assets/strip3.png"
                alt="strip3"
                style={{ width: "40px", height: "48px", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
              {isHindi
                ? "एनएचडीसी वीडियो गैलरी में आपका स्वागत है"
                : "Welcome to the NHDC Video Gallery"}
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              {isHindi
                ? "भारत की हैंडलूम विरासत के पीछे की कहानियों, कौशल और आत्मा का अनुभव करें - मोशन में कैद।"
                : "Experience the stories, skills, and soul behind India's handloom legacy—captured in motion."}
            </p>
            <div className="mt-3 flex gap-4 justify-center text-sm text-gray-600">
              <span className="underline cursor-pointer flex items-center gap-1">
                <BsCameraReelsFill className="text-lg" />
                {isHindi ? "इन फोकस" : "In Focus"}
              </span>
              <span className="text-gray-400 flex items-center gap-1">
                <RiInboxArchiveLine className="text-lg" />
                {isHindi ? "आर्काइव" : "Archive"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videoData.map((video, index) => (
          <div
            key={index}
            className="w-full aspect-video shadow-md border border-gray-200 cursor-pointer relative"
            onClick={() => setPlayingIndex(index)}
          >
            {playingIndex === index ? (
              // ▶️ Video Player
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              // 🖼️ Thumbnail View
              <>
                <Image height={1000} width={1000}
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <FaPlayCircle className ="text-white text-4xl" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
