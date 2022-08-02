import React from 'react';
import { Link } from 'react-router-dom';
import './BackButton.css';

function BackButton() {
  return (
    <Link to="/home">
      <button className="back-button">Back</button>
    </Link>
  );
}

export default BackButton;
