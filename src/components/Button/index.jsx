/* eslint-disable react/prop-types */
import "./styles.css";

const Button = ({ onClick, children, backgroundColor }) => {
	return (
		<button className="button" onClick={onClick} style={{ backgroundColor: backgroundColor }}>
			{children}
		</button>
	);
};

export default Button;
