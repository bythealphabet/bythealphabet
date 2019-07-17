import React from "react";
import ReactDOM from "react-dom";

// bulma import for css styling
import "./index.css";
import "bulma/css/bulma.css";

//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

// redux thunk
import thunk from 'redux-thunk'

import App from "./App";

const store = createStore(reducers, (applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
