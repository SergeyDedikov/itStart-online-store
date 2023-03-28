import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/cosmetics" element={<h2>Каталог</h2>} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
