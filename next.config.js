/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    NEXT_PUBLIC_OS:'https://assainissement.oyster-technology.com',
    NEXT_PUBLIC_HE:'https://assainissement.oyster-technology.com',
    NEXT_PUBLIC_IT:'https://digital-factory.oyster-technology.com/',
  }
}

module.exports = nextConfig
