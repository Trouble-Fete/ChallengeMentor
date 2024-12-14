import "./App.css";
import "./components/Card";
import CardComponent from "./components/Card";
import MyTitle from "./components/MyTitle";
import "./components/Cards.css";

function App() {
	// const [dessertIndex, setDessertIndex] = useState(0);
	return (
		<div className="main">
			<MyTitle />
			<CardComponent />
		</div>
	);
}

export default App;
