import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.0.244',
        port: '8000',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'plusing.vanguard-store.ir',
        port: '',
        pathname: '/storage/1/conversions/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
