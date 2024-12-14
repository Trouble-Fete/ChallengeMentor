import "./App.css";
import "./components/Card";
import CardComponent from "./components/Card";
import MyTitle from "./components/MyTitle";
import "./components/Cards.css";
import CardOrder from "./components/CardOrder";

function App() {
	// const [dessertIndex, setDessertIndex] = useState(0);
	return (
		<div className="main">
			<MyTitle />
			<section>
				<div className="page">
					<div className="left-section">
						<CardComponent />
					</div>
					<div className="rignt-section">
						<CardOrder />
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
