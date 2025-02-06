import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./layout/nav";
import About from "./page/about";
import Download from "./page/download";
import Order from "./page/order";
import VIP from "./page/vip";
import Career from "./page/career";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<VIP/>} />
          <Route path="/about" element={<About />} />
          <Route path="/download" element={<Download />} />
          <Route path="/order" element={<Order />} />
          <Route path="/vip" element={<VIP />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
