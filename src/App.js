import './App.css';
import Search from './components/Search/Search';
import AgePopUp from './components/PopUps/AgePopUp';
import React from 'react';

function App() {
  const [allow, setAllow] = React.useState(false);
  return (
    <div className="container">
      <img
        src={require('./tempIMG/ccLandscape2-day.png')}
        alt="logo"
        aria-hidden="true"
        className="entry-logo-S"
      />
      <img
        src={require('./tempIMG/ccLandscape1-day.png')}
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
      <Search />
      <button className="entry-button">Enter</button>
    </div>
  );
}

export default App;
