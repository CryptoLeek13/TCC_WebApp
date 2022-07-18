import React from 'react';
import Filters from '../components/Filters/Filters';
import SearchFancy from '../components/Search/SearchFancy';
import './pages.css';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  return (
    <section className="main-page">
      <div className="navbar">
        <div className="wrapper">
          <img src={require('../tempIMG/logo.png')} alt="logo" />
          <SearchFancy
            placeholder={location != null ? location.state : 'Location'}
          />
        </div>
        <img src={require('../tempIMG/user.png')} alt="user" />
      </div>
      <Filters />
    </section>
  );
}

export default Home;
