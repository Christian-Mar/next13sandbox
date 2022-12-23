const ProductDetailPage = ({params}) => {
  // params.id -> id is the place where it can find the params
	return (
		<div className='page'>
			<h1>Product detail: {params.id}</h1>
		</div>
	);
};

export default ProductDetailPage;
