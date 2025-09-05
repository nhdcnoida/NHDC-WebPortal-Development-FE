"use client";
import React from "react";
import { useParams } from "next/navigation";

const directoryData = {
  en: [
    {
      section: "NHDC'S Head Office Intercom Directory",
      highlightColor: "text-red-600 font-semibold",
      rows: [
        {
          name: "Commodore Rajiv Ashok (Retd.)",
          designation: "MD",
          ext: "9601",
          email: "mdnhdc@nhdc.org.in",
          highlight: true
        },
        {
          name: "",
          designation: "Secy/MD",
          ext: "9602",
          email: "pstomd@nhdc.org.in"
        },
        {
          name: "Sh. Dhirender Prakash",
          designation: "Executive Director/Finance",
          ext: "9615",
          email: "dhirenderprakash@nhdc.org.in",
          highlight: true
        },
        {
          name: "",
          designation: "PS/ED/Finance",
          ext: "9609",
          email: "pstoedf@nhdc.org.in"
        },
        {
          name: "Vacant",
          designation: "Executive Director/Commercial",
          ext: "",
          email: "",
          highlight: true
        },
        {
          name: "",
          designation: "PS/ED/Commercial",
          ext: "",
          email: ""
        },
        {
          name: "Poonam Hasija",
          designation: "Assistant CS",
          ext: "",
          email: "cs@nhdc.org.in",
          // highlight: true
        }
      ]
    },
    {
      section: "VIGILANCE",
      highlightColor: "text-blue-600 font-semibold",
      rows: [
        {
          name: "Ms. Akanksha Sharma",
          designation: "CVO",
          ext: "9606",
          email: "cvo@nhdc.org.in"
        },
         {
          name: "Sh. Anil Kumar",
          designation: "Executive",
          ext: "9609",
          email: "Vigilance@nhdc.org.in"
        },
        {
          name: "Sh. Vijay Pratap Gautam",
          designation: "Asst. Manager",
          ext: "9609",
          email: "vpgautam@nhdc.org.in"
        }
      ]
    },
    {
      section: "HUMAN RESOURCES",
      highlightColor: "text-green-600 font-semibold",
      rows: [
        {
          name: "Dr. Prasanna M.",
          designation: "Dy. General Manager ",
          ext: "9607",
          email: "prasanna.m@nhdc.org.in"
        },
         {
          name: "Sh. Aksen",//need to check this 
          designation: "Legal Consultant / Advisor",
          ext: "",
          email: "legalconsultant@nhdc.org.in"
        },
        {
          name: "Sh. Akshat Vatsa",
          designation: "Manager (HR)",
          ext: "9625",
          email: "akshatvatsa@nhdc.org.in"
        },
        {
          name: "Sh. Gaurav Tripathi",
          designation: "Asst. Manager",
          ext: "9621",
          email: "gauravtripathi@nhdc.org.in"
        },
        {
          name: "Ms. Rimjhim Jaiswal",
          designation: "Sr. Officer",
          ext: "9627",
          email: "rimjhimjaiswal@nhdc.org.in"
        },
        // {
        //   name: "Ms. Shobha Agarwal",
        //   designation: "Sr. Assistant",
        //   ext: "",
        //   email: "shobhaagarwal@nhdc.org.in"
        // },
        {
          name: "Ms. Kamini Kaushal",
          designation: "Jr. Officer",
          ext: "",
          email: "kaminikaushal@nhdc.org.in"
        }
      ]
    },
      {
      section: "RAJBHASHA",
      highlightColor: "text-orange-600 font-semibold",
      rows: [
        {
          name: "Ms. Sohni Verma",
          designation: "Asst. Manager",
          ext: "9621",
          email: "shoniverma@nhdc.org.in"
        },
        {
          name: "Ms. Shanti Sharma",
          designation: "Jr. Officer",
          ext: "",
          email: "shantisharma@nhdc.org.in"
        }
      ]
    },
    {
      section: "COMMERCIAL (Yarn/DNC/Outreach/development)",
      highlightColor: "text-blue-800 font-semibold",
      rows: [
        {
          name: "Vacant",
          designation: "GM/Commercial",
          ext: "",
          email: ""
        },
        // {
        //   name: "",
        //   designation: "PS‑GM/Commercial",
        //   ext: "",
        //   email: ""
        // },
        {
          name: "Sh. Sanjay Joshi",
          designation: "Dy. General Manager ",
          ext: "9608",
          email: "sanjayjoshi@nhdc.org.in",
          highlight: true
        },
        {
          name: "Sh. Nilesh Sukhadev",
          designation: "Senior Manager (Comm.)",
          ext: "",
          email: "nileshsukhadeve@nhdc.org.in"
        },
        {
          name: "Sh. P.L. Singhal",
          designation: "Manager",
          ext: "9622",
          email: "plsinghal@nhdc.org.in"
        },
        {
          name: "Sh. Jitendra Tolambiya",
          designation: "Manager",
          ext: "9624",
          email: "jitendratolambiya@nhdc.org.in"
        },
         {
          name: "Sh. Jyotirmoy Choudhury",
          designation: "Project Development Officer",
          ext: "",
          email: "projects@nhdc.org.in"
        },
        {
          name: "Ms. Madhulika Tiwari",
          designation: "Asst. Manager",
          ext: "9629",
          email: "madhulikatiwari@nhdc.org.in"
        },
        {
          name: "Sh. Varun Chaddha",
          designation: "Sr. Officer",
          ext: "",
          email: "varunchaddha@nhdc.org.in"
        },
        {
          name: "Ms. Shobha Agarwal",
          designation: "Sr. Assistant",
          ext: "",
          email: "shobhaagarwal@nhdc.org.in"
        },
        {
          name: "Sh. Arvind Ahirwar",
          designation: "Jr. Officer",
          ext: "",
          email: "arvindahirwar@nhdc.org.in"
        },
        {
          name: "Sh. Rakesh Kumar Singh",
          designation: "Jr. Officer",
          ext: "",
          email: "rakeshkumar@nhdc.org.in"
        }
      ]
    },
  
    {
      section: "INFORMATION TECHNOLOGY",
      highlightColor: "text-purple-600 font-semibold",
      rows: [
        {
          name: "Sh. Ashok Kumar",
          designation: "Sr. Manager",
          ext: "9614",
          email: "ashokgupta@nhdc.org.in"
        },
        {
          name: "Sh. A Sai Bala",
          designation: "DM",
          ext: "",
          email: "asaibala@nhdc.org.in"
        },
        {
          name: "Sh. Uttam Kumar Chaubey",
          designation: "IT Assistant",
          ext: "",
          email: "ukchaubey@nhdc.org.in"
        }
      ]
    },
    {
      section: "FINANCE",
      highlightColor: "text-green-700 font-semibold",
      rows: [
        {
          name: "Sh. Jitendera Purohit",
          designation: "General Manager ",
          ext: "9607",
          email: "jitendrapurohit@nhdc.org.in"
        },
        {
          name: "Ms. Pooja Sharma",
          designation: "Sr. Manager",
          ext: "9617",
          email: "poojasharma@nhdc.org.in",
          // highlight: true
        },
         {
          name: "Sh. Gaddey Prasanna Kumar",
          designation: "Dy. Manager",
          ext: "",
          email: "prasanna@nhdc.org.in",
        
        },
        {
          name: "Sh. Shashikant Vishwakarma",
          designation: "Dy. Manager",
          ext: "9612",
          email: "shashikant@nhdc.org.in"
        },
        {
          name: "Sh. Sanjeeb Seal",
          designation: "Senior Officer",
          ext: "",
          email: "sanjibseal@nhdc.org.in"
        },
        {
          name: "Sh. Anamitra Kakoti",
          designation: "Senior Officer",
          ext: "",
          email: "anamitrakakoti@nhdc.org.in"
        },
        {
          name: "Sh. Niranjan Singh",
          designation: "Sr. Officer",
          ext: "",
          email: "niranjansingh@nhdc.org.in"
        },
        {
          name: "Sh. Udaivir Singh Yadav",
          designation: "Jr. Officer",
          ext: "",
          email: "udaivirsinghyadav@nhdc.org.in"
        },
        {
          name: "Ms. Priyanka Yadav",
          designation: "Jr. Officer",
          ext: "",
          email: "priyankayadav@nhdc.org.in"
        }
      ]
    },
    {
      section: "NHDC LTD EMPLOYEES CPF TRUST",
      highlightColor: "text-green-700 font-semibold",
      rows: [
        {
          name: "Ms. Pooja Sharma",
          designation: "Secretary of Trust",
          ext: "9608",
          email: "secpftrust@nhdc.org.in",
          highlight: true
        },
        {
          name: "Sh. Shashikant Vishwakarma",
          designation: "Account Officer",
          ext: "9612",
          email: "acpftrust@nhdc.org.in"
        }
      ]
    }
  ],
  hi: [
    {
      section: "एनएचडीसी का हेड ऑफिस इंटरकॉम डायरेक्टरी",
      highlightColor: "text-red-600 font-semibold",
      rows: [
        {
          name: "कमोडोर राजीव अशोक (सेवानिवृत्त)",
          designation: "प्रबंध निदेशक",
          ext: "9601",
          email: "mdnhdc@nhdc.org.in",
          highlight: true
        },
        {
          name: "",
          designation: "सचिव/प्रबंध निदेशक",
          ext: "9602",
          email: "pstomd@nhdc.org.in"
        },
        {
          name: "श्री धीरेंद्र प्रकाश",
          designation: "कार्यकारी निदेशक/वित्त",
          ext: "9615",
          email: "dhirenderprakash@nhdc.org.in",
          highlight: true
        },
        {
          name: "",
          designation: "निजी सचिव/कार्यकारी निदेशक/वित्त",
          ext: "9609",
          email: "pstoedf@nhdc.org.in"
        },
        {
          name: "रिक्त",
          designation: "कार्यकारी निदेशक/वाणिज्यिक",
          ext: "",
          email: "",
          highlight: true
        },
        {
          name: "",
          designation: "निजी सचिव/कार्यकारी निदेशक/वाणिज्यिक",
          ext: "",
          email: ""
        },
        {
          name: "पूनम हसीजा",
          designation: "सहायक सीएस",
          ext: "",
          email: "cs@nhdc.org.in",
        }
      ]
    },
    {
      section: "सतर्कता",
      highlightColor: "text-blue-600 font-semibold",
      rows: [
        {
          name: "सुश्री आकांक्षा शर्मा",
          designation: "मुख्य सतर्कता अधिकारी",
          ext: "9606",
          email: "cvo@nhdc.org.in"
        },
        {
          name: "श्री अनिल कुमार",
          designation: "कार्यकारी",
          ext: "9609",
          email: "Vigilance@nhdc.org.in"
        },
        {
          name: "श्री विजय प्रताप गौतम",
          designation: "सहायक प्रबंधक",
          ext: "9609",
          email: "vpgautam@nhdc.org.in"
        }
      ]
    },
    {
      section: "मानव संसाधन",
      highlightColor: "text-green-600 font-semibold",
      rows: [
        {
          name: "डॉ. प्रसन्ना एम.",
          designation: "उप महाप्रबंधक",
          ext: "9607",
          email: "prasanna.m@nhdc.org.in"
        },
        {
          name: "श्री अक्सेन",
          designation: "विधिक परामर्श/सलाहकार",
          ext: "",
          email: "legalconsultant@nhdc.org.in"
        },
        {
          name: "श्री अक्षत वत्स",
          designation: "प्रबंधक (मा.सं.)",
          ext: "9625",
          email: "akshatvatsa@nhdc.org.in"
        },
        {
          name: "श्री गौरव त्रिपाठी",
          designation: "सहायक प्रबंधक",
          ext: "9621",
          email: "gauravtripathi@nhdc.org.in"
        },
        {
          name: "सुश्री रिमझिम जायसवाल",
          designation: "वरिष्ठ अधिकारी",
          ext: "9627",
          email: "rimjhimjaiswal@nhdc.org.in"
        },
        // {
        //   name: "सुश्री शोभा अग्रवाल",
        //   designation: "वरिष्ठ सहायक",
        //   ext: "",
        //   email: "shobhaagarwal@nhdc.org.in"
        // },
        {
          name: "सुश्री कामिनी कौशल",
          designation: "कनिष्ठ अधिकारी",
          ext: "",
          email: "kaminikaushal@nhdc.org.in"
        }
      ]
    },
    {
      section: "राजभाषा",
      highlightColor: "text-orange-600 font-semibold",
      rows: [
        {
          name: "सुश्री सोहनी वर्मा",
          designation: "सहायक प्रबंधक",
          ext: "9621",
          email: "shoniverma@nhdc.org.in"
        },
        {
          name: "सुश्री शांति शर्मा",
          designation: "कनिष्ठ अधिकारी",
          ext: "",
          email: "shantisharma@nhdc.org.in"
        }
      ]
    },
    {
      section: "वाणिज्यिक (यार्न/डीएनसी/आउटरीच/विकास)",
      highlightColor: "text-blue-800 font-semibold",
      rows: [
        {
          name: "रिक्त",
          designation: "महाप्रबंधक/वाणिज्यिक",
          ext: "",
          email: ""
        },
        // {
        //   name: "",
        //   designation: "निजी सचिव/महाप्रबंधक/वाणिज्यिक",
        //   ext: "",
        //   email: ""
        // },
        {
          name: "श्री संजय जोशी",
          designation: "उप महाप्रबंधक",
          ext: "9608",
          email: "sanjayjoshi@nhdc.org.in",
          highlight: true
        },
        {
          name: "श्री निलेश सुखदेव",
          designation: "वरिष्ठ प्रबंधक (वाणिज्यिक)",
          ext: "",
          email: "nileshsukhadeve@nhdc.org.in"
        },
        {
          name: "श्री पी.एल. सिंघल",
          designation: "प्रबंधक",
          ext: "9622",
          email: "plsinghal@nhdc.org.in"
        },
        {
          name: "श्री जितेंद्र तोलंबिया",
          designation: "प्रबंधक",
          ext: "9624",
          email: "jitendratolambiya@nhdc.org.in"
        },
        {
          name: "श्री ज्योतिमय चौधरी",
          designation: "परियोजना विकास अधिकारी",
          ext: "",
          email: "projects@nhdc.org.in"
        },
        {
          name: "सुश्री मधुलिका तिवारी",
          designation: "सहायक प्रबंधक",
          ext: "9629",
          email: "madhulikatiwari@nhdc.org.in"
        },
        {
          name: "श्री वरुण चड्ढा",
          designation: "वरिष्ठ अधिकारी",
          ext: "",
          email: "varunchaddha@nhdc.org.in"
        },
        {
          name: "सुश्री शोभा अग्रवाल",
          designation: "वरिष्ठ सहायक",
          ext: "",
          email: "shobhaagarwal@nhdc.org.in"
        },
        {
          name: "श्री अरविंद अहिरवार",
          designation: "कनिष्ठ अधिकारी",
          ext: "",
          email: "arvindahirwar@nhdc.org.in"
        },
        {
          name: "श्री राकेश कुमार सिंह",
          designation: "कनिष्ठ अधिकारी",
          ext: "",
          email: "rakeshkumar@nhdc.org.in"
        }
      ]
    },
    {
      section: "सूचना प्रौद्योगिकी",
      highlightColor: "text-purple-600 font-semibold",
      rows: [
        {
          name: "श्री अशोक कुमार",
          designation: "वरिष्ठ प्रबंधक",
          ext: "9614",
          email: "ashokgupta@nhdc.org.in"
        },
        {
          name: "श्री ए साई बाला",
          designation: "उप प्रबंधक",
          ext: "",
          email: "asaibala@nhdc.org.in"
        },
        {
          name: "श्री उत्तम कुमार चौबे",
          designation: "आईटी सहायक",
          ext: "",
          email: "ukchaubey@nhdc.org.in"
        }
      ]
    },
    {
      section: "वित्त",
      highlightColor: "text-green-700 font-semibold",
      rows: [
        {
          name: "श्री जितेंद्र पुरोहित",
          designation: "महाप्रबंधक",
          ext: "9607",
          email: "jitendrapurohit@nhdc.org.in"
        },
        {
          name: "सुश्री पूजा शर्मा",
          designation: "वरिष्ठ प्रबंधक",
          ext: "9617",
          email: "poojasharma@nhdc.org.in",
          // highlight: true
        },
        {
          name: "श्री गड्डे प्रसन्न कुमार",
          designation: "उप प्रबंधक",
          ext: "",
          email: "prasanna@nhdc.org.in",
        },
        {
          name: "श्री शशिकांत विश्वकर्मा",
          designation: "उप प्रबंधक",
          ext: "9612",
          email: "shashikant@nhdc.org.in"
        },
        {
          name: "श्री संजीब सील",
          designation: "वरिष्ठ अधिकारी",
          ext: "",
          email: "sanjibseal@nhdc.org.in"
        },
        {
          name: "श्री अनमित्र काकोती",
          designation: "वरिष्ठ अधिकारी",
          ext: "",
          email: "anamitrakakoti@nhdc.org.in"
        },
        {
          name: "श्री निरंजन सिंह",
          designation: "वरिष्ठ अधिकारी",
          ext: "",
          email: "niranjansingh@nhdc.org.in"
        },
        {
          name: "श्री उदयवीर सिंह यादव",
          designation: "कनिष्ठ अधिकारी",
          ext: "",
          email: "udaivirsinghyadav@nhdc.org.in"
        },
        {
          name: "सुश्री प्रियंका यादव",
          designation: "कनिष्ठ अधिकारी",
          ext: "",
          email: "priyankayadav@nhdc.org.in"
        }
      ]
    },
    {
      section: "एनएचडीसी लिमिटेड कर्मचारी सीपीएफ ट्रस्ट",
      highlightColor: "text-green-700 font-semibold",
      rows: [
        {
          name: "सुश्री पूजा शर्मा",
          designation: "ट्रस्ट की सचिव",
          ext: "9608",
          email: "secpftrust@nhdc.org.in",
          highlight: true
        },
        {
          name: "श्री शशिकांत विश्वकर्मा",
          designation: "लेखा अधिकारी",
          ext: "9612",
          email: "acpftrust@nhdc.org.in"
        }
      ]
    }
  ]
};

const footerText = {
  en: {
    reception: "Reception",
    boardRoom: "Board Room",
    note: "Kindly use the code 0120-232 before placing the call"
  },
  hi: {
    reception: "रिसेप्शन",
    boardRoom: "बोर्ड रूम",
    note: "कॉल करने से पहले कोड 0120-232 का उपयोग करें"
  }
};

export default function HeadOfficeDirectory() {
  const { lang } = useParams();
  const currentLang = lang === 'hi' ? 'hi' : 'en';
  const data = directoryData[currentLang];
  const footer = footerText[currentLang];

  return (
    <div className="p-6">
      <div className="max-w-5xl mx-auto overflow-x-auto">
        {data.map((section, si) => (
          <div key={si} className="mb-8">
            <h2 className="text-lg font-bold bg-orange-100 px-2 py-1 border border-orange-400 text-center">
              {section.section}
            </h2>
            <table className="w-full table-auto border border-black border-collapse mt-2">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="border px-2 py-1">{currentLang === 'en' ? 'Name' : 'नाम'}</th>
                  <th className="border px-2 py-1">{currentLang === 'en' ? 'Designation' : 'पदनाम'}</th>
                  <th className="border px-2 py-1">{currentLang === 'en' ? 'Ext. No.' : 'एक्सटेंशन नं.'}</th>
                  <th className="border px-2 py-1">{currentLang === 'en' ? 'E‑mail ID' : 'ईमेल आईडी'}</th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, ri) => {
                  const shouldHighlight = row.highlight || ri === 0;
                  const color = shouldHighlight ? section.highlightColor : "";

                  return (
                    <tr key={ri}>
                      <td className={`border px-2 py-1 ${color}`}>{row.name}</td>
                      <td className={`border px-2 py-1 ${color}`}>{row.designation}</td>
                      <td className={`border px-2 py-1 ${color}`}>{row.ext}</td>
                      <td className="border px-2 py-1">
                        {row.email ? (
                          <a href={`mailto:${row.email}`} className={`underline ${color}`}>
                            {row.email}
                          </a>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}

        <div className="border border-black p-4 text-brown-700 font-semibold">
          <div className="flex justify-evenly px-10">
            <span>{footer.reception}</span>
            <span>9600</span>
          </div>
          <div className="flex justify-evenly px-13">
            <span className="text-center">{footer.boardRoom}</span>
            <span>9630</span>
          </div>
          <div className="mt-2 text-center">
            {footer.note}
          </div>
        </div>
      </div>
    </div>
  );
}