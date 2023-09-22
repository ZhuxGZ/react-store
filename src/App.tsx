import './App.css';
import { Navbar } from './components/Navbar';
import { Logo } from './components/Logo';
import { CardContainer } from './components/CardContainer';
import { Button } from './components/Button';
import { useState, useEffect } from 'react';
import { CircleView } from './components/CircleView';
import { Product } from './types/APIResponse';

function App() {
	const [products, setProducts] = useState<Product[]>();
	const [isCircle, setIsCircle] = useState(false);
	const [inRow, setInRow] = useState(false);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((data: Product[]) => setProducts(data));
	}, []);

	return (
		<>
			<header>
				<Logo height="50px" />
				<Navbar />
			</header>
			<main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<div
					className="buttons-wrapper"
					style={{
						display: 'flex',
						width: '100%',
						justifyContent: 'center',
						gap: '1em',
						margin: '1em',
					}}
				>
					<Button
						handleClick={() => {
							setIsCircle(!isCircle);
							setInRow(false);
						}}
					>
						Circle
					</Button>
					{!isCircle && <Button handleClick={() => setInRow(!inRow)}>Card/Table</Button>}
				</div>
				{!isCircle ? (
					<CardContainer inRow={inRow} products={products} />
				) : (
					<CircleView products={products} />
				)}
			</main>
			<footer></footer>
		</>
	);
}

export { App };
