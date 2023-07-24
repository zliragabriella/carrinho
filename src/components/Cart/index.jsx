/* eslint-disable react/prop-types */
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

import { themes } from "../../themes";
import ProductCard from "../ProductCard";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = ({ setToggleShowCart }) => {
	const { productsCart } = useContext(CartContext);

	const closeCart = () => {
		setToggleShowCart(false);
	};

	return (
		<div className="cart-overlay">
			<div className="cart-container">
				<div className="cart-header">
					<div className="cart-header-title">Carrinho de Compras</div>
					<button className="cart-close-button" onClick={closeCart}>
						<AiOutlineClose color={themes.colors.mediumGray} />
					</button>
				</div>
				<div className="cart-products-container">
					{productsCart?.map((product) => (
						<ProductCard isCart={true} product={product} key={product.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Cart;
