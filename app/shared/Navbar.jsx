import Link from "next/link"

const links = [
	{ name: 'Home', path: '/' },
	{ name: 'Blogs', path: '/blogs' },
	{ name: 'Products', path: '/products' },
];

const Navigation = () => {
  return (
    <div>
      {
       links.map(link => <Link key={link.name} href={link.path}>{link.name}{` `}</Link>)   
      }
    </div>
  )
}

export default Navigation