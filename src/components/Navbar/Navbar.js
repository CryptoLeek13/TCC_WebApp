import React from 'react';
import { useSelector } from 'react-redux';
import SearchFancy from '../Search/SearchFancy';
import { useDispatch } from 'react-redux';
import BackButton from '../Buttons/BackButton/BackButton';
import { Link } from 'react-router-dom';

function Navbar({ backBtn }) {
  const local = localStorage.getItem('location');
  const dispatch = useDispatch();
  dispatch({ type: 'SET_LOC', payload: local });
  const location = useSelector((state) => state.location);
  return (
    <div className="navbar">
      <div className="wrapper">
        <Link to="/home">
          <img src={require('../../tempIMG/kLogo.png')} alt="logo" />
        </Link>
        {backBtn ? <BackButton /> : null}
        <SearchFancy placeholder={location} />
      </div>
      <img src={require('../../tempIMG/user.png')} alt="user" />
    </div>
  );
}

export default Navbar;
