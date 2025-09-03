"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useParams, useRouter } from "next/navigation"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"
import Image from "next/image"

export default function TantuAi() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")




    
    const router = useRouter()
    const { lang } = useParams()

    const handleSearch = (e) => {
        e.preventDefault()
        if (query.trim()) {
            router.push(`/en/Ask-NHDC-Ai?q=${encodeURIComponent(query)}`)
            setIsOpen(false)
            setQuery("")
        }
    }

    // Handloom pattern animation variants
    const weavingPattern = {
        animate: {
            x: [0, 20, 0],
            y: [0, -10, 0],
            transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }

    const threadPattern = {
        animate: {
            pathLength: [0, 1, 0],
            opacity: [0.3, 1, 0.3],
            transition: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }

    return (
        <>
            {/* Floating Button with Handloom Design */}
            <motion.div
                className="fixed right-6 bottom-6 z-50"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5,
                }}
            >
                <motion.div
                    className="relative"
                    animate={{
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    {/* Decorative threads around button */}
                    <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: `conic-gradient(from 0deg, #F7D7D8, #e8b4b8, #d4919a, #F7D7D8)`,
                        }}
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />

                    <motion.button
                        onClick={() => setIsOpen(true)}

                        className="relative bg-gradient-to-br from-[#F7D7D8] via-[#f0c5c7] to-[#e8b4b8] text-[#444444]  rounded-full shadow-xl transition-all duration-300 border-2 border-white/50"
                        whileHover={{
                            scale: 1.15,
                            boxShadow: "0 15px 35px rgba(247, 215, 216, 0.6)",
                        }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                            y: [0, -8, 0],
                            boxShadow: [
                                "0 5px 15px rgba(247, 215, 216, 0.3)",
                                "0 10px 25px rgba(247, 215, 216, 0.5)",
                                "0 5px 15px rgba(247, 215, 216, 0.3)",
                            ],
                        }}
                        transition={{
                            y: {
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            },
                            boxShadow: {
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        {/* {lang === "hi" ? (
  <Image
    src="/hiTantu.png"
    alt="Tantu AI Hindi"
    width={1000}
    height={1000}
    className="w-12 h-12 relative z-10"
  />
) : (
  <Image
    src="/enTantu.png"
    alt="Tantu AI English"
    width={1000}
    height={1000}
    className="w-12 h-12 relative z-10"
  />
)} */}

                        {/* <MessageCircle className="w-12 h-12 relative z-10" /> */}
                    

                        <figure className="w-20 h-20 relative z-10">
                                <Image src={"https://storage.nhdc.org.in/nhdc/public/Uploads/askTantuLogo.png"} title="Tantu AI" priority quality={50}  height={1000} width={1000} alt="tantu"/>
                        </figure>

                        {/* Sparkle effects */}
                        <motion.div
                            className="absolute top-1 right-1"
                            animate={{
                                scale: [0, 1, 0],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: 0.5,
                            }}
                        >
                            <Sparkles className="w-3 h-3 text-yellow-400" />
                        </motion.div>
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Popup Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop with weaving pattern */}
                        <motion.div
                            className="fixed inset-0 z-40 overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        >
                            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

                            {/* Animated weaving pattern background */}
                            <svg className="absolute inset-0 w-full h-full opacity-10">
                                <defs>
                                    <pattern id="weave" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <motion.rect width="20" height="40" fill="#F7D7D8" variants={weavingPattern} animate="animate" />
                                        <motion.rect
                                            x="20"
                                            width="20"
                                            height="40"
                                            fill="#e8b4b8"
                                            variants={weavingPattern}
                                            animate="animate"
                                            transition={{ delay: 0.5 }}
                                        />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#weave)" />
                            </svg>
                        </motion.div>

                        {/* Popup Container */}
                        <motion.div
                            className="fixed right-0 top-0 h-full w-full max-w-md z-50 overflow-hidden"
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                        >
                            {/* Main container with handloom-inspired design */}
                            <div className="h-full bg-gradient-to-b from-white via-[#fefcfc] to-[#fdf9f9] shadow-2xl relative overflow-hidden">
                                {/* Decorative thread patterns */}
                                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                                    <motion.path
                                        d="M0,50 Q100,10 200,50 T400,50"
                                        stroke="#F7D7D8"
                                        strokeWidth="2"
                                        fill="none"
                                        variants={threadPattern}
                                        animate="animate"
                                    />
                                    <motion.path
                                        d="M0,150 Q100,110 200,150 T400,150"
                                        stroke="#e8b4b8"
                                        strokeWidth="2"
                                        fill="none"
                                        variants={threadPattern}
                                        animate="animate"
                                        transition={{ delay: 1 }}
                                    />
                                    <motion.path
                                        d="M0,250 Q100,210 200,250 T400,250"
                                        stroke="#d4919a"
                                        strokeWidth="2"
                                        fill="none"
                                        variants={threadPattern}
                                        animate="animate"
                                        transition={{ delay: 2 }}
                                    />
                                </svg>

                                {/* Header with traditional pattern */}
                                <motion.div
                                    className="relative p-6 overflow-hidden"
                                    initial={{ y: -50 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {/* Animated gradient background */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-[#F7D7D8] via-[#f0c5c7] to-[#e8b4b8]"
                                        animate={{
                                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "linear",
                                        }}
                                    />

                                    {/* Traditional border pattern */}
                                    <motion.div
                                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4919a] to-transparent"
                                        animate={{
                                            scaleX: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    <div className="flex items-center justify-between relative z-10">
                                        <div>
                                            <motion.h2
                                                className="text-2xl font-bold flex items-center gap-2 text-[#444444] mb-1"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                               <span className=" w-10 h-10"><Image src="/Tantu_noBg.png" alt="Logo"  height={1000} width={1000} /></span>
                                                <span>{lang === "hi" ? "तंतु AI" : "Tantu AI"}</span>
                                            </motion.h2>
                                            <motion.p
                                                className="text-sm text-[#666666] font-medium"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                {lang === "hi" ? "हथकरघा विशेषज्ञ सहायक" : "Handloom Expert Assistant"}
                                            </motion.p>
                                        </div>
                                        <motion.button
                                            onClick={() => setIsOpen(false)}
                                            className="p-2 hover:bg-white/30 rounded-full transition-all duration-200 backdrop-blur-sm"
                                            whileHover={{ scale: 1.1, rotate: 90 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <X className="w-5 h-5 text-[#444444]" />
                                        </motion.button>
                                    </div>
                                </motion.div>

                                {/* Content Area */}
                                <div className="p-6 h-full flex flex-col relative">
                                    {/* Decorative loom illustration */}
                                    <motion.div
                                        className="absolute top-4 right-4 opacity-10"
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <svg width="60" height="60" viewBox="0 0 60 60">
                                            <motion.rect
                                                x="10"
                                                y="10"
                                                width="40"
                                                height="40"
                                                fill="none"
                                                stroke="#F7D7D8"
                                                strokeWidth="2"
                                                rx="5"
                                                animate={{
                                                    strokeDasharray: ["0 200", "100 200", "0 200"],
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                            <motion.line
                                                x1="20"
                                                y1="10"
                                                x2="20"
                                                y2="50"
                                                stroke="#e8b4b8"
                                                strokeWidth="1"
                                                animate={{
                                                    opacity: [0.3, 1, 0.3],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    delay: 0.5,
                                                }}
                                            />
                                            <motion.line
                                                x1="30"
                                                y1="10"
                                                x2="30"
                                                y2="50"
                                                stroke="#d4919a"
                                                strokeWidth="1"
                                                animate={{
                                                    opacity: [0.3, 1, 0.3],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    delay: 1,
                                                }}
                                            />
                                            <motion.line
                                                x1="40"
                                                y1="10"
                                                x2="40"
                                                y2="50"
                                                stroke="#F7D7D8"
                                                strokeWidth="1"
                                                animate={{
                                                    opacity: [0.3, 1, 0.3],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    delay: 1.5,
                                                }}
                                            />
                                        </svg>
                                    </motion.div>

                                    <motion.div
                                        className="flex-1 space-y-6 relative z-10"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {/* Welcome message with traditional motif */}
                                        <motion.div
                                            className="bg-gradient-to-r from-[#F7D7D8]/20 to-[#e8b4b8]/20 p-4 rounded-xl border border-[#F7D7D8]/30 backdrop-blur-sm"
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <motion.div
                                                className="flex items-center gap-3 mb-2"
                                                animate={{
                                                    x: [0, 5, 0],
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <span className="text-2xl">🪡</span>
                                                <h3 className="font-semibold text-[#444444]">{lang === "hi" ? "नमस्कार!" : "Welcome!"}</h3>
                                            </motion.div>
                                            <p className="text-sm text-[#666666] leading-relaxed">
                                                {lang === "hi"
                                                    ? "मैं तंतु AI हूँ, आपका हथकरघा विशेषज्ञ। मुझसे हथकरघा, बुनाई, पारंपरिक कपड़े और NHDC की सेवाओं के बारे में कुछ भी पूछें।"
                                                    : "I'm Tantu AI, your handloom expert. Ask me anything about handlooms, weaving, traditional textiles, and NHDC services."}
                                            </p>
                                        </motion.div>

                                        {/* Question Input with enhanced design */}
                                        <motion.div
                                            className="space-y-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            <div className="flex items-center gap-2 mb-3">
                                                <motion.span
                                                    className="text-xl"
                                                    animate={{
                                                        rotate: [0, 10, -10, 0],
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Number.POSITIVE_INFINITY,
                                                        ease: "easeInOut",
                                                    }}
                                                >
                                                    💭
                                                </motion.span>
                                                <h3 className="font-semibold text-[#444444]">
                                                    {lang === "hi" ? "अपना प्रश्न पूछें" : "Ask Your Question"}
                                                </h3>
                                            </div>

                                            <form onSubmit={handleSearch} className="space-y-4">
                                                <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                                                    <motion.textarea
                                                        value={query}
                                                        onChange={(e) => setQuery(e.target.value)}
                                                        placeholder={
                                                            lang === "hi"
                                                                ? "जैसे: 'बनारसी साड़ी की विशेषताएं क्या हैं?' या 'NHDC की योजनाओं के बारे में बताएं'"
                                                                : "e.g., 'What are the features of Banarasi sarees?' or 'Tell me about NHDC schemes'"
                                                        }
                                                        className="w-full border-2 border-[#F7D7D8]/30 px-4 py-4 rounded-xl text-[#444444] focus:outline-none focus:border-[#F7D7D8] transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm shadow-inner"
                                                        rows={4}
                                                        whileFocus={{
                                                            boxShadow: "0 0 0 4px rgba(247, 215, 216, 0.2)",
                                                            borderColor: "#F7D7D8",
                                                        }}
                                                    />

                                                    {/* Decorative corner elements */}
                                                    <motion.div
                                                        className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#F7D7D8]/50"
                                                        animate={{
                                                            opacity: [0.3, 1, 0.3],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Number.POSITIVE_INFINITY,
                                                        }}
                                                    />
                                                    <motion.div
                                                        className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#F7D7D8]/50"
                                                        animate={{
                                                            opacity: [0.3, 1, 0.3],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Number.POSITIVE_INFINITY,
                                                            delay: 1,
                                                        }}
                                                    />
                                                </motion.div>

                                                <motion.button
                                                    type="submit"
                                                    disabled={!query.trim()}
                                                    className="w-full bg-gradient-to-r from-[#F7D7D8] via-[#f0c5c7] to-[#e8b4b8] hover:from-[#f0c5c7] hover:via-[#e8b4b8] hover:to-[#d4919a] disabled:from-gray-300 disabled:via-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-[#444444] py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg relative overflow-hidden"
                                                    whileHover={{ scale: query.trim() ? 1.02 : 1 }}
                                                    whileTap={{ scale: query.trim() ? 0.98 : 1 }}
                                                >
                                                    {/* Animated background shimmer */}
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                        animate={
                                                            query.trim()
                                                                ? {
                                                                    x: ["-100%", "100%"],
                                                                }
                                                                : {}
                                                        }
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Number.POSITIVE_INFINITY,
                                                            ease: "linear",
                                                        }}
                                                    />

                                                    <motion.div
                                                        animate={
                                                            query.trim()
                                                                ? {
                                                                    rotate: [0, 360],
                                                                }
                                                                : {}
                                                        }
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Number.POSITIVE_INFINITY,
                                                            ease: "linear",
                                                        }}
                                                    >
                                                        <Send className="w-5 h-5" />
                                                    </motion.div>

                                                    <span className="relative z-10">{lang === "hi" ? "प्रश्न भेजें" : "Send Question"}</span>

                                                    <motion.span
                                                        className="text-lg"
                                                        animate={{
                                                            scale: [1, 1.2, 1],
                                                        }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Number.POSITIVE_INFINITY,
                                                            ease: "easeInOut",
                                                        }}
                                                    >
                                                        ✨
                                                    </motion.span>
                                                </motion.button>
                                            </form>
                                        </motion.div>
                                    </motion.div>

                                    {/* Footer with traditional pattern */}
                                    <motion.div
                                        className="mt-6 pt-4 border-t border-[#F7D7D8]/30 text-center relative"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        <motion.div
                                            className="flex items-center justify-center gap-2 mb-2"
                                            animate={{
                                                y: [0, -2, 0],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <span className="text-sm">🏛️</span>
                                            <p className="text-xs text-[#666666] font-medium">
                                                {lang === "hi"
                                                    ? "राष्ट्रीय हथकरघा विकास निगम लिमिटेड"
                                                    : "National Handloom Development Corporation Ltd."}
                                            </p>
                                        </motion.div>
                                        <motion.p
                                            className="text-xs text-[#888888]"
                                            animate={{
                                                opacity: [0.6, 1, 0.6],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            {lang === "hi" ? "पारंपरिक हथकरघा कला को बढ़ावा देना" : "Promoting Traditional Handloom Artistry"}
                                        </motion.p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}