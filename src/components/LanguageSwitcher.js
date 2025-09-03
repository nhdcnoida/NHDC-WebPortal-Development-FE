// src/components/LanguageSwitcher.jsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher({ currentLang }) {
  const pathname = usePathname(); // /eng/Home

  // Switch "eng" to "hi" in the pathname
  const otherLang = currentLang === 'en' ? 'hi' : 'en';
  const altPath = pathname.replace(`/${currentLang}`, `/${otherLang}`);

  return (
    <div className="p-2">
      <Link href={altPath} className="underline">
        Switch to {otherLang === 'en' ? 'English' : 'हिन्दी'}
      </Link>
    </div>
  );
}
