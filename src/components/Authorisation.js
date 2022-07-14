import React from 'react';
import AgePopUp from './PopUps/AgePopUp';
import Search from './Search/Search';
import { Link } from 'react-router-dom';

function Authorisation() {
  const [allow, setAllow] = React.useState(false);
  return (
    <div className="container">
      <img
        src={require('../tempIMG/ccLandscape2-day.png')}
        alt="logo"
        aria-hidden="true"
        className="entry-logo-S"
      />
      <img
        src={require('../tempIMG/ccLandscape1-day.png')}
        alt="logo"
        aria-hidden="true"
        className="entry-logo-X"
      />
      {!allow && (
        <AgePopUp
          handleAllow={() => setAllow(true)}
          handleDeny={() => setAllow(false)}
        />
      )}
      <Search placeholder="Enter Location" />
      <Link to="/home">
        <button className="entry-button">Enter</button>
      </Link>
    </div>
  );
}

export default Authorisation;
