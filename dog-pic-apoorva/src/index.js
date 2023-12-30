// my starter code for index.js, importing App.js
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.querySelector("#root"));
//---------------------------------------------------
import { createRoot } from "react-dom/client";

import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
