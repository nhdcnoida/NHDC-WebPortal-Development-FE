'use client';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import { useParams, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import TextSizeControls from '@/components/TextSizeControls';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function Header({ navigation, AppSettings }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [activeSubNavItem, setActiveSubNavItem] = useState(null);
  const [activeFourthNavItem, setActiveFourthNavItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [query, setQuery] = useState("");

  const { lang } = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef(null);
  const navRefs = useRef([]);
  const firstNavItemRef = useRef(null);
  const lastNavItemRef = useRef(null);
  const searchInputRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', lang: 'en' },
    { code: 'hi', name: 'हिन्दी', lang: 'hi' },
  ];

  useEffect(() => {
    const preventScrollOnFocus = (e) => {
      if (
        e.target.closest('#language-selector') ||
        e.target.closest('a[aria-label*="opens in new window"]') ||
        e.target.closest('button')
      ) {
        e.preventDefault();
        window.scrollTo({
          top: window.scrollY,
          behavior: 'instant',
        });
      }
    };

    document.addEventListener('focusin', preventScrollOnFocus);
    return () => document.removeEventListener('focusin', preventScrollOnFocus);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50 && isScrolled) {
        setIsScrolled(false);
      } else if (currentScrollY <= 50 && !isScrolled) {
        setIsScrolled(true);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo({
        top: parseInt(savedScrollPosition, 10),
        behavior: 'instant',
      });
      sessionStorage.removeItem('scrollPosition');
    }
  }, []);

  const toggleExpand = (id, level) => {
    setExpandedItems((prev) => {
      const newExpandedItems = { ...prev };
      Object.keys(newExpandedItems).forEach((key) => {
        if (key.startsWith(level) && key !== `${level}-${id}`) {
          delete newExpandedItems[key];
        }
      });
      newExpandedItems[`${level}-${id}`] = !prev[`${level}-${id}`];
      return newExpandedItems;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setExpandedItems({});
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isMenuOpen) return;
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setExpandedItems({});
        firstNavItemRef.current?.focus();
      }
      if (e.key === 'Tab' && !e.shiftKey && document.activeElement === lastNavItemRef.current) {
        e.preventDefault();
        firstNavItemRef.current?.focus();
      }
      if (e.key === 'Tab' && e.shiftKey && document.activeElement === firstNavItemRef.current) {
        e.preventDefault();
        lastNavItemRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const switchLanguage = (newLang) => {
    const scrollY = window.scrollY;
    sessionStorage.setItem('scrollPosition', scrollY);
    const pathWithoutLang = pathname.replace(`/${lang}`, '') || '/';
    window.location.href = `/${newLang}${pathWithoutLang}`;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/en/Ask-NHDC-Ai?q=${encodeURIComponent(query)}`);
    }
    setIsMenuOpen(false);
    setExpandedItems({});
  };

  const topBarVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    hidden: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const headerVariants = {
    initial: {
      height: "auto",
      paddingTop: "16px",
      paddingBottom: "16px",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    scrolled: {
      height: "auto",
      paddingTop: "16px",
      paddingBottom: "16px",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const logoVariants = {
    initial: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    scrolled: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: "100%",
      transition: { ease: "easeInOut", duration: 0.3 },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15, ease: "easeIn" } },
    fourthLevelHidden: { opacity: 0, x: -10 },
    fourthLevelVisible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
    fourthLevelExit: { opacity: 0, x: -10, transition: { duration: 0.15, ease: "easeIn" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
    }),
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5 + i * 0.1, duration: 0.3, ease: "backOut" },
    }),
  };

  const sortedNavigation = navigation?.data?.sort((a, b) => a.displayPosition - b.displayPosition) || [];

  const handleSkipToContent = (e) => {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.tabIndex = -1;
      mainContent.focus();
      setTimeout(() => mainContent.removeAttribute("tabindex"), 1000);
    }
  };

  const generateLink = (item) => {
    if (item.isCustomLink) {
      return item.Link;
    }
    return `/${lang}${item.Link}`;
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": "https://example.com/", // Replace with your actual website URL
    "description": "Primary navigation menu for the website.",
    "itemListElement": sortedNavigation.filter(item => item.isLink).map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": lang === "hi" ? item.HiName : item.EnName,
      "item": item.isCustomLink ? item.Link : `${process.env.NEXT_PUBLIC_BASE_URL || ''}/${lang}${item.Link}`
    }))
  };

  return (
    <>

      <motion.div
        className="bg-[#F7D7D8] text-xs sm:text-sm px-4 flex flex-col sm:flex-row justify-between items-center overflow-hidden"
        variants={topBarVariants}
        initial="initial"
        animate={isScrolled ? 'visible' : 'hidden'}
        style={{ minHeight: '60px' }}
      >
        <motion.div
          className="w-full sm:w-auto flex justify-center sm:justify-start mb-2 sm:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link href={"tel:18002089988"} className="text-[#62402A] pt-2 text-sm sm:text-base flex items-center">
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 1, delay: 0.3 }}>
              <FaPhoneAlt className="text-[#444444] mr-2" aria-hidden="true" />
            </motion.div>
            <span aria-label={lang === 'hi' ? 'हथकरघा हेल्पलाइन नंबर' : 'Handloom Helpline Number'}>
              {lang === 'hi' ? 'हथकरघा हेल्पलाइन नंबर : 1800 208 9988' : 'Handloom Helpline No. : 1800 208 9988'}
            </span>
          </Link>
        </motion.div>

        <motion.div
          className="w-full sm:w-auto flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 items-center justify-center sm:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.div className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <label htmlFor="language-selector" className="sr-only">
              {lang === 'hi' ? 'भाषा चुनें' : 'Select language'}
            </label>
            <select
              id="language-selector"
              value={lang}
              onChange={(e) => switchLanguage(e.target.value)}
              className="bg-transparent text-[#62402A] border border-[#62402A] rounded px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#62402A] transition-all duration-200"
              aria-label={lang === 'hi' ? 'भाषा चुनें' : 'Select language'}
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code} lang={language.lang}>
                  {language.name}
                </option>
              ))}
            </select>
          </motion.div>

          <TextSizeControls />

          <div className="space-x-3 text-[#62402A] text-xl pb-2 flex">
            {AppSettings?.socialMedia?.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                aria-label={social.platform}
                target="_blank"
                rel="noopener noreferrer"
                custom={index}
                variants={socialIconVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE}${social.icon}`}
                    alt={social.platform}
                    title={social.platform}
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                    fetchPriority="high"
                  />
                </div>

              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.header
        className={`${roboto.className} bg-white shadow px-4 py-4 sticky top-0 z-40`}
        variants={headerVariants}
        initial="initial"
        animate="scrolled"
      >
        <h1 className="sr-only">NHDC Official Website</h1>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="flex items-center justify-between lg:justify-start w-full">
            <div className="grid grid-flow-col auto-cols-max items-center gap-4">
              <Link href={`/${lang}`} className="flex items-center gap-2 h-auto" title='NHDC LOGO'>
                <div className=" md:w-28 w-24">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE}${AppSettings?.appLogos?.find(l => l.EnName.includes("Main NHDC"))?.logoLink || ""}`}
                    width={1000}
                    height={1000}
                    alt="NHDC Logo"
                    className="w-full h-auto object-contain"
                    priority
                    fetchPriority="high"

                  />
                </div>
                <div className=" w-40 md:w-60">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STORAGE}${AppSettings?.appLogos?.find(l => l.EnName.includes("Text Variant"))?.logoLink || ""}`}
                    width={1000}
                    height={1000}
                    alt="NHDC Text"
                    className="w-full h-auto object-contain"
                    priority
                    fetchPriority="high"
                  />
                </div>
              </Link>

              <div className="w-20" title='Tantrika Logo'>
                <Image
                  src={`${process.env.NEXT_PUBLIC_STORAGE}${AppSettings?.appLogos?.find(l => l.EnName.includes("Tantrika"))?.logoLink || ""}`}
                  width={1000}
                  height={1000}
                  alt="Tantrika Logo"
                  className="w-full h-auto object-contain"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>

            <motion.button
              ref={firstNavItemRef}
              className="lg:hidden text-2xl text-[#62402A]"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (!isMenuOpen) {
                  setTimeout(() => {
                    const firstItem = document.querySelector(".mobile-menu-item");
                    firstItem?.focus();
                  }, 100);
                }
              }}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={
                isMenuOpen ? (lang === "hi" ? "मेनू बंद करें" : "Close menu") : lang === "hi" ? "मेनू खोलें" : "Open menu"
              }
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
              </motion.div>
            </motion.button>
          </div>

          <nav aria-label={lang === "hi" ? "मुख्य नेविगेशन" : "Main navigation"} className="lg:col-start-2">
            <ul className={`hidden lg:flex space-x-6 text-base text-nowrap text-[#444444] font-medium text-center list-none ${roboto.className}`}>
              {sortedNavigation.map((item, index) => (
                <motion.li
                  key={item._id}
                  className="relative"
                  onMouseEnter={() => setActiveNavItem(item._id)}
                  onMouseLeave={() => setActiveNavItem(null)}
                  onFocus={() => setActiveNavItem(item._id)}
                  onBlur={() => setTimeout(() => setActiveNavItem(null), 100)}
                  ref={(el) => (navRefs.current[index] = el)}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    {item.isLink ? (
                      <Link
                        href={item.isCustomLink ? item.Link : `/${lang}${item.Link}`}
                        rel="alternate" 
                        hrefLang={lang}
                        target={item.isCustomLink ? "_blank" : "_self"}
                        className={`hover:text-[#62402A] transition-colors duration-200 ${activeNavItem === item._id ? "text-[#62402A]" : ""}`}
                        aria-haspopup={item.SubNav?.length > 0 ? "true" : undefined}
                        aria-expanded={activeNavItem === item._id && item.SubNav?.length > 0}
                      >
                        {lang === "hi" ? item.HiName : item.EnName}
                      </Link>
                    ) : (
                      <span
                        className={`hover:text-[#62402A] cursor-pointer transition-colors duration-200 ${activeNavItem === item._id ? "text-[#62402A]" : ""}`}
                        aria-haspopup={item.SubNav?.length > 0 ? "true" : undefined}
                        aria-expanded={activeNavItem === item._id && item.SubNav?.length > 0}
                      >
                        {lang === "hi" ? item.HiName : item.EnName}
                      </span>
                    )}
                  </motion.div>

                  {item.SubNav && item.SubNav.length > 0 && (
                    <AnimatePresence>
                      {activeNavItem === item._id && (
                        <motion.ul
                          className="absolute text-wrap left-0 top-full mt-0 w-62 bg-white shadow-lg rounded-b-md z-50 list-none"
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          aria-label={lang === "hi" ? `${item.HiName} उपमेनू` : `${item.EnName} submenu`}
                        >
                          {item.SubNav.sort((a, b) => a.displayPosition - b.displayPosition).map(
                            (subItem, subIndex) => (
                              <motion.li
                                key={subItem._id}
                                className="relative"
                                onMouseEnter={() => setActiveSubNavItem(subItem._id)}
                                onMouseLeave={() => setActiveSubNavItem(null)}
                                onFocus={() => setActiveSubNavItem(subItem._id)}
                                onBlur={() => setTimeout(() => setActiveSubNavItem(null), 100)}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.05 }}
                              >
                                {subItem.isLink ? (
                                  <Link
                                    href={subItem.isCustomLink ? subItem.Link : `/${lang}${subItem.Link}`}
                                    rel="alternate" 
                        hrefLang={lang}
                                    target={subItem.isCustomLink ? "_blank" : "_self"}
                                    className="px-4 py-2 text-left hover:bg-[#F7D7D8] hover:text-[#62402A] transition-colors border-b border-gray-100 flex items-center justify-between"
                                    aria-haspopup={subItem.SubChildNav?.length > 0 ? "true" : undefined}
                                    aria-expanded={activeSubNavItem === subItem._id && subItem.SubChildNav?.length > 0}
                                  >
                                    <span>{lang === "hi" ? subItem.HiName : subItem.EnName}</span>
                                    {subItem.SubChildNav && subItem.SubChildNav.length > 0 && (
                                      <FaChevronRight className="text-sm text-[#62402A]" aria-hidden="true" />
                                    )}
                                  </Link>
                                ) : (
                                  <span
                                    className="px-4 py-2 text-left cursor-pointer hover:bg-[#F7D7D8] hover:text-[#62402A] transition-colors border-b border-gray-100 flex items-center justify-between"
                                    aria-haspopup={subItem.SubChildNav?.length > 0 ? "true" : undefined}
                                    aria-expanded={activeSubNavItem === subItem._id && subItem.SubChildNav?.length > 0}
                                  >
                                    <span>{lang === "hi" ? subItem.HiName : subItem.EnName}</span>
                                    {subItem.SubChildNav && subItem.SubChildNav.length > 0 && (
                                      <FaChevronRight className="text-sm text-[#62402A]" aria-hidden="true" />
                                    )}
                                  </span>
                                )}

                                {subItem.SubChildNav && subItem.SubChildNav.length > 0 && (
                                  <AnimatePresence>
                                    {activeSubNavItem === subItem._id && (
                                      <motion.ul
                                        className="absolute left-full top-0 ml-0 w-48 bg-white shadow-lg rounded-r-md z-50 list-none"
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        aria-label={
                                          lang === "hi" ? `${subItem.HiName} उप-मेनू` : `${subItem.EnName} submenu`
                                        }
                                      >
                                        {subItem.SubChildNav.sort((a, b) => a.displayPosition - b.displayPosition).map(
                                          (subChildItem, childIndex) => (
                                            <motion.li
                                              key={subChildItem._id}
                                              className="relative"
                                              onMouseEnter={() => setActiveFourthNavItem(subChildItem._id)}
                                              onMouseLeave={() => setActiveFourthNavItem(null)}
                                              onFocus={() => setActiveFourthNavItem(subChildItem._id)}
                                              onBlur={() => setTimeout(() => setActiveFourthNavItem(null), 100)}
                                              initial={{ opacity: 0, x: -10 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ delay: childIndex * 0.03 }}
                                            >
                                              {subChildItem.isLink ? (
                                                <Link
                                                  href={subChildItem.isCustomLink ? subChildItem.Link : `/${lang}${subChildItem.Link}`}
                                                  rel="alternate" 
                        hrefLang={lang}
                                                  target={subChildItem.isCustomLink ? "_blank" : "_self"}
                                                  className="px-4 py-2 text-left hover:bg-[#F7D7D8] hover:text-[#62402A] transition-colors border-b border-gray-100 flex items-center justify-between"
                                                  aria-haspopup={subChildItem.FourthLevelNav?.length > 0 ? "true" : undefined}
                                                  aria-expanded={activeFourthNavItem === subChildItem._id && subChildItem.FourthLevelNav?.length > 0}
                                                >
                                                  <span>{lang === "hi" ? subChildItem.HiName : subChildItem.EnName}</span>
                                                  {subChildItem.FourthLevelNav && subChildItem.FourthLevelNav.length > 0 && (
                                                    <FaChevronRight className="text-sm text-[#62402A]" aria-hidden="true" />
                                                  )}
                                                </Link>
                                              ) : (
                                                <span
                                                  className="px-4 py-2 text-left cursor-pointer hover:bg-[#F7D7D8] hover:text-[#62402A] transition-colors border-b border-gray-100 flex items-center justify-between"
                                                  aria-haspopup={subChildItem.FourthLevelNav?.length > 0 ? "true" : undefined}
                                                  aria-expanded={activeFourthNavItem === subChildItem._id && subChildItem.FourthLevelNav?.length > 0}
                                                >
                                                  <span>{lang === "hi" ? subChildItem.HiName : subChildItem.EnName}</span>
                                                  {subChildItem.FourthLevelNav && subChildItem.FourthLevelNav.length > 0 && (
                                                    <FaChevronRight className="text-sm text-[#62402A]" aria-hidden="true" />
                                                  )}
                                                </span>
                                              )}

                                              {subChildItem.FourthLevelNav && subChildItem.FourthLevelNav.length > 0 && (
                                                <AnimatePresence>
                                                  {activeFourthNavItem === subChildItem._id && (
                                                    <motion.ul
                                                      className="absolute left-full top-0 ml-0 w-48 bg-white shadow-lg rounded-r-md z-50 list-none"
                                                      variants={dropdownVariants}
                                                      initial="fourthLevelHidden"
                                                      animate="fourthLevelVisible"
                                                      exit="fourthLevelExit"
                                                      aria-label={
                                                        lang === "hi" ? `${subChildItem.HiName} चौथा मेनू` : `${subChildItem.EnName} fourth menu`
                                                      }
                                                    >
                                                      {subChildItem.FourthLevelNav.sort(
                                                        (a, b) => a.displayPosition - b.displayPosition,
                                                      ).map((fourthItem, fourthIndex) => (
                                                        <motion.li
                                                          key={fourthItem._id}
                                                          initial={{ opacity: 0, x: -10 }}
                                                          animate={{ opacity: 1, x: 0 }}
                                                          transition={{ delay: fourthIndex * 0.02 }}
                                                        >
                                                          <Link
                                                            href={fourthItem.isCustomLink ? fourthItem.Link : `/${lang}${fourthItem.Link}`}
                                                            rel="alternate" 
                        hrefLang={lang}
                                                            target={fourthItem.isCustomLink ? "_blank" : "_self"}
                                                            className="block px-4 py-2 text-left hover:bg-[#F7D7D8] hover:text-[#62402A] transition-colors border-b border-gray-100"
                                                          >
                                                            {lang === "hi" ? fourthItem.HiName : fourthItem.EnName}
                                                          </Link>
                                                        </motion.li>
                                                      ))}
                                                    </motion.ul>
                                                  )}
                                                </AnimatePresence>
                                              )}
                                            </motion.li>
                                          ))}
                                      </motion.ul>
                                    )}
                                  </AnimatePresence>
                                )}
                              </motion.li>
                            ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              className="lg:hidden fixed inset-0 bg-white z-50 pt-20 pr-20 overflow-y-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <motion.form
                onSubmit={handleSearch}
                role="search"
                className="relative w-full max-w-xs mx-auto mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sortedNavigation.length * 0.05 + 0.1 }}
              >
                <label htmlFor="mobile-search" className="sr-only">
                  {lang === "hi" ? "खोजें" : "Search"}
                </label>
                <input
                  id="mobile-search"
                  type="search"
                  placeholder={lang === "hi" ? "Ask NHDC AI..." : "Ask NHDC AI..."}
                  className="w-full border px-3 py-2 pr-10 rounded-full text-[#a9a9a9] focus:outline-none focus:ring-2 focus:ring-[#F7D7D8] focus:border-transparent"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label={lang === "hi" ? "खोज इनपुट" : "Search input"}
                  tabIndex={isMenuOpen ? 0 : -1}
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-3 flex items-center text-[#a9a9a9]"
                  aria-label={lang === "hi" ? "खोज बटन" : "Search button"}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  <Image priority
                    fetchPriority="high"
                    src={"/magic-wand.svg"} alt="Magic Wand" width={25} height={25} />
                </button>
              </motion.form>

              <nav aria-label={lang === "hi" ? "मोबाइल मेनू" : "Mobile menu"}>
                <ul className="flex flex-col space-y-6 pl-11 md:px-4 text-xl font-medium text-[#000] list-none">
                  {sortedNavigation.map((item, index) => (
                    <li key={item._id}>
                      <motion.div
                        custom={item.displayPosition}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        {item.SubNav && item.SubNav.length > 0 ? (
                          // If item has a submenu, render a button for the entire row
                          <button
                            onClick={() => toggleExpand(item._id, "main")}
                            className="mobile-menu-item flex items-center justify-between w-full py-2 hover:text-[#62402A] transition-colors text-left"
                            aria-expanded={expandedItems[`main-${item._id}`]}
                            aria-controls={`submenu-${item._id}`}
                            aria-label={
                              lang === "hi"
                                ? `${item.HiName} उपमेनू ${expandedItems[`main-${item._id}`] ? "संक्षिप्त करें" : "विस्तार करें"}`
                                : `${item.EnName} submenu ${expandedItems[`main-${item._id}`] ? "collapse" : "expand"}`
                            }
                          >
                            <span>{lang === "hi" ? item.HiName : item.EnName}</span>
                            <motion.div
                              animate={{ rotate: expandedItems[`main-${item._id}`] ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaChevronRight aria-hidden="true" />
                            </motion.div>
                          </button>
                        ) : (
                          // Otherwise, render a simple link
                          <Link
                            href={item.isCustomLink ? item.Link : `/${lang}${item.Link}`}
                            target={item.isCustomLink ? "_blank" : "_self"}
                            rel="alternate" 
                        hrefLang={lang}
                            className={`mobile-menu-item block py-2 hover:text-[#62402A] transition-colors`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setExpandedItems({});
                            }}
                            ref={index === 0 ? (el) => (firstNavItemRef.current = el) : null}
                            tabIndex={isMenuOpen ? 0 : -1}
                          >
                            {lang === "hi" ? item.HiName : item.EnName}
                          </Link>
                        )}

                        <AnimatePresence>
                          {item.SubNav && item.SubNav.length > 0 && expandedItems[`main-${item._id}`] && (
                            <motion.ul
                              className="ml-4 mt-2 space-y-2 list-none"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              id={`submenu-${item._id}`}
                            >
                              {item.SubNav.sort((a, b) => a.displayPosition - b.displayPosition).map(
                                (subItem, subIndex) => (
                                  <motion.li
                                    key={subItem._id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.05 }}
                                  >
                                    <div className="flex items-center justify-between">
                                      <Link
                                        href={subItem.isCustomLink ? subItem.Link : `/${lang}${subItem.Link}`}
                                        target={subItem.isCustomLink ? "_blank" : "_self"}
                                        rel="alternate" 
                        hrefLang={lang}
                                        className="block py-1 text-lg hover:text-[#62402A] transition-colors"
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          setExpandedItems({});
                                        }}
                                        tabIndex={isMenuOpen ? 0 : -1}
                                      >
                                        {lang === "hi" ? subItem.HiName : subItem.EnName}
                                      </Link>
                                      {subItem.SubChildNav && subItem.SubChildNav.length > 0 && (
                                        <motion.button
                                          onClick={() => toggleExpand(subItem._id, "sub")}
                                          className="text-[#62402A] p-2"
                                          aria-expanded={expandedItems[`sub-${subItem._id}`]}
                                          aria-controls={`subchildmenu-${subItem._id}`}
                                          aria-label={
                                            lang === "hi"
                                              ? `${subItem.HiName} उप-मेनू ${expandedItems[`sub-${subItem._id}`] ? "संक्षिप्त करें" : "विस्तार करें"}`
                                              : `${subItem.EnName} submenu ${expandedItems[`sub-${subItem._id}`] ? "collapse" : "expand"}`
                                          }
                                          whileTap={{ scale: 0.9 }}
                                        >
                                          <motion.div
                                            animate={{ rotate: expandedItems[`sub-${subItem._id}`] ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                          >
                                            <FaChevronRight aria-hidden="true" />
                                          </motion.div>
                                        </motion.button>
                                      )}
                                    </div>

                                    <AnimatePresence>
                                      {subItem.SubChildNav &&
                                        subItem.SubChildNav.length > 0 &&
                                        expandedItems[`sub-${subItem._id}`] && (
                                          <motion.ul
                                            className="ml-4 mt-1 space-y-1 list-none"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            id={`subchildmenu-${subItem._id}`}
                                          >
                                            {subItem.SubChildNav.sort(
                                              (a, b) => a.displayPosition - b.displayPosition,
                                            ).map((subChildItem, childIndex) => (
                                              <motion.li
                                                key={subChildItem._id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: childIndex * 0.03 }}
                                              >
                                                <div className="flex items-center justify-between">
                                                  <Link
                                                    href={subChildItem.isCustomLink ? subChildItem.Link : `/${lang}${subChildItem.Link}`}
                                                    target={subChildItem.isCustomLink ? "_blank" : "_self"}
                                                    rel="alternate" 
                        hrefLang={lang}
                                                    className="block py-1 text-base hover:text-[#62402A] transition-colors"
                                                    onClick={() => {
                                                      setIsMenuOpen(false);
                                                      setExpandedItems({});
                                                    }}
                                                    tabIndex={isMenuOpen ? 0 : -1}
                                                  >
                                                    {lang === "hi" ? subChildItem.HiName : subChildItem.EnName}
                                                  </Link>
                                                  {subChildItem.FourthLevelNav && subChildItem.FourthLevelNav.length > 0 && (
                                                    <motion.button
                                                      onClick={() => toggleExpand(subChildItem._id, "fourth")}
                                                      className="text-[#62402A] p-2"
                                                      aria-expanded={expandedItems[`fourth-${subChildItem._id}`]}
                                                      aria-controls={`fourthmenu-${subChildItem._id}`}
                                                      aria-label={
                                                        lang === "hi"
                                                          ? `${subChildItem.HiName} चौथा मेनू ${expandedItems[`fourth-${subChildItem._id}`] ? "संक्षिप्त करें" : "विस्तार करें"}`
                                                          : `${subChildItem.EnName} fourth menu ${expandedItems[`fourth-${subChildItem._id}`] ? "collapse" : "expand"}`
                                                      }
                                                      whileTap={{ scale: 0.9 }}
                                                    >
                                                      <motion.div
                                                        animate={{ rotate: expandedItems[`fourth-${subChildItem._id}`] ? 90 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                      >
                                                        <FaChevronRight aria-hidden="true" />
                                                      </motion.div>
                                                    </motion.button>
                                                  )}
                                                </div>

                                                <AnimatePresence>
                                                  {subChildItem.FourthLevelNav &&
                                                    subChildItem.FourthLevelNav.length > 0 &&
                                                    expandedItems[`fourth-${subChildItem._id}`] && (
                                                      <motion.ul
                                                        className="ml-4 mt-1 space-y-1 list-none"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        id={`fourthmenu-${subChildItem._id}`}
                                                      >
                                                        {subChildItem.FourthLevelNav.sort(
                                                          (a, b) => a.displayPosition - b.displayPosition,
                                                        ).map((fourthItem, fourthIndex) => (
                                                          <motion.li
                                                            key={fourthItem._id}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: fourthIndex * 0.02 }}
                                                          >
                                                            <Link
                                                              href={fourthItem.isCustomLink ? fourthItem.Link : `/${lang}${fourthItem.Link}`}
                                                              target={fourthItem.isCustomLink ? "_blank" : "_self"}
                                                              rel="alternate" 
                         hrefLang={lang}
                                                              className="block py-1 text-sm hover:text-[#62402A] transition-colors"
                                                              onClick={() => {
                                                                setIsMenuOpen(false);
                                                                setExpandedItems({});
                                                              }}
                                                              tabIndex={isMenuOpen ? 0 : -1}
                                                              ref={
                                                                index === sortedNavigation.length - 1 &&
                                                                  subIndex === item.SubNav.length - 1 &&
                                                                  childIndex === subItem.SubChildNav.length - 1 &&
                                                                  fourthIndex === subChildItem.FourthLevelNav.length - 1
                                                                  ? (el) => (lastNavItemRef.current = el)
                                                                  : null
                                                              }
                                                            >
                                                              {lang === "hi" ? fourthItem.HiName : fourthItem.EnName}
                                                            </Link>
                                                          </motion.li>
                                                        ))}
                                                      </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                              </motion.li>
                                            ))}
                                          </motion.ul>
                                        )}
                                    </AnimatePresence>
                                  </motion.li>
                                ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </nav>

              <motion.button
                className="absolute top-4 right-4 text-2xl text-[#62402A]"
                onClick={() => {
                  setIsMenuOpen(false);
                  setExpandedItems({});
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: sortedNavigation.length * 0.05 + 0.2 }}
                aria-label={lang === "hi" ? "मेनू बंद करें" : "Close menu"}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <FaTimes aria-hidden="true" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}