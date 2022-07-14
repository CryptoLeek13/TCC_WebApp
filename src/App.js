import './App.css';
import Search from './components/Search/Search';
import AgePopUp from './components/PopUps/AgePopUp';
import React from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Authorisation from './components/Authorisation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authorisation />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
