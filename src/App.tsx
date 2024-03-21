import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ComponentPage from './pages/components';
import LandingPage from './pages/landing';
import CartPage from './pages/cart';
import ProductPage from './pages/product';
import HomePage from './pages/home';
import ProductListPage from './pages/productList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/product-list' element={<ProductListPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/components' element={<ComponentPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='*' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
