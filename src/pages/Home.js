import React from 'react';
import { useDispatch } from 'react-redux';
import Filters from '../components/Filters/Filters';
import Navbar from '../components/Navbar/Navbar';
import './pages.css';

function Home() {
  const local = localStorage.getItem('location');

  const dispatch = useDispatch();
  dispatch({ type: 'SET_LOC', payload: local });

  // dispatch false
  return (
    <section className="main-page">
      <Navbar backBtn={false} />
      <Filters />
    </section>
  );
}

export default Home;
