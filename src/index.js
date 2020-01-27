import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Containers/Home";
import * as serviceWorker from "./serviceWorker";
import { StyleRoot } from "radium";
ReactDOM.render(
  <StyleRoot>
    <Home />
  </StyleRoot>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
