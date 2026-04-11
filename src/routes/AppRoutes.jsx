import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Hero from '../components/home/Hero.jsx';
import EditorsPick from '../components/home/EditorsPick.jsx';
import BestsellerProducts from '../components/home/BestsellerProducts.jsx';
import GreenBanner from '../components/home/GreenBanner.jsx';
import CoupleBanner from '../components/home/CoupleBanner.jsx';

import ShopPage from '../pages/ShopPage.jsx';
import ProductDetailPage from '../pages/ProductDetailPage.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div className="flex flex-col">
          <Hero />
          <EditorsPick />
          <BestsellerProducts />
          <GreenBanner />
          <CoupleBanner />
        </div>
      </Route>
      <Route path="/shop">
        <ShopPage />
      </Route>
      <Route path="/product/:id">
        <ProductDetailPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};
export default AppRoutes;