import Data from "../../data.json";
import "./CardOrder.css";

interface Order {
	name: string;
	price: number;
}

const CardOrder = () => {
	return (
		<div className="moduleOrder">
			<h2>Your Cart</h2>
			<p> </p>
			<div className="delivery">
				<img src="src/assets/icon-carbon-neutral.svg" alt="carbon-neutral" />
				<p>This is a carbon-neutral delivery</p>
			</div>
			<button type="button"> Confirm Order</button>
		</div>
	);
};

export default CardOrder;
