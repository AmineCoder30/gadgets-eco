import React from "react";
import {
  Home,
  About,
  Blogs,
  Contact,
  Products,
  Cart,
  ProductDetails,
} from "./pages";
import { Header, Footer } from "./components/layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="pt-20">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/product-details/:name" element={<ProductDetails />} />
          <Route path="/contact us" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
