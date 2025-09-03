const branchOffices = [
  {
    city: "Agartala",
    address: "Campus of Weavers Centre, ITI Road, Indira Nagar, Agartala-799006, Tripura (West)",
    contact: "Mr S. Bhattacharya, Sr. Officer (Comm.)",
    cell: "8837451899",
    email: "sbhattacharya@nhdc.org.in",
  },
  {
    city: "Aizawl",
    address: "Zohanco Building, 2nd Floor, Chaltlang Lily Veng, near Mizoram State Transport Office, Aizawl - 796012, Mizoram",
    contact: "Sh. Lalvensanga, Officer (Commercial)",
    cell: "9085536328",
    email: "boaizawl@nhdc.org.in",
  },
  {
    city: "Alleppy",
    address: "AGP/12/33/B, Thayyil House, Poonkavu Junction, Pathirapally Post, Alleppy-688521, Kerala",
    contact: "Mr Manoj Kumar (Office Attendant)",
    cell: "09446230653",
    email: "boalleppy@nhdc.org.in",
  },
  {
    city: "Bargarh",
    address: "C/o Jangyasini Sharangi, House No. B1, Block-B, Panchayat College Road, Bargarh-768028, Odisha",
    contact: "Sh. Nilamadhab Patra, Officer (Comm.)",
    tele: "0664-6231826",
    cell: "9439184826",
    email: "bobargarh@nhdc.org.in",
  },
  {
    city: "Behrampur",
    address: "Berhampore, Distt.- Murshidabad, (West Bengal)",
    contact: "Mr. Sandeep Chetia, Manager (Comm.)",
    cell: "8761045594",
    email: "rokolkata@nhdc.org.in",
  },
  {
    city: "Bhubneshwar",
    address: "Campus of Weavers Service Centre, Plot No. A/407, Shaheed Nagar, Bhubaneswar - 751007, Odisha",
    contact: "Sri A. K. Saha, Manager (Comm.)",
    tele: "0674-2548606",
    cell: "8472045340",
    email: "robhubneshwar@nhdc.org.in",
  },
  {
    city: "Champa",
    address: "Nandji Complex, Gowshala Marc Modi Chawk, Tahsheel Champa, Janjgir-Champa 495671",
    contact: "Sri Kamal Kishor, Dy Mgr. (Comm.)",
    cell: "9838253941",
  },
  {
    city: "Erode",
    address: "H.N. 75, Andavar Street, Sampath Nagar, Erode-638001, Tamil Nadu",
    contact: "Mr M. S. Sreeniwas, Officer (Comm.)",
    tele: "0424-2267781",
    email: "boerode@nhdc.org.in",
  },
  {
    city: "Imphal",
    address: "Campus of Weavers Service Center, Porompat Dc Road, Imphal East, Manipur - 975005",
    contact: "Sh. Y. Shanti Kumar Singh, Asst. Manager (Comm.)",
    tele: "0385-2445031",
    cell: "9435340509",
    email: "boimphal@nhdc.org.in",
  },
  {
    city: "Jammu",
    address: "Yarn Depot, Khasra No. 1698, Village Birpur, Tehsil Bari Brahmna, Jammu-181133, Jammu & Kashmir",
    contact: "Sri Abdul Basit, Dy. Manager (Comm.)",
    cell: "9469376432",
  },
  {
    city: "Limbdi, Surendranagar",
    address: "Ambica Nivas, Jone Road, J K High School, Surendranagar, Gujarat, 363421",
    contact: "Sh. V.P. Gautam, Sr. Officer (Commercial)",
    cell: "7550361021",
  },
  {
    city: "Lucknow",
    address: "A-3/34, Vishwas Khand, Gomti Nagar, Lucknow Pin - 226010, Uttar Pradesh",
    contact: "Sri Pankaj Sinha, Manager (Comm.)",
    tele: "0522-2309436",
    cell: "9415545325",
    email: "pankajsinha@nhdc.org.in",
  },
  {
    city: "Kancheepuram",
    address: "44-A, ABS Complex, Sanguapet Street, Kanchipuram - 631501, Tamil Nadu",
    contact: "Mr. M. Subramaniam, Sr. Officer (Comm.)",
    tele: "044-27225022",
    cell: "9487750223",
    email: "bokanchipuram@nhdc.org.in",
  },
];

export default function BranchOfficesTable() {
  return (
    <div className="mt-8 mb-8">
      <h3 className="text-lg font-semibold mb-6 text-gray-800 text-center py-3">
        Branch Offices of National Handloom Development Corporation Limited
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-400">
          <tbody>
            {branchOffices.map((office, idx) => (
              <tr key={idx} className={idx % 2 === 1 ? "bg-gray-50" : ""}>
                <td className="border border-gray-400 px-4 py-4 font-medium text-gray-700 w-1/6 align-top">
                  {office.city}
                </td>
                <td className="border border-gray-400 px-4 py-4 text-gray-700 w-1/2">
                  <p>{office.address}</p>
                  <br />
                  <p>
                    <strong>Contact Person:- </strong>
                    {office.contact}
                  </p>
                </td>
                <td className="border border-gray-400 px-4 py-4 text-gray-700 w-1/3">
                  {office.tele && (
                    <>
                      <strong>Tele/Fax:- </strong> {office.tele}
                      <br />
                      <br />
                    </>
                  )}
                  {office.cell && (
                    <>
                      <strong>Cell:- </strong> {office.cell}
                      <br />
                      <br />
                    </>
                  )}
                  {office.email && (
                    <>
                      <strong>E-mail:- </strong> {office.email}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
