import React from 'react';
import ProductCard from './components/ProductCard';
import CartPage from './components/cartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
