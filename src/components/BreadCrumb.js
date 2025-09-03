"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const Breadcrumb = () => {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  // Extract and preserve the language code (like "en", "hi")
  const languageCode = segments[0]
  const paths = segments.slice(1)

  // Hide breadcrumb on the home page
  if (paths.length === 0) return null

  const crumbs = paths.map((segment, index) => {
    const href = '/' + [languageCode, ...paths.slice(0, index + 1)].join('/')

    // Replace _ and - with space, then capitalize each word
    const name = segment
      .replace(/[-_]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    return (
      <span key={index}>
        <span className="mx-1">&gt;</span>
        <Link href={href} className="text-[#4e2b1d] font-medium">{name}</Link>
      </span>
    )
  })

  return (
    <div className="bg-[#f5d4d4] text-[#4e2b1d] p-2 px-4 text-sm">
      <Link href={`/${languageCode}`} className="font-semibold">Home</Link>
      {crumbs}
    </div>
  )
}

export default Breadcrumb
