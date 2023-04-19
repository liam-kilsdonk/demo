import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Trainer from "./Trainer";
import Items from "./items";
import Stats from "./Stats";

import "./index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Link to="/">Naar APP</Link>
      <Link to="/trainer">Naar trainer</Link>
      <Link to="/items">Naar items</Link>
      <Routes>
        <Route path="/" element={<App naam="url" />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/items:id" component={<Items />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
