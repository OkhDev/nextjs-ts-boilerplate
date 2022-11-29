/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
