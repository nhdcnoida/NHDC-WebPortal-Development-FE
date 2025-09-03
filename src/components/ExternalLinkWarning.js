'use client';

import { useEffect } from 'react';

export default function ExternalLinkWarning() {
  useEffect(() => {
    const handleClick = (e) => {
      // Only handle left-clicks without modifier keys
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const anchor = e.target.closest('a');
      if (!anchor || !anchor.href) return;

      try {
        const allowedDomains = [
          'nhdc.org.in',
          'storage.nhdc.org.in',
          'localhost',
          'facebook.com',
          'www.facebook.com',
          'twitter.com',
          'www.twitter.com',
          'x.com',           // X (formerly Twitter)
          'www.x.com',
          'instagram.com',
          'www.instagram.com',
          'youtube.com',
          'www.youtube.com',
          'linkedin.com',
          'www.linkedin.com',
          'outlook.office.com',
          'online.pubhtml5.com',
          'textilescommittee.nic.in',
          'cotcorp.org.in',
          'nift.ac.in',
          'hepcindia.com',
          'indiahandloombrand.gov.in',
          'handlooms.nic.in',
          'texmin.nic.in',
          window.location.hostname
        ];

        const url = new URL(anchor.href);
        const currentUrl = new URL(window.location.href);

        // Skip if same origin
        if (url.origin === currentUrl.origin) return;

        // Check if the link is to an allowed domain
        const isExternal = !allowedDomains.some(domain =>
          url.hostname === domain ||
          url.hostname.endsWith(`.${domain}`)
        );

        if (isExternal && (anchor.target === '_blank' || anchor.rel?.includes('noopener'))) {
          e.preventDefault();
          const confirmed = window.confirm(
            '⚠️ Disclaimer:\n\nYou are being redirected to an external website.\n\nNHDC is not responsible for the content or reliability of linked external websites. Do you want to proceed?'
          );
          if (confirmed) {
            window.open(anchor.href, '_blank', 'noopener,noreferrer');
          }
        }
      } catch (err) {
        console.error('Error checking URL:', err);
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return null;
}