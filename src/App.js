import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Domestic from "./components/Domestic";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Not from "./components/Not";
import Navbar from "./components/Navbar";
import International from "./components/International";
import Reviews from "./components/Reviews";
import Package from "./components/Package";
import EditReview from "./components/EditReview";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/packages" element={<Package />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/edit/:id" element={<EditReview />} />
        <Route path="*" element={<Not />} />
      </Routes>
    </Router>
  );
}

export default App;
