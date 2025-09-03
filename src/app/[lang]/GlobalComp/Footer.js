'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useParams } from 'next/navigation';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Footer({ FooterData, UsefulLink, AppSettings }) {
  const { lang } = useParams();

  const currentLangData = {
    description: lang === 'hi' ? FooterData.HiDescription : FooterData.EnDescription,
    contactTitle: lang === 'hi' ? FooterData.HiContactTitle : FooterData.EnContactTitle,
    address: lang === 'hi' ? FooterData.HiAddress : FooterData.EnAddress,
    phone: FooterData.phone,
    email: 'connhdc@nhdc.org.in',
    cin: FooterData.cin,
    linksTitle: lang === 'hi' ? FooterData.HiLinksTitle : FooterData.EnLinksTitle,
  };

  // SEO: Define Organization schema for structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "National Handloom Development Corporation Ltd.",
    "url": process.env.NEXT_PUBLIC_BASE_URL || "https://www.nhdc.org.in", // Ensure this env variable is set
    "logo": `${process.env.NEXT_PUBLIC_BASE_URL || ''}/assets/LogoWithText.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": currentLangData.phone,
      "email": currentLangData.email,
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": currentLangData.address.replace(/(\r\n|\n|\r)/gm, " ") // Schema requires a single line
    },
    "sameAs": AppSettings?.socialMedia?.map(item => item.url) || []
  };

  return (
    <>
      <footer className="relative w-full bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>

        {/* SEO: Embed the Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* A11Y: Decorative images should have empty alt text */}
        <div className="absolute inset-0 z-0">
          <div className="block md:hidden relative w-full h-full">
            <Image src="/assets/mobile_footer_bg2.png" alt="" fill className="object-cover object-top" priority fetchPriority="high" />
          </div>
          <div className="hidden md:block w-full h-full">
            <Image src="/assets/footer_bg.png" alt="" fill className="object-cover" priority fetchPriority="high" />
          </div>
        </div>

        <div className="relative z-10 px-6 md:px-10 md:pt-56 pt-30">
          <div className="max-w-10xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo & Description */}
            <div>
              <Image src="/assets/LogoWithText.png" alt="NHDC Logo" width={500} height={300} className="mb-4" priority fetchPriority="high" />
              <p className="text-[#444444] text-md whitespace-pre-line">{currentLangData.description}</p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#444444]">{currentLangData.contactTitle}</h3>
              <ul className="text-md text-[#444444] space-y-2">
                <li className="flex items-start gap-2 whitespace-pre-line">
                  <FaMapMarkerAlt className="mt-1 text-[#444444]" aria-hidden="true" />
                  <span>{currentLangData.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#444444]" aria-hidden="true" />
                  <span>{currentLangData.phone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-[#444444]" aria-hidden="true" />
                  <a href={`mailto:${currentLangData.email}`} className="hover:underline">{currentLangData.email}</a>
                </li>
                <li>
                  <span className="font-bold">{lang === 'hi' ? 'सीआईएन: ' : 'CIN: '}</span>
                  {currentLangData.cin}
                </li>
                <li className="flex gap-2 mt-3 text-[#444444]">
                  {AppSettings.socialMedia.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 p-2"
                      aria-label={`Visit our ${item.platform} page (opens in a new tab)`}
                    >
                      {item.platform === "Facebook" && <FaFacebookF size={24} />}
                      {item.platform === "Twitter" && <FaXTwitter size={24} />}
                      {item.platform === "Instagram" && <FaInstagram size={24} />}
                      {item.platform === "linkedin" && <FaLinkedinIn size={24} />}
                      {item.platform === "youtube" && <FaYoutube size={24} />}
                    </a>
                  ))}
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <nav aria-labelledby="useful-links-heading">
              <h3 id="useful-links-heading" className="text-lg font-semibold mb-4 text-[#444444]">{currentLangData.linksTitle}</h3>
              <div className="grid grid-cols-2 gap-4">
                {UsefulLink?.data?.map((item, idx) => (
                  <Link
                    key={idx}
                    href={`${item.isCustomLink ? item.link : `/${lang}${item.link}`}`}
                    target={item.opensInNewTab ? "_blank" : "_self"}
                    rel={item.opensInNewTab ? "noopener noreferrer" : undefined}
                    className="hover:underline flex items-center gap-2"
                  >
                    <Image src={`${process.env.NEXT_PUBLIC_STORAGE}${item.iconImageLink}`} alt="" width={24} height={24} className="object-contain" priority fetchPriority="high" />
                    <span>{lang === 'hi' ? item.HiName : item.EnName}</span>
                    {item.opensInNewTab && <span className="sr-only">(opens in a new tab)</span>}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom Bar Links */}
        <div className="bg-[#62402A] text-white text-sm py-4 px-4 relative mt-15 bottom-0 w-full">
          <nav aria-label="Secondary footer navigation">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {FooterData?.bottomLinks?.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <Link
                    href={`${item.isCustomLink ? item.link : `/${lang}${item.link}`}`}
                    target={item.opensInNewTab ? "_blank" : "_self"}
                    rel={item.opensInNewTab ? "noopener noreferrer" : undefined}
                    className="hover:underline whitespace-nowrap"
                  >
                    {lang === 'hi' ? item.HiName : item.EnName}
                    {item.opensInNewTab && <span className="sr-only">(opens in a new tab)</span>}
                  </Link>
                  {idx < FooterData.bottomLinks.length - 1 && (
                    <span className="ml-1" aria-hidden="true">|</span>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </footer>

      <div className={`${roboto.className} w-full bg-[#4A2F22] text-white text-sm`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} National Handloom Development Corporation Ltd.</p>
          <p className="text-xs text-center md:text-left">
            {lang === 'hi'
              ? `अंतिम समीक्षा और अद्यतन: ${new Date(FooterData.lastUpdated).toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`
              : `Last Reviewed & Updated on ${new Date(FooterData.lastUpdated).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`
            }
          </p>
          <a
            href="https://app.theargusconsulting.com/"
            className="text-sm text-center md:text-right flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang === 'hi' ? 'संचालित' : 'Powered by'} <span className="font-semibold">Argus Consulting</span>
            <span className="sr-only">(opens in a new tab)</span>
            <Image src="/Argus_logo.png" alt="Argus Logo" width={50} height={20} className="inline-block" priority fetchPriority="high" />
          </a>
        </div>
      </div>
    </>
  );
}