// src/components/Pagination.js

'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Pagination({ currentPage, totalPages }) {
  const searchParams = useSearchParams();

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `?${params.toString()}`;
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation">
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0, gap: '8px' }}>
        {/* Previous Button */}
        <li>
          <Link href={createPageUrl(currentPage - 1)} passHref>
            <span style={currentPage === 1 ? { ...linkStyle, ...disabledStyle } : linkStyle}>
              &laquo; Prev
            </span>
          </Link>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map(number => (
          <li key={number}>
            <Link href={createPageUrl(number)} passHref>
              <span style={number === currentPage ? { ...linkStyle, ...activeStyle } : linkStyle}>
                {number}
              </span>
            </Link>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <Link href={createPageUrl(currentPage + 1)} passHref>
            <span style={currentPage === totalPages ? { ...linkStyle, ...disabledStyle } : linkStyle}>
              Next &raquo;
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Define palette
const colors = {
  primary: "#63412b",   // Rich brown (pichi)
  accent: "#d17b49",    // Warm clay orange
  light: "#f8ebe4",     // Soft beige background
  border: "#c9a88d",    // Muted sand
  activeBg: "#ffd9c2",  // Peach highlight
  hoverBg: "#f1d6c5",   // Subtle warm hover
};

// Base link style
const linkStyle = {
  display: "block",
  padding: "8px 16px",
  color: colors.primary,
  textDecoration: "none",
  border: `1px solid ${colors.border}`,
  borderRadius: "6px",
  backgroundColor: colors.light,
  transition: "all 0.3s ease",
};

// Active page style
const activeStyle = {
  backgroundColor: colors.activeBg,
  color: colors.primary,
  borderColor: colors.accent,
  fontWeight: "600",
};

// Disabled style
const disabledStyle = {
  color: "#a87c6a", // Muted brown
  pointerEvents: "none",
  backgroundColor: "#f2e6df",
  borderColor: colors.border,
  opacity: 0.6,
};
