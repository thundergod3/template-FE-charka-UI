import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import store from "stores/configureStore";
import { Provider } from "react-redux";

import history from "utils/history";
import theme from "themes";

import App from "./App";

import "./index.scss";

ReactDOM.render(
	<>
		<Provider store={store}>
			<Router history={history}>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
			</Router>
		</Provider>
	</>,
	document.getElementById("root")
);
