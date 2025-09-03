export default function FreightSubsidyTables() {
  return (
    <div className="mt-6 mb-8">
      {/* Freight Reimbursement Table */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">{`Freight reimbursement for yarn`}</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">{`Type of Yarn`}</th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                  {`Maximum freight reimbursement to the eligible agencies in Plain Areas`}
                </th>
                <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                  {`Maximum freight reimbursement to the eligible agencies in NER & Hilly areas`}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">{`Other than Silk and Jute/Coir yarn`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`2.50 %`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`7.50 %`}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">{`Silk Yarn`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`1.00 %`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`2.25%`}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">{`Jute/ Coir Yarn`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`10.0 %`}</td>
                <td className="border border-gray-300 px-4 py-3 text-center">{`10.0%`}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-black mt-5">
          <strong>{`(b) Depot Charges :`}</strong>
          {` Depot operating expenses to eligible agencies @ 2% (limited to Rs. 15,000/- per month) of the value of the yarn supplied.`}
        </p>
      </div>
    </div>
  )
}
