import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BackButton.css';

function BackButton() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button className="back-button" onClick={goBack}>
      Back
    </button>
  );
}

export default BackButton;
