/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: "tsconfig.json"
  },
  eslint: {
    ignoreDuringBuilds: true,
    ignoreDevelopmentErrors: true,
    ignoreUpstreamErrors: true
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
  experimental: {
    optimizePackageImports: ['@mui/icons-material', '@mui/material']
  },
  turbopack: {
    loaders: {
      '.js': 'jsx',
      '.ts': 'tsx'
    }
  },
  poweredByHeader: false,
  reactStrictMode: false,
  swcMinify: false
};

module.exports = nextConfig;