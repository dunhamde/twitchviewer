import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, middle } from "redux";
import thunk from "redux-thunk";

import TVHeader from "./components/tv_header";
import NavHeader from "./components/nav_header";
import Popular from "./components/popular";
import Games from "./components/games";
import Recent from "./components/recent";
import MainStream from "./components/main_stream";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<TVHeader />
				{/* <NavHeader /> */}
				<div className="maincontent">
					<Switch>
						<Route path="/popular" component={Popular} />
						<Route path="/games" component={Games} />
						<Route path="/recent" component={Recent} />
					</Switch>
				</div>
				{/* <MainStream /> */}
			</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector(".container")
);
