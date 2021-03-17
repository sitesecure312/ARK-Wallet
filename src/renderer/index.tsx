import "./styles.css";

import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";

import './assets/fonts/Inter-Bold-slnt=0.ttf'; 
import './assets/fonts/Inter-ExtraBold-slnt=0.ttf';
import './assets/fonts/Inter-Regular-slnt=0.ttf';
import './assets/fonts/Inter-SemiBold-slnt=0.ttf';

if (module.hot) {
	module.hot.accept();
}

render(<App />, document.querySelector("#app"));
