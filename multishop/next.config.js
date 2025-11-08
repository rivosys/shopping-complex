/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  distDir: '.next',
  output: 'export',
  experimental: {
    appDir: true,
    optimizePackageImports: ['@mui/icons-material', '@mui/material']
  },
  poweredByHeader: false,
  reactStrictMode: false,
  swcMinify: true,
  turbopack: {
    resolveAlias: {
      '@': './src'
    }
  }
};

module.exports = nextConfig;