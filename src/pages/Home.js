import React from 'react';
import Menu from '../components/Menu/Menu';
import SearchFancy from '../components/Search/SearchFancy';
import './pages.css';

function Home() {
  return (
    <section className="main-page">
      <div className="navbar">
        <div className="wrapper">
          <img src={require('../tempIMG/logo.png')} />
          <SearchFancy placeholder="Calabasas, CA" />
        </div>
        <img src={require('../tempIMG/user.png')} />
      </div>
    </section>
  );
}

export default Home;
