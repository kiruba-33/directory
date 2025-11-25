// src/App.jsx
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./compoent/Navbar"; // UPDATED PATH
import { Home, About, Offers, Jobs, Store, Contact } from "./router";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<p className="text-center p-6">Loading...</p>}>
        <Routes>
  <Route path="/" element={<Home />} /> {/* No padding */}
  
  {/* Other pages need spacing below navbar */}
  <Route
    path="/about"
    element={<div className="pt-[80px]"><About /></div>}
  />

  <Route path="/category/:id" element={<div className="pt-[80px]"><CategoryPage /></div>} />
  <Route
    path="/offers"
    element={<div className="pt-[80px]"><Offers /></div>}
  />
  <Route
    path="/jobs"
    element={<div className="pt-[80px]"><Jobs /></div>}
  />
  <Route
    path="/store"
    element={<div className="pt-[80px]"><Store/></div>}
  />
  <Route
    path="/contact"
    element={<div className="pt-[80px]"><Contact /></div>}
  />
</Routes>
      </Suspense>
    </BrowserRouter>
  );
}
