import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Card from "./components/patterns/Card";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Test App</h1>
      <p>Render please</p>
      <Card></Card>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
