import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import PanelAdmin from "./pages/panelAdmin/PanelAdmin";
import Login from "./pages/landing/account/Login";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/login/*" element={<Login />} />
						<Route path="/admin/*" element={<PanelAdmin />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
