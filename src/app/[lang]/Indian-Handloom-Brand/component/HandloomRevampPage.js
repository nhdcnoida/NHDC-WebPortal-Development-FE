// app/Handloomrevamp/component/HandloomRevampPage.js

"use client";
import Image from "next/image";
import Head from "next/head";

export default function HandloomRevampPage() {
  return (
    <>
      <Head>
        {/* ✅ SEO Title & Description */}
        <title>
          Revamped Handloom Scheme for Weavers | Digital & Sustainable Push
        </title>
        <meta
          name="description"
          content="India's Ministry of Textiles to revamp the National Handloom Development Programme from FY26 with focus on digital platforms, sustainability, and global exports."
        />
        <meta
          name="keywords"
          content="Handloom Revamp, Handloom Weavers Scheme, National Handloom Development Programme, Indian Handlooms, Sustainable Textiles, Digital India Handloom"
        />
        <meta name="author" content="Ministry of Textiles, India" />

        {/* ✅ Open Graph for Social Sharing */}
        <meta
          property="og:title"
          content="Revamped Handloom Scheme for Weavers | Digital & Sustainable Push"
        />
        <meta
          property="og:description"
          content="The Ministry of Textiles to relaunch the Handloom Development Programme with new-age marketing, sustainability, and online platforms for weavers."
        />
        <meta property="og:image" content="/assets/revampedimg.png" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://www.yourdomain.com/Handloomrevamp"
        />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Revamped Handloom Scheme for Weavers | Digital & Sustainable Push"
        />
        <meta
          name="twitter:description"
          content="India’s revamped handloom scheme to empower artisans with digital tools, sustainability focus, and online sales opportunities."
        />
        <meta name="twitter:image" content="/assets/revampedimg.png" />

        {/* ✅ Canonical URL */}
        <link
          rel="canonical"
          href="https://www.yourdomain.com/Handloomrevamp"
        />
      </Head>

      <main className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Article */}
          <article className="md:col-span-2 bg-white p-6 shadow rounded">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">
              Revamped scheme for handloom weavers from next fiscal
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              July 23, 2025 22:43 IST
            </p>

            {/* ✅ Hero Image with Priority */}
            <Image
              src="/assets/revampedimg.png"
              alt="Handloom weaving scheme revamp for Indian weavers"
              width={1000}
              height={600}
              className="w-full max-w-[950px] h-auto md:h-[385px] object-cover rounded mb-4"
              priority
            />

             <p className="text-sm text-gray-600 italic mb-4">
            {'India to Revamp Handloom Program with Digital Focus & Sustainability Push for Global Exports. (Image Source: Pixabay)'}
          </p>

          <p className="mb-4">
            {`To boost marketing and exports of handloom products, the textile Textiles ministry will be announcing a revamped national programme next year, a senior textile ministry official said.
            “As the national handloom development programme is coming to an end by the end of FY26, we will launch a programme with additional aspects with thrust on new-age marketing while taking into consideration sustainability aspects of the sector,” M Beena, Development Commissioner– handlooms, told FE.`}
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">{'Focusing on the Traditional market'}</h2>
          <p className="mb-4">
           {` The government is currently relying on traditional market channels such as melas, exhibitions and events across state and national level, for boosting sales, among the younger buyers. The ministry has now developed a dedicated portal — indianhandlooms.com — in collaboration with Digital India scheme under the ministry of information and technology, for boosting online sales of cloth and artefact.`}
          </p>

          <p className="mb-4">
           {` “Whenever weavers list products on platforms such as Amazon, small players highly commission. Our portal has no commission for hosting products and shipping charges which are paid from the National Handloom Development Fund,” Beena said. So far, 2362 sellers were registered on the portal and 15,257 product profiles have been displayed.`}
          </p>

          <p className="mb-2">
          {`  To ensure that products are genuinely hand-woven by skilled artisans, the ministry has introduced ‘Handloom Mark’, a certification mark that guarantees the authenticity of products.`}
          </p>
          </article>

          {/* Sidebar */}
          <aside
            className="bg-white p-4 shadow rounded w-full md:max-w-[500px]"
            aria-labelledby="related-news"
          >
            <h2
              id="related-news"
              className="text-lg font-semibold mb-4"
            >
              Related News
            </h2>

            {/* Card 1 */}
            <div className="mb-6">
              <div className="w-full h-[230px] overflow-hidden rounded border border-gray-300">
                <Image
                  src="/assets/related1img.png"
                  alt="Laldhuoma highlighting North East India’s handloom potential"
                  width={1000}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold mt-2 leading-tight">
                Laldhuoma highlights NE’s potential in handloom sector
              </p>
              <p className="text-xs text-gray-500">
                The Ministry of Textiles is working on boosting handloom
                marketing and exports across India…
              </p>
            </div>

            <hr className="my-4" />

            {/* Card 2 */}
            <div className="mb-6">
              <div className="w-full h-[230px] overflow-hidden rounded border border-gray-300 flex items-center justify-center bg-white">
                <Image
                  src="/assets/thehindu_logo.png"
                  alt="The Hindu newspaper logo"
                  width={500}
                  height={500}
                  className="h-full object-contain"
                />
              </div>
              <p className="text-sm font-semibold mt-2 leading-tight">
                75 weavers to showcase handloom works at Mysuru Utsav
              </p>
              <p className="text-xs text-gray-500">
                Handloom artisans to participate in Mysuru’s annual utsav with
                unique fabric and weaving demonstrations…
              </p>
            </div>

            {/* Card 3 */}
            <div className="mb-6">
              <div className="w-full h-[230px] overflow-hidden rounded border border-gray-300">
                <Image
                  src="/assets/related2img.png"
                  alt="Capacity building program for handicrafts and handloom artisans"
                  width={1000}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold mt-2 leading-tight">
                Directorate of Handicrafts & Handloom organises capacity building
                programme
              </p>
              <p className="text-xs text-gray-500">
                Skill development and training workshops launched to empower
                handloom artisans for global competitiveness…
              </p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
