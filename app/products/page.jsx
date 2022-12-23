import { use } from 'react';
// https://blixtdev.com/all-about-reacts-new-use-hook/
// https://vived.io/new-hook-is-coming-to-react-frontend-weekly-vol-109/

async function getProducts() {

  //getStaticProps
  const res = await fetch("https://product-app-101-server.vercel.app/api/products");
  return res.json();
}

const ProductsPage = () => {
  const products = use(getProducts());

  return (
    <div className="page">
      <h1>Here're the products</h1>
      <div>{ products.map(product =>
        <div key={product.name}>{product.name}</div>
        )}</div>
    </div>
  )
}

export default ProductsPage;
