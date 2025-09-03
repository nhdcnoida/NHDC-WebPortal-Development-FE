'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function Van() {
    const { lang } = useParams();

    const isHindi = lang === 'hi';

    return (
        <main className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-8  mx-auto">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#4b2c2c]">
                {isHindi ? 'मोबाइल वैन' : 'Mobile Van'}
            </h1>

            {/* Main Content with Image on Left and Text on Right */}
            <div className="flex flex-col lg:flex-row gap-8 w-full">
                {/* Image Section - Left Side */}
                <div className="w-full lg:w-1/2 h-full">
                    <div className="w-full h-full p-2  rounded-lg overflow-hidden sticky top-8">
                        <Image
                            height={1000}
                            width={1000}
                            src="/assets/tantrika.jpg"
                            alt="NHDC Banner"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Text Content Section - Right Side */}
                <div className="w-full lg:w-1/2">
                    {/* Mobile Marketing Section */}
                    <div className="w-full mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#4b2c2c]">
                            {isHindi ? 'मोबाइल मार्केटिंग: आपके द्वार पर हथकरघा' : 'Mobile Marketing: Handloom at your Doorstep'}
                        </h2>

                        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 text-justify leading-relaxed">
                            {isHindi
                                ? 'एनएचडीसी की मोबाइल मार्केटिंग पहल भारत की समृद्ध हथकरघा विरासत का जश्न मनाने और बढ़ावा देने के साथ-साथ स्थानीय कारीगरों को सशक्त बनाने का एक अभिनव प्रयास है। एक यात्रा प्रदर्शनी और खुदरा आउटलेट के रूप में डिजाइन की गई मोबाइल वैन पारंपरिक बुनकरों और समकालीन बाजारों के बीच की खाई को पाटती है, जो कारीगरों को उपभोक्ताओं को सीधे अपनी रचनाओं को प्रदर्शित करने और बेचने के लिए एक व्यापक मंच प्रदान करती है।'
                                : 'The Mobile Marketing initiative by NHDC is a pioneering effort to celebrate and promote India\'s rich handloom heritage while empowering local artisans. Designed as a traveling exhibition and retail outlet, the Mobile Van bridges the gap between traditional weavers and contemporary markets, offering artisans a broader platform to showcase and sell their creations directly to consumers.'}
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#4b2c2c]">
                            {isHindi ? 'उद्देश्य' : 'Objective'}
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 text-justify leading-relaxed">
                            {isHindi
                                ? 'मोबाइल वैन एक गतिशील खुदरा स्थान के रूप में कार्य करती है जो दिल्ली एनसीआर के शहरी, अर्ध-शहरी और ग्रामीण क्षेत्रों में यात्रा करती है, जो उत्कृष्ट हथकरघा वस्त्रों को प्रदर्शित करती है। इसका उद्देश्य है: स्थानीय बुनकरों को सीधे बाजार तक पहुंच प्रदान करना। मध्यस्थों को समाप्त करना, जिससे कारीगरों को बेहतर आय सुनिश्चित हो सके। टिकाऊ, पर्यावरण के अनुकूल हथकरघा उत्पादों के बारे में जागरूकता बढ़ाना। भारत की विविध बुनाई परंपराओं को संरक्षित और सम्मानित करना।'
                                : 'The Mobile Van serves as a dynamic retail space that travels across regions of Delhi NCR - urban, semi-urban, and rural - showcasing exquisite handloom textiles. It aims to: Provide direct market access to local weavers. Eliminate intermediaries, ensuring better earnings for artisans. Promote awareness of sustainable, eco-friendly handloom products. Preserve and celebrate India\'s diverse weaving traditions.'}
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#4b2c2c]">
                            {isHindi ? 'मुख्य विशेषताएं' : 'Key Features'}
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg mb-4 space-y-2">
                            {isHindi
                                ? [
                                    'मोबाइल खुदरा आउटलेट: एक कस्टम-डिज़ाइन, पूरी तरह से सुसज्जित वैन जो एक मोबाइल शोरूम के रूप में कार्य करती है, जिसमें साड़ी, स्टोल, दुपट्टा, स्कार्फ आदि जैसे हथकरघा उत्पादों की एक विस्तृत श्रृंखला प्रदर्शित होती है। इसकी गतिशीलता इसे मांग और स्थानीय रुचि के आधार पर विविध भूगोल तक पहुंचने की अनुमति देती है।',
                                    'जागरूकता और आउटरीच: बिक्री के अलावा, वैन जनता को हथकरघा शिल्प के महत्व और स्वदेशी कारीगरों का समर्थन करने के महत्व के बारे में शिक्षित करने के लिए एक मंच के रूप में कार्य करती है। यह इन उत्पादों के स्थायी और सांस्कृतिक रूप से समृद्ध पहलुओं को उजागर करता है।',
                                    'सीधा कारीगर समर्थन: बुनकरों के साथ सीधे काम करके, यह पहल एक पारदर्शी और निष्पक्ष व्यापार मॉडल सुनिश्चित करती है। यह दृष्टिकोण बिचौलियों को हटा देता है, जिससे कारीगरों को अपने काम का पूरा मूल्य प्राप्त होता है।'
                                ].map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                                : [
                                    'Mobile Retail Outlet: A custom-designed, fully equipped van that functions as a mobile showroom, displaying a wide range of handloom products such as sarees, stoles, dupattas, scarves, and more. Its mobility allows it to reach diverse geographies based on demand and local interest.',
                                    'Awareness and Outreach: Beyond sales, the van doubles as a platform to educate the public on the significance of handloom crafts and the importance of supporting indigenous artisans. It highlights the sustainable and culturally rich aspects of these products.',
                                    'Direct Artisan Support: By working directly with weavers, the initiative ensures a transparent and fair trade model. This approach removes middlemen, allowing artisans to receive the full value of their work.'
                                ].map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                        </ul>

                        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#4b2c2c]">
                            {isHindi ? 'प्रभाव और लाभ' : 'Impact and Benefits'}
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base md:text-lg mb-4 space-y-2">
                            {isHindi
                                ? [
                                    'आर्थिक सशक्तिकरण: सीधे उपभोक्ता को बिक्री चैनल खोलकर कारीगरों के लिए आजीविका के अवसरों को बढ़ाता है।',
                                    'सांस्कृतिक संरक्षण: पारंपरिक बुनाई तकनीकों और क्षेत्रीय विशेषताओं को बढ़ावा देकर भारत की वस्तु विरासत को मजबूत करता है।',
                                    'सततता: समय-सम्मानित, कम-प्रभाव वाली विधियों का उपयोग करके प्राकृतिक फाइबर से बने उत्पादों के माध्यम से पर्यावरण-जागरूक जीवन को बढ़ावा देता है।'
                                ].map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                                : [
                                    'Economic Empowerment: Enhances livelihood opportunities for artisans by opening new, direct-to-consumer sales channels.',
                                    'Cultural Preservation: Strengthens India\'s textile legacy by promoting traditional weaving techniques and regional specialties.',
                                    'Sustainability: Promotes eco-conscious living through products made from natural fibers using time-honored, low-impact methods.'
                                ].map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                        </ul>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-4 text-justify leading-relaxed">
                        {isHindi
                            ? `भारत सरकार की डिजिटल पहल के अनुरूप अपनी गतिविधियों में पारदर्शिता बढ़ाने और 'डिजिटल इंडिया' अभियान के साथ तालमेल स्थापित करने हेतु निगम ने ऑनलाइन लेन-देन के लिए ERP लागू किया है। ERP का उद्देश्य दक्षता बढ़ाना और संचालन क्षमता को बढ़ाने के लिए आवश्यक लेन-देन समय को कम करना है। इसके अलावा, ERP को स्मार्टफोन पर भी सुलभ बनाने के लिए NHDC ने e-dhaga मोबाइल ऐप भी लॉन्च किया है।`
                            : `In line with the Govt. of India initiative of digitalization to further enhance transparency in its activities and create a sync with 'Digital India' campaign, launched by the Hon'ble Prime Minister of India in direction of e-governance, the Corporation has implemented ERP for Online transaction. The objective of the ERP is to increase the efficiency as well as to reduce the transaction time required to augment their operational capacity. Further, to make the ERP accessible even on smart phone, NHDC also launched the e-dhaga mobile app.`}
                    </p>
                </div>
            </div>
        </main>
    );
}