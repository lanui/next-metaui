/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: true,
  experimental: {
    esmExternals: false
  }
}

module.exports = nextConfig
