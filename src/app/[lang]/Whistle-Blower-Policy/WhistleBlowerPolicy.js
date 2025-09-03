"use client";
import { useParams } from 'next/navigation';
import React from 'react';

export  default function WhistleBlowerPolicy() {
  const { lang } = useParams();
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        {lang === "hi" ? `व्हिसिल ब्लोअर नीति` : `Whistle Blower Policy`}
      </h1>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `1. प्रस्तावना` : `1. Preface`}
          </h2>
          <div className="space-y-3">
            <p className='text-justify'>
              {lang === "hi"
                ? `1.1 निगम अपने कार्यों का संचालन निष्पक्ष और पारदर्शी तरीके से, उच्चतम स्तर की पेशेवर क्षमता, ईमानदारी, अखंडता और नैतिक व्यवहार अपनाकर करने में विश्वास रखता है।`
                : `1.1 The Corporation believes in the conduct of its affairs in a fair and transparent manner by adopting highest standards of professionalism, honesty, integrity and ethical behavior.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `1.2 निगम एक ऐसी संस्कृति के विकास के लिए प्रतिबद्ध है जहां सभी कर्मचारियों के लिए किसी भी खराब या अस्वीकार्य प्रथा और किसी भी कदाचार की घटना के बारे में चिंताएं उठाना सुरक्षित हो।`
                : `1.2 The Corporation is committed to developing a culture where it is safe for all employees to raise concerns about any poor or unacceptable practice and any event of misconduct.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `1.3 कॉर्पोरेट गवर्नेंस पर 14 मई, 2010 को जारी OM संख्या 18(8)/2005-GM के तहत डीपीई दिशानिर्देश, कर्मचारियों के लिए प्रबंधन को अनैतिक व्यवहार, वास्तविक या संदिग्ध धोखाधड़ी, या कंपनी के आचार संहिता या नैतिकता नीति के उल्लंघन के बारे में चिंता रिपोर्ट करने की व्यवस्था स्थापित करने का प्रावधान करता है। यह व्यवस्था उन कर्मचारियों के लिए पर्याप्त सुरक्षा उपाय भी प्रदान कर सकती है जो इस व्यवस्था का उपयोग करते हैं और असाधारण मामलों में ऑडिट समिति के अध्यक्ष तक सीधी पहुंच भी प्रदान कर सकती है।`
                : `1.3 DPE guidelines issued on Corporate Governance vide OM No.18(8)/2005-GM dated 14th May, 2010 provides to establish a mechanism for employees to report to the management, concern about unethical behaviors, actual or suspected fraud, or violation of the company's General guidelines on conduct or ethics policy. This mechanism could also provide for adequate safeguards against victimization of employees who avail of the mechanism and also provide for direct access to the Chairman of the Audit Committee in exceptional cases.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `1.4 इस नीति का उद्देश्य जिम्मेदार और सुरक्षित व्हिसिल ब्लोइंग को बढ़ावा देने के लिए एक ढांचा प्रदान करना है। यह उन कर्मचारियों की रक्षा करती है जो निगम के भीतर गंभीर अनियमितताओं के बारे में चिंता व्यक्त करना चाहते हैं।`
                : `1.4 The purpose of this policy is to provide a framework to promote responsible and secure whistle blowing. It protects employees wishing to raise a concern about serious irregularities within the Corporation.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `1.5 यह नीति कर्मचारियों को उनके कार्य के दौरान गोपनीयता के कर्तव्य से मुक्त नहीं करती है, और न ही यह किसी व्यक्तिगत स्थिति के बारे में शिकायत दर्ज करने का मार्ग है।`
                : `1.5 The policy neither releases employees from their duty of confidentiality in the course of their work, nor is it a route for taking up a grievance about a personal situation.`}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `2. नीति` : `2. Policy`}
          </h2>
          <div className="space-y-3">
            <p className='text-justify'>
              {lang === "hi"
                ? `2.1 यह नीति यहां आगे परिभाषित कर्मचारियों के लिए है।`
                : `2.1 This Policy is for the Employees as defined hereinafter.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `2.2 यह नीति इस प्रकार तैयार की गई है कि कर्मचारी आत्मविश्वास के साथ चिंता उठा सकें। इस नीति के तहत कवर की गई चिंताओं के क्षेत्र अनुच्छेद 5 में संक्षेपित हैं।`
                : `2.2 The Policy has been drawn up so that Employees can be confident about raising a concern. The areas of concern covered by this Policy are summarized in paragraph 5.`}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `3. परिभाषाएं` : `3. Definitions`}
          </h2>
          <div className="space-y-3">
            <p className='text-justify'>
              <strong>{lang === "hi" ? `3.1 'अनुशासनात्मक कार्रवाई'` : `3.1 'Disciplinary Action'`}</strong>
              {lang === "hi"
                ? ` का अर्थ है कोई भी कार्रवाई जो जांच की कार्यवाही पूरी होने पर/जांच के दौरान की जा सकती है जिसमें चेतावनी, जुर्माना लगाना, आधिकारिक कर्तव्यों से निलंबन या मामले की गंभीरता को देखते हुए उचित समझी जाने वाली कोई भी कार्रवाई शामिल है लेकिन इन्हीं तक सीमित नहीं है।`
                : ` means any action that can be taken on the completion of/ during the investigation proceedings including but not limiting to a warning, imposition of fine, suspension from official duties or any such action as is deemed to be fit considering the gravity of the matter.`}
            </p>
            <p className='text-justify'>
              <strong>{lang === "hi" ? `3.2 'निगम'` : `3.2 'Corporation'`}</strong>
              {lang === "hi"
                ? ` का अर्थ 'राष्ट्रीय हथकरघा विकास निगम लिमिटेड' है।`
                : ` means 'National Handloom Development Corporation Ltd.'`}
            </p>
            <p className='text-justify'>
              <strong>{lang === "hi" ? `3.3 'कर्मचारी'` : `3.3 'Employee'`}</strong>
              {lang === "hi"
                ? ` का अर्थ निगम के सभी स्थायी कर्मचारी हैं।`
                : ` means all permanent employees of the Corporation.`}
            </p>
            <p className='text-justify'>
              <strong>{lang === "hi" ? `3.4 'संरक्षित प्रकटीकरण'` : `3.4 'Protected Disclosure'`}</strong>
              {lang === "hi"
                ? ` का अर्थ है एक लिखित संचार द्वारा सद्भावना में उठाई गई चिंता जो अनैतिक या अनुचित गतिविधि के साक्ष्य की जानकारी प्रकट करती है या प्रदर्शित करती है।`
                : ` means a concern raised by a written communication made in good faith that discloses or demonstrates information that may evidence unethical or improper activity.`}
            </p>
            <p className='text-justify'>
              <strong>{lang === "hi" ? `3.5 'विषय'` : `3.5 'Subject'`}</strong>
              {lang === "hi"
                ? ` का अर्थ है वह व्यक्ति जिसके खिलाफ या जिसके संबंध में संरक्षित प्रकटीकरण किया गया है या जांच के दौरान साक्ष्य एकत्र किए गए हैं।`
                : ` means a person against or in relation to whom a Protected Disclosure is made or evidence gathered during the course of an investigation.`}
            </p>
            <p className='text-justify'>
              <strong>{lang === "hi" ? `3.6 'व्हिसिल ब्लोअर'` : `3.6 'Whistle Blower'`}</strong>
              {lang === "hi"
                ? ` वह व्यक्ति है जो इस नीति के तहत संरक्षित प्रकटीकरण करता है।`
                : ` is someone who makes a Protected Disclosure under this Policy.`}
            </p>
            <p className='text-justify'>
              <strong>{lang === "hi" ? `3.7 'व्हिसिल अधिकारी' या 'समिति'` : `3.7 'Whistle Officer' or 'Committee'`}</strong>
              {lang === "hi"
                ? ` का अर्थ है एक अधिकारी या व्यक्तियों की समिति जो विस्तृत जांच करने के लिए नामित/नियुक्त किया गया है।`
                : ` means an officer or Committee of persons who is nominated/appointed to conduct detailed investigation.`}
            </p>
            <p className='text-justify'>
              <strong>{lang === "hi" ? `3.8 'अनुपालन अधिकारी'` : `3.8 'Compliance Officer'`}</strong>
              {lang === "hi"
                ? ` का अर्थ निगम का कंपनी सचिव है।`
                : ` means Company Secretary of the corporation.`}
            </p>
            <p className='text-justify'>
              <strong>{lang === "hi" ? `3.9 'लोकपाल'` : `3.9 'Ombudsperson'`}</strong>
              {lang === "hi"
                ? ` इस नीति के तहत सभी शिकायतें प्राप्त करने और उचित कार्रवाई सुनिश्चित करने के उद्देश्य से प्रबंध निदेशक होगा।`
                : ` will be the Managing Director for the purpose of receiving all complaints under this Policy and ensuring appropriate action.`}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `4. मार्गदर्शक सिद्धांत` : `4. The Guiding Principles`}
          </h2>
          <p className="mb-3">
            {lang === "hi"
              ? `4.1 यह सुनिश्चित करने के लिए कि इस नीति का पालन किया जाए, और यह आश्वासन देने के लिए कि चिंता पर गंभीरता से कार्रवाई की जाएगी, निगम:`
              : `4.1 To ensure that this Policy is adhered to, and to assure that the concern will be acted upon seriously, the corporation will:`}
          </p>
          <ul className="list-roman pl-6 space-y-2">
            <li>
              {lang === "hi"
                ? `यह सुनिश्चित करना कि व्हिसिल ब्लोअर और/या संरक्षित प्रकटीकरण को संसाधित करने वाले व्यक्ति का उत्पीड़न न हो;`
                : `Ensure that the Whistle Blower and/or the person processing the Protected Disclosure is not victimized for doing so;`}
            </li>
            <li>
              {lang === "hi"
                ? `उत्पीड़न को एक गंभीर मामले के रूप में मानना और ऐसे व्यक्ति/व्यक्तियों के खिलाफ अनुशासनात्मक कार्रवाई शुरू करना;`
                : `Treat victimization as a serious matter including initiating disciplinary action on such person/(s);`}
            </li>
            <li>
              {lang === "hi"
                ? `पूर्ण गोपनीयता सुनिश्चित करना।`
                : `Ensure complete confidentiality.`}
            </li>
            <li>
              {lang === "hi"
                ? `संरक्षित प्रकटीकरण के सबूत को छुपाने का प्रयास नहीं करना;`
                : `Not attempt to conceal evidence of the Protected Disclosure;`}
            </li>
            <li>
              {lang === "hi"
                ? `यदि कोई व्यक्ति संरक्षित प्रकटीकरण के सबूत को नष्ट करता है या छुपाता है तो अनुशासनात्मक कार्रवाई करना;`
                : `Take disciplinary action, if any one destroys or conceals evidence of the Protected Disclosure made/ to be made;`}
            </li>
            <li>
              {lang === "hi"
                ? `संबंधित व्यक्तियों, विशेष रूप से विषय को सुनवाई का अवसर प्रदान करना;`
                : `Provide an opportunity of being heard to the persons involved, especially to the Subject;`}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `5. नीति का दायरा` : `5. Coverage of Policy`}
          </h2>
          <p className="mb-3">
            {lang === "hi"
              ? `5.1 यह नीति कुप्रथाओं और घटनाओं को कवर करती है जो हुई हैं/होने की संभावना है जिसमें शामिल हैं:`
              : `5.1 The Policy covers malpractices and events which have taken place/ suspected to take place involving:`}
          </p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>{lang === "hi" ? `अधिकार का दुरुपयोग` : `Abuse of authority`}</li>
            <li>{lang === "hi" ? `अनुबंध का उल्लंघन` : `Breach of contract`}</li>
            <li>{lang === "hi" ? `लापरवाही जो सार्वजनिक स्वास्थ्य और सुरक्षा के लिए पर्याप्त और विशिष्ट खतरा पैदा करती है` : `Negligence causing substantial and specific danger to public health and safety`}</li>
            <li>{lang === "hi" ? `कंपनी डेटा/रिकॉर्ड में हेरफेर` : `Manipulation of company data/ records`}</li>
            <li>{lang === "hi" ? `वित्तीय अनियमितताएं, धोखाधड़ी या संदिग्ध धोखाधड़ी सहित` : `Financial irregularities, including fraud, or suspected fraud`}</li>
            <li>{lang === "hi" ? `आपराधिक अपराध` : `Criminal offence`}</li>
            <li>{lang === "hi" ? `गोपनीय/स्वामित्व जानकारी की चोरी` : `Pilferage of confidential/ propriety information`}</li>
            <li>{lang === "hi" ? `कानून/नियमों का जानबूझकर उल्लंघन` : `Deliberate violation of law/ regulation`}</li>
            <li>{lang === "hi" ? `कंपनी फंड/संपत्ति की बर्बादी/दुरुपयोग` : `Wastage/ misappropriation of company funds/ assets`}</li>
            <li>{lang === "hi" ? `कर्मचारी आचार संहिता या नियमों का उल्लंघन` : `Breach of employee Code of Conduct or Rules`}</li>
            <li>{lang === "hi" ? `कोई अन्य अनैतिक, पक्षपातपूर्ण, पसंदीदा, अविवेकपूर्ण घटना` : `Any other unethical, biased, favoured, imprudent event`}</li>
          </ol>
          <p className="mt-3">
            {lang === "hi"
              ? `5.2 नीति का उपयोग निगम की शिकायत प्रक्रियाओं के स्थान पर नहीं किया जाना चाहिए जिसमें मुआवजा, वेतन वृद्धि, पदोन्नति, नौकरी का स्थान, नौकरी की प्रोफ़ाइल, छूट, छुट्टी और प्रशिक्षण या अन्य विशेषाधिकार शामिल हैं लेकिन इन्हीं तक सीमित नहीं है या सहयोगियों/वरिष्ठों के खिलाफ दुर्भावनापूर्ण या निराधार आरोप लगाने का मार्ग हो।`
              : `5.2 Policy should not be used in place of the corporation's grievance procedures including but not limited to compensation, increment, promotion, job location, job profile, immunities, leaves and training or other privileges or be a route for raising malicious or unfounded allegations against colleagues/ seniors.`}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `6. अयोग्यताएं` : `6. Disqualifications`}
          </h2>
          <div className="space-y-3">
            <p className='text-justify'>
              {lang === "hi"
                ? `6.1 जबकि यह सुनिश्चित किया जाएगा कि वास्तविक व्हिसिल ब्लोअर को यहां निर्धारित किसी भी प्रकार के अनुचित व्यवहार से पूर्ण सुरक्षा प्रदान की जाए, इस सुरक्षा का कोई भी दुरुपयोग अनुशासनात्मक कार्रवाई का कारण होगा।`
                : `6.1 While it will be ensured that genuine Whistle Blowers are accorded complete protection from any kind of unfair treatment as herein set out, any abuse of this protection will warrant disciplinary action.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `6.2 इस नीति के तहत सुरक्षा का मतलब व्हिसिल ब्लोअर द्वारा झूठे या बोगस आरोप लगाने से उत्पन्न अनुशासनात्मक कार्रवाई से सुरक्षा नहीं है, जब वह जानता है कि यह झूठा या बोगस है या दुर्भावनापूर्ण इरादे से है।`
                : `6.2 Protection under this Policy would not mean protection from disciplinary action arising out of false or bogus allegations made by a Whistle Blower knowing it to be false or bogus or with a mala fide intention.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `6.3 व्हिसिल ब्लोअर, जो कोई भी संरक्षित प्रकटीकरण करते हैं, जो बाद में दुर्भावनापूर्ण, तुच्छ या दुर्भावनापूर्ण पाए गए हैं, वे निगम के नियमों, नीतियों और प्रक्रियाओं के अनुसार रोजगार की समाप्ति सहित अनुशासनात्मक कार्रवाई के अधीन होंगे।`
                : `6.3 Whistle Blowers, who make any Protected Disclosures, which have been subsequently found to be mala fide, frivolous or malicious shall be subject to disciplinary action, up to and including termination of employment, in accordance with corporation's rules, policies and procedures.`}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `7. चिंता उठाने की विधि` : `7. Manner in which concern can be raised`}
          </h2>
          <div className="space-y-3">
            <p className='text-justify'>
              {lang === "hi"
                ? `7.1 कर्मचारी लोकपाल को संरक्षित प्रकटीकरण कर सकते हैं, जितनी जल्दी हो सके लेकिन इसके बारे में जानने के 30 लगातार दिनों के बाद नहीं।`
                : `7.1 Employees can make Protected Disclosure to Ombudsperson, as soon as possible but not later than 30 consecutive days after becoming aware of the same.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `7.2 व्हिसिल ब्लोअर को अपना नाम आरोपों के साथ देना होगा। गुमनाम रूप से व्यक्त की गई चिंताओं की जांच नहीं की जाएगी।`
                : `7.2 Whistle Blower must put his/ her name to allegations. Concerns expressed anonymously WILL NOT BE investigated.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `7.3 यदि लोकपाल द्वारा प्रारंभिक जांच से संकेत मिलता है कि चिंता का कोई आधार नहीं है, या यह इस नीति के तहत जांच का मामला नहीं है, तो इसे इस चरण में खारिज किया जा सकता है और निर्णय दस्तावेजित किया जाता है।`
                : `7.3 If initial enquiries by the Ombudsperson indicate that the concern has no basis, or it is not a matter of investigation under this Policy, it may be dismissed at this stage and the decision is documented.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `7.4 जहां प्रारंभिक जांच से संकेत मिलता है कि आगे की जांच आवश्यक है, यह या तो लोकपाल द्वारा अकेले, या इस उद्देश्य के लिए लोकपाल द्वारा नामित व्हिसिल अधिकारी/समिति द्वारा की जाएगी।`
                : `7.4 Where initial enquiries indicate that further investigation is necessary, this will be carried through either by the Ombudsperson alone, or by a Whistle Officer/ Committee nominated by the Ombudsperson for this purpose.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `7.5 लोकपाल/व्हिसिल अधिकारी/समिति को इस नीति के तहत जांच करने के उद्देश्य से निगम के किसी भी कर्मचारी या अन्य व्यक्ति(यों) की कोई भी जानकारी/दस्तावेज और परीक्षा के लिए बुलाने का अधिकार होगा।`
                : `7.5 Ombudsperson/ Whistle Officer/ Committee shall have right to call for any information/document and examination of any employee of the Corporation or other person(s), as they may deem appropriate for the purpose of conducting investigation under this policy.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `7.6 व्हिसिल ब्लोअर का नाम व्हिसिल अधिकारी/समिति को प्रकट नहीं किया जाएगा।`
                : `7.6 Name of the Whistle Blower shall not be disclosed to the Whistle Officer/ Committee.`}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `8. सुरक्षा` : `8. Protection`}
          </h2>
          <div className="space-y-3">
            <p className='text-justify'>
              {lang === "hi"
                ? `8.1 व्हिसिल ब्लोअर के साथ इस नीति के तहत संरक्षित प्रकटीकरण की रिपोर्ट करने के कारण कोई अनुचित व्यवहार नहीं किया जाएगा। निगम, एक नीति के रूप में, व्हिसिल ब्लोअर के खिलाफ अपनाए जाने वाले किसी भी प्रकार के भेदभाव, उत्पीड़न, उत्पीड़न या किसी अन्य अनुचित रोजगार अभ्यास की निंदा करता है।`
                : `8.1 No unfair treatment will be meted out to a Whistle Blower by virtue of his/her having reported a Protected Disclosure under this Policy. The corporation, as a policy, condemns any kind of discrimination, harassment, victimization or any other unfair employment practice being adopted against Whistle Blower.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `8.2 व्हिसिल ब्लोअर की पहचान गोपनीय रखी जाएगी।`
                : `8.2 The identity of the Whistle Blower shall be kept confidential.`}
            </p>
            <p className='text-justify'>
              {lang === "hi"
                ? `8.3 उक्त जांच में सहायता करने वाले या साक्ष्य प्रस्तुत करने वाले किसी भी अन्य कर्मचारी को भी व्हिसिल ब्लोअर के समान सुरक्षा प्रदान की जाएगी।`
                : `8.3 Any other Employee assisting in the said investigation or furnishing evidence shall also be protected to the same extent as the Whistle Blower.`}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `9. गोपनीयता/रहस्य` : `9. Secrecy/Confidentiality`}
          </h2>
          <p className="mb-3">
            {lang === "hi"
              ? `व्हिसिल ब्लोअर, विषय, व्हिसिल अधिकारी और प्रक्रिया में शामिल हर व्यक्ति:`
              : `The Whistle Blower, the Subject, the Whistle Officer and every one involved in the process shall:`}
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              {lang === "hi"
                ? `मामले की पूर्ण गोपनीयता/गुप्तता बनाए रखें`
                : `maintain complete confidentiality/ secrecy of the matter`}
            </li>
            <li>
              {lang === "hi"
                ? `किसी भी अनौपचारिक/सामाजिक सभा/बैठक में मामले पर चर्चा न करें`
                : `not discuss the matter in any informal/ social gatherings/ meetings`}
            </li>
            <li>
              {lang === "hi"
                ? `केवल उस सीमा तक या उन व्यक्तियों के साथ चर्चा करें जो प्रक्रिया और जांच को पूरा करने के लिए आवश्यक है`
                : `discuss only to the extent or with the persons required for the purpose of completing the process and investigations`}
            </li>
            <li>
              {lang === "hi"
                ? `कागजात को कभी भी कहीं भी अकेला न छोड़ें`
                : `not keep the papers unattended anywhere at any time`}
            </li>
            <li>
              {lang === "hi"
                ? `इलेक्ट्रॉनिक मेल/फाइलों को पासवर्ड के तहत रखें`
                : `keep the electronic mails/files under password`}
            </li>
          </ul>
          <p className="mt-3">
            {lang === "hi"
              ? `यदि कोई भी व्यक्ति उपरोक्त का पालन नहीं कर रहा है, तो वह उचित समझी जाने वाली अनुशासनात्मक कार्रवाई के लिए उत्तरदायी होगा।`
              : `If any one is found not complying with the above, he/ she shall be held liable for such disciplinary action as is considered fit.`}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `10. रिपोर्टिंग` : `10. Reporting`}
          </h2>
          <p className='text-justify'>
            {lang === "hi"
              ? `नीति के तहत प्राप्त शिकायतों की संख्या और उनके परिणाम के साथ एक त्रैमासिक रिपोर्ट ऑडिट समिति और बोर्ड के समक्ष रखी जाएगी।`
              : `A quarterly report with number of complaints received under the Policy and their outcome shall be placed before the Audit Committee and Board.`}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `11. व्याख्या` : `11. Interpretation`}
          </h2>
          <p className='text-justify'>
            {lang === "hi"
              ? `इस नीति में परिभाषित नहीं किए गए शब्दों का वही अर्थ होगा जो उन्हें कंपनी अधिनियम, 1956 और/या समय-समय पर इस विषय पर डीपीई दिशानिर्देशों में दिया गया है।`
              : `Terms that have not been defined in this Policy shall have the same meaning as assigned to them in the Companies Act, 1956 and/or DPE guidelines on the subject from time to time.`}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `12. अधिसूचना` : `12. Notification`}
          </h2>
          <p className='text-justify'>
            {lang === "hi"
              ? `मुख्यालय के सभी विभागीय प्रमुखों और उनके अधीन सभी कार्यालयों में क्षेत्रीय/जोनल प्रभारी को अपने विभाग के कर्मचारियों को इस नीति के अस्तित्व और सामग्री के बारे में सूचित और संप्रेषित करना आवश्यक है। प्रत्येक विभागीय प्रमुख/क्षेत्रीय प्रभारी/जोनल प्रभारी अनुपालन अधिकारी को विधिवत हस्ताक्षरित एक प्रमाण पत्र प्रस्तुत करेगा कि यह नीति उसके विभाग/कार्यालय के प्रत्येक कर्मचारी को अधिसूचित की गई थी। नए कर्मचारियों को कार्मिक विभाग द्वारा नीति के बारे में सूचित किया जाएगा और इस संबंध में बयान समय-समय पर अनुपालन अधिकारी को प्रस्तुत किया जाना चाहिए। समय-समय पर संशोधित यह नीति निगम की वेबसाइट पर उपलब्ध कराई जाएगी।`
              : `All the departmental heads at Head Office and Regional/ Zonal Incharge at all the offices under them including branch offices are required to notify & communicate the existence and contents of this policy to the employees of their department. Every Departmental Head/ Regional Incharge/ Zonal Incharge shall submit a certificate duly signed by him to the Compliance Officer that this policy was notified to each employee of his department/ office. The new employees shall be informed about the policy by the Personnel department and statement in this regard should be periodically submitted to the Compliance Officer. This policy as amended from time to time shall be made available at the Website of the Corporation.`}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            {lang === "hi" ? `13. संशोधन` : `13. Amendment`}
          </h2>
          <p className='text-justify'>
            {lang === "hi"
              ? `निगम के निदेशक मंडल को बिना कोई कारण बताए, किसी भी समय इस नीति को पूर्ण या आंशिक रूप से संशोधित या संशोधित करने का अधिकार है।`
              : `The Board of Directors of the corporation has the right to amend or modify this Policy in whole or in part, at any time without assigning any reason, whatsoever.`}
          </p>
        </div>
        </section>
        </div>
  )
}