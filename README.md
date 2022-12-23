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

## First page

page.jsx

const Page = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}

export default Page

head.js and layout.js will be created automatically -> change to jsx

in layout.jsx import globals.css

### Creation of component -> Navbar

Folder: shared 

## New pages

Create folders under app with the name of the page but instead of index.js the pages will be page.jsx


