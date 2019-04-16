import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import {Provider} from "react-redux";
import store from "./Store";

ReactDOM.render(
    // redux provider
    <Provider store={store}>
        <App />
    </Provider>,
    //bootstrap via the element with id "root
    document.getElementById("root"));
