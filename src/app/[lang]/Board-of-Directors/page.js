import BoardSection from "./components/BoardSection";




export async function generateMetadata({ params }) {
   const { lang } = await params;

  if (lang === 'hi') {
    return {
      title: "NHDC - निदेशक मंडल",
      description: "राष्ट्रीय हथकरघा विकास निगम (NHDC) के बोर्ड के प्रमुख सदस्य और उनके कार्य विवरण। भारत की हथकरघा विरासत के संरक्षक।",
      keywords: "NHDC, निदेशक मंडल, बोर्ड के सदस्य, हथकरघा, नेतृत्व, भारत की हथकरघा विरासत",
      openGraph: {
        title: "NHDC - निदेशक मंडल",
        description: "राष्ट्रीय हथकरघा विकास निगम (NHDC) के बोर्ड के प्रमुख सदस्य और उनके कार्य विवरण।",
        type: "website",
        images: [
          {
            url: "/assets/building.jpg",
            alt: "NHDC Campus",
          },
        ],
      },
    };
  }

  return {
    title: "NHDC - Board of Directors",
    description: "Meet the key members of the Board of National Handloom Development Corporation (NHDC) and learn about their roles in shaping India's handloom legacy.",
    keywords: "NHDC, Board of Directors, leadership, handloom, key members, India handloom heritage",
    openGraph: {
      title: "NHDC - Board of Directors",
      description: "Key members of NHDC Board shaping India's handloom legacy.",
      type: "website",
      images: [
        {
          url: "/assets/building.jpg",
          alt: "NHDC Campus",
        },
      ],
    },
  };
}


export default function Page() {
  return <BoardSection/>
}
