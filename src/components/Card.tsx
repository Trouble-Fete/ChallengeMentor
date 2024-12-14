import Data from "../../data.json";
import AddToCard from "./AddToCard";

interface Card {
	id: string; // Assurez-vous que vos données incluent un identifiant unique.
	image: { desktop: string };
	name: string;
	category: string;
	price: number;
}

const CardComponent = () => {
	return (
		<div className="alldessert">
			{Data.map((item: Card) => (
				<div className="module" key={item.id}>
					<img className="pic" src={item.image.desktop} alt={item.name} />
					<AddToCard />
					<ul>
						<li>
							<span>{item.name}</span>
						</li>
						<li>{item.category}</li>
						<li className="price">{item.price}€</li>
					</ul>
				</div>
			))}
		</div>
	);
};

export default CardComponent;
