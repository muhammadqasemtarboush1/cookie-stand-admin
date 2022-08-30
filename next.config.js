/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    customKey: 'https://cookie-api-1.herokuapp.com',
  },
}


module.exports = nextConfig
