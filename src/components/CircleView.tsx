import { Product } from '../types/APIResponse';
import { Card } from './Card';

interface CircleView {
	products: Product[];
}

function CircleView({ products }: CircleView) {
	return (
		<div className="card-container">
			{products &&
				products.map((product) => {
					return (
						<div className="circle" key={product.id}>
							<Card
								image={product.image}
								title={product.title}
								description={product.description}
								price={product.price}
							/>
						</div>
					);
				})}
		</div>
	);
}
export { CircleView };
