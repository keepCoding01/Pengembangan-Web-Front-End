import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CatalogExtra from "./CatalogExtra";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container py-3">
      <h2 className="pb-2 mb-4 border-bottom">Our Books</h2>
      <div className="row">
        <CatalogExtra />
      </div>
    </div>
  </React.StrictMode>
);
reportWebVitals();
