/** @type {import('next').NextConfig} */
const nextConfig = {
  // ADDED FOR SAFARI COMPATIBILITY
  transpilePackages: ['framer-motion', 'react-leaflet'],

  // CORRECTED IMAGE PATTERNS
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Only allow HTTPS
        hostname: 'api.nhdc.org.in',
        pathname: '/api/crud/**',
      },
      {
        protocol: 'https', // Only allow HTTPS
        hostname: 'storage.nhdc.org.in',
        pathname: '/nhdc/**',
      },
      // REMOVED insecure http patterns
      // REMOVED raw IP address pattern - you should use a domain name
    ],
  },

  // Your existing configuration below is fine
  allowedDevOrigins: [
    'https://nhdc.org.in',
    'http://nhdc.org.in',
  ],
  async headers() {
    return process.env.NODE_ENV === 'production' ? [
      {
        source: '/(.*)',
        headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: 'https://www.nhdc.org.in, https://nhdc.org.in',
            },
        ],
      },
    ] : [];
  },
};

export default nextConfig;