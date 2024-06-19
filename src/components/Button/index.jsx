import PropTypes from 'prop-types';

const Button = ({ variant, bgColor, children, onClick }) => {
	const styleVariants = {
		outlined: 'border border-solid border-blue-500 text-blue-500 rounded-md px-3 leading-9',
		filled: 'text-white rounded-md px-3 leading-9',
	};

	const colorVariants = {
		white: 'bg-white',
		red: 'bg-red-500',
		blue: 'bg-blue-500',
	};

	return (
		<button className={`${styleVariants[variant]} ${colorVariants[bgColor]}`} onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	variant: PropTypes.string,
	bgColor: PropTypes.string,
};

export default Button;
