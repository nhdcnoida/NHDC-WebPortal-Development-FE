import React, { memo, Suspense } from 'react'
import dynamic from 'next/dynamic';

const CitizenCharter = memo(function CitizenCharter() {

const FreightSubsidyTables = dynamic(() => import('@/components/freight-rates'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>
});
const AnnexureATable = dynamic(() => import('@/components/annexure-a-table'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>
});
const BranchOfficesTable = dynamic(() => import('@/components/branch-office-table'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>
});
const AdditionalBranchOfficesTable = dynamic(() => import('@/components/additional-branch-office-table'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>
});

const TableLoadingFallback = ({ rows = 5 }) => (
  <div className="mt-8 mb-8 animate-pulse">
    <div className="h-6 bg-gray-200 rounded mb-6 mx-auto w-96"></div>
    <div style={{ height: `${rows * 60 + 100}px` }} className="bg-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-gray-500 text-sm">Loading table...</div>
    </div>
  </div>
);



  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">{`Citizen Charter`}</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">{`NATIONAL HANDLOOM DEVELOPMENT CORPORATION LIMITED`}</h2>
        <p className="text-lg text-gray-600 mb-4">{`(A GOVT OF INDIA UNDERTAKING)`}</p>
        <h3 className="text-lg font-medium text-gray-700 underline mb-6">{`CITIZENS' CHARTER`}</h3>
        <p className="text-lg italic text-gray-600 font-medium">
          {`We make weaver's dream of today, the deed of tomorrow`}
        </p>
      </div>

      {/* Vision Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-orange-500 pb-2">{`OUR VISION:`}</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To ensure availability of inputs viz; Yarn (Cotton, Silk, Wool, Jute, Linen, Rayon, Blends etc.) and Dyes & Chemicals of desired quality at the most reasonable prices.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`Supplementing marketing efforts of Handloom agencies/ Individual handloom weavers / Apex bodies / Weavers co-operatives / producer companies/ weaver's entrepreneurs and helping them to achieve increased share in domestic & global market for handloom products.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To promote and facilitate continuous qualitative improvement in the handloom industry through developmental activities, upgrading technology and improving productivity through Sensitization programmes and Dyers training programmes.`}
            </span>
          </li>
        </ul>
      </section>

      {/* Mission Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-orange-500 pb-2">{`OUR MISSION:`}</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To excel as a pivotal organization in the handloom sector by serving as a National agency for promotion and development of handloom sector.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">{`To strive to remain operationally viable.`}</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To help to remove impediments to the buoyance of the Handloom sector.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To be recognized as the main developmental agency in the handloom industry including implementation of related activities in co-ordination with the Government / other agencies.`}
            </span>
          </li>
        </ul>
      </section>

      {/* Values Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-orange-500 pb-2">{`OUR VALUES:`}</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To act with integrity, judicious transparency, accountability, promptness and understanding in our dealings with the clients.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To provide all round support/services including technical knowhow to Handloom organizations / Apex bodies / Co-operative societies / Weavers/ Producer companies/ Weaver's entrepreneurs etc. with the optimum use of resources and allocation of modern technology and management.`}
            </span>
          </li>
        </ul>
      </section>

      {/* Commitment Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-orange-500 pb-2">{`OUR COMMITMENT`}</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To promote overall interest of the handloom weavers at large in general.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`Continuously strive to evolve simple procedures to facilitate availability of quality raw- materials e.g Yarn, Dyes & Chemicals and other inputs to handloom weavers at most reasonable prices.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To work with accuracy, consistency, time bound and result oriented approach.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To play a proactive role and work towards the overall development and growth of the handloom sector.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To create better marketing opportunities for handloom products.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To enhance use of information technology and to connect all its operating centers on Wide Area Net Work (WAN), ensuring a quicker flow of information for better services and smoother business transaction.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To contribute and build a quality culture for increasing the awareness regarding appropriate technology.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To interact with the Government / other agencies for seeking better facilities / policies / programmes to the handloom sector and highlights its needs on a continuous basis.`}
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-orange-500 pb-2">
          {`SERVICES PROVIDED TO USER GROUP AND REACH`}
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">{`Individual weavers.`}</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`Agencies in which weavers are members (SHG, JLG, Co-Op Societies, State Apex Bodies/ Corporations).`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">{`Handloom Producer Company`}</span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">{`Weavers Entrepreneurs`}</span>
          </li>
        </ul>
      </section>

      {/* Our Focal Point Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-orange-500 pb-2">{`Our Focal Point`}</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`Corporate / Head Office of National Handloom Development Corporation Limited is located at 4th Floor, Wegmans Business Park, Tower 01, Plot No 03, Sector Knowledge Park -III, Surajpur Kasna Main Road, Greater Noida, 201306 (Uttar Pradesh).`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`The Corporation has a moderate manpower of 129 employees scattered across the country.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`The offices at national level are managed with the help of 07(Seven) Regional offices, and 29 (Twenty nine) Branch offices. Details are available at Annex 'A'.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`Each of our Regional and Branch offices are committed to help weavers' community. Staff posted in these offices remain in constant touch with weavers' community of that region and endeavour to provide quality inputs at reasonable price.`}
            </span>
          </li>
        </ul>
      </section>

      {/* Our Activities Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-orange-500 pb-2">{`OUR ACTIVITIES:`}</h2>

        <h3 className="text-lg font-semibold mb-3 text-gray-800">{`To ensure -`}</h3>
        <ul className="space-y-4 text-gray-700 mb-6">
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`Availability of raw materials like yarn, dyes & chemicals and other inputs to handloom weavers.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`Building infrastructure for marketing of handloom products and to contribute to the growth of appropriate technology.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">{`To organize Training programmes which mainly includes :`}</span>
          </li>
        </ul>

        <div className="ml-6 mb-6">
          <p className="mb-3 text-gray-700">
            <span className="font-medium">{`i)`}</span> {`Sensitization programmes are arranged to educate weavers and society members about the schemes and benefits extended by Government of India for up-liftment of handloom sector and community engaged in this profession.`}
          </p>
          <p className="mb-4 text-gray-700">
            <span className="font-medium">{`ii)`}</span> {`Dyers training programmes - these are arranged / organized for technical skill upgradation of community engaged in Handloom Sector.`}
          </p>
        </div>

        <ul className="space-y-4 text-gray-700 mb-4">
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`To explore marketing opportunities through, Silk Fab and Wool Fab, Exclusive Expos etc`}
            </span>
          </li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-6">
          {`These exhibitions are organised every year by the corporation with the help of office of DCH.`}
        </p>
      </section>

      {/* Input Related Schemes Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-orange-500 pb-2">
          {`Input Related Schemes:`}
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          {`Government of India's `}<span className="font-semibold underline">{`Raw Material Supply Scheme`}</span>{` (RMSS) is presently benefiting the Handloom weavers in procuring yarn at mill gate price. The RMSS provides following benefits:`}
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`Supply of yarn to the handloom weavers at the price which is available at the mill gate.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`Under the scheme, transportation expenses and depot operating charges are reimbursed to the eligible agencies through NHDC.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`Under the scheme 15% Price Subsidy on Yarn (through DBT to linked bank account) with quantitative restrictions are available.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`Eligible agencies are - Individual weavers, Agencies in which weavers are members (SHG, JLG, Co-Op Societies), Handloom Producer Company, Weavers Entrepreneurs.`}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
            <span className="leading-relaxed">
              {`The rates for freight reimbursement and depot operating expenses are as under :-`}
            </span>
          </li>
        </ul>
    
          <Suspense fallback={<TableLoadingFallback />}>
            <FreightSubsidyTables/>
          </Suspense>
      </section>

      {/* Price Subsidy Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">{`15% PRICE SUBSIDY ON HANK YARN:`}</h3>

        <div className="mb-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            {`The objective of this component of the scheme is to make available raw material i.e. yarn at subsidized price to the eligible beneficiaries so as to facilitate handloom sector to compete with mill sector. Yarn Passbook will be issued to all eligible agencies and individual handloom weavers. Types of yarn and eligible quantity under the scheme are tabulated as under:`}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{`Type of yarn`}</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">{`Eligible Quantity`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">{`Cotton (upto 20s counts)`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`60 Kgs./loom/month`}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">{`Cotton (above 20s to 40s counts)`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`30 Kgs./loom/month`}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">{`Cotton (above 40s to 80s)`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`20 Kgs./loom/month`}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">{`Cotton (above 80s counts)`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`15 Kgs./loom/month`}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">{`Domestic Silk Yarn`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`6 Kgs./loom/month`}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">{`Woollen Yarn (below 10s NM)`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`50Kgs./loom/month`}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">{`Woollen Yarn(10s to39.99sNM)`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`12Kgs./loom/month`}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">{`Woollen Yarn(40s NM & above)`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`6Kgs./loom/month`}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">{`Linen Yarn (5 Lea to 10 Lea)`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`20 Kgs/loom/month`}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">{`Linen Yarn above 10 Lea`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`7kgs/loom/month`}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">{`Blended Yarn of Natural fibers`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`6 Kgs./loom/month`}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="my-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800 pb-2">{`OUR BENCHMARK OF PERFORMANCE:`}</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
              <span className="leading-relaxed">
                {`The corporation has its own performance evaluation system which are decided in the Memorandum Of Understanding (MOU) signed between Ministry of Textiles, Government of India and the NHDC every year so as to publicize policies, programmes and schemes of the Government. Corporation is signing MOU with the ministry of textiles since 1992-93.`}
              </span>
            </li>
          </ul>
        </section>

        {/* Complaints and Grievances Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800 pb-2">{`COMPLAINTS AND GRIEVANCES:`}</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            {`Corporation has a well-defined grievances redressal procedures:-`}
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
              <span className="leading-relaxed">
                {`Public grievances are taken care at Regional office level at first instance and then forwarded to the Grievances Redressal Officer of the Corporation at H.O. Greater Noida.`}
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">{`•`}</span>
              <span className="leading-relaxed">
                {`Staff / Employees grievances are taken care by a committee constituted for the purpose at initial level. Reports / recommendations of the committee are forwarded to the designated Staff Grievances Redressal Officer, who along with his findings forward the cases to Managing Director for final decision.`}
              </span>
            </li>
          </ul>
        </section>

        {/* Feedback and Suggestions Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800 pb-2">{`PROVISION OF FEEDBACK/ Suggestion:`}</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            {`Corporation has its own Suggestion scheme and Whistle blower policy so as to receive valuable inputs of the employees relating to improvement in work culture and efficiency. These schemes are also ment with an objective to built culture of participation and transparency in the organization.`}
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            {`We also conduct survey from outside agencies for SWOT analysis and implement their suggestions (if required / practically possible) for betterment of the employees and upliftment of handloom sector and weaver community attached with this profession.`}
          </p>
        </section>

        {/* Guidance and Help Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-800 pb-2">{`GUIDANCE AND HELP:`}</h2>

          <div className="mb-6">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">{`•`}</span>
                <span className="leading-relaxed">
                  {`The Head office/ Corporate Office is at 4th Floor, Wegmans Business Park, Tower 01, Plot No 03, Sector Knowledge Park -III, Surajpur Kasna Main Road, Greater Noida, 201306 (Uttar Pradesh).`}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">{`•`}</span>
                <span className="leading-relaxed">
                  {`We can also be contacted at: `}<strong>{`(EPABX) 0120-2329600`}</strong>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">{`•`}</span>
                <span className="leading-relaxed">{`Globally one can reach us through our e-mail and website:`}</span>
              </li>
            </ul>
          </div>

          <p className="text-black">
            {`E-mail: `}
            <a href="mailto:conhdc@nhdc.org.in" className="text-blue-600 hover:underline">
              {`conhdc@nhdc.org.in`}
            </a>
          </p>
    
          <p className="text-black">
            {`Website: `}
            <a
              href="https://www.nhdc.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {`www.nhdc.org.in`}
            </a>
          </p>
        </section>
      </div>

  <Suspense fallback={<TableLoadingFallback rows={8}/>}>
          <AnnexureATable/>
        </Suspense>
        
<Suspense fallback={<TableLoadingFallback rows={13} />}>
  <BranchOfficesTable/>
</Suspense>

<Suspense fallback={<TableLoadingFallback rows={8} />}>
  <AdditionalBranchOfficesTable/>
</Suspense>
    </div>
  )
})

export default CitizenCharter;