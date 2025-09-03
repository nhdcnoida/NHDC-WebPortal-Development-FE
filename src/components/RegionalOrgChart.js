"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const Box = ({ rnName, rnImage, title, className, type }) => {
  const bgColor =
    type === "BO"
      ? "bg-blue-100"
      : type === "WH"
      ? "bg-green-100"
      : "bg-gray-100";
  const borderColor =
    type === "BO"
      ? "border-blue-300"
      : type === "WH"
      ? "border-green-300"
      : "border-gray-400";

  return (
   <div
  className={`${bgColor} ${borderColor} border px-3 py-2 rounded shadow text-sm w-50 text-center leading-snug ${className}`}
>
  {rnImage &&
  <Image
    height={1000}
    width={1000}
    src={rnImage || "/placeholder.svg"}
    alt={rnName || title}
    className="mx-auto h-6 w-6 rounded-full object-cover mb-0.5 sm:h-7 sm:w-7 md:h-5 md:w-5 lg:h-7 lg:w-7"
  />}
  <p>{rnName}</p>
  <p>{title}</p>
</div>

  );
};

const ROColumn = ({
  rnName,
  rnNameHi,
  rnImage,
  nameEn,
  nameHi,
  branchOffices,
  branchOfficesHi,
  warehouses,
  warehousesHi,
}) => {
  const { lang } = useParams();
  const isHindi = lang === "hi";

  return (
    <div className="flex flex-col items-center gap-2">
      <Box
        rnImage={rnImage}
        rnName={isHindi ? rnNameHi : rnName}
        title={isHindi ? nameHi : nameEn}
        className="font-medium text-base"
      />
      <div className="h-4 w-0.5 bg-gray-400" />

      {/* Branch Office Header */}
      <Box
        title={isHindi ? "शाखा कार्यालय" : "Branch Offices"}
        type="BO"
        className="font-medium"
      />
      <div className="h-3 w-0.5 bg-gray-400" />
      <div className="flex flex-col gap-2">
        {(isHindi ? branchOfficesHi : branchOffices).map((item, idx) => (
          <Box key={`bo-${idx}`} title={` ${item}`} type="BO" />
        ))}
      </div>

      <div className="h-4 w-0.5 bg-gray-400" />

      {/* Warehouse Header */}
      <Box
        title={isHindi ? "गोदाम" : "Warehouse"}
        type="WH"
        className="font-medium"
      />
      <div className="h-3 w-0.5 bg-gray-400" />
      <div className="flex flex-col gap-2">
        {(isHindi ? warehousesHi : warehouses).map((item, idx) => (
          <Box key={`wh-${idx}`} title={` ${item}`} type="WH" />
        ))}
      </div>
    </div>
  );
};

export default function RegionalOrgChart() {
  const { lang } = useParams();
  const isHindi = lang === "hi";

  // ✅ All RO data here
const roData = [
  {
    rnImage: "/assets/BlrRM.jpg",
    rnName: "Sh. Abhay Tandon",
    rnNameHi: "श्री अभय टंडन",
    nameEn: "RM-Bengaluru",
    nameHi: "आरएम-बेंगलुरु",
    branchOffices: ["Alleppey", "Kannur"],
    branchOfficesHi: ["अलेप्पी", "कन्नूर"],
    warehouses: ["Balaram Puram", "Kannur"],
    warehousesHi: ["बलाराम पुरम", "कन्नूर"],
  },
  {
       rnImage: "/assets/CoimbatoreRM.jpeg",
    rnName: "Sh. R. Rathnavel",
    rnNameHi: "श्री आर. रत्नावेल",
    nameEn: "RM-Coimbatore",
    nameHi: "आरएम-कोयंबटूर",
    branchOffices: ["Erode", "Karur", "Kanchipuram", "Rajapalayam"],
    branchOfficesHi: ["ईरोड", "करूर", "कांचीपुरम", "राजपालायम"],
    warehouses: ["Erode", "Kanchipuram"],
    warehousesHi: ["ईरोड", "कांचीपुरम"],
  },
  {
           rnImage: "/assets/HydRM.JPG",
    rnName: "Sh. B.S. Ganesha",
    rnNameHi: "श्री बी.एस. गणेश",
    nameEn: "RM-Hyderabad",
    nameHi: "आरएम-हैदराबाद",
    branchOffices: ["Gadwal", "Vijayawada", "Warangal"],
    branchOfficesHi: ["गडवाल", "विजयवाड़ा", "वारंगल"],
    warehouses: ["Chirala", "Warangal"],
    warehousesHi: ["चिराला", "वारंगल"],
  },
  {
        rnImage: "/assets/kolkataRM.jpeg",
    rnName: "Sh. Partha Das",
    rnNameHi: "श्री पार्थ दास",
    nameEn: "RM-Kolkata",
    nameHi: "आरएम-कोलकाता",
    branchOffices: [
      "Bargarh",
      "Behrampur",
      "Bhagalpur",
      "Bhubneshwar",
      "Patna",
      "Ranchi",
      "Santipur",
    ],
    branchOfficesHi: [
      "बरगढ़",
      "बेहरमपुर",
      "भागलपुर",
      "भुवनेश्वर",
      "पटना",
      "रांची",
      "संतिपुर",
    ],
    warehouses: [
      "Bargarh",
      "Behrampur",
      "Bhagalpur",
      "Bhubneshwar",
      "Godda",
      "Ranchi",
      "Samudragarh",
      "Santipur",
    ],
    warehousesHi: [
      "बरगढ़",
      "बेहरमपुर",
      "भागलपुर",
      "भुवनेश्वर",
      "गोड्डा",
      "रांची",
      "समुद्रगढ़",
      "संतिपुर",
    ],
  },
  {
    rnImage: "/assets/panipatRM.jpeg",
    rnName: "Sh. S.S. Shinde",
    rnNameHi: "श्री एस.एस. शिंदे",
    nameEn: "RM-Panipat",
    nameHi: "आरएम-पानीपत",
    branchOffices: ["Jammu", "Kullu"],
    branchOfficesHi: ["जम्मू", "कुल्लू"],
    warehouses: ["Kullu", "Panipat", "Srinagar"],
    warehousesHi: ["कुल्लू", "पानीपत", "श्रीनगर"],
  },
  {
    rnImage: "/assets/VaranasiRM.JPG",
    rnName: "Sh. Ashish Kumar Singh",
    rnNameHi: "श्री आशीष कुमार सिंह",
    nameEn: "RM-Varanasi",
    nameHi: "आरएम-वाराणसी",
    branchOffices: ["Lucknow", "Raipur"],
    branchOfficesHi: ["लखनऊ", "रायपुर"],
    warehouses: ["Barabanki", "Champa", "Lucknow", "Maheshwar", "Varanasi"],
    warehousesHi: ["बाराबंकी", "चांपा", "लखनऊ", "महेश्वर", "वाराणसी"],
  },
  {
    rnImage: "/assets/guwahatiRM.jpeg",
    rnName: "Sh. Sandeep Chetia",
    rnNameHi: "श्री संदीप चेटिया",
    nameEn: "RM-Guwahati",
    nameHi: "आरएम-गुवाहाटी",
    branchOffices: ["Agartala", "Aizawl", "Dimapur", "Imphal", "Sivasagar"],
    branchOfficesHi: ["अगरतला", "ऐज़ॉल", "डिमापुर", "इम्फाल", "शिवसागर"],
    warehouses: [
      "Agartala",
      "Aizawl",
      "Dibrugarh",
      "Dhemaji",
      "Dimapur",
      "Guwahati",
      "Imphal",
      "Itanagar",
      "Moirang",
      "Sivasagar",
      "Sualkuchi",
      "Tinsukia",
      "Tura",
    ],
    warehousesHi: [
      "अगरतला",
      "आइजोल",
      "डिब्रूगढ़",
      "धेमाजी",
      "दीमापुर",
      "गुवाहाटी",
      "इंफाल",
      "ईटानगर",
      "मोइरंग",
      "शिवसागर",
      "सुआलकुची",
      "टिनसुकिया",
      "तुरा",
    ],
  },
  {
    rnImage: "/assets/ahemdabadRM.jpeg",
    rnName: "Sh. M. Islam",
    rnNameHi: "श्री एम. इस्लाम",
    nameEn: "RM-Ahmedabad",
    nameHi: "आरएम-अहमदाबाद",
    branchOffices: ["Limdi", "Mumbai", "Nagpur"],
    branchOfficesHi: ["लिमडी", "मुंबई", "नागपुर"],
    warehouses: ["Bhuj", "Kaitoon (Kota)", "Yeola"],
    warehousesHi: ["भुज", "कैथून (कोटा)", "येवला"],
  },
];


  // ✅ Sort alphabetically by selected language
  const sortedROs = [...roData].sort((a, b) => {
    const nameA = isHindi ? a.nameHi : a.nameEn;
    const nameB = isHindi ? b.nameHi : b.nameEn;
    return nameA.localeCompare(nameB, "en", { sensitivity: "base" });
  });

  return (
    <div className="overflow-x-auto p-6 min-h-screen bg-white text-gray-800">
      <div className="flex flex-col items-center">
        <Box
          rnImage="/assets/rajiv.jpg"
          rnName={isHindi ? "कमोडोर राजीव अशोक (सेवानिवृत्त)" : "Commodore Rajiv Ashok (Retd.)"}
        title={isHindi ? "प्रबंध निदेशक" : "MD"}

          className="w-64 text-lg font-semibold"
        />
        <div className="h-6 w-0.5 bg-gray-400" />
        {/* <Box
          title={
            isHindi
              ? "कार्यकारी निदेशक (वाणिज्यिक) (रिक्त)"
              : "ED (Commercial) (Vacant)"
          }
          className="w-64 text-lg font-semibold"
        />
        <div className="h-6 w-0.5 bg-gray-400" />
        <Box
          title={
            isHindi
              ? "महाप्रबंधक (वाणिज्यिक) (रिक्त)"
              : "GM (Commercial) Vacant"
          }
          className="w-64 text-lg font-semibold"
        /> */}
        <div className="h-6 w-0.5 bg-gray-400" />
        <Box
          rnImage="/assets/sanjay.png"
          rnName={isHindi ? "श्री संजय जोशी" : "Sh. Sanjay Joshi"}
          title={
            isHindi
              ? "उप महाप्रबंधक (वाणिज्यिक)"
              : "DGM (Commercial)"
          }
          className="w-64 text-lg font-semibold"
        />

        <div className="h-6 w-0.5 bg-gray-400" />

        <div className="flex gap-6 flex-wrap justify-center mt-4">
          {sortedROs.map((ro, idx) => (
            <ROColumn key={idx} {...ro} />
          ))}
        </div>
      </div>
    </div>
  );
}
