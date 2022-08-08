import React from 'react';
import { useSelector } from 'react-redux';
import SearchFancy from '../Search/SearchFancy';
import { useDispatch } from 'react-redux';
import BackButton from '../Buttons/BackButton/BackButton';

function Navbar({ backBtn }) {
  const local = localStorage.getItem('location');
  const dispatch = useDispatch();
  dispatch({ type: 'SET_LOC', payload: local });
  const location = useSelector((state) => state.location);
  return (
    <div className="navbar">
      <div className="wrapper">
        <img src={require('../../tempIMG/logo.png')} alt="logo" />
        {backBtn ? <BackButton /> : null}
        <SearchFancy placeholder={location} />
      </div>
      <img src={require('../../tempIMG/user.png')} alt="user" />
    </div>
  );
}

export default Navbar;
