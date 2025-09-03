import React from 'react'
import IndiaHandloomBrand from './IHBForms'

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isHindi = lang === 'hi';

  return {
    title: isHindi
      ? "इंडिया हैंडलूम ब्रांड (IHB) - एनएचडीसी"
      : "India Handloom Brand (IHB) - NHDC",
    description: isHindi
      ? "इंडिया हैंडलूम ब्रांड (IHB) प्रामाणिक और उच्च गुणवत्ता वाले हैंडलूम उत्पादों का प्रतीक है। यह ब्रांड पारंपरिक बुनाई, शिल्प कौशल और सतत फैशन को बढ़ावा देता है।"
      : "India Handloom Brand (IHB) represents authentic and high-quality handloom products. The brand promotes traditional weaving, craftsmanship, and sustainable fashion.",
    keywords: isHindi
      ? "इंडिया हैंडलूम ब्रांड, एनएचडीसी, हैंडलूम उत्पाद, प्रामाणिक कपड़े, पारंपरिक वस्त्र, बुनकर, सतत फैशन"
      : "India Handloom Brand, NHDC, Handloom Products, Authentic Fabrics, Traditional Textiles, Weavers, Sustainable Fashion",
    openGraph: {
      title: isHindi
        ? "इंडिया हैंडलूम ब्रांड - प्रामाणिक और उच्च गुणवत्ता वाले हैंडलूम उत्पाद"
        : "India Handloom Brand - Authentic & High-Quality Handloom Products",
      description: isHindi
        ? "इंडिया हैंडलूम ब्रांड (IHB) देश के बुनकरों द्वारा बनाए गए प्रामाणिक, गुणवत्तापूर्ण और सतत हैंडलूम उत्पादों को बढ़ावा देता है।"
        : "India Handloom Brand (IHB) promotes authentic, quality, and sustainable handloom products crafted by India’s weavers.",
      type: "website",
      images: [
        {
          url: "https://nhdc.org.in/NHDC.png", // replace if IHB logo/image available
          alt: isHindi
            ? "इंडिया हैंडलूम ब्रांड लोगो"
            : "India Handloom Brand Logo",
        },
      ],
    },
  };
}


export default function page() {
  return (
  <IndiaHandloomBrand/>
  )
}
