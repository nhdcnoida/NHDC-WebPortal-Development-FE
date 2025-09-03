// app/Handloomrevamp/component/HandloomRevampPage.js

import Image from "next/image";

export default function HandloomRevampPage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Main Article */}
        <div className="md:col-span-2 bg-white p-6 shadow rounded">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
           {` Revamped scheme for handloom weavers from next fiscal`}
          </h1>
          <p className="text-sm text-gray-500 mb-4">{`July 23, 2025 22:43 IST`}</p>

          {/* ✅ Responsive image */}
          <Image
          height={1000}
          width={1000}
            src="/assets/revampedimg.png"
            alt="Handloom Weaving"
            className="w-full max-w-[950px] h-auto md:h-[385px] object-cover rounded mb-4"
          />

          <p className="text-sm text-gray-600 italic mb-4">
            {`India to Revamp Handloom Program with Digital Focus & Sustainability Push for Global Exports. (Image Source: Pixabay)`}
          </p>

          <p className="mb-4">
            {`To boost marketing and exports of handloom products, the textile Textiles ministry will be announcing a revamped national programme next year, a senior textile ministry official said.
            “As the national handloom development programme is coming to an end by the end of FY26, we will launch a programme with additional aspects with thrust on new-age marketing while taking into consideration sustainability aspects of the sector,” M Beena, Development Commissioner– handlooms, told FE.`}
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">{`Focusing on the Traditional market`}</h2>
          <p className="mb-4">
           {` The government is currently relying on traditional market channels such as melas, exhibitions and events across state and national level, for boosting sales, among the younger buyers. The ministry has now developed a dedicated portal — indianhandlooms.com — in collaboration with Digital India scheme under the ministry of information and technology, for boosting online sales of cloth and artefact.`}
          </p>

          <p className="mb-4">
           {` “Whenever weavers list products on platforms such as Amazon, small players highly commission. Our portal has no commission for hosting products and shipping charges which are paid from the National Handloom Development Fund,” Beena said. So far, 2362 sellers were registered on the portal and 15,257 product profiles have been displayed.`}
          </p>

          <p className="mb-2">
          {`  To ensure that products are genuinely hand-woven by skilled artisans, the ministry has introduced ‘Handloom Mark’, a certification mark that guarantees the authenticity of products.`}
          </p>
        </div>

        {/* Sidebar */}
        <aside className="bg-white p-4 shadow rounded w-full md:max-w-[500px]">
          <h2 className="text-lg font-semibold mb-4">Related news</h2>

          {/* Card 1 */}
          <div className="mb-6">
            <div className="w-full h-[230px] overflow-hidden rounded border border-gray-300">
              <Image
              height={1000}
              width={1000}
                src="/assets/related1img.png"
                alt="Laldhuoma"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold mt-2 leading-tight">
            {`  Laldhuoma highlights NE’s potential in handloom sector`}
            </p>
            <p className="text-xs text-gray-500">
             {` To boost marketing and exports of handloom products, the textile Textiles ministry will be an...`}
            </p>
          </div>

          <hr className="my-4" />

          {/* Card 2 */}
          <div className="mb-6">
            <div className="w-full h-[230px] overflow-hidden rounded border border-gray-300 flex items-center justify-center bg-white">
              <Image
              height={1000}
              width={1000}
                src="/assets/thehindu_logo.png"
                alt="The Hindu"
                className="h-full object-contain"
              />
            </div>
            <p className="text-sm font-semibold mt-2 leading-tight">
            {`  75 weavers to showcase handloom works at Mysuru utsav`}
            </p>
            <p className="text-xs text-gray-500">
             {` To boost marketing and exports of handloom products, the textile Textiles ministry will be an...`}
            </p>
          </div>

          {/* Card 3 */}
          <div className="mb-6">
            <div className="w-full h-[230px] overflow-hidden rounded border border-gray-300">
              <Image
              height={1000}
              width={1000}
                src="/assets/related2img.png"
                alt="Handicrafts Program"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm font-semibold mt-2 leading-tight">
            {`  Directorate of handicrafts & handloom organises capacity building prog`}
            </p>
            <p className="text-xs text-gray-500">
              {`To boost marketing and exports of handloom products, the textile Textiles ministry will be an...`}
            </p>
          </div>
        </aside>

      </div>
    </div>
  );
}
