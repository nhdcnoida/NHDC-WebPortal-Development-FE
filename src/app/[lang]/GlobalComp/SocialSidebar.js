// components/SocialSidebar.js

'use client';

import React, { useState, useEffect, useRef } from 'react'; // Import useRef
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/components/useIsMobile';
import Image from 'next/image';

// The SocialIcon component remains unchanged.
const SocialIcon = ({ name, imageUrl, href, isMobile, isActive, onIconClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isExpanded = !isMobile && isHovered || isMobile && isActive;
    const textVariants = {
        hidden: { opacity: 0, x: 20, transition: { duration: 0.2, ease: 'easeOut' } },
        visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeIn' } },
    };
    const handleMobileClick = (e) => {
        if (!isActive) {
            e.preventDefault();
            onIconClick(name);
        }
    };
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-l-full pr-2 bg-[#F7D7D8] p-1 shadow-md"
            onHoverStart={() => !isMobile && setIsHovered(true)}
            onHoverEnd={() => !isMobile && setIsHovered(false)}
            onClick={isMobile ? handleMobileClick : undefined}
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
            <motion.div
                className="p-2 rounded-full flex items-center justify-center transition-colors duration-300"
                layout
            >
                <Image height={1000} width={1000} src={imageUrl} alt={`${name} Logo`} className="w-8" />
            </motion.div>
            <AnimatePresence>
                {isExpanded && (
                    <motion.span
                        className="text-gray-800 font-semibold whitespace-nowrap pl-3 pr-4"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {name}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.a>
    );
};


// Main Parent Component: Renders the entire sidebar
export default function SocialSidebar({ AppSettings }) {
    const isMobile = useIsMobile();
    const [activeIcon, setActiveIcon] = useState(null);
    const sidebarRef = useRef(null); // ✨ NEW: Create a ref for the sidebar container

    // This useEffect for handling tab visibility remains the same.
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                setActiveIcon(null);
            }
        };
        if (isMobile) {
            document.addEventListener('visibilitychange', handleVisibilityChange);
        }
        return () => {
            if (isMobile) {
                document.removeEventListener('visibilitychange', handleVisibilityChange);
            }
        };
    }, [isMobile]);

    // ✨ NEW: Add this useEffect to handle clicks outside the sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the click is outside the sidebar element and we are on mobile
            if (isMobile && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setActiveIcon(null); // Collapse the sidebar
            }
        };

        // Add the event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobile]); // The effect depends on the isMobile value

    const settings = AppSettings?.data?.[0] || AppSettings;
    const socialLinks = [
        { name: 'Twitter', imageUrl: 'https://storage.nhdc.org.in/nhdc/public/AppSettings/Socialicons/sidebaar/twitter (3).png', href: settings?.socialMedia?.find(l => l.platform.includes("Twitter"))?.url || "" },
        { name: 'YouTube', imageUrl: 'https://storage.nhdc.org.in/nhdc/public/AppSettings/Socialicons/sidebaar/youtube (1).png', href: settings?.socialMedia?.find(l => l.platform.includes("youtube"))?.url || "" },
        { name: 'Instagram', imageUrl: 'https://storage.nhdc.org.in/nhdc/public/AppSettings/Socialicons/sidebaar/social (1).png', href: settings?.socialMedia?.find(l => l.platform.includes("Instagram"))?.url || "" },
        { name: 'Facebook', imageUrl: 'https://storage.nhdc.org.in/nhdc/public/AppSettings/Socialicons/sidebaar/facebook (3).png', href: settings?.socialMedia?.find(l => l.platform.includes("Facebook"))?.url || "" },
        { name: 'LinkedIn', imageUrl: 'https://storage.nhdc.org.in/nhdc/public/AppSettings/Socialicons/sidebaar/linkedin (1).png', href: settings?.socialMedia?.find(l => l.platform.includes("linkedin"))?.url || "" },
    ];

    return (
        // ✨ NEW: Attach the ref to the main container div
        <div ref={sidebarRef} className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
            <div className="flex flex-col items-end space-y-3">
                {socialLinks.map((link) => (
                    link.href ? (
                        <SocialIcon
                            key={link.name}
                            {...link}
                            isMobile={isMobile}
                            isActive={activeIcon === link.name}
                            onIconClick={setActiveIcon}
                        />
                    ) : null
                ))}
            </div>
        </div>
    );
};