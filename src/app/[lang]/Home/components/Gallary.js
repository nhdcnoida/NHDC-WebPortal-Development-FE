'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { FiArrowRight,FiPlay } from "react-icons/fi";
import { Roboto } from 'next/font/google';


const roboto = Roboto({
  subsets: ['latin'],   
  weight: ['400', '500', '700'],
});

const Gallary = ({galleryData}) => {
    const { lang } = useParams();
    const currentLanguage = lang || 'en';
    const route = useRouter();
    
    // Sort data by displayOrder
    const sortedData = [...galleryData.data].sort((a, b) => a.displayOrder - b.displayOrder);

    // Check if media is video
    const isVideo = (url) => {
        if (!url) return false;
        const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
        return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const headerVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Get caption based on current language
    const getCaption = (item) => {
        return currentLanguage === 'hi' ? item.HiCaption : item.EnCaption;
    };

    // Get link based on isCustomLink
    const getLink = (item) => {
        if (item.isCustomLink) {
            return item.Link;
        }
        return item.Link === '#' ? '#' : `/${currentLanguage}${item.Link}`;
    };

    return (
        <div className="p-5 mt-14 bg-gray-50">
            {/* Grid Container */}
            <motion.div 
                className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-4 md:h-[90vh] h-auto"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Text Content */}
                <motion.div 
                    className="md:col-span-2 h-auto col-span-1 md:p-4 p-2 flex flex-col justify-center"
                    variants={headerVariants}
                >
                    <div className="flex mb-6">
                        <Image 
                            src="/assets/needle.png" 
                            alt="Needle" 
                            width={80}
                            height={80}
                            className="w-20 h-20 object-contain"
                        />
                        <div className="ml-4">
                            <h3 className="text-[#62402A] text-lg font-medium mb-1"> 
                                {currentLanguage === 'hi' ? 'शिल्प की झलक' : 'Capturing Craft'}
                            </h3>
                            <h2 className="text-3xl font-playfair font-bold text-[#62402A]"> 
                                {currentLanguage === 'hi' ? 'हथकरघा विरासत की एक झलक' : 'A Glimpse into Handloom Heritage'}
                            </h2>
                        </div>
                    </div>
                    <motion.p 
                        className="text-gray-600 text-sm max-w-4xl lg:ml-24"
                        variants={headerVariants}
                    >
                        {currentLanguage === 'hi' ? 'भारतीय हथकरघा की समृद्ध विरासत को हमारी संकलित गैलरी के माध्यम से अनुभव करें। जटिल बुनाई से लेकर जीवंत रंगों तक, प्रत्येक तस्वीर शिल्पकला, परंपरा और समर्पण की कहानी कहती है। हर धागे के पीछे की कलाकारी को देखें और उन हस्तनिर्मित वस्त्रों की सुंदरता को जानें जो हमारी सांस्कृतिक धरोहर को परिभाषित करते हैं।' : 'Experience the rich heritage of Indian handlooms through our curated gallery. From intricate weaves to vibrant dyes, each photograph tells a story of craftsmanship, tradition, and dedication. Explore the artistry behind every thread and witness the beauty of handmade textiles that define our cultural legacy.'}
                    </motion.p>
                    <div className='lg:ml-24'>
                        <motion.button
                            onClick={() => route.push(`${lang}/Photo-Gallery`)}
                            className="mt-6 bg-[#62402A] text-white px-6 py-2 rounded-full hover:bg-brown-800"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {currentLanguage === 'hi' ? 'और देखें' : 'View More'}
                        </motion.button>
                    </div>
                </motion.div>

                {/* Gallery Items */}
                {sortedData.map((item) => {
                    const link = getLink(item);
                    const caption = getCaption(item);
                    const videoFile = isVideo(item.image);
                    
                    // Determine grid positioning based on displayOrder
                    const gridClasses = {
                        1: 'md:row-start-4 md:row-end-5 md:col-start-1 md:col-end-2',
                        2: 'md:row-start-4 md:row-end-5 md:col-start-2 md:col-end-3',
                        3: 'md:row-start-3 md:row-end-4 md:col-start-2 md:col-end-3',
                        4: 'md:row-start-2 md:row-end-4 md:col-start-3 md:col-end-4',
                        5: 'md:row-start-1 md:row-end-2 md:col-start-4 md:col-end-5',
                        6: 'md:row-start-2 md:row-end-3 md:col-start-4 md:col-end-5',
                        7: 'md:row-start-3 md:row-end-4 md:col-start-4 md:col-end-5',
                        8: 'md:row-start-4 md:row-end-5 md:col-start-3 md:col-end-5'
                    }[item.displayOrder] || '';
                    
                    return (
                        <motion.div 
                            key={item._id} 
                            className={`
                                relative rounded-md shadow-md overflow-hidden h-64 md:h-auto ${roboto.className}
                                ${gridClasses}
                            `}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            {item.isCustomLink ? (
                                <a href={`${lang}${item.Link}`} target="_blank" rel="noopener noreferrer">
                                    <GalleryItemContent item={item} caption={caption} videoFile={videoFile} />
                                </a>
                            ) : (
                                <Link href={`${lang}${item.Link}`}>
                                    <GalleryItemContent item={item} caption={caption} videoFile={videoFile} />
                                </Link>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

const GalleryItemContent = ({ item, caption, videoFile }) => {
    const mediaUrl = `${process.env.NEXT_PUBLIC_STORAGE}${item.image}`;
    
    return (
        <>
            <motion.div
                className="absolute top-2 left-2 z-10
                    bg-white/60 border border-white
                    backdrop-blur-md
                    text-[#000000] font-semibold px-2 py-1
                    rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
            >
                {new Date(item.createdAt).toLocaleDateString('en-IN', {
                    month: 'short', year: 'numeric'
                })}
            </motion.div>

            {videoFile ? (
                <div className="relative w-full h-full">
                    <video
                        src={mediaUrl}
                        className="w-full h-full object-cover"
                        muted
                        autoPlay
                        loop
                        preload="metadata"
                    />
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/30 rounded-full p-2">
                            <FiPlay className="h-8 w-8 text-white" />
                        </div>
                    </div> */}
                </div>
            ) : (
                <Image
                    src={mediaUrl}
                    alt="Gallery image"
                    fill
                    loading="lazy"
                    className="object-cover"
                />
            )}
            
            <motion.div
                style={{
                    background: `linear-gradient(0deg, rgba(157, 100, 89, 0.75), rgba(157, 100, 89, 0.75)),
                    linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))`
                }}
                className="absolute cursor-pointer justify-between items-center bottom-0 left-0 right-0 h-10 flex w-full text-white px-3 py-1 text-sm"
                whileHover={{ height: 48 }}
            >
                <span className='text-white font-semibold'>{caption}</span>
                <motion.span 
                    className="border border-white rounded-full p-1"
                    whileHover={{ rotate: 45 }}
                >
                    <FiArrowRight className="h-5 w-5" />
                </motion.span>
            </motion.div>
        </>
    );
};

export default Gallary;