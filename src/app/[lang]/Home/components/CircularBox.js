"use client"

import { useEffect, useState } from "react"
import { Infinity, Ruler, LinkIcon as Thread } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function HandloomAnimation({ Circular }) {
  const [windowWidth, setWindowWidth] = useState(1200)
  const [isAnyItemHovered, setIsAnyItemHovered] = useState(false)
  const { lang } = useParams();

  useEffect(() => {
    // Get initial window width
    setWindowWidth(window.innerWidth)

    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calculate responsive dimensions - 70% width
  const containerWidth = windowWidth * 0.7 // 70% of screen width
  const containerHeight = containerWidth / 2 + 100 // Semi-circle height + padding
  const radius = containerWidth / 2 - 60 // Radius with padding
  const centerX = containerWidth / 2
  const centerY = containerHeight - 80 // Position center near bottom
  const animationDuration = 20 // Increased from 12 to 20 seconds for slower animation

  // Function to generate the correct link
  const getLink = (item) => {
    if (item.isCustomLink) {
      return item.Link; // Use full URL for custom links
    } else {
      return `/${lang}${item.Link}`; // Prepend language path for internal links
    }
  };



  // Responsive item size
  const itemSize = windowWidth < 768 ? 180 : 150

  return (
    <>
      {/* Static grid of handloom items */}
      <section
        className="w-full px-4 py-6 md:hidden"
        
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 place-items-center">
          {Circular?.items?.map((item, index) => (
            <Link
              key={index}
              href={getLink(item)}
              target={item.isCustomLink ? "_blank" : "_self"}
              className="group flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <div
                className={`rounded-full ${item.color} flex items-center justify-center shadow-md`}
                style={{
                  width: windowWidth < 768 ? "70px" : "100px",
                  height: windowWidth < 768 ? "70px" : "100px",
                  border: `${windowWidth < 768 ? "3px" : "4px"} solid #F7D7D8`,
                  padding: windowWidth < 768 ? "8px" : "12px",
                }}
              >
                <div style={{ width: "70px", height: "70px", position: "relative" }}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE}${item.ImageLink}`}
                    alt={lang === "hi" ? item.HiName : item.EnName || "Handloom Item"}
                    title={lang === "hi" ? item.HiName : item.EnName}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="text-center mt-2">
                <div
                  className="font-semibold text-[#be185d]"
                  style={{
                    fontSize: windowWidth < 768 ? "10px" : "12px",
                  }}
                >
                  {lang === "hi" ? item.HiName : item.EnName}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="relative overflow-hidden flex items-center justify-center max-md:hidden"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom right, #F7D7D8, #FDF2F8, white)",
          padding: "5vh 15vw", // 15% left/right spacing for 70% content width
        }}

        
      >
        <span className="absolute bottom-30 w-[27rem] h-[27rem]  bg-transparent">
          <Image className=" bg-transparent" src={"/Tantu_noBg.png"} alt="Logo" height={1000} width={1000}/>
        </span>
        {/* Background decorative elements - handloom patterns */}
        <div className="absolute inset-0  bg-opacity-10 hidden">
          {/* Weaving pattern background */}
          <div className="absolute inset-0" style={{ opacity: 0.05 }}>
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23F472B6' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              }}
            ></div>
          </div>

          {/* Floating thread elements */}
          <div
            className="absolute opacity-100 w-40 h-40"
            style={{
              top: "80px",
              left: "40px",
              opacity: 0.2,
              // animation: `spin 30s linear infinite ${isAnyItemHovered ? 'paused' : 'running'}`,
            }}
          >
            <Image src="/music.png" alt="Thread" fill />
          </div>
          <div
            className="absolute w-32 h-32 hidden"
            style={{
              top: "240px",
              right: "80px",
              opacity: 0.2,
              animation: `spin 25s linear infinite reverse ${isAnyItemHovered ? 'paused' : 'running'}`,
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M20,20 L80,20 L80,80 L20,80 Z"
                stroke="#EC4899"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
          <div
            className="absolute w-48 h-48 hidden "
            style={{
              bottom: "160px",
              left: "25%",
              opacity: 0.2,
              animation: `spin 40s linear infinite ${isAnyItemHovered ? 'paused' : 'running'}`,
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full ">
              <path
                d="M10,10 L90,10 L90,90 L10,90 Z M30,30 L70,30 L70,70 L30,70 Z"
                stroke="#EC4899"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Main container - 70% width */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: `${containerWidth}px`,
            height: `${containerHeight}px`,
            maxWidth: "100%",
          }}
        >
          {/* SVG Semi-circular path */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width={containerWidth}
              height={containerHeight}
              viewBox={`0 0 ${containerWidth} ${containerHeight}`}
              className="absolute"
            >
              {/* Semi-circular path */}
              <path
                d={`M 60 ${centerY} A ${radius} ${radius} 0 0 1 ${containerWidth - 60} ${centerY}`}
                stroke="url(#handloomGradient)"
                strokeWidth={windowWidth < 768 ? "6" : "10"}
                fill="none"
                strokeDasharray="15,8"
                style={{
                  filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                  animation: isAnyItemHovered ? 'none' : 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient id="handloomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F7D7D8" />
                  <stop offset="25%" stopColor="#F472B6" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="75%" stopColor="#F472B6" />
                  <stop offset="100%" stopColor="#F7D7D8" />
                </linearGradient>
              </defs>

              {/* Path markers along the semi-circle */}
              {Array.from({ length: 12 }, (_, i) => {
                const angle = (i * 180) / 11 - 90
                const radian = (angle * Math.PI) / 180
                const x = centerX + radius * Math.cos(radian)
                const y = centerY + radius * Math.sin(radian)
                return (
                  <g key={i} transform={`translate(${x}, ${y})`}>
                    <circle
                      r={windowWidth < 768 ? "3" : "4"}
                      fill="#EC4899"
                      style={{
                        animation: isAnyItemHovered ? 'none' : `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite ${i * 0.2}s`
                      }}
                    />
                    <path
                      d="M-2,-2 L2,2 M-2,2 L2,-2"
                      stroke="#EC4899"
                      strokeWidth="1"
                      style={{
                        animation: isAnyItemHovered ? 'none' : `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite ${i * 0.2 + 0.1}s`
                      }}
                    />
                  </g>
                )
              })}

              {/* Decorative elements - thread patterns */}
              <g style={{
                animation: isAnyItemHovered ? 'none' : 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}>
                <path
                  d={`M ${centerX - 100} ${centerY - 50} Q ${centerX} ${centerY - 150}, ${centerX + 100} ${centerY - 50}`}
                  stroke="#F472B6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </g>
              <g
                style={{
                  animation: isAnyItemHovered ? 'none' : `pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s`
                }}
              >
                <path
                  d={`M ${centerX - 150} ${centerY - 30} Q ${centerX} ${centerY - 200}, ${centerX + 150} ${centerY - 30}`}
                  stroke="#F472B6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </g>
            </svg>
          </div>

          {/* Moving handloom items along the semi-circular path */}
          <div className="absolute inset-0">
            {Circular?.items?.map((item, index) => (
              <Link key={index} href={getLink(item)} target={item.isCustomLink ? "_blank" : "_self"}>
                <div
                  key={`logo-${index}`}
                  className="absolute moving-item"
                  style={{
                    width: `${itemSize}px`,
                    height: `${itemSize}px`,
                    left: `${centerX}px`,
                    top: `${centerY}px`,
                    marginLeft: `-${itemSize / 2}px`,
                    marginTop: `-${itemSize / 2}px`,
                    animation: `moveAlongSemiCircle 30s linear infinite ${index * 2.5}s ${isAnyItemHovered ? 'paused' : 'running'}`,
                    zIndex: 10 + index,
                  }}
                  onMouseEnter={() => {
                    setIsAnyItemHovered(true)
                  }}
                  onMouseLeave={() => {
                    setIsAnyItemHovered(false)
                  }}
                >
                  <div
                    className={`w-full h-full ${item.color} rounded-full flex flex-col items-center justify-center transition-all duration-300 hover:scale-110`}
                    style={{
                      boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.2)",
                      border: `${windowWidth < 768 ? "3px" : "4px"} solid #F7D7D8`,
                      padding: windowWidth < 768 ? "8px" : "12px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#fb7185"
                      e.currentTarget.style.boxShadow = "0 20px 45px -5px rgba(0, 0, 0, 0.3)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#F7D7D8"
                      e.currentTarget.style.boxShadow = "0 15px 35px -5px rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    <div style={{ position: 'relative', width: '70px', height: '70px' }}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STORAGE}${item.ImageLink}`}
                        alt={lang === 'hi' ? item.HiName : item.EnName}
                        title={lang === 'hi' ? item.HiName : item.EnName}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-contain"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>

                    <div className="text-center mt-1">
                      <div
                        className="font-bold"
                        style={{
                          color: "#be185d",
                          fontSize: windowWidth < 768 ? "10px" : "12px",
                        }}
                      >
                        {lang === 'hi' ? item.HiName : item.EnName}
                      </div>
                    </div>
                  </div>

                  {/* Trailing thread effect */}
                  <div
                    className="absolute top-1/2 left-1/2 h-1 -z-10 trailing-thread"
                    style={{
                      width: windowWidth < 768 ? "15px" : "25px",
                      background: "linear-gradient(90deg, #F7D7D8, transparent)",
                      transformOrigin: "left center",
                      animation: `followSemiCircle 30s linear infinite ${index * 2.5}s ${isAnyItemHovered ? 'paused' : 'running'}`,
                    }}
                  ></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Floating handloom elements */}
          <div
            className="absolute"
            style={{
              left: "25%",
              top: "25%",
              animation: isAnyItemHovered ? 'none' : `float 5s ease-in-out infinite`
            }}
          >
            <div
              className="p-3 rounded-full"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(4px)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* <Infinity className="w-8 h-8" style={{ color: "#dc2626" }} /> */}
            </div>
          </div>

          <div
            className="absolute hidden"
            style={{
              right: "25%",
              top: "33.333333%",
              animation: isAnyItemHovered ? 'none' : `float 5s ease-in-out infinite 1.5s`
            }}
          >
            <div
              className="p-3 rounded-full"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(4px)",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Ruler className="w-8 h-8" style={{ color: "#dc2626" }} />
            </div>
          </div>

          {/* Weaving animation in center */}
          <div
            className="absolute hidden"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="relative"
              style={{
                width: windowWidth < 768 ? "80px" : "120px",
                height: windowWidth < 768 ? "80px" : "120px",
              }}
            >
              {/* Horizontal threads */}
              {Array.from({ length: windowWidth < 768 ? 6 : 8 }, (_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute h-1 left-0 right-0"
                  style={{
                    top: `${i * (windowWidth < 768 ? 4 : 5) + 2}px`,
                    backgroundColor: "#fda4af",
                    animation: isAnyItemHovered ? 'none' : `weaveHorizontal 3s infinite ${i * 0.2}s`
                  }}
                ></div>
              ))}

              {/* Vertical threads */}
              {Array.from({ length: windowWidth < 768 ? 6 : 8 }, (_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute w-1 top-0 bottom-0"
                  style={{
                    left: `${i * (windowWidth < 768 ? 4 : 5) + 2}px`,
                    backgroundColor: "#ec4899",
                    animation: isAnyItemHovered ? 'none' : `weaveVertical 3s infinite ${i * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes moveAlongSemiCircle {
              0% {
                transform: rotate(-90deg) translateY(-${radius}px) rotate(90deg);
              }
              50% {
                transform: rotate(90deg) translateY(-${radius}px) rotate(-90deg);
              }
              100% {
                transform: rotate(270deg) translateY(-${radius}px) rotate(-270deg);
              }
            }

            @keyframes followSemiCircle {
              0% {
                transform: rotate(-90deg) scaleX(0);
                opacity: 0;
              }
              8% {
                transform: rotate(-90deg) scaleX(4);
                opacity: 0.7;
              }
              42% {
                transform: rotate(90deg) scaleX(4);
                opacity: 0.7;
              }
              50% {
                transform: rotate(90deg) scaleX(0);
                opacity: 0;
              }
              58% {
                transform: rotate(90deg) scaleX(4);
                opacity: 0.7;
              }
              92% {
                transform: rotate(270deg) scaleX(4);
                opacity: 0.7;
              }
              100% {
                transform: rotate(270deg) scaleX(0);
                opacity: 0;
              }
            }
            
            @keyframes weaveHorizontal {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(5px); }
            }
            
            @keyframes weaveVertical {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(5px); }
            }
            
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-15px); }
            }
            
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            
            @keyframes pulse {
              0%, 100% {
                opacity: 1;
              }
              50% {
                opacity: .5;
              }
            }
          `}
        </style>
      </section>
    </>
  )
}