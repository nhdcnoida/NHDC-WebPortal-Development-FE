'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function FaqComponent({ faqs }) {
    const { lang } = useParams();
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    // Function to generate the correct link
    const getLink = (item) => {
        if (!item.Link) return null;
        if (item.isCustomLink) {
            return item.Link; // Use full URL for custom links
        } else {
            // Prepend language path for internal links
            const cleanLink = item.Link.replace(/^\/+/, '');
            return `/${lang}/${cleanLink}`;
        }
    };

    // Function to render text with line breaks
    const renderTextWithBreaks = (text) => {
        return text.split('\n').map((paragraph, i) => (
            <p key={i} className="mb-2">
                {paragraph || <br />}
            </p>
        ));
    };

    // Sort FAQs by displayOrder
    const sortedFaqs = [...faqs.data].sort((a, b) => a.displayOrder - b.displayOrder);

    return (
        <section className="bg-[#F7D7D8] h-full py-16 my-5 px-6 md:px-20">
            <div className="mx-auto flex flex-col md:flex-row items-center">
                {/* Illustration / Left Side */}
                <motion.div 
                    className="md:w-1/2 flex flex-col items-center mb-12 md:mb-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/assets/faq.png"
                        alt="FAQ Icon"
                        width={1000}
                        height={1000}
                        className="w-full max-w-[40rem] h-auto"
                    />
                </motion.div>

                {/* FAQ Content */}
                <motion.div 
                    className="md:w-1/2 h-full flex flex-col  gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-[#62402A] mb-6">
                        {lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked'} <br /> {lang === 'hi' ? '' : 'Questions'}
                    </h2>

                    <div className="space-y-4">
                        {sortedFaqs.map((item, index) => (
                            <motion.div
                                key={item._id}
                                className="border-b border-brown-300 pb-4"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    onClick={() => toggleFaq(index)}
                                    className="flex justify-between items-center w-full text-left font-medium text-[#444444]"
                                    whileHover={{ scale: 1.01 }}
                                >
                                    <span className="flex items-center gap-2">
                                        <Image
                                            src="/assets/comments-question.png"
                                            alt="FAQ Icon"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                        />
                                        {lang === 'hi' ? item.HiQuestion : item.EnQuestion}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaChevronDown />
                                    </motion.div>
                                </motion.button>
                                
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-3 text-[#444444] text-sm overflow-hidden"
                                        >
                                            {renderTextWithBreaks(lang === 'hi' ? item.HiAnswer : item.EnAnswer)}
                                            {item.Link && (
                                                <a 
                                                    href={getLink(item)}
                                                    target={item.isCustomLink ? "_blank" : "_self"}
                                                    className="mt-2 inline-block text-blue-600 hover:underline"
                                                >
                                                    {lang === 'hi' ? 'अधिक जानें' : 'Learn more'}
                                                </a>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <motion.a 
                        href={`/${lang}/FAQ`}
                        className="mt-2 bg-[#62402A] w-34 text-white px-6 py-2 rounded-full hover:bg-brown-800"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {lang === 'hi' ? 'और देखें' : 'View More'}
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}