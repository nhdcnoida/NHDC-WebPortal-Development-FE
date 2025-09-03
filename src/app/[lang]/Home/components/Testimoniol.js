"use client"

import React, { useRef } from "react"
import Slider from "react-slick"
import { Quote } from "lucide-react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useParams } from "next/navigation"

// Custom next arrow
function NextArrow(props) {
  const { onClick } = props
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F7D7D8",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 10,
      }}
    >
      <span style={{ color: "white", fontSize: "18px" }}>›</span>
    </div>
  )
}

// Custom previous arrow
function PrevArrow(props) {
  const { onClick } = props
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F7D7D8",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        position: "absolute",
        left: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 10,
      }}
    >
      <span style={{ color: "white", fontSize: "18px" }}>‹</span>
    </div>
  )
}

export default function TestimonialsSection({Data}) {
  const ref = useRef(null)
  const {lang} = useParams();
  const isInView = useInView(ref, { once: true, margin: "-100px" })






  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const quoteVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
  }

  const trustBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.8 } },
  }

  const headerText = {
    en: {
      title: "Voices of our Stakeholders",
      subtitle:
        "Hear from master weavers, artisans, entrepreneurs, and industry leaders who have experienced the transformative impact of NHDC's handloom development initiatives.",
      badge: "Empowering 10,000+ weavers and artisans across India",
    },
    hi: {
      title: "हमारे हितधारकों की आवाज़ें",
      subtitle:
        "मास्टर बुनकरों, कारीगरों, उद्यमियों और उद्योग के नेताओं से सुनें जिन्होंने एनएचडीसी की हथकरघा विकास पहलों के परिवर्तनकारी प्रभाव का अनुभव किया है।",
      badge: "भारत भर में 10,000+ बुनकरों और कारीगरों को सशक्त बनाना",
    },
  };

  return (
    <section ref={ref} className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.03, scale: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#F7D7D8]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.02, scale: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#F7D7D8]"
        />
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {lang === "hi" ? headerText.hi.title : headerText.en.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {lang === "hi" ? headerText.hi.subtitle : headerText.en.subtitle}
          </p>
        </motion.div>

        {/* Slider */}
        <Slider {...settings}>
          {Data.data.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="px-4 h-[28rem]">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-[26rem] m-[5px] border border-[#f7d7d833]">
                <div className="flex items-start gap-2 mb-1 flex-grow h-[14rem]" title={lang === "hi" ? t.content_hi : t.content_en}>
                  <Quote className="h-5 w-5 flex-shrink-0 mt-1 text-[#F7D7D8]" />
                  <p className="text-gray-700 leading-relaxed italic line-clamp-10 text-[12px] font-semibold overflow-hidden"  >
                    {lang === "hi" ? t.content_hi : t.content_en}
                  </p>
                </div>
                <div className="flex items-center h-[9rem] gap-2 border-t border-gray-100">
                  <Image
                   
                          src={`${process.env.NEXT_PUBLIC_STORAGE}${t.avatar}` || "/placeholder.svg"}
                    alt={lang === "hi" ? t.name_hi : t.name_en || "Testimonial Avatar"}
                    width={60}
                    height={60}
                    
                    loading="lazy"
                    className="rounded-full object-cover mt-3 ring-2 ring-[#F7D7D8]/20"
                  />
                  <div className=" flex flex-col gap-1 ">
                    <h4 className="font-semibold text-sm text-gray-900">
                     <span
                     dangerouslySetInnerHTML={{
    __html: lang === "hi" ? t.name_hi : t.name_en
  }}
                     />
                    </h4>
                    <p className="text-sm font-medium text-[#D97706]">
                      {lang === "hi" ? t.role_hi : t.role_en}
                    </p>
                    <p className="text-xs text-gray-500">
                      {lang === "hi" ? t.location_hi : t.location_en}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>

        {/* Badge */}
      
      </div>
    </section>
  );
}
