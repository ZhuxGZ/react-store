import { useEffect, useState } from 'react';
import { Card } from './Card';
import { APIResponse } from '../types/APIResponse';

function CardContainer() {
	const [products, setProducts] = useState<APIResponse>();

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((data: APIResponse) => setProducts(data));
	}, []);
	return (
		<section className="card-container">
			{products &&
				products.map((product: APIResponse) => {
					return (
						<Card
							key={product.id}
							image={product.image}
							title={product.title}
							description={product.description}
							price={product.price}
						/>
					);
				})}
		</section>
	);
}

export { CardContainer };
