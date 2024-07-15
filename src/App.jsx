import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RouteList from "./routes/RouteList";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Provider store={store}>
					<RouteList />
				</Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
