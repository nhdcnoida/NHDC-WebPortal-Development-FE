"use client"

import Link from "next/link"
import { useParams } from "next/navigation";
import { useState } from "react"

export function RightSidebar() {
  const [isHovered, setIsHovered] = useState(false)
  const { lang } = useParams();
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className={`relative bg-gradient-to-b from-pink-600 to-pink-500 text-white h-36 w-14 flex items-center justify-center rounded-l-xl shadow-xl border-l border-t border-b border-blue-400 cursor-pointer ${
            isHovered ? "scale-105 shadow-2xl" : "hover:scale-105"
          } transition-all duration-200`}
          aria-label="Events sidebar"
          type="button"
        >
          <div className="flex items-center justify-center h-full">
            <Link href={`${lang}/Exhibition`} className="text-lg font-semibold tracking-wider whitespace-nowrap transform rotate-90 drop-shadow-sm">
              Events
            </Link>
          </div>

          <div className={`absolute inset-0 rounded-l-xl bg-blue-400/30 ${isHovered ? "animate-pulse opacity-50" : "opacity-0"} transition-opacity duration-200 -z-10`} />
        </button>

        <div className={`absolute inset-0 rounded-l-xl bg-blue-400/40 blur-md ${isHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-300 -z-20`} />
      </div>
    </div>
  )
}