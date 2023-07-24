/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { themes } from "../../themes";
import Button from "../Button";
import "./styles.css";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product, isCart }) => {
	const { price, imgUrl, name } = product;
	const { addProductToCart } = useContext(CartContext);

	return (
		<div className="product-card-container">
			<img src={imgUrl} alt="" className="product-card-image" />
			<div className="product-card-name">{name}</div>
			<div className="product-card-price">
				R$ {price.toString().replace(".", ",")}
			</div>
			{!isCart && (
				<Button
					backgroundColor={themes.colors.blue}
					onClick={() => addProductToCart(product)}
				>
					Adicionar
				</Button>
			)}
		</div>
	);
};

export default ProductCard;
