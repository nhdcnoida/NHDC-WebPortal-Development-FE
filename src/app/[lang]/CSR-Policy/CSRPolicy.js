"use client";
import { useParams } from 'next/navigation';
import React from 'react'
export default function CSRPolicyDocument() {
    const { lang } = useParams();
  return (
 <div className={`max-w-5xl mx-auto px-4 py-10 text-gray-800`}>
  
      <h1 className="text-3xl font-bold mb-6">
        {lang === "hi"
          ? "कॉर्पोरेट सामाजिक उत्तरदायित्व (सीएसआर) नीति"
          : "Policy on Corporate Social Responsibility"}
      </h1>
      <h2 className="text-lg font-medium mb-6 text-gray-700">
        {lang === "hi"
          ? "(कंपनी अधिनियम 2013 की धारा 135 और कंपनी (कॉर्पोरेट सामाजिक उत्तरदायित्व) नियम 2014 और कंपनी अधिनियम 2013 की अनुसूची VII के साथ पठित)"
          : "(Section 135 of the Companies Act 2013 read with The Companies (Corporate Social Responsibility) Rules, 2014 and Schedule VII of the Companies Act 2013)"}
      </h2>


   {/* Section 1 */}
      <section className="mb-8">
    <h2 className="text-xl font-bold mb-4 pb-2">
  {lang === "hi" ? "1. " : "1. "}
  <span className="underline">
    {lang === "hi" ? "संक्षिप्त शीर्षक और अवधारणा" : "SHORT TITLE AND CONCEPT"}
  </span>
</h2>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">1.1</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `1.1 यह नीति, जो कंपनी के दर्शन को परिभाषित करती है और एक कॉर्पोरेट नागरिक के रूप में उसकी जिम्मेदारी को दर्शाती है, तथा समुदाय के कल्याण और सतत विकास के लिए सामाजिक रूप से उपयोगी कार्यक्रमों को अपनाने हेतु दिशानिर्देश और तंत्र निर्धारित करती है, का शीर्षक 'एनएचडीसी सीएसआर और सततता नीति 2025' है।`
              : `1.1 This policy, which encompasses the company's philosophy for delineating its responsibility as a corporate citizen and lays down the guidelines and mechanism for undertaking socially useful programmes for welfare and sustainable development of the community at large, is titled as the 'NHDC CSR and Sustainability Policy 2025'.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">1.2</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `1.2 यह नीति एनएचडीसी के सभी क्षेत्रीय/ज़ोनल कार्यालयों के अंतर्गत विभिन्न केंद्रों और स्थानों पर उठाए गए सभी सीएसआर पहलों और गतिविधियों पर लागू होगी, जो समाज के विभिन्न वर्गों, जिसमें हथकरघा बुनकर भी शामिल हैं, के लाभ के लिए होंगी।`
              : `1.2 This policy shall apply to all CSR initiatives and activities taken up at the various centres and locations under the Regional/ Zonal offices of NHDC, for the benefit of different segments of the society including Handloom Weavers.`}
          </p>
        </div>
      </section>

{/* Section 2 */}
   <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2">
          {lang === "hi" ? "2. " : "2. "}
          <span className="underline">
            {lang === "hi" ? "लक्ष्य और उद्देश्य" : "AIMS & OBJECTIVES"}
          </span>
        </h2>
        
        <p className="mb-4">
          {lang === "hi"
            ? `निगम की दृष्टि के अनुरूप, एनएचडीसी अपनी सीएसआर पहलों के माध्यम से हथकरघा क्षेत्र पर विशेष ध्यान देते हुए, समाज और उस समुदाय में जहां यह कार्यरत है, मूल्य सृजन को बढ़ाता रहेगा, ताकि समाज और समुदाय के सतत विकास को बढ़ावा दिया जा सके, और एक सामाजिक रूप से जिम्मेदार कॉर्पोरेट की भूमिका निभाई जा सके।`
            : `In alignment with vision of the Corporation, NHDC, through its CSR initiatives, will continue to enhance value creation in the society and in the community in which it operates with thrust on Handloom sector, through its services, conduct & initiatives, so as to promote sustained growth for the society and community, in fulfillment of its role as a Socially Responsible Corporate.`}
        </p>
        
        <p className="mb-3 font-medium">
          {lang === "hi"
            ? `एनएचडीसी सीएसआर और सततता नीति का उद्देश्य है:`
            : `The objective of the NHDC CSR and Sustainability Policy is:`}
        </p>
        
        <div className="mb-4">
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `(a) संगठन के सभी स्तरों पर आर्थिक और सामाजिक रूप से सतत तरीके से व्यवसाय संचालित करने की बढ़ी हुई प्रतिबद्धता सुनिश्चित करना, साथ ही सभी हितधारकों के हितों को मान्यता देना।`
              : `(a) To ensure an increased commitment at all levels in the organisation, to operate its business in an economically and socially sustainable manner, while recognising the interests of all its stakeholders.`}
          </p>
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `(b) प्रत्यक्ष या अप्रत्यक्ष रूप से ऐसे कार्यक्रम अपनाना जो संचालन क्षेत्रों/ हथकरघा बुनकरों के समुदायों को लाभ पहुंचाएं और समय के साथ वहां के स्थानीय लोगों के जीवन की गुणवत्ता और आर्थिक कल्याण को बढ़ाएं।`
              : `(b) To directly or indirectly take up programmes that benefit the communities in and around its areas of operation/ Handloom Weavers and Results, over a period of time, in enhancing the quality of life and economic well being of the local population there.`}
          </p>
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `(c) अपनी सीएसआर पहलों के माध्यम से एनएचडीसी के लिए सामुदायिक सद्भावना उत्पन्न करना और एनएचडीसी की एक सकारात्मक और सामाजिक रूप से जिम्मेदार कॉर्पोरेट इकाई की छवि को सुदृढ़ करना।`
              : `(c) To generate, through its CSR initiatives, a community goodwill for NHDC and help reinforce a positive and socially responsible image of NHDC as a corporate entity.`}
          </p>
        </div>
      </section>


  {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2">
          {lang === "hi" ? "3. " : "3. "}
          <span className="underline">
            {lang === "hi" ? "योजना और कार्यान्वयन तंत्र" : "PLANNING & IMPLEMENTATION MECHANISM"}
          </span>
        </h2>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">3.1</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `3.1 सीएसआर परियोजनाओं की पहचान के लिए योजना में कॉर्पोरेट सामाजिक उत्तरदायित्व कार्य योजना (दीर्घकालिक, मध्यम अवधि और अल्पकालिक) का डिज़ाइन अनिवार्य होना चाहिए, जिसमें आकस्मिक दृष्टिकोण से परियोजना आधारित जवाबदेही दृष्टिकोण की ओर स्थानांतरण हो। दीर्घकालिक सीएसआर योजना के मामले में यह एनएचडीसी की दीर्घकालिक व्यापारिक योजना के साथ मेल खाना चाहिए। इसे मध्यम अवधि और अल्पकालिक योजनाओं में विभाजित किया जाना चाहिए। इन सभी योजनाओं में स्पष्ट रूप से निर्दिष्ट होना चाहिए:`
              : `3.1 The planning for identification of the CSR projects to be undertaken should mandate the design of Corporate Social Responsibility Action Plan (Long-term, medium-term and short-term), with a shift from the casual approach to the project based accountability approach. In case of long-term CSR plan it should match with the long-term Business Plan of NHDC. This should be broken down into medium term and short-term plans. Each of these plans should clearly specify:`}
          </p>
          <ol className="list-roman pl-8 mb-3 space-y-2">
            <li>{lang === "hi" ? `आधारभूत सर्वेक्षण से संबंधित आवश्यकताएं;` : `(i) Requirements relating to baseline survey;`}</li>
            <li>{lang === "hi" ? `उठाई जाने वाली गतिविधियां;` : `(ii) Activities to be undertaken;`}</li>
            <li>{lang === "hi" ? `आवंटित बजट;` : `(iii) Budgets allocated;`}</li>
            <li>{lang === "hi" ? `निर्धारित समयसीमा;` : `(iv) Time-lines prescribed;`}</li>
            <li>{lang === "hi" ? `परिभाषित जिम्मेदारियां और अधिकार;` : `(v) Responsibilities and authorities defined;`}</li>
            <li>{lang === "hi" ? `अपेक्षित प्रमुख परिणाम।` : `(vi) Major results expected.`}</li>
          </ol>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">3.2</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `3.2 एनएचडीसी के विभिन्न क्षेत्रीय/ज़ोनल कार्यालयों द्वारा वर्ष के लिए निर्धारित गतिविधि के दायरे में यथासंभव सीएसआर कार्यक्रमों को undertaken किया जाएगा।`
              : `3.2 CSR programmes will be undertaken by various Regional/ Zonal offices of NHDC to the best possible extent within the defined ambit of the identified activity for the year.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">3.3</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `3.3 किसी विशेष कार्यक्रम की अवधि/समयावधि उसकी प्रकृति, कवरेज के दायरे और अपेक्षित प्रभाव पर निर्भर करेगी।`
              : `3.3 The time period/ duration over which a particular programme will be spread, will depend on its nature, extent of coverage and the intended impact of the programme.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">3.4</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `3.4 यह सुनिश्चित किया जाएगा कि सीएसआर कार्यक्रम मुख्य रूप से एनएचडीसी के क्षेत्रीय/ज़ोनल कार्यालयों के अंतर्गत राज्यों के हथकरघा क्षेत्रों में और उसके आसपास लागू हों।`
              : `3.4 By and large, it may be ensured that the CSR programmes are executed in and around the handloom areas of states under the Regional/ Zonal offices of NHDC.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">3.5</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `3.5 राज्य सरकारों, जिला प्रशासन, स्थानीय प्रशासन, ग्राम पंचायतों, केंद्रीय सरकारी विभागों/एजेंसियों, स्वयं सहायता समूहों आदि की पहलों को एनएचडीसी की पहलों के साथ जोड़ा और समन्वित किया जाएगा।`
              : `3.5 Initiatives of State Governments, District Administration, Local Administration, Gram Panchayats as well as Central Government Departments/ Agencies, Self Help Groups, etc., would be dovetailed and synergized with the initiatives taken by NHDC.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">3.6</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `3.6 सीएसआर के अंतर्गत पहचानी गई परियोजनाओं को विशेष एजेंसियों के माध्यम से लागू किया जाएगा, जिसमें स्वैच्छिक संगठन, पंचायतें, संस्थान/शैक्षणिक संस्थान, ट्रस्ट, स्वयं सहायता समूह, सरकारी/अर्ध-सरकारी/स्वायत्त संगठन, महिला मंडल, पेशेवर परामर्श संगठन, राज्य निदेशक (हथकरघा), डीआईसी, डब्ल्यूएससी आदि शामिल हो सकते हैं।`
              : `3.6 Project activities identified under CSR are to be implemented through specialized agencies, which could include Voluntary Organizations (VOs) formal or informal Elected local bodies such as Panchayats, Institutes/ Academic Institutions, Trusts, Self Help Groups, Govt/ Semi Govt./ Autonomous organisations, Mahila Mandals, Professional Consultancy organization, State Director (Handlooms), DIC, WSC etc.`}
          </p>
        </div>

        <h4 className="font-semibold mb-3">
          {lang === "hi" 
            ? `सीएसआर कार्यक्रमों के कार्यान्वयन की प्रक्रिया में निम्नलिखित चरण शामिल होंगे:`
            : `The process for implementation of CSR Programmes will involve the following steps:`}
        </h4>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">3.7</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `3.7 कार्यक्रमों की पहचान मुख्यालय स्तर पर की जाएगी।`
              : `3.7 Identification of programmes would be done at Head office level.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">3.8</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `3.8 सीएसआर गतिविधियों का क्षेत्र: सीएसआर गतिविधियां मुख्य रूप से संबंधित एनएचडीसी के क्षेत्रीय/ज़ोनल कार्यालयों के अंतर्गत आने वाले राज्यों में हथकरघा बुनकरों के 'स्थानीय क्षेत्र' में या उसके आसपास केंद्रित होंगी। एनएचडीसी द्वारा सीएसआर गतिविधि करने के उद्देश्य से 'स्थानीय क्षेत्र' का अर्थ देश के उन सभी क्षेत्रों से होगा जहां हथकरघा कार्यरत हैं और उनके आसपास के क्षेत्र। स्थानीय क्षेत्र को उचित प्राथमिकता देने के बाद, एनएचडीसी देश में कहीं भी सीएसआर गतिविधि कर सकता है।`
              : `3.8 Area of CSR activities: CSR activities shall be focused mainly in or around the 'local area' of handloom weavers in the states falling under the Regional/ Zonal offices of NHDC concerned. 'Local area' for the purpose of undertaking CSR activity by NHDC will mean all areas in the country where handlooms are working and nearby areas. After giving due preference to the local area, NHDC may also undertake CSR activity anywhere in the country.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">3.9</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `3.9 हथकरघा/सहायक उपकरण वितरण या उपरोक्त उल्लिखित अन्य गतिविधि के लिए, निगम के क्षेत्रीय/ज़ोनल कार्यालय राज्य निदेशक (हथकरघा)/डीआईसी को शामिल करते हुए ग्राम पंचायत/डब्ल्यूएससी/राज्य सरकार के माध्यम से अपने संचालन क्षेत्र के तहत बीपीएल हथकरघा बुनकरों या अन्य लाभार्थियों की पहचान करेंगे।`
              : `3.9 For the project on Handloom/ accessories distribution or any other activity mentioned above, the regional/ zonal offices of the corporation shall identify the BPL Handloom Weavers or other beneficiaries under their area of operation through Gram Panchayats/ WSC/ State Government involving State Director (Handlooms)/ DIC.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">3.10</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `3.10 हथकरघा/सहायक उपकरण आमतौर पर उस निकटतम क्षेत्र से खरीदे जाएंगे जहां बुनकर स्थित हैं, उचित प्रक्रिया का पालन करते हुए और उन्हें बुनकर के स्थान पर निःशुल्क स्थापित किया जाएगा।`
              : `3.10 The Handlooms/ accessories shall generally be procured from the nearest area where the weavers are located, by following the proper procedure and the same be got installed at weaver's place free of cost.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">3.11</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `3.11 परियोजना आधारित दृष्टिकोण: एनएचडीसी के क्षेत्रीय/ज़ोनल कार्यालय सीएसआर परियोजनाओं की स्थिरता पर जोर देने के लिए परियोजना आधारित जवाबदेही दृष्टिकोण अपनाएंगे।`
              : `3.11 Project based approach: NHDC Regional/ Zonal offices will follow a project based accountability approach to stress on the sustainability of CSR projects.`}
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2">
          {lang === "hi" ? "4. " : "4. "}
          <span className="underline">
            {lang === "hi" ? "वित्तपोषण और बजटीय प्रावधान" : "FUNDING AND BUDGETARY PROVISIONS"}
          </span>
        </h2>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">4.1</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `4.1 अपने सीएसआर उद्देश्यों को सार्थक और सतत सीएसआर कार्यक्रमों के कार्यान्वयन के माध्यम से प्राप्त करने के लिए, एनएचडीसी प्रत्येक वित्तीय वर्ष में अपने पिछले तीन वित्तीय वर्षों के औसत शुद्ध लाभ का कम से कम दो प्रतिशत खर्च करेगा, अपनी सीएसआर नीति के अनुसार:`
              : `4.1 For achieving its CSR objectives through implementation of meaningful and sustainable CSR programmes, NHDC shall spend, in every financial year, at least two percent of its average net profits made during the three immediately preceding financial years, in pursuance of its CSR Policy:`}
          </p>
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `(a) यह प्रावधान है कि एनएचडीसी उस स्थानीय क्षेत्र और उसके आस-पास के क्षेत्रों को प्राथमिकता देगा जहां वह कार्यरत है, कॉर्पोरेट सामाजिक उत्तरदायित्व गतिविधियों के लिए निर्धारित राशि खर्च करने में;`
              : `(a) Provided that the NHDC shall give preference to the local area and areas around it where it operates, for spending the amount earmarked for Corporate Social Responsibility activities;`}
          </p>
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `(b) और यह प्रावधान है कि यदि एनएचडीसी ऐसी राशि खर्च करने में विफल रहता है, तो निदेशक मंडल धारा 134 की उप-धारा (3) के खंड (o) के तहत बनाई गई अपनी रिपोर्ट में राशि न खर्च करने के कारणों को निर्दिष्ट करेगा। डीपीई दिशानिर्देशों के अनुसार, यदि किसी विशेष वर्ष में सीपीएसई को लाभ हुआ है तो उसे पिछले वर्ष में किए गए शुद्ध लाभ का कम से कम 2% खर्च करना होगा, भले ही वह कंपनी अधिनियम, 2013 की धारा 135(1) के अनुसार शुद्ध संपत्ति या टर्नओवर या शुद्ध लाभ की सीमा में न आता हो। एनएचडीसी भी इसका अनुपालन करेगा। वित्तपोषण सहित एनएचडीसी सीएसआर और सततता नीति कंपनी अधिनियम 2013 की धारा 135, सीएसआर नियम, डीपीई दिशानिर्देश और समय-समय पर इसमें होने वाले किसी भी संशोधन के प्रावधानों के अधीन होगी।`
              : `(b) Provided further that if NHDC fails to spend such amount, the Board shall, in its report made under clause (o) of sub-section(3) of section 134, specify the reasons for not spending the amount. Further as per DPE guidelines, if CPSE has made profit in a particular year it shall spend atleast 2% of net profit made in the previous year, even though it is not coming under the threshold limit of net worth or turnover or net profit as per Section 135(1) of Companies Act, 2013. NHDC shall also comply with the same. NHDC CSR and Sustainability Policy including funding shall be subject to the provisions of Section 135 of Companies Act' 2013, CSR Rules, DPE guidelines and any amendment thereto from time to time.`}
          </p>
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `(c) धन गैर-व्यपगत होगा और सीएसआर नीति/कार्य योजना में पहचाने गए कार्यक्रमों के स्पष्ट सेट पर खर्च किया जाएगा। ऐसी गतिविधियों के लिए "सीएसआर फंड" के रूप में दर्शाया जाने वाला एक विशेष गैर-व्यपगत फंड बनाया जाएगा, जो किसी वित्तीय वर्ष में कोई अव्यययित/अनुपयोगित राशि, यदि कोई हो, को संचित करेगा।`
              : `(c) The money shall be non-lapsable and spent on a clear set of programmes as identified in CSR policy/action plan. A special non-lapsable fund to be denoted as "CSR Fund "shall be created for such activities, accumulating any unspent/unutilized amount, if any, in a fiscal year.`}
          </p>
        </div>
      </section>

    {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2">
          {lang === "hi" ? "5." : "5."}
           <span className="underline">
          {lang === "hi" ? "कॉर्पोरेट सामाजिक उत्तरदायित्व के अंतर्गत गतिविधियां" : "ACTIVITIES UNDER CORPORATE SOCIAL RESPONSIBILITY"}
        </span>
        </h2>
       

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">5.1</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `5.1 एनएचडीसी समग्र रूप से समाज की चिंताओं के प्रति प्रतिबद्ध एक अच्छा कॉर्पोरेट नागरिक बने रहने का निरंतर प्रयास करेगा। कंपनी के सीएसआर फंड और प्रयासों को सामुदायिक विकास परियोजनाओं और ग्रामीण, कमजोर और समाज के गरीब वर्गों, अविकसित क्षेत्रों पर जोर देते हुए लोक-केंद्रित गतिविधियों में निवेश किया जाएगा।`
              : `5.1 NHDC shall constantly strive to remain a good corporate citizen committed to the concerns of the society as a whole. The CSR funds and efforts of the company shall be invested in community development projects and people centric activities with emphasis on Rural, weaker and poor sections of society, under developed areas.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">5.2</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `5.2 एनएचडीसी उपरोक्त राशि का उपयोग निम्नलिखित सीएसआर गतिविधियों पर वर्ष दर वर्ष कर सकता है:`
              : `5.2 NHDC may spend the amount mentioned as above, on the following CSR activities, on a year-on-year basis:`}
          </p>
          <div className="mb-4">
            <p className="mb-3  text-justify">
              {lang === "hi"
                ? `(a) गरीबी रेखा से नीचे (बीपीएल) के व्यक्तिगत हथकरघा बुनकरों को हथकरघा और/या सहायक उपकरण/सौर बैटरी से जुड़े इन्वर्टर लाइटिंग यूनिट (BLILU) का वितरण।`
                : `(a) Distribution of Handlooms and/ or add on equipments/ accessories or Solar Battery Linked Inverter Lighting Unit (BLILU) to Below Poverty Line (BPL) Individual Handloom Weavers.`}
            </p>
            <p className="mb-3  text-justify">
              {lang === "hi"
                ? `(b) गरीबी रेखा से नीचे (बीपीएल) के व्यक्तिगत हथकरघा बुनकरों को उपरोक्त के अनुसार हथकरघा के साथ प्रारंभिक कच्चा माल (यार्न) का वितरण। यह सुनिश्चित करने के लिए कि वितरित हथकरघा कच्चे माल की कमी के कारण निष्क्रिय न रहें, उन्हें यार्न आदि के रूप में प्रारंभिक कच्चा माल भी प्रदान किया जाएगा, ताकि वे उससे कुछ वस्तुएं तैयार कर सकें और उन्हें बाजार में बेच सकें और उन फंडों को अपनी कार्यशील पूंजी के रूप में घुमा सकें, जिससे वे गतिविधि को स्थायी आधार पर जारी रख सकें।`
                : `(b) Distribution of start-up Raw Material (Yarn) along with Handlooms as above to Below Poverty Line (BPL) Individual Handloom Weavers. In order to ensure that the Handlooms distributed do not remain idle for want of raw material, the start-up raw material in the form of yarn etc. be also provided to them, so that they can produce some articles there from and sell them in market and rotate those funds as their working capital, enabling them to carry on the activity on sustainable basis.`}
            </p>
            <p className="mb-3  text-justify">
              {lang === "hi"
                ? `(c) बीपीएल व्यक्तिगत हथकरघा बुनकरों और/या मेधावी छात्रों (हथकरघा/वस्त्र पाठ्यक्रम में अध्ययनरत) के बच्चों को छात्रवृत्ति।`
                : `(c) Scholarship to the children of BPL Individual Handloom Weavers and/ or meritorious students (pursuing handlooms/ textiles course).`}
            </p>
            <p className="mb-3  text-justify">
              {lang === "hi"
                ? `(d) कंपनी अधिनियम 2013 की अनुसूची VII और समय-समय पर इसमें संशोधन के अनुसार कोई अन्य सीएसआर गतिविधि और समय-समय पर डीपीई/सरकार द्वारा इस विषय पर जारी किए गए किसी भी अन्य दिशानिर्देश। डीपीई द्वारा स्थापित एमओयू टास्क फोर्स द्वारा सुझाई गई कोई भी गतिविधि भी कवर होगी। किसी नई सीएसआर गतिविधि को अपनाने के लिए बोर्ड की अनुमति प्राप्त करनी होगी।`
                : `(d) Any other CSR activity as per Schedule VII of the Companies Act' 2013 and amendment thereto from time to time and any other guidelines issued on the subject by DPE/ Government from time to time. Also any activity advised by MoU Task Force set up by DPE will also be covered. For undertaking any new CSR activity, the Board approval shall be obtained.`}
            </p>
            <p className="mb-3  text-justify">
              {lang === "hi"
                ? `(e) मुख्य ध्यान समाज के वंचित और कमजोर वर्गों की बुनियादी जरूरतों को पूरा करने पर होगा, जिसमें एससी, एसटी, ओबीसी, अल्पसंख्यक, बीपीएल परिवार, वृद्ध और वृद्ध, महिला/लड़कियां, शारीरिक रूप से चुनौतीग्रस्त आदि शामिल हैं।`
                : `(e) The main focus shall be to address the basic needs of under-privileged and weaker sections of society, which comprise of SC, ST, OBC, minorities, BPL family, old & aged, woman/ girls, physically challenged etc.`}
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2">
          {lang === "hi" ? "6." : "6."}
          <span className="underline">
         
            {lang === "hi" ? "कार्यान्वयन एजेंसी/भागीदार" : "EXECUTING AGENCY/ PARTNERS"}
          </span>
        </h2>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">6.1</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `6.1 एनएचडीसी निगम के सीएसआर उद्देश्यों के अनुरूप उन हितधारकों और समुदाय के लाभ के लिए कार्यान्वयन के लिए उपयुक्त कार्यक्रमों की पहचान करने का प्रयास करेगा जिनके लिए वे कार्यक्रम अभिप्रेत हैं। ये सीएसआर गतिविधियां/कार्यक्रम निम्नलिखित के माध्यम से/शामिल करते हुए लाभार्थियों की पहचान करके क्रियान्वित किए जाएंगे:`
              : `6.1 NHDC will seek to identify suitable programmes for implementation in line with the CSR objectives of the Corporation for benefit the stakeholders and the community for which those programmes are intended. These CSR activities/ programmes would be executed by identifying the beneficiaries through/ involving:`}
          </p>
          <ol className="list-alpha pl-8 mb-3 space-y-2">
            <li>{lang === "hi" ? `सामुदायिक आधारित संगठन चाहे वे औपचारिक हों या अनौपचारिक।` : `(a) Community based organizations whether formal or informal.`}</li>
            <li>{lang === "hi" ? `पंचायत जैसी निर्वाचित स्थानीय निकाय` : `(b) Elected local bodies such as Panchayats`}</li>
            <li>{lang === "hi" ? `स्वैच्छिक एजेंसियां (एनजीओ)` : `(c) Voluntary Agencies (NGOs)`}</li>
            <li>{lang === "hi" ? `संस्थान/शैक्षणिक संगठन` : `(d) Institutes/ Academic Organizations`}</li>
            <li>{lang === "hi" ? `ट्रस्ट, मिशन` : `(e) Trusts, Missions`}</li>
            <li>{lang === "hi" ? `स्वयं सहायता समूह (एसएचजी)` : `(f) Self Help Groups (SLGs)`}</li>
            <li>{lang === "hi" ? `सरकारी, अर्ध-सरकारी और स्वायत्त संगठन` : `(g) Government, Semi Government and autonomous Organizations`}</li>
            <li>{lang === "hi" ? `सार्वजनिक उद्यमों का स्थायी सम्मेलन (SCOPE)` : `(h) Standing Conference of Public Enterprises (SCOPE)`}</li>
            <li>{lang === "hi" ? `महिला मंडल/समितियां` : `(i) Mahila Mandals/ Samitis`}</li>
            <li>{lang === "hi" ? `सिविल कार्यों के लिए ठेकेदार एजेंसियां` : `(j) Contracted agencies for civil works`}</li>
            <li>{lang === "hi" ? `पेशेवर परामर्श संगठन` : `(k) Professional Consultancy Organizations`}</li>
            <li>{lang === "hi" ? `राज्य सरकार अर्थात राज्य निदेशक (हथकरघा), डीआईसी आदि` : `(l) State Government viz. State Director (Handlooms), DIC etc`}</li>
            <li>{lang === "hi" ? `बुनकर सेवा केंद्र` : `(m) Weaver Service Centre`}</li>
          </ol>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">6.2</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `6.2 एनएचडीसी अपनी सीएसआर गतिविधियों/परियोजनाओं के अधिक सामाजिक, आर्थिक और पर्यावरणीय प्रभाव के लिए अन्य सीपीएसई के साथ सहयोग में भी सीएसआर गतिविधियां/परियोजनाएं ले सकता है।`
              : `6.2 NHDC may also take up CSR activities/ projects in collaboration with other CPSEs for greater social, economic and environmental impact of their CSR activities/ projects.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">6.3</h4> */}
         <p className="mb-3  text-justify">
  {lang === "hi" ? (
    <>
      <strong>6.3 एनएचडीसी और कार्यान्वयन एजेंसी के बीच समझौता:</strong> जहां एनजीओ/स्वैच्छिक संगठन कार्यान्वयन/क्रियान्वयन एजेंसी हैं, निदेशक मंडल द्वारा अनुमोदित कार्यक्रमों के बाद, मानक मॉडल समझौते के अनुसार ऐसी एजेंसी के साथ एक समझौता निष्पादित किया जाएगा।
    </>
  ) : (
    <>
      <strong>6.3 Agreement between NHDC and Executing agency:</strong> In cases where the NGOs/ Voluntary organizations are the Executing/ Implementing Agency, an agreement shall be executed with such agency as per the Standard Model Agreement, after the programmes approved by the Board of Directors.
    </>
  )}
</p>

        </div>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2">
          {lang === "hi" ? "7." : "7."}
          <span className="underline">
            {lang === "hi" ? "कॉर्पोरेट सामाजिक उत्तरदायित्व (सीएसआर) समिति" : "Corporate Social Responsibility (CSR) Committee"}
          </span>
        </h2>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">7.1</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `7.1 निदेशक मंडल की सीएसआर समिति कंपनी अधिनियम, 2013 की धारा 135 और डीपीई दिशानिर्देशों की आवश्यकताओं के अनुसार गठित की गई है।`
              : `7.1 CSR Committee of the Board of Directors has been constituted in accordance with the requirements of Section 135 of Companies Act, 2013 and the DPE guidelines.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">7.2</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `7.2 सीएसआर समिति के संदर्भ की शर्तों में, अन्य बातों के साथ-साथ, कंपनी अधिनियम, 2013 की अनुसूची VII के तहत कवर की जाने वाली कंपनी द्वारा की जाने वाली गतिविधियों को दर्शाने वाली सीएसआर नीति का निरुपण शामिल है; बोर्ड को सीएसआर नीति और सीएसआर गतिविधियों पर व्यय की राशि की सिफारिश करना; और समय-समय पर कंपनी की सीएसआर नीति की निगरानी करना।`
              : `7.2 The terms of reference of the CSR Committee, inter-alia, include formulation of CSR Policy indicating the activities to be undertaken by the Company covered under Schedule VII of the Companies Act, 2013; recommending to the Board, the CSR Policy & amount of expenditure on CSR activities; and to monitor the CSR Policy of the Company from time to time.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">7.3</h4> */}
          <p className="mb-3 font-medium">
            {lang === "hi"
              ? `7.3 सीएसआर समिति की संरचना इस प्रकार है:`
              : `7.3 The Composition of the CSR Committee is as follows:`}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">
                    {lang === "hi" ? "नाम/श्रेणी" : "Name/ Category"}
                  </th>
                  <th className="border border-gray-300 p-3 text-left">
                    {lang === "hi" ? "सीएसआर समिति में पद" : "Position in CSR Committee"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">
                    {lang === "hi" ? "प्रबंध निदेशक, एनएचडीसी" : "Managing Director, NHDC"}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {lang === "hi" ? "अध्यक्ष" : "Chairperson"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">
                    {lang === "hi" ? "सरकारी नामित निदेशक" : "Govt Nominee Director"}
                  </td>
                  <td className="border border-gray-300 p-3">
                    {lang === "hi" ? "सदस्य" : "Member"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2">
{lang === "hi" ? "8." : "8."}
          <span className="underline">
          {lang === "hi" ? "अनुमोदन के अधिकार" : "POWERS FOR APPROVAL"}
          </span>
        </h2>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">8.1</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `8.1 मुख्यालय द्वारा पहचाने गए सीएसआर कार्यक्रमों को प्रत्येक वित्तीय वर्ष की शुरुआत में निदेशक मंडल के समक्ष प्रस्तुत किया जाएगा।`
              : `8.1 CSR programmes as identified by the Head office shall be put up to the Board of Directors at the beginning of each financial year.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">8.2</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `8.2 तत्काल और आपातकालीन स्थितियों से उत्पन्न आवश्यकताओं को पूरा करने के लिए, प्रबंध निदेशक प्रस्तावों को अनुमोदित करने के लिए अधिकृत है।`
              : `8.2 For meeting the requirements arising out of immediate and urgent situations, the Managing Director is authorised to approve the proposals.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">8.3</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `8.3 एक बार किसी विशेष वर्ष के लिए बजट बोर्ड द्वारा अनुमोदित हो जाने के बाद, निगम उन सीमाओं के भीतर गतिविधि करेगा।`
              : `8.3 Once the budget for a particular year is approved by the Board, the corporation will undertake the activity within those limits.`}
          </p>
        </div>
      </section>

      {/* Section 9 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2">
          {lang === "hi" ? "9." : "9."}
          <span className="underline">
            {lang === "hi" ? "रिपोर्टिंग" : "REPORTING"}
          </span>
        </h2>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">9.1</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `9.1 कंपनी द्वारा की गई सीएसआर गतिविधियों को वार्षिक रिपोर्ट में वर्णनात्मक रूप में और निम्नलिखित के संदर्भ में परिमाणित संख्या में उचित रूप से प्रतिबिंबित किया जाएगा:`
              : `9.1 CSR activities undertaken by the company shall be duly reflected in the Annual Report both in narrative form and in numbers quantified in terms of:`}
          </p>
          <ul className="list-alpha pl-8 mb-3 space-y-2">
            <li>{lang === "hi" ? `बजट की तुलना में उपयोग की गई राशि` : `(a) Amount utilized vis-à-vis amount budgeted`}</li>
            <li>{lang === "hi" ? `आवर्ती आवंटन के साथ शुरू की गई/पूर्ण की गई/प्रगति में परियोजनाओं की संख्या` : `(b) No. of projects with recurring allocation taken up/completed /in progress`}</li>
            <li>{lang === "hi" ? `गैर-आवर्ती आवंटन के साथ शुरू की गई/पूर्ण की गई/प्रगति में परियोजनाओं की संख्या` : `(c) No. of projects with nonrecurring allocation taken up/completed /in progress`}</li>
          </ul>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">9.2</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `9.2 एनएचडीसी वेबसाइट में सीएसआर नीति और की गई कार्यक्रमों का विवरण भी होगा।`
              : `9.2 NHDC website shall also carry the CSR policy and details of programmes undertaken.`}
          </p>
        </div>
      </section>

      {/* Section 10 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2">
          {lang === "hi" ? "10." : "10."}
          <span className="underline">
            {lang === "hi" ? "सामान्य" : "GENERAL"}
          </span>
        </h2>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">10.1</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `10.1 नीति के किसी भी प्रावधान के संबंध में किसी भी संदेह की स्थिति में और यहां शामिल नहीं किए गए मामलों के संबंध में भी, प्रबंध निदेशक को संदर्भ दिया जाना है। ऐसे सभी मामलों में, प्रबंध निदेशक की व्याख्या और निर्णय अंतिम होगा।`
              : `10.1 In case of any doubt with regard to any provision of the policy and also in respect of matters not covered herein, a reference to be made to the Managing Director. In all such matters, the interpretation and decision of the Managing Director shall be final.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">10.2</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `10.2 सीएसआर और सततता नीति के कोई भी या सभी प्रावधान कंपनी अधिनियम 2013 (अनुसूची VII सहित), सीएसआर नियमों और इसमें किसी भी संशोधन और समय-समय पर डीपीई/सरकार द्वारा इस विषय पर जारी किए जा सकने वाले किसी भी अन्य दिशानिर्देश के प्रावधानों के अधीन होंगे। वही एनएचडीसी सीएसआर और सततता नीति में शामिल माना जाएगा, जैसे ही जारी किया जाएगा।`
              : `10.2 Any or all provisions of the CSR and Sustainability Policy would be subject to the provisions of Companies Act 2013 (including schedule VII), CSR Rules and any amendment thereto and any other guidelines on the subject as may be issued by DPE/ Government, from time to time. The same shall be deemed to be incorporated, in the NHDC CSR and Sustainability Policy, as and when issued.`}
          </p>
        </div>

        <div className="mb-6">
          {/* <h4 className="font-semibold mb-2">10.3</h4> */}
          <p className="mb-3  text-justify">
            {lang === "hi"
              ? `10.3 कंपनी इन नियमों में से किसी को भी संशोधित, रद्द, जोड़ने या बदलने का अधिकार सुरक्षित रखती है।`
              : `10.3 The Company reserves the right to modify, cancel, add, or amend any of these Rules.`}
          </p>
        </div>
      </section>

    </div>
  )
}