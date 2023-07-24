/* eslint-disable react/prop-types */
import { themes } from "../../themes";
import Button from "../Button";
import Search from "../Search";
import "./styles.css";

const Header = ({ setToggleShowCart, setCategory }) => {
	const handleOpenCart = () => {
		setToggleShowCart(true);
	};

	return (
		<header className="header-container">
			<h1 className="header-logo">Loja Virtual</h1>
			<div className="header-nav-items-and-cart">
				<nav className="header-nav-items">
					<div className="header-nav-item" onClick={() => setCategory('')}>Todos os produtos</div>
					<div className="header-nav-item" onClick={() => setCategory('F')}>Feminino</div>
					<div className="header-nav-item" onClick={() => setCategory('I')}>Infantil</div>
					<div className="header-nav-item" onClick={() => setCategory('M')}> Masculino</div>
				</nav>
				<Button backgroundColor={themes.colors.blue} onClick={handleOpenCart}>
					Carrinho
				</Button>
			</div>
			<div className="header-search-wrapper">
				<Search />
			</div>
		</header>
	);
};

export default Header;
