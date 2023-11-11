import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Import all of Bootstrap's css

import "bootstrap/dist/css/bootstrap.min.css";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import { Cv } from "./components/cv";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <h1>error</h1> },

  {
    path: "/cv",
    element: <Cv />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
