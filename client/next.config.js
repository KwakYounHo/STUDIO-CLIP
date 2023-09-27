/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: process.env.FIREBASE_STORAGE_URL
      }
    ]
  }
}

module.exports = nextConfig
