interface ProdCard {
	image: string;
	title: string;
	description: string;
	price: number;
}

function Card({ image, title, description, price }: ProdCard) {
	return (
		<div className="card">
			<div className="card-info">
				<img className="card-img" src={image} alt="" />
				<h3 className="card-title">{title}</h3>
				<p className="card-description">{description}</p>
				<p className="card-price">{price}</p>
			</div>
			<div className="card-buttons">
				<button className="card-recommendation">Recommendable</button>
				<button className="card-addtocart">Add to Cart</button>
			</div>
		</div>
	);
}

export { Card };
