import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ComponentPage from './pages/components';
import LandingPage from './pages/landing';
import CartPage from './pages/cartPage';
import ProductPage from './pages/product';
import HomePage from './pages/home';
import ProductListPage from './pages/productList';
import CheckoutPage from './pages/checkout';
import CheckoutReviewPage from './pages/checkoutReview';
import OrderSummaryPage from './pages/orderSummary';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import CheckOrderPage from './pages/checkOrder';
import OrderTrackingPage from './pages/orderTracking';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/product-list' element={<ProductListPage />} />
        <Route path='/product/:productId' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/components' element={<ComponentPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/checkout-review' element={<CheckoutReviewPage />} />
        <Route path='/order-summary' element={<OrderSummaryPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/check-order' element={<CheckOrderPage />} />
        <Route path='/order-tracking' element={<OrderTrackingPage/>} />
        <Route path='*' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
