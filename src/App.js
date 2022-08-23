import './App.css';
import React from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Authorisation from './components/Authorisation';
import ShopPage from './pages/ShopPage';
import ItemDetails from './pages/ItemDetails/ItemDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authorisation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop:shoppage" element={<ShopPage />} />
        <Route path="/shop:shoppage/:productID" element={<ItemDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
