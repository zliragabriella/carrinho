/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import "./globalStyles.css";
import Cart from "./components/Cart";
import Products from "./components/Products";
import axios from "axios";
import { SearchContext } from "./context/SearchContext";

function App() {
	const [toggleShowCart, setToggleShowCart] = useState(false);
	const [category, setCategory] = useState("");
	const [products, setProducts] = useState([]);
	const { searchProductsList } = useContext(SearchContext);

	const getAllProducts = () => axios.get(`http://localhost:3000/products`);

	const getProductsByCategory = (category) =>
		axios.get(`http://localhost:3000/products?category=${category}`);

	useEffect(() => {
		if (category) {
			getProductsByCategory(category)
			.then((response) =>
				setProducts(response.data)
			);
		} else {
			getAllProducts()
			.then((response) => setProducts(response.data));
		}
	}, [category]);

	useEffect(() => {
		if (searchProductsList.length > 0) setProducts(searchProductsList);
	}, [searchProductsList]);

	return (
		<>
			<Header setToggleShowCart={setToggleShowCart} setCategory={setCategory} />
			<Products products={products} />
			{toggleShowCart && <Cart setToggleShowCart={setToggleShowCart} />}
		</>
	);
}

export default App;
