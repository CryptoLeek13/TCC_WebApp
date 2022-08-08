import './App.css';
import Search from './components/Search/Search';
import AgePopUp from './components/PopUps/AgePopUp';
import React from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Authorisation from './components/Authorisation';
import ShopPage from './pages/ShopPage';
import ItemDetails from './components/ItemDetails/ItemDetails';

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
