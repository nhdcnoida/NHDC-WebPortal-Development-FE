"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function DisclaimerPage() {
  const {lang} = useParams()
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
    <h1 className="text-3xl font-bold mb-8 pb-4">
        {lang === 'hi' ? 'अस्वीकरण' : 'Disclaimer'}
      </h1>

   <section className="mb-8">
        <p className="mb-4 leading-relaxed">
          {lang === 'hi'
            ? `यह वेबसाइट और इसमें निहित जानकारी, उपकरण और सामग्री ("साइट") किसी ऐसे व्यक्ति या संस्था के लिए निर्देशित नहीं है, या वितरण, प्रकाशन, उपलब्धता या उपयोग के लिए अभिप्रेत नहीं है, जो किसी ऐसे क्षेत्राधिकार का नागरिक या निवासी हो, जहाँ ऐसा वितरण, प्रकाशन, उपलब्धता या उपयोग कानून या विनियम के विपरीत हो, या जिससे `
            : `The Website and the information, tools and material contained in it (this "Site") are not directed to, or intended for distribution to or use by, any person or entity who is a citizen or resident of or located in any jurisdiction where such distribution, publication, availability or use would be contrary to law or regulation or which would subject `}
          <strong>{lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    </strong>
          {lang === 'hi'
            ? ` या इसकी सहायक कंपनियों को ऐसे क्षेत्राधिकार के भीतर किसी पंजीकरण या लाइसेंसिंग आवश्यकता के अधीन कर दे।`
            : ` or its affiliates to any registration or licensing requirement within such jurisdiction.`}
        </p>

        <p className="mb-4 leading-relaxed">
          {lang === 'hi'
            ? `यह साइट समय-समय पर अद्यतन और संशोधन के अधीन है। सामग्री को केवल प्रारंभिक प्रकाशन की तिथि के अनुसार वर्तमान माना जाना चाहिए, इस बात की परवाह किए बिना कि आप जानकारी कब एक्सेस करते हैं। `
            : `This Site is subject to periodic update and revision. Materials should only be considered current as of the date of initial publication appearing thereon, without regard to the date on which you may access the information.`}
        <strong> {lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    </strong>
          {lang === 'hi'
            ? ` बिना किसी पूर्व सूचना के इस साइट पर जानकारी को हटाने या संशोधित करने का अधिकार सुरक्षित रखता है।`
            : ` maintains the right to delete or modify information on this Site without prior notice.`}
        </p>

        <p className="mb-4 leading-relaxed">
          {lang === 'hi'
            ? `पिछला वित्तीय प्रदर्शन भविष्य के प्रदर्शन का संकेत या गारंटी नहीं माना जाना चाहिए, और भविष्य के प्रदर्शन के संबंध में कोई स्पष्ट या निहित प्रस्तुति या वारंटी नहीं दी जाती है।`
            : `Past financial performance should not be taken as an indication or guarantee of future performance, and no representation or warranty, express or implied is made regarding future performance.`}
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 pb-2">
          {lang === 'hi' ? 'सीमित लाइसेंस' : 'LIMITED LICENSE'}
        </h2>

        <p className="mb-4 leading-relaxed">
          {lang === 'hi'
            ? `इस समझौते में निर्धारित नियमों और शर्तों के अधीन, `
            : `Subject to the terms and conditions set forth in this Agreement, `}
       <strong> {lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    </strong>
          {lang === 'hi'
            ? ` इस साइट और उस पर उपलब्ध सामग्रियों तक पहुँचने के लिए एक गैर-विशेष, गैर-हस्तांतरणीय, सीमित अधिकार प्रदान करेगा।`
            : ` will grant a non-exclusive, non-transferable, limited right to access this site and the materials thereon.`}
        </p>

        <p className="mb-4 leading-relaxed font-semibold">
          {lang === 'hi'
            ? 'आप इस बात से सहमत और पुष्टि करते हैं कि:'
            : 'You hereby agree and confirm that:'}
        </p>

        <ul className="list-disc pl-8 mb-6 space-y-3">
          <li>
            {lang === 'hi'
              ? `इस साइट और इसमें निहित जानकारी तक पहुँचना उस क्षेत्राधिकार के लागू कानूनों के तहत अवैध नहीं है जहाँ मैं निवासी हूँ और जहाँ से मैं इस साइट तक पहुँच रहा हूँ।`
              : `Access to this site and the information contained herein is not unlawful under the applicable laws of the jurisdiction where I am resident and from where I am accessing this site.`}
            <br />
            <br />
            {lang === 'hi'
              ? `इस साइट पर जानकारी तक पहुँच (www.piccadilylucknow.co.in) किसी भी प्रकार से `
              : `Access to information on the site (www.piccadilylucknow.co.in) does not in any manner constitute an offer to sell or a solicitation of any offer to buy any of the securities of `}
    <strong> {lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    </strong>
            <br />
            <br />
            {lang === 'hi'
              ? `इस साइट पर दी गई जानकारी को किसी भी परिस्थिति में `
              : `The information on this site is not and is under no circumstances be construed as, an advertisement or a public offering of the securities of `}
           <strong>{lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    </strong>  
            {lang === 'hi'
              ? ` या किसी अन्य सुरक्षा का विज्ञापन या सार्वजनिक प्रस्ताव नहीं माना जाएगा।`
              : ` or any other security that may be described herein.`}
          </li>
          <li>
            {lang === 'hi'
              ? `किसी भी क्षेत्राधिकार में किसी भी प्रतिभूति नियामक निकाय या इसी तरह के प्राधिकरण ने इस साइट पर दी गई जानकारी या यहां वर्णित प्रतिभूतियों के गुणों की समीक्षा या अनुमोदन नहीं किया है, और इसके विपरीत कोई भी प्रस्तुति लागू कानूनों के तहत अपराध मानी जा सकती है।`
              : `No securities regulatory body or similar authority in any jurisdiction has reviewed or in any way passed upon or endorsed the information on this site or the merits of the securities that may be described herein and any representation to the contrary may be construed as an offence under applicable laws.`}
          </li>
          <li>
            {lang === 'hi'
              ? `मैं इस साइट की जानकारी और डेटा की प्रतियां किसी भी प्रकार से (फोटोकॉपी और ईमेल सहित लेकिन इन्हीं तक सीमित नहीं) प्रसारित नहीं करूंगा।`
              : `I shall not circulate copies of this information in any manner (including but not restricted to photocopying and email) of the information and data on this site.`}
          </li>
          <li>
            {lang === 'hi'
              ? `मैं सामग्री को किसी के साथ पुन: प्रस्तुत, पुन: प्रसारित, वितरित, प्रसारित, बेचना, प्रकाशित, प्रसारित या प्रसारित करने के लिए सहमत नहीं हूं।`
              : `I agree not to reproduce, retransmit, distribute, disseminate, sell, publish, broadcast or circulate the contents to anyone.`}
          </li>
        </ul>

        <p className="mb-4 leading-relaxed font-semibold">
          {lang === 'hi'
            ? 'आप सहमत हैं कि आप ऐसा नहीं करेंगे:'
            : 'You agree not to:'}
        </p>

        <ul className="list-disc pl-8 mb-6 space-y-2">
          <li>
            {lang === 'hi'
              ? `किसी भी तरह से साइट के संचालन में बाधा डालना या बाधा डालने का प्रयास करना।`
              : `Interrupt or attempt to interrupt the operation of the site in any way.`}
          </li>
          <li>
            {lang === 'hi'
              ? `किसी भी तरह से साइट में प्रवेश करना या प्रवेश करने का प्रयास करना।`
              : `Intrude or attempt to intrude into the site in any way.`}
          </li>
          <li>
            {lang === 'hi'
              ? `साइट पर कोई अश्लील, मानहानिकारक या कष्टप्रद सामग्री पोस्ट करना।`
              : `Post any obscene, defamatory or annoying materials on the site.`}
          </li>
          <li>
            {lang === 'hi'
              ? `साइट पर पहले से पोस्ट की गई किसी भी सामग्री, जिसमें यह सूचना भी शामिल है, को छिपाना।`
              : `Obscure any materials, including this notice, already posted on the site.`}
          </li>
          <li>
            {lang === 'hi'
              ? `साइट या इसकी किसी भी सामग्री का उपयोग किसी व्यक्ति को बदनाम करने, डराने, परेशान करने या अन्यथा असुविधा पहुंचाने या उसके अधिकारों का उल्लंघन करने के लिए करना। `
              : `Use the site or any contents thereof to defame, intimidate, annoy or otherwise cause nuisance or breach the rights of any person. `}
           <strong>{lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    </strong> 
            {lang === 'hi'
              ? ` केवल व्यक्तिगत, गैर-व्यावसायिक उपयोग के लिए इस वेबसाइट ("साइट") पर जानकारी ("सामग्री") देखने और डाउनलोड करने के लिए अधिकृत करता है। यह प्राधिकरण सामग्री में शीर्षक के हस्तांतरण का प्रतिनिधित्व नहीं करता है और सामग्री की प्रतियों पर निम्नलिखित प्रतिबंध लागू होंगे:`
              : ` authorizes to view and download the information ("Materials") at this Web site ("Site") only for personal, non-commercial use. This authorization is not a transfer of title in the Materials and copies of the Materials and is subject to the following restrictions:`}
          </li>
        </ul>
      </section>

  <ul className="list-disc pl-8 mb-6 space-y-3">
  <li>
    {lang === 'hi'
      ? `डाउनलोड की गई सभी सामग्री की प्रतियों पर, सामग्री में निहित सभी कॉपीराइट, ट्रेडमार्क और अन्य स्वामित्व सूचनाओं को बनाए रखें; सहमति।`
      : `Retain, on all copies of the Materials downloaded, all copyright, trademarks and other proprietary notices contained in the Materials; consent.`}
  </li>
  <li>
    {lang === 'hi'
      ? `सामग्री में किसी भी प्रकार का संशोधन न करें और न ही उन्हें किसी सार्वजनिक या व्यावसायिक उद्देश्य के लिए पुन: प्रस्तुत, प्रदर्शित, प्रदर्शन या वितरित करें।`
      : `Not modify the Materials in any way nor reproduce or display, perform, or distribute or otherwise use them for any public or commercial purpose.`}
  </li>
  <li>
    {lang === 'hi'
      ? `सामग्री को किसी अन्य व्यक्ति को हस्तांतरित न करें जब तक कि आप उन्हें इन उपयोग की शर्तों और नियमों के तहत उत्पन्न दायित्वों के बारे में सूचित न करें, और वे उन्हें स्वीकार करने के लिए सहमत न हों।`
      : `Not transfer the Materials to any other person unless you give them notice of, and they agree to accept, the obligations arising under these terms and conditions of use.`}
  </li>
  <li>
    {lang === 'hi'
      ? `सामग्री को किसी अन्य व्यक्ति को हस्तांतरित न करें जब तक कि आप उन्हें इन उपयोग की शर्तों और नियमों के तहत उत्पन्न दायित्वों के बारे में सूचित न करें, और वे उन्हें स्वीकार करने के लिए सहमत न हों। आप साइट पर प्रदर्शित सभी अतिरिक्त प्रतिबंधों का पालन करने के लिए सहमत हैं क्योंकि इसे समय-समय पर अपडेट किया जा सकता है। यह साइट, जिसमें सभी सामग्री शामिल है, कॉपीराइटेड है और विश्वव्यापी कॉपीराइट कानूनों और संधि प्रावधानों द्वारा संरक्षित है। आप इस साइट के अपने उपयोग में सभी कॉपीराइट कानूनों का पालन करने और सामग्री की किसी भी अनधिकृत प्रतिलिपि को रोकने के लिए सहमत हैं। यहाँ स्पष्ट रूप से प्रदान किए गए मामलों को छोड़कर, `
      : `Not transfer the Materials to any other person unless you give them notice of, and they agree to accept, the obligations arising under these terms and conditions of use. You agree to abide by all additional restrictions displayed on the Site as it may be updated from time to time. This Site, including all Materials, is copyrighted and protected by worldwide copyright laws and treaty provisions. You agree to comply with all copyright laws worldwide in your use of this Site and to prevent any unauthorized copying of the Materials. Except as expressly provided herein, `}
    <strong>{lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    </strong> 
    {lang === 'hi'
      ? ` आपको किसी भी पेटेंट, ट्रेडमार्क, कॉपीराइट या व्यापार गुप्त जानकारी के तहत कोई स्पष्ट या निहित अधिकार प्रदान नहीं करता है।`
      : `does not grant any express or implied right to you under any patents, trademarks, copyrights or trade secret information.`}
  </li>
</ul>

<section className="mb-8">
  <p className="mb-4 leading-relaxed">
    {lang === 'hi'
      ? `इस साइट में या इसके माध्यम से उपलब्ध जानकारी, सामग्री या सेवाओं में त्रुटियाँ या टाइपिंग की गलतियाँ हो सकती हैं। साइट/सेवाओं और उसमें दी गई जानकारी में समय-समय पर परिवर्तन किए जाते हैं। `
      : `The information, material or services included in or available through this site may include inaccuracies or typographical errors. Changes are periodically made to the site/services and to the information therein.`}
  <strong> {lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    
</strong>
    {lang === 'hi'
      ? ` और/या इसके संबंधित आपूर्तिकर्ता कभी भी साइट/सेवाओं में सुधार और/या परिवर्तन कर सकते हैं। इस साइट के माध्यम से प्राप्त सलाह पर व्यक्तिगत, चिकित्सा, कानूनी या वित्तीय निर्णयों के लिए भरोसा नहीं किया जाना चाहिए और आपको अपनी स्थिति के अनुसार विशिष्ट सलाह के लिए किसी उपयुक्त पेशेवर से परामर्श करना चाहिए।`
      : ` and/or its respective suppliers may make improvements and/or changes in the site/services at any time. Advice received via this site should not be relied upon for personal, medical, legal or financial decisions and you should consult an appropriate professional for specific advice tailored to your situation.`}
  </p>

  <p className="mb-4 leading-relaxed">
    {lang === 'hi'
      ? `आप विशेष रूप से इस बात से सहमत हैं कि `
      : `You specifically agree that `}
   <strong>{lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    </strong> 
    {lang === 'hi'
      ? ` आपके प्रसारण या डेटा तक अनधिकृत पहुंच या उनमें बदलाव, किसी भी सामग्री या डेटा का भेजा जाना या न भेजा जाना, या इस साइट के माध्यम से किए गए किसी भी लेन-देन के लिए जिम्मेदार नहीं होगा। आप विशेष रूप से सहमत हैं कि नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड किसी अन्य पक्ष की किसी भी धमकी, मानहानि, अश्लील, आपत्तिजनक या अवैध सामग्री या आचरण या किसी अन्य के अधिकारों के उल्लंघन के लिए जिम्मेदार या उत्तरदायी नहीं है, जिसमें बौद्धिक संपदा अधिकार भी शामिल हैं। आप विशेष रूप से सहमत हैं कि `
      : ` shall not be responsible for unauthorized access to or alteration of your transmissions or data, any material or data sent or received or not sent or received, or any transactions entered into through this site. You specifically agree that National Handloom Development Corporation Ltd. is not responsible or liable for any threatening, defamatory, obscene, offensive or illegal content or conduct of any other party or any infringement of another's rights, including intellectual property rights. You specifically agree that `}
   <strong>{lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    </strong> 
    {lang === 'hi'
      ? ` किसी भी तीसरे पक्ष द्वारा इस साइट का उपयोग करके भेजी गई और/या इसमें शामिल किसी भी सामग्री के लिए जिम्मेदार नहीं है।`
      : ` is not responsible for any content sent using and/or included in this site by any third party.`}
  </p>
</section>

<section className="mb-8">
  <p className="mb-4 leading-relaxed">
    {lang === 'hi'
      ? `किसी भी स्थिति में `
      : `In no event shall `}
 <strong>{lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    </strong> 
    {lang === 'hi'
      ? ` और/या इसके आपूर्तिकर्ता किसी भी प्रत्यक्ष, अप्रत्यक्ष, दंडात्मक, आकस्मिक, विशेष, परिणामी क्षति या किसी भी प्रकार की क्षति, जिसमें उपयोग, डेटा या लाभ के नुकसान के लिए क्षति शामिल है, के लिए उत्तरदायी नहीं होंगे, जो इस साइट/सेवाओं के उपयोग या प्रदर्शन, इस साइट/सेवाओं या संबंधित सेवाओं का उपयोग करने में देरी या अक्षमता, सेवाएं प्रदान करने या सेवाएं प्रदान करने में विफलता, या इस साइट के माध्यम से प्राप्त किसी भी जानकारी, उत्पाद, सेवाओं और सामग्री के कारण या अन्यथा इस साइट/सेवाओं के उपयोग से उत्पन्न होती है, चाहे वह अनुबंध, अत्याचार, लापरवाही, सख्त दायित्व या अन्यथा पर आधारित हो, भले ही नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड या उसके किसी भी आपूर्तिकर्ता को क्षति की संभावना के बारे में बताया गया हो। यदि आप इस साइट/सेवाओं के किसी भी हिस्से या इन उपयोग की शर्तों से असंतुष्ट हैं, तो आपका एकमात्र और विशेष उपाय इस साइट/सेवाओं का उपयोग बंद करना है।`
      : ` and/or its suppliers be liable for any direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected with the use or performance of this site/services, with the delay or inability to use this site/services or related services, the provision of or failure to provide services, or for any information, products, services and material obtained through this site, or otherwise arising out of the use of this site/services, whether based on contract, tort, negligence, strict liability or otherwise, even if National Handloom Development Corporation Ltd. or any of its suppliers has been advised of the possibility of damages. If you are dissatisfied with any portion of this site/services, or with any of these terms of use, your sole and exclusive remedy is to discontinue using this site/services.`}
  </p>

  <p className="mb-4 leading-relaxed">
    {lang === 'hi'
      ? `उपरोक्त प्रावधान भारत गणराज्य के कानूनों के अधीन हैं और मुंबई, भारत के न्यायालयों को इस साइट के उपयोग से उत्पन्न होने वाले किसी भी विवाद पर विशेष अधिकार क्षेत्र प्राप्त होगा।`
      : `The foregoing are subject to the laws of the Republic of India and the courts in Mumbai, India shall have the exclusive jurisdiction on any dispute that may arise out of the use of this site.`}
  </p>

  <p className="mb-6 leading-relaxed font-semibold">
    {lang === 'hi'
      ? `कृपया केवल तभी आगे बढ़ें जब आप अपनी स्वतंत्र इच्छा और सहमति से यहां ऊपर सूचीबद्ध सभी शर्तों को स्वीकार करते हों।`
      : `Please proceed only if you accept all the conditions enumerated herein above, out of your free will and consent.`}
  </p>
</section>


  <section className="mb-8">
  <p className="text-justify">
    {lang === "hi"
      ? `www.nhdcltd.com के लिए गोपनीयता वक्तव्य`
      : `Privacy Statement for www.nhdcltd.com`}
  </p>

  <p className="mb-2 leading-relaxed text-justify">
    <strong> {lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    </strong>
    {lang === "hi"
      ? ` ने गोपनीयता के प्रति हमारी प्रतिबद्धता प्रदर्शित करने के लिए यह गोपनीयता वक्तव्य बनाया है। निम्नलिखित www.nhdcltd.com के लिए हमारी जानकारी एकत्र करने और प्रसारित करने की प्रथाओं का खुलासा करता है।`
      : ` has created this privacy statement in order to demonstrate our firm's commitment to privacy. The following discloses our information gathering and dissemination practices for www.nhdcltd.com`}
  </p>

  <div className="mb-2">
    <p>
      {lang === "hi"
        ? `www.nhdcltd.com के लिए जानकारी एकत्र करने और प्रसारित करने की प्रथाएं`
        : `Information gathering and dissemination practices for www.nhdcltd.com`}
    </p>
    <p className="mb-4 leading-relaxed">
      {lang === "hi"
        ? `हम आपके IP पते का उपयोग हमारे सर्वर की समस्याओं का निदान करने और/या हमारी वेबसाइट का प्रबंधन करने में मदद के लिए करते हैं। इससे हमें यह पता चलता है कि हमारे साइट के कौन से भाग उपयोगकर्ता देख रहे हैं। हम IP पतों को किसी भी व्यक्तिगत पहचान योग्य जानकारी से लिंक नहीं करते हैं। इसका मतलब है कि उपयोगकर्ता का सत्र ट्रैक किया जाएगा, लेकिन उपयोगकर्ता गुमनाम रहेगा।`
        : `We use your IP address to help diagnose problems with our server and/or to administer our Web site. This gives us an idea of which parts of our site users are visiting. We do not link IP addresses to anything personally identifiable. This means that a user's session will be tracked, but the user will be anonymous.`}
    </p>

    <p className="mb-4 leading-relaxed">
      {lang === "hi"
        ? `हमारी साइट के पंजीकरण फॉर्म में आपको अपना नाम और ईमेल पता जैसी संपर्क जानकारी देने की आवश्यकता होती है। हम इस संपर्क जानकारी का उपयोग आपको हमारी कंपनी के बारे में जानकारी भेजने के लिए करते हैं। उपयोगकर्ता भविष्य में मेलिंग प्राप्त करने से बाहर निकल सकते हैं, इसके लिए पंजीकरण फॉर्म में अनसब्सक्राइब विकल्प चुन सकते हैं।`
        : `Our site's registration form requires you to give us contact information like your name and email address. We use this contact information from the registration form to send you information about our Company. Users may opt-out of receiving future mailings by choosing the unsubscribe option in the registration form.`}
    </p>

    <p className="mb-4 leading-relaxed">
      {lang === "hi"
        ? `इस साइट में अन्य साइटों के लिंक शामिल हैं। `
        : `This site contains links to other sites. `}
   <strong>{lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
    </strong> 
      {lang === "hi"
        ? ` ऐसी वेबसाइटों की गोपनीयता प्रथाओं या सामग्री के लिए जिम्मेदार नहीं है।`
        : ` is not responsible for the privacy practices or the content of such Web sites.`}
    </p>
  </div>

  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-3">
      {lang === "hi" ? `सुरक्षा` : `Security`}
    </h3>
    <p className="mb-4 leading-relaxed">
      {lang === "hi"
        ? `इस साइट में हमारे नियंत्रण के तहत जानकारी के नुकसान, दुरुपयोग, और/या परिवर्तन से बचाने के लिए सुरक्षा उपाय मौजूद हैं। डेटा एक फ़ायरवॉल के पीछे स्थित है, और पहुंच केवल अधिकृत नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड के कर्मचारियों तक सीमित है।`
        : `This site has security measures in place to protect the loss, misuse, and/or alteration of information under our control. The data resides behind a firewall, with access restricted to authorized National Handloom Development Corporation Ltd. personnel.`}
    </p>
  </div>

  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-3">
      {lang === "hi" ? `वेबसाइट से संपर्क करना` : `Contacting the Web Site`}
    </h3>
    <p className="mb-4 leading-relaxed">
      {lang === "hi"
        ? `यदि आपके पास इस गोपनीयता वक्तव्य, इस साइट की प्रथाओं, या इस वेबसाइट के साथ आपके व्यवहार के बारे में कोई प्रश्न हैं, तो आप संपर्क कर सकते हैं। `
        : `If you have any questions about this privacy statement, the practices of this site, or your dealings with this Web site, you can contact `}
    <strong>
  {lang === "hi"
    ? `नेशनल हैंडलूम डेवलपमेंट कॉरपोरेशन लिमिटेड`
    : `National Handloom Development Corporation Ltd.`}
</strong>
    </p>
  </div>
</section>

    </div>
  );
}