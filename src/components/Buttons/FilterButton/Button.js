import React from 'react';
import './Button.css';

function Button(props) {
  //It will receive some props later and all action will happen here depends on its assignment. For now it is only for visual purpose
  // console.log(props);
  return (
    <button
      className="filter-button"
      // onClick={() => props.handleNavigate(props.details)}
    >
      {props.title}
    </button>
  );
}

export default Button;
