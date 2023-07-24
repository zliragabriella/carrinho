/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
	const [searchValue, setSearchValue] = useState("");
	const [searchProductsList, setSearchProductsList] = useState([]);

	const searchProducts = async (searchQuery) => {
		const searchQueryFormatted = searchQuery.toLowerCase();

		const response = await axios.get(
			`http://localhost:3000/products?q=${searchQueryFormatted}`
		);

		setSearchProductsList(response.data);
	};

	return (
		<SearchContext.Provider
			value={{ searchValue, setSearchValue, searchProducts, searchProductsList }}
		>
			{children}
		</SearchContext.Provider>
	);
}
