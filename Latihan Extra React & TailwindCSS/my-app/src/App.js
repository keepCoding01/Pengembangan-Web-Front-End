import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./page/Navbar";
import Home from "./page/Home";
import Cart from "./page/Cart";

function App() {
  return (
    <Router>
      <div className="Playwrite+DE+Grund">
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
