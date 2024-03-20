import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import ComponentPage from './pages';
import LandingPage from './pages/landing';
import CartPage from './pages/cart';
import ProductsPage from './pages/products';
import HomePage from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/index" element={<ComponentPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="*" element={<LandingPage />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
