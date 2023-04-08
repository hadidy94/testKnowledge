/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    API_URL: process.env.API_URL
  },
  images: {
    domains: ['www.mcit.gov.sa'],
  },
}

module.exports = nextConfig
