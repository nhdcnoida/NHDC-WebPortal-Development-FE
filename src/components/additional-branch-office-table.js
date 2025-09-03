import { additionalBranchOffices } from "./additional-branch-office-data"

export default function AdditionalBranchOfficesTable() {
  return (
    <div className={`mt-8 mb-8`}>
      <h3 className={`text-lg font-semibold mb-6 text-gray-800 text-center`}>
        {`Additional Branch Offices of National Handloom Development Corporation Limited`}
      </h3>

      <div className={`overflow-x-auto`}>
        <table className={`min-w-full border-collapse border border-gray-400`}>
     <tbody>
  {additionalBranchOffices.map((office, idx) => (
    <tr key={idx} className={idx % 2 === 1 ? "bg-gray-50" : ""}>
      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700 align-top">
        {office.city}
      </td>
      <td className="border border-gray-300 px-4 py-3 text-gray-700">
        <p>{office.address}</p>
        {office.contact && <p className="mt-2 font-semibold">Contact Person: {office.contact}</p>}
      </td>
      <td className="border border-gray-300 px-4 py-3 text-gray-700">
        {office.tele && <p><strong>Tele/Fax:</strong> {office.tele}</p>}
        {office.cell && <p><strong>Cell:</strong> {office.cell}</p>}
        {office.email && <p><strong>Email:</strong> {office.email}</p>}
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  )
}
