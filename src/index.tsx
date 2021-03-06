import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));
