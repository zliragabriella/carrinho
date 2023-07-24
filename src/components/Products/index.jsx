/* eslint-disable no-unused-vars */
import "./styles.css";
import ProductCard from "../ProductCard";

/* eslint-disable react/prop-types */
const Products = ({ products }) => {
	return (
		<div className="products-container">
			{products &&
				products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
		</div>
	);
};

export default Products;
