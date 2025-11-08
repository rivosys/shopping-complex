/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ],
    unoptimized: true
  },
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['@mui/icons-material', '@mui/material']
  }
};

module.exports = nextConfig;