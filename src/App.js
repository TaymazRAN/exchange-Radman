import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import PanelAdmin from "./pages/panelAdmin/PanelAdmin";
import Login from "./pages/landing/account/Login";
import { Provider } from "react-redux";
import store from "./app/store";
import Static from "./pages/static/Static";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const theme = createTheme({
	direction: "rtl",
});

const cacheRtl = createCache({
	key: "muirtl",
	stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
	return (
		<CacheProvider value={cacheRtl}>
			<ThemeProvider theme={theme}>
				<div className="App">
					<Provider store={store}>
						<Router>
							<Routes>
								<Route path="/" element={<Landing />} />
								<Route path="/static/*" element={<Static />} />
								<Route path="/login/*" element={<Login />} />
								<Route path="/admin/*" element={<PanelAdmin />} />
							</Routes>
						</Router>
					</Provider>
				</div>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default App;
