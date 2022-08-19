import React from 'react';
import AgePopUp from './PopUps/AgePopUp';
import Search from './Search/Search';
import { useNavigate } from 'react-router-dom';

function Authorisation() {
  const [allow, setAllow] = React.useState(false);
  const [location, setLocation] = React.useState('');
  const [activate, setActivate] = React.useState(false);

  const navigate = useNavigate();

  const local = localStorage.getItem('location');
  const age = localStorage.getItem('age');

  React.useEffect(() => {
    if (activate) {
      localStorage.setItem('location', location);
      navigate('/home', { state: location });
    }
  }, [activate, location, navigate]);

  const saveAge = () => {
    localStorage.setItem('age', allow);
  };

  React.useEffect(() => {
    if (local != null && age) {
      navigate('/home', { state: local });
    }
  });
  return (
    <div className="container">
      <img
        src={require('../tempIMG/kronikLogo.png')}
        alt="logo"
        aria-hidden="true"
        className="entry-logo"
      />
      {!age && (
        <AgePopUp
          handleAllow={() => {
            setAllow(true);
            saveAge();
          }}
          handleDeny={() => {
            setAllow(false);
            saveAge();
          }}
        />
      )}
      <Search
        placeholder="Enter Location"
        location={location}
        handleLocation={setLocation}
      />
      <button
        className="entry-button"
        onClick={() => setActivate((prev) => !prev)}
      >
        Enter
      </button>
    </div>
  );
}

export default Authorisation;
