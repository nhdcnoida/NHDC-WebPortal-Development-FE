"use client";
import { useParams } from 'next/navigation';

const ContactDetailsTable = ({ title, rows, lang = "en" }) => {
  const columns = lang === "hi" 
    ? ["क्रम संख्या", "नाम", "पदनाम", "संपर्क", "ईमेल"]
    : ["S. No.", "Name", "Designation", "Contact", "Email"];
  
  return (
    <div>
      <h2 style={{ fontSize: "2rem", margin: "2rem 0 1rem", color: "#62402A" }}>
        {title}
      </h2>
      <div style={{ overflowX: "auto" }}>
        <table style={{ 
          width: "100%", 
          borderCollapse: "collapse", 
          minWidth: "600px", 
          border: "1px solid #ccc",
          fontFamily: "Arial, sans-serif"
        }}>
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th
                  key={i}
                  style={{
                    border: "1px solid #ccc",
                    padding: "12px",
                    background: "#F7D7D8",
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "white" }}>
                <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>
                  {row.sno}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "12px" }}>
                  {row.name}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "12px" }}>
                  {row.designation}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "12px" }}>
                  {row.phone}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "12px" }}>
                  <a href={`mailto:${row.email}`} style={{ color: "#2563eb", textDecoration: "none" }}>
                    {row.email}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const VigilanceContactsPage = () => {
  const params = useParams();
  const lang = params?.lang || "en";

  const contactData = {
    title: lang === "hi" ? "सतर्कता संपर्क विवरण" : "Vigilance Contact Details",
    rows: [
      {
        sno: "1",
        name: lang === "hi" ? "सुश्री अक्षांशा शर्मा" : "Ms. Akanksha Sharma",
        designation: lang === "hi" ? "मुख्य सतर्कता अधिकारी" : "Chief Vigilance Officer",
        phone: "0120-2329606",
        email: "cvo@nhdc.org.in"
      },
      {
        sno: "2",
        name: lang === "hi" ? "श्री विजय प्रताप गौतम" : "Sh. Vijay Pratap Gautam",
        designation: lang === "hi" ? "सहायक प्रबंधक" : "Asstt. Manager",
        phone: "0120-2329609",
        email: "vigilance@nhdc.org.in"
      }
    ]
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <ContactDetailsTable 
        title={contactData.title}
        rows={contactData.rows}
        lang={lang}
      />
    </div>
  );
};

export default VigilanceContactsPage;
