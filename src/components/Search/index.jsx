import { useContext } from "react";
import { themes } from "../../themes";
import Button from "../Button";
import "./styles.css";
import { SearchContext } from "../../context/SearchContext";

const Search = () => {
	const { searchValue, setSearchValue, searchProducts } = useContext(SearchContext);

	return (
		<div className="search-container">
			<input
				className="search-input"
				type="text"
				name="search-input"
				id="search-input"
				placeholder="Insira aqui sua busca"
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			<Button backgroundColor={themes.colors.darkGreen} onClick={() => searchProducts(searchValue)}>Pesquisar</Button>
		</div>
	);
};

export default Search;
