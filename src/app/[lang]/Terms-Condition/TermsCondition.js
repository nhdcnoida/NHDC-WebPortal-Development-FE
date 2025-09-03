
import React from 'react';

export default function TermsConditionsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 pb-4">{`Terms & Conditions`}</h1>

      <div className="mb-8 p-6 bg-blue-50 border-l-4 lue-500 rounded-r-lg">
        <p className="leading-relaxed">
          {`These terms and conditions create a contract between you and `}
          <strong>{`NHDC`}</strong>
          {` (the "Agreement"). Please read the Agreement carefully. To confirm your understanding and acceptance of the Agreement, click "Agree."`}
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 pb-2">{`INTRODUCTION TO OUR SERVICES`}</h2>

        <p className="mb-4 leading-relaxed">
          {`This Agreement governs your use of `}
          <strong>{`NHDC's services`}</strong>
          {` ("Services"), through which you can place indents. All Transactions are considered final from your end based on which NHDC shall process indents based on feasibility subject to availability and other risks.`}
        </p>

        <p className="mb-4 leading-relaxed">
          {`Prices indicated for the indent may change at any time. If technical problems prevent or unreasonably delay delivery your exclusive and sole remedy is either replacement of the indent or refund of the amount paid, as determined by NHDC.`}
        </p>

        <p className="mb-4 leading-relaxed">
          {`From time to time, NHDC may refuse a refund request if we find evidence of fraud, refund abuse, or other manipulative behavior that entitles NHDC to a corresponding counterclaim.`}
        </p>

        <p className="leading-relaxed font-medium">
          {`You are a registered user of NHDC mobile application and you are of age 18 or above to create an NHDC indent and use our Services.`}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 pb-2">{`CONTENT AND SERVICE AVAILABILITY`}</h2>

        <p className="mb-4 leading-relaxed">
          {`Terms found in this Agreement that relate to Services are subject to other applicable laws governing NHDC operations.`}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 pb-2">{`TERMINATION AND SUSPENSION OF SERVICES`}</h2>

        <p className="mb-4 leading-relaxed">
          {`If you fail, or NHDC suspects that you have failed, to comply with any of the provisions of this Agreement, NHDC may, without notice to you:`}
        </p>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              {`Terminate services offered, and you will remain liable for all amounts due under your NHDC up to and including the date of termination.`}
            </li>
            <li>
              {`preclude your access to the Services.`}
            </li>
          </ul>
        </div>

        <p className="mb-4 leading-relaxed">
          {`NHDC further reserves the right to modify, suspend, or discontinue the Services (or any part or Content thereof) at any time with or without notice to you, and NHDC will not be liable to you or to any third party should it exercise such rights.`}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 pb-2">{`GOVERNING LAW`}</h2>

        <p className="mb-4 leading-relaxed">
          {`Except to the extent expressly provided in the following paragraph, this Agreement and the relationship between you and NHDC, and all Transactions on the Services shall be governed by the laws.`}
        </p>
      </section>
    </div>
  );
}
