"use client"

import { useParams } from "next/navigation"

const Capicity = () => {
    const { lang } = useParams()
    const isHindi = lang === "hi"

    const trainingRows = [
        {
            sno: 1,
            title: isHindi ? "मौजूदा/उम्मीदवार अनुसूचित जाति/अनुसूचित जनजाति उद्यमियों के लिए क्षमता निर्माण प्रशिक्षण कार्यक्रम" : "Capacity building training programs for existing/aspiring SC/ST entrepreneurs",
            scheme: "National SC-ST Hub",
            location: "Bokolia, Karbi Anglong",
            state: "Assam",
            district: "Karbi Anglong",
            course: isHindi ? "जूट यार्न हांक डायर" : "Jute Yarn Hank Dyer",
            courseType: isHindi ? "गैर-आवासीय" : "Non Residential",
            batchSize: 40,
            startDate: "07-07-2025",
            endDate: "30-08-2025",
            status: isHindi ? "चल रहा है" : "Ongoing"
        },
        {
            sno: 2,
            title: isHindi ? "मौजूदा/उम्मीदवार अनुसूचित जाति/अनुसूचित जनजाति उद्यमियों के लिए क्षमता निर्माण प्रशिक्षण कार्यक्रम" : "Capacity building training programs for existing/aspiring SC/ST entrepreneurs",
            scheme: "National SC-ST Hub",
            location: "Mahur, Dima-Hasao",
            state: "Assam",
            district: "Dima Hasao",
            course: isHindi ? "जूट यार्न हांक डायर" : "Jute Yarn Hank Dyer",
            courseType: isHindi ? "गैर-आवासीय" : "Non Residential",
            batchSize: 40,
            startDate: "07-07-2025",
            endDate: "30-08-2025",
            status: isHindi ? "चल रहा है" : "Ongoing"
        },
        {
            sno: 3,
            title: isHindi ? "मौजूदा/उम्मीदवार अनुसूचित जाति/अनुसूचित जनजाति उद्यमियों के लिए क्षमता निर्माण प्रशिक्षण कार्यक्रम" : "Capacity building training programs for existing/aspiring SC/ST entrepreneurs",
            scheme: "National SC-ST Hub",
            location: "Thengzol, Serchhip",
            state: "Mizoram",
            district: "Serchhip",
            course: isHindi ? "हथकरघा उद्यमी" : "Handloom Entrepreneur",
            courseType: isHindi ? "गैर-आवासीय" : "Non Residential",
            batchSize: 40,
            startDate: "09-07-2025",
            endDate: "20-10-2025",
            status: isHindi ? "चल रहा है" : "Ongoing"
        },
        {
            sno: 4,
            title: isHindi ? "मौजूदा/उम्मीदवार अनुसूचित जाति/अनुसूचित जनजाति उद्यमियों के लिए क्षमता निर्माण प्रशिक्षण कार्यक्रम" : "Capacity building training programs for existing/aspiring SC/ST entrepreneurs",
            scheme: "National SC-ST Hub",
            location: "Chozuba, Phek",
            state: "Nagaland",
            district: "Phek",
            course: isHindi ? "जूट यार्न हांक डायर" : "Jute Yarn Hank Dyer",
            courseType: isHindi ? "गैर-आवासीय" : "Non Residential",
            batchSize: 40,
            startDate: "07-07-2025",
            endDate: "30-08-2025",
            status: isHindi ? "चल रहा है" : "Ongoing"
        },
        {
            sno: 5,
            title: isHindi ? "मौजूदा/उम्मीदवार अनुसूचित जाति/अनुसूचित जनजाति उद्यमियों के लिए क्षमता निर्माण प्रशिक्षण कार्यक्रम" : "Capacity building training programs for existing/aspiring SC/ST entrepreneurs",
            scheme: "National SC-ST Hub",
            location: "Papumpare",
            state: "Arunachal Pradesh",
            district: "Papumpare",
            course: isHindi ? "जूट यार्न हांक डायर" : "Jute Yarn Hank Dyer",
            courseType: isHindi ? "गैर-आवासीय" : "Non-residential",
            batchSize: 40,
            startDate: "10-07-2025",
            endDate: "10-09-2025",
            status: isHindi ? "चल रहा है" : "Ongoing"
        },
        {
            sno: 6,
            title: isHindi ? "मौजूदा/उम्मीदवार अनुसूचित जाति/अनुसूचित जनजाति उद्यमियों के लिए क्षमता निर्माण प्रशिक्षण कार्यक्रम" : "Capacity building training programs for existing/aspiring SC/ST entrepreneurs",
            scheme: "National SC-ST Hub",
            location: "Institute of Cooperative Management (ICM), Imphal",
            state: "Manipur",
            district: "Imphal West",
            course: isHindi ? "हथकरघा उद्यमी" : "Handloom Ent",
            courseType: isHindi ? "आवासीय" : "Residential",
            batchSize: 40,
            startDate: "03-07-2025",
            endDate: "22-10-2025",
            status: isHindi ? "चल रहा है" : "Ongoing"
        },
    ]

    const columns = isHindi ? [
        "क्रम संख्या",
        "प्रशिक्षण कार्यक्रम का नाम",
        "योजना का नाम",
        "प्रशिक्षण स्थान",
        "राज्य",
        "जिला",
        "पाठ्यक्रम",
        "पाठ्यक्रम प्रकार",
        "बैच का आकार",
        "प्रशिक्षण शुरू होने की तारीख",
        "प्रशिक्षण समाप्त होने की तारीख",
        "स्थिति"
    ] : [
        "Sr. No.",
        "Name of the Training Programme",
        "Name of the Scheme",
        "Training Location",
        "State",
        "District",
        "Course",
        "Course Type",
        "Batch Size",
        "Training Start Date",
        "Training End Date",
        "Status"
    ]

    return (
        <div className="p-4 md:p-8">
            <style>
                {`
                    @keyframes gradient {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                `}
            </style>
            <h2
                style={{
                    fontSize: "2rem",
                    margin: "2rem 0 1rem",
                    color: "#62402A",
                }}
            >
                {isHindi ? "क्षमता निर्माण और प्रशिक्षण" : "Capacity Building & Training"}
            </h2>
            <p
                style={{
                    fontSize: "1.1rem",
                    margin: "1rem 0",
                    color: "#333",
                }}
            >
                {isHindi 
                    ? "एनएचडीसी में, हम मानते हैं कि कारीगरों को सशक्त बनाने की शुरुआत उनकी कौशल को सशक्त बनाने से होती है। हमारी क्षमता निर्माण और प्रशिक्षण पहल भारत भर के बुनकरों, कारीगरों और संबद्ध श्रमिकों के ज्ञान, रचनात्मकता और बाजार तत्परता को मजबूत करने पर केंद्रित हैं।"
                    : "At NHDC, we believe that empowering artisans begins with empowering their skills. Our Capacity Building & Training initiatives are focused to strengthen the knowledge, creativity and market readiness of weavers, artisans and allied workers across India."}
            </p>
            <h3
                style={{
                    fontSize: "1.5rem",
                    margin: "1.5rem 0 1rem",
                    color: "#62402A",
                }}
            >
                {isHindi ? "क्षमता निर्माण और प्रशिक्षण कार्यक्रम" : "Capacity Building & Training Programmes"}
            </h3>
            <div style={{ overflowX: "auto" }}>
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        minWidth: "600px",
                        border: "1px solid #ccc",
                    }}
                >
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
                        {trainingRows.map((row, i) => (
                            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#f9f9f9" : "white" }}>
                                <td
                                    style={{
                                        border: "1px solid #ccc",
                                        padding: "12px",
                                        textAlign: "center",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {row.sno}
                                </td>
                                <td style={{ border: "1px solid #ccc", padding: "12px" }}>
                                    {row.title}
                                </td>
                                <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>
                                    {row.scheme}
                                </td>
                                <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>
                                    {row.location}
                                </td>
                                <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>
                                    {row.state}
                                </td>
                                <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>
                                    {row.district}
                                </td>
                                <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>
                                    {row.course}
                                </td>
                                <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>
                                    {row.courseType}
                                </td>
                                <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>
                                    {row.batchSize}
                                </td>
                                <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>
                                    {row.startDate}
                                </td>
                                <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>
                                    {row.endDate}
                                </td>
                                <td style={{ border: "1px solid #ccc", padding: "12px", textAlign: "center" }}>
                                    {row.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Capicity