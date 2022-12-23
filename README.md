#Next.js 13

## Start

Remove pages
Create app folder

configure next.config.js: 

const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig

-> new npm run dev -> you can use the app folder!

