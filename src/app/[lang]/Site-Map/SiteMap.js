"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useCallback } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function SitemapPage() {
  const { lang } = useParams();
  const isHindi = lang === "hi";
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleExpanded = useCallback((itemKey) => {
    setExpandedItems((prev) => {
      const newExpanded = new Set(prev);
      newExpanded.has(itemKey) ? newExpanded.delete(itemKey) : newExpanded.add(itemKey);
      return newExpanded;
    });
  }, []);


  const sitemapData = [
  {
    title: "About Us",
    titleHi: "हमारे बारे में",
    children: [
      { title: "Board of Directors", titleHi: "निदेशक मंडल", link: `/${lang}/Board-of-Directors` },
      { title: "Who's Who", titleHi: "कौन कौन है", link: `/${lang}/Whos-Who` },
      {
        title: "Organization Chart",
        titleHi: "संगठन चार्ट",
        children: [
          { title: "Corporate Office", titleHi: "कॉर्पोरेट कार्यालय", link: `/${lang}/Corporate_Office` },
          { title: "Regional Offices", titleHi: "क्षेत्रीय कार्यालय", link: `/${lang}/Regional_Offices` },
          { title: "Corporate Office Telecom Directory", titleHi: "कॉर्पोरेट कार्यालय दूरभाष निर्देशिका", link: `/${lang}/DirectoryTable` },
        ],
      },
      { title: "Exhibition", titleHi: "प्रदर्शनी", link: `/${lang}/Exhibition` },
      { title: "Buyer Seller Meet", titleHi: "खरीदार-विक्रेता बैठक", link: `/${lang}/Buy-Seller-Meet` },
      { title: "India Handloom Brand", titleHi: "इंडिया हैंडलूम ब्रांड", link: `/${lang}/IHBForms` },
    ],
  },

  {
    title: "Product & Services",
    titleHi: "उत्पाद एवं सेवाएँ",
    children: [
      {
        title: "Yarn",
        titleHi: "सूत्र",
        children: [
          {
            title: "Raw Material Supply Scheme",
            titleHi: "कच्चा माल आपूर्ति योजना",
            link: "/assets/pdfs/New_Guidelines_RMSS.pdf",
          },
          {
            title: "General Scheme",
            titleHi: "सामान्य योजना",
            link: "",
          },
          {
            title: "Yarn Rates",
            titleHi: "सूत्र दरें",
            children: [
              { title: "Current Month", titleHi: "वर्तमान माह", link: `/${lang}/Current-Month-YarnRate` },
              { title: "Previous Month", titleHi: "पिछला माह", link: `/${lang}/Previous-Month-YarnRate` },
            ],
          },
        ],
      },
      {
        title: "Dyes & Chemicals",
        titleHi: "रंग एवं रसायन",
        children: [
          { title: "Chemical Dyes", titleHi: "रासायनिक रंग", link: `` },
          { title: "Natural Dyes", titleHi: "प्राकृतिक रंग", link: `` },
        ],
      },
      { title: "Institution Sales", titleHi: "संस्थानिक बिक्री", link: `` },
      { title: "Place Indent", titleHi: "ऑर्डर दें", link: `/${lang}/Place-Indent` },
      {
        title: "E-Dhaga",
        titleHi: "ई-धागा",
        children: [
          { title: "Download App", titleHi: "ऐप डाउनलोड करें", link: "https://play.google.com/store/apps/details?id=in.co.nhdcltd.app&hl=en" },
          { title: "Media Gallery", titleHi: "मीडिया गैलरी", link: "/E-Dhaga/Media-Gallery" },
          { title: "User Manual", titleHi: "उपयोगकर्ता पुस्तिका", link: `/${lang}/E-Dhaga-Manual` },
        ],
      },
    ],
  },

  {
    title: "Outreach",
    titleHi: "प्रचार-प्रसार",
    children: [
      { title: "About Outreach Division", titleHi: "प्रचार-प्रसार प्रभाग के बारे में", link: `/${lang}/About-Outreach` },
      { title: "Capacity building & Training", titleHi: "क्षमता निर्माण एवं प्रशिक्षण", link: `/${lang}/Capacity-Building-Training` },
      { title: "Outreach & Transformation Invitiatives", titleHi: "प्रचार एवं परिवर्तन पहल", link: `/${lang}/Outreach-and-Transformation` },
      { title: "Publication & Media", titleHi: "प्रकाशन एवं मीडिया", link: `` },
      { title: "Collaboration & Convergence", titleHi: "सहयोग एवं एकीकरण", link: `` },
      { title: "Get involved", titleHi: "शामिल हों", link: `` },
    ],
  },

  {
    title: "Events",
    titleHi: "कार्यक्रम",
    children: [
      { title: "Handloom of India", titleHi: "भारत का हैंडलूम", link: `/${lang}/Events/Handloom_of_India` },
      { title: "Joint Expo", titleHi: "संयुक्त प्रदर्शनी", link: `/${lang}/Events/Joint_Expo` },
      { title: "Handloom Haat", titleHi: "हैंडलूम हाट", link: `/${lang}/Events/Handloom_Haat` },
      { title: "Noida-Complex", titleHi: "नोएडा परिसर", link: `/${lang}/Events/Noida_Complex` },
      { title: "Special Handloom Exhibition", titleHi: "विशेष हैंडलूम प्रदर्शनी", link: `/${lang}/Events/Special_Handloom_Exhibition` },
      { title: "Atma-Nirbhar-Bharat-Utsav", titleHi: "आत्मनिर्भर भारत उत्सव", link: `/${lang}/Events/Atma_Nirbhar_Bharat_Utsav` },
      { title: "Silk Fab", titleHi: "सिल्क फैब", link: `/${lang}/Events/Silk_Fab` },
      { title: "Wool Fab", titleHi: "ऊन फैब", link: `/${lang}/Events/Wool_Fab` },
      { title: "National Expo", titleHi: "राष्ट्रीय प्रदर्शनी", link: `/${lang}/Events/National_Expo` },
    ],
  },

  { title: "Contact Us", titleHi: "हमसे संपर्क करें", link: `/${lang}/Contact_Us` },
];


const renderSitemapItem = useCallback(
    (item, index, parentKey = "") => {
      const itemKey = `${parentKey}-${index}-${item.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
      const isExpanded = expandedItems.has(itemKey);
      const hasChildren = Array.isArray(item.children) && item.children.length > 0;
      const displayTitle = isHindi && item.titleHi ? item.titleHi : item.title;

      return (
        <li key={itemKey} className="mb-2 list-none">
          <div className={`flex items-center space-x-2 ${!hasChildren ? "ml-6" : ""}`}>
          {hasChildren && (
  <button
    onClick={() => toggleExpanded(itemKey)}
    aria-expanded={isExpanded}
    aria-controls={`${itemKey}-children`}
    aria-label={
      isExpanded
        ? (isHindi ? `संक्षिप्त करें ${displayTitle}` : `Collapse ${displayTitle}`)
        : (isHindi ? `विस्तारित करें ${displayTitle}` : `Expand ${displayTitle}`)
    }
    className="text-blue-600"
  >
    {isExpanded ? <FaMinus size={12} /> : <FaPlus size={12} />}
  </button>
)}

            {item.link ? (
              item.link.endsWith(".pdf") || item.link.startsWith("http") ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {displayTitle}
                </a>
              ) : (
                <Link href={item.link} className="text-blue-600 hover:text-blue-800">
                  {displayTitle}
                </Link>
              )
            ) : (
              <span
                onClick={() => hasChildren && toggleExpanded(itemKey)}
                className={`${
                  hasChildren
                    ? "text-blue-600 font-medium cursor-pointer hover:text-blue-800"
                    : "text-blue-600 hover:text-blue-800 cursor-pointer"
                }`}
              >
                {displayTitle}
              </span>
            )}
          </div>

          {hasChildren && isExpanded && (
            <ul id={`${itemKey}-children`} className="ml-6 mt-2 space-y-2">
              {item.children.map((child, childIndex) =>
                renderSitemapItem(child, childIndex, itemKey)
              )}
            </ul>
          )}
        </li>
      );
    },
    [expandedItems, isHindi, toggleExpanded]
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-black-500 mb-8">
        {isHindi ? "साइटमैप" : "Sitemap"}
      </h1>
      <nav aria-label="Sitemap" className="bg-white">
        <ul className="space-y-3">
          {sitemapData.map((item, index) => renderSitemapItem(item, index))}
        </ul>
      </nav>
    </div>
  );
}