'use client';

import Banner from './Banner';

export default function TantrikaPage() {
  return (
    <main className="flex flex-col w-full px-4 sm:px-6 md:px-10 lg:px-20 py-8 max-w-screen-xl mx-auto">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#4b2c2c]">
      {`  Tantrika`}
      </h1>

      {/* Side-by-side layout */}
      <div className="flex flex-col lg:flex-row gap-8 w-full items-start">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg text-justify leading-relaxed">
            {`Derived from the Sanskrit word "tantra", meaning "loom" or "warp," Tantrika conveys a sense of intricacy and craftsmanship. NHDC has chosen this to be its brand identity for all non-yarn and non-Dyes & Chemical sales related activities. The brand aims to showcase and promote the rich heritage of Indian handlooms and handicrafts by offering a wide range of authentic, high-quality products sourced directly from artisans and weavers across the country. Through Tantrika, NHDC seeks to create a direct market interface between traditional artisans and consumers, ensuring fair trade practices while enhancing the visibility and accessibility of indigenous textile traditions.`}
          </p>

        </div>

        {/* Right: Banner */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Banner />
        </div>
      </div>
    </main>
  );
}
