'use client';

import useSWR from 'swr';

/* async function getProducts() {
	//getStaticProps - for serverSideProps add { cache: "no-store"}
	
  const res = await fetch(
		'https://product-app-101-server.vercel.app/api/products',
		{ cache: 'no-store' }
	);
	return res.json();
}
  */

const fetcher = (path) => fetch(`https://product-app-101-server.vercel.app/${path}`).then(res => res.json());

const BlogList = () => {
	const blogs = useSWR('api/products', fetcher);

	return (
		<div>
			{blogs.data?.map(blog => (
				<div key={blog.name}>{blog.name}</div>
			))}
		</div>
	);
};

export default BlogList;
