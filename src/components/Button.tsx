interface ButtonProps {
	color?: 'success' | 'secondary';
	children?: string | number;
	handleClick?: VoidFunction;
}

function Button({ color, children, handleClick }: ButtonProps) {
	return (
		<button onClick={handleClick} className={`button ${color && color}`}>
			{children}
		</button>
	);
}

export { Button };
