import GlobalTable from "../GlobalComp/GlobalTable";

const marketResearchData = {
  headers: [
    { 
      enText: 'Sr.No', 
      hiText: 'क्रम संख्या',
      translate: true,
      dataKey: 'srNo'
    },
    { 
      enText: 'Report Title', 
      hiText: 'रिपोर्ट शीर्षक',
      translate: true,
      dataKey: 'title'
    },
    { 
      enText: 'Description', 
      hiText: 'विवरण',
      translate: true,
      dataKey: 'description'
    },
    { 
      enText: 'Document Link', 
      hiText: 'दस्तावेज़ लिंक',
      translate: true,
      dataKey: 'link'
    }
  ],
  data: [
    {
      srNo: 1,
      title: {
        en: 'Market Research for India Handloom Promotion',
        hi: 'भारत हथकरघा प्रचार के लिए बाजार अनुसंधान'
      },
      description: {
        en: 'Comprehensive market research report for promoting India Handloom brand',
        hi: 'भारत हथकरघा ब्रांड को बढ़ावा देने के लिए व्यापक बाजार अनुसंधान रिपोर्ट'
      },
      link: {
        en: <a href="https://storage.nhdc.org.in/nhdc/public/Uploads/Handloom Marketing Research Report.pdf" target="_blank" rel="noopener noreferrer">View Report (PDF)</a>,
        hi: <a href="https://storage.nhdc.org.in/nhdc/public/Uploads/Handloom Marketing Research Report.pdf" target="_blank" rel="noopener noreferrer">रिपोर्ट देखें (PDF)</a>
      }
    }
  ]
};


const page = () => {
    return (
       <section className=" w-full flex flex-col    md:p-4 md:px-10 p-2">
<h2 className=" text-4xl text-[#333]">Reports</h2>

<GlobalTable 
  headers={marketResearchData.headers}
  data={marketResearchData.data}
  lang="en" // or "hi" for Hindi
/>
       </section>
    );
}

export default page;