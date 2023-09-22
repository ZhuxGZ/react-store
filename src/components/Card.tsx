import { Button } from './Button';

interface CardProps {
	image: string;
	title: string;
	description: string;
	price: number;
	inRow?: boolean;
}

function Card({ image, title, description, price, inRow }: CardProps) {
	return (
		<div className={`card ${inRow ? 'card-cols' : ''}`}>
			<img className="card-img" src={image} alt="" />
			<h3 className="card-title">{title}</h3>
			<p className="card-description">{description}</p>
			<p className="card-price">{price}</p>

			{!inRow && (
				<div className="card-buttons">
					<Button color="secondary">Recommendable</Button>
					<Button color="success">Add to Cart</Button>
				</div>
			)}
		</div>
	);
}

export { Card };
