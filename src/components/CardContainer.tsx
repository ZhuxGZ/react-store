import { Card } from './Card';
import { Product } from '../types/APIResponse';

interface CardContainerProps {
	inRow?: boolean;
	products: Product[];
}

function CardContainer({ inRow, products }: CardContainerProps) {
	return (
		<section className={`card-container ${inRow ? 'card-container-rows' : ''}`}>
			{products &&
				products.map((product) => {
					return (
						<Card
							inRow={inRow}
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
