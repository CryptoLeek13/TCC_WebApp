import React from 'react';
import Button from '../Buttons/FilterButton/Button';
import './Filters.css';
import ShopCard from '../ShopCard/ShopCard';
import { Link } from 'react-router-dom';

function Filters() {
  const [range, setRange] = React.useState(250); //from here the api will be filtered by this value and will generate results to home page
  const [isDropdownToggle, setIsDropdownToggle] = React.useState(true);

  const dropdown = React.useRef(null);
  const svg = React.useRef(null);

  const toggleDropdown = () => {
    setIsDropdownToggle((prev) => !prev);
    if (isDropdownToggle) {
      dropdown.current.style.transform = 'translateY(0)';
      dropdown.current.style.opacity = '1';
      svg.current.style.transform = 'rotate(180deg)';
    } else {
      dropdown.current.style.transform = 'translateY(-70px)';
      dropdown.current.style.opacity = '0';
      svg.current.style.transform = 'rotate(0deg)';
    }
  };

  return (
    <section className="filters-and-data">
      <section className="filters">
        <div className="on-click-filters">
          <Button title="Open Now" />
          <Button title="Delivery" />
        </div>
        <div className="dropdown-filter">
          <button className="distance-button" onClick={toggleDropdown}>
            Distance
            <svg
              xmlns="http://www.w3.org/2000/svg"
              ref={svg}
              viewBox="0 0 448 512"
            >
              <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
            </svg>
          </button>
          <section className="distance-dropdown" ref={dropdown}>
            <input
              type="range"
              min="10"
              max="250"
              value={range}
              onChange={(e) => setRange(e.target.value)}
            ></input>
            <p className="range-label">Distance {range} miles</p>
          </section>
        </div>
      </section>

      <section className="data">
        {/* here I will map throught the API and if filter exists result will be filterd by the filter */}
        <ShopCard
          id={1}
          img="shopImgBlackBorder.png"
          name="Planet 13"
          location="Woodland Hills, CA, 1.2 Miles Away"
          assignment="Medical, Recreation"
          info="Open 24/7"
          delivery="Delivery and Pickup Available"
        />
        <ShopCard
          id={2}
          img="shopImgBlackBorder.png"
          name="Planet 13"
          location="Woodland Hills, CA, 1.2 Miles Away"
          assignment="Medical, Recreation"
          isOrder="Order Online"
          info="Open 24/7"
          delivery="Delivery and Pickup Available"
        />
        <ShopCard
          id={3}
          img="shopImgBlackBorder.png"
          name="Planet 13"
          location="Woodland Hills, CA, 1.2 Miles Away"
          assignment="Medical, Recreation"
          info="Open 24/7"
          delivery="Delivery and Pickup Available"
        />
      </section>
    </section>
  );
}

export default Filters;
