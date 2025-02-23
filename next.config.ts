import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude 'webworker-threads' from client-side bundles
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'webworker-threads': false,
      };
    }
    return config;
  },
};

export default nextConfig;