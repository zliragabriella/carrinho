/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
	const [productsCart, setProductsCart] = useState([]);

  const addProductToCart = (product) => {
    const productsCartCopy = [...productsCart];

    productsCartCopy.push(product);

    setProductsCart(productsCartCopy);
  };

	return (
		<CartContext.Provider value={{ productsCart, setProductsCart, addProductToCart }}>
			{children}
		</CartContext.Provider>
	);
}