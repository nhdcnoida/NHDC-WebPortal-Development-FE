import React from "react";

const regionalOffices = [
  {
    region: "1. For Handloom Organization of Chattisgarh, Madhya Pradesh, Uttar Pradesh & Uttarakhand :-",
    incharge: "Mr. Ashish Kr Singh",
    designation: "Manager (Comm.)",
    address: [
      "National Handloom Development Corporation Ltd.",
      "1st Floor, H.No.10, Patel Nagar Colony,",
      "Mint House, Nadesar, Varanasi-221002",
      "Uttar Pradesh",
    ],
    telephone: "0542-2201283",
    mobile: "7702346333",
    email: "rovaranasi@nhdc.org.in",
  },
  {
    region: "2. For Handloom Organisation of Delhi, Haryana, Himachal Pradesh, J&K, Ladakh, Punjab, Rajasthan :-",
    incharge: "Mr. Kafeel Ahmad",
    designation: "Dy.Manager (Comm.)",
    address: [
      "National Handloom Development Corporation Ltd.",
      "Sector-29, Part-2, HUDA",
      "Near Plot No.178,",
      "Panipat-132103, Haryana",
    ],
    mobile: "8929004606",
    email: "ropanipat@nhdc.org.in",
  },
  {
    region: "3. For Handloom Organisation of Bihar, Jharkhand, Odisha, West Bengal :-",
    incharge: "Mr Sandeep Chetia",
    designation: "Manager (Comm.)",
    address: [
      "National Handloom Development Corporation Ltd.",
      "3rd Floor, Uttara Commercial Complex,",
      "Plot 9B, Scheme-VIII M, Ultadanga Main",
      "Road, Near Ultadanga Hawkers Market,",
      "Kolkata-700067, West Bengal.",
    ],
    telephone: "033-23565270",
    mobile: "08761045594",
    email: "rokolkata@nhdc.org.in",
  },
  {
    region: "4. For Handloom Organisation of Tamilnadu and Pondicherry :-",
    incharge: "Mr. R Rathnavel",
    designation: "Manager (Comm.)",
    address: [
      "National Handloom Development Corporation Ltd.",
      "Plot No.6, TNUDP Colony,",
      "Peelamedu Post, Coimbatore-641004,",
      "Tamil Nadu",
    ],
    telephone: "0422-2511672",
    mobile: "09633063337",
    email: "rocoimbatore@nhdc.org.in",
  },
  {
    region: "5. For Handloom Organisation of Andhra Pradesh and Telengana :-",
    incharge: "Mr KS Sakode",
    designation: "Manager (Comm.)",
    address: [
      "National Handloom Development Corporation Ltd.",
      "4th Floor, Chenetha Bhawan, Naampally,",
      "Near Nampally Railway Station,",
      "Hyderabad - 500001, Telengana",
    ],
    telephone: "040-24736845",
    mobile: "9109682929, 9440790013",
    email: "rohyderabad@nhdc.org.in",
  },
  {
    region: "6. For Handloom Organisation of Gujarat, Karnataka, Kerala and Maharashtra :-",
    incharge: "Mr Abhay Tandon",
    designation: "Sr. Manager (Comm.)",
    address: [
      "National Handloom Development Corporation Ltd.",
      "c/o Weavers Service Centre,",
      "Okalipuram, Near RRR Kalyan Mandapam,",
      "Bengaluru -560021, Karnataka",
    ],
    telephone: "080-23131184",
    mobile: "9896778355",
    email: "robangalore@nhdc.org.in",
  },
  {
    region: "7. For Handloom Organisation of Assam, Arunachal, Meghalya, Mizoram, Nagaland, Manipur, Tripura & Sikkim :-",
    incharge: "Mr. S Rajkumar",
    designation: "DGM (Comm.)",
    address: [
      "National Handloom Development Corporation Ltd.",
      "IIHT Campus, Jawahar Nagar,",
      "Kanapara, NH-37, Assam Kanta",
      "Guwahati, Kamrup (Metro), Assam-781022",
    ],
    telephone: "0361-2303587",
    mobile: "9626755760",
    email: "roguwahati@nhdc.org.in",
  },
];

export default function AnnexureATable() {
  return (
    <div className="mt-8 mb-8">
      <h2 className="text-xl font-bold mb-6 text-gray-800 pb-2">{`Annexure - 'A'`}</h2>

      <p className="mb-6 text-gray-700 font-medium">
        {`Address of Regional and Branch offices along with their In charges are given here as under:-`}
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-400">
          <tbody>
            {regionalOffices.map((office, idx) => (
              <React.Fragment key={idx}>
                <tr>
                  <th
                    colSpan={3}
                    className="border border-gray-400 px-4 py-3 text-left font-semibold text-gray-800 bg-gray-50"
                  >
                    {office.region}
                  </th>
                </tr>
                <tr className={idx % 2 === 1 ? "bg-gray-50" : ""}>
                  <td className="border border-gray-400 px-4 py-3 font-medium text-gray-700 w-1/4 align-top">
                    Contact Office
                    <br />
                    <br />
                    Regional Incharge:- {office.incharge}
                    <br />
                    <br />
                    {office.designation}
                  </td>
                  <td className="border border-gray-400 px-4 py-3 text-gray-700 w-1/2">
                    {office.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </td>
                  <td className="border border-gray-400 px-4 py-3 text-gray-700 w-1/4">
                    {office.telephone && (
                      <>
                        Telephone: {office.telephone}
                        <br />
                        <br />
                      </>
                    )}
                    {office.mobile && (
                      <>
                        M.No.: {office.mobile}
                        <br />
                        <br />
                      </>
                    )}
                    {office.email && <>E-mail: {office.email}</>}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
