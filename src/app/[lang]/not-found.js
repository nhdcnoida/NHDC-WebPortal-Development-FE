'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800 px-4">
      <div className="text-center max-w-lg">
        <div className="relative mb-8">
          {/* Loom-style Illustration (symbolic) */}
          <div className="w-28 h-28 mx-auto border-4 border-[#F7D7D8] rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-[#F7D7D8]">404</span>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Oops! Page Not Found
        </h1>

        <p className="mb-6 text-gray-600">
          The page you’re looking for might have been removed or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#F7D7D8] text-black font-medium px-6 py-3 rounded-xl hover:shadow-md transition"
        >
          Go Back to Home
        </Link>

        {/* Decorative thread pattern */}
        <div className="mt-10 opacity-40">
          <svg
            className="mx-auto"
            width="200"
            height="24"
            viewBox="0 0 200 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="200" height="4" fill="#F7D7D8" />
            <rect y="10" width="200" height="4" fill="#F7D7D8" />
            <rect y="20" width="200" height="4" fill="#F7D7D8" />
          </svg>
          <p className="mt-2 text-xs">Handloom India Initiative</p>
        </div>
      </div>
    </div>
  )
}
