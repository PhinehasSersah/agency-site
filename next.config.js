/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['a.storyblok.com'],
  },
}

module.exports = nextConfig
