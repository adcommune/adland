const { constants } = require('@adland/common')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: constants.pinataPublicGateway,
        pathname: '/ipfs/**',
      },
    ],
  },
}

module.exports = nextConfig
