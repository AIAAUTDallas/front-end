/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config, {isServer}) => {
    // Only apply this configuration on the server side
    if (isServer) {
      config.module.rules.push({
        test: /\.node$/, // Match any file with .node extension
        loader: 'node-loader', // Use node-loader to handle this file type
      });
    }
    return config;
  },
};

module.exports = nextConfig;
