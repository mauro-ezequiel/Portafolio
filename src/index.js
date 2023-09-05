import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import all of Bootstrap's css

import "bootstrap/dist/css/bootstrap.min.css";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
