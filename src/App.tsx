import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import ProductItemPage from './components/ProductItemPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/catalog" element={<ProductsPage />} />
        <Route path='/catalog/:id' element={<ProductItemPage />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
