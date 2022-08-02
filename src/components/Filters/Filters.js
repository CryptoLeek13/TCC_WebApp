import React from 'react';
import Button from '../Buttons/FilterButton/Button';
import './Filters.css';
import ShopCard from '../ShopCard/ShopCard';
import { Link } from 'react-router-dom';

function Filters() {
  const [dropdownSwitch, setDropdownSwitch] = React.useState(false);
  const [distance, setDistance] = React.useState(0); //from here the api will be filtered by this value and will generate results to home page

  const dropdown = {
    //for now I've created temporary animation because I don't know what would you like me to create
    position: 'absolute',
    backgroundColor: ' #F6F6F6dd',
    borderRadius: ' 10px',
    top: '20px',
    overflow: ' hidden',
    height: '30px',
    opacity: '0',
    transitionDuration: '0.1s'
  };
  const active = {
    position: 'absolute',
    backgroundColor: ' #F6F6F6dd',
    borderRadius: ' 10px',
    top: '20px',
    overflow: ' hidden',
    height: 'min-content',
    opacity: '1',
    transitionDuration: '0.1s'
  };
  return (
    <section className="filters-and-data">
      <section className="filters">
        <div className="on-click-filters">
          <Button title="Open Now" />
          <Button title="Delivery" />
        </div>
        <div className="dropdown-filter">
          <div
            className="distance"
            onClick={() => setDropdownSwitch((prev) => !prev)}
          >
            {distance > 0 ? distance : 'Distance'}
            <span className="drop-arrow">
              <img
                src={require('../../tempIMG/dropdown.png')}
                alt="dropdown"
                aria-hidden="true"
              ></img>
            </span>
          </div>
          <ul style={dropdownSwitch ? active : dropdown}>
            <li
              onClick={() => {
                setDistance(10);
                setDropdownSwitch((prev) => !prev);
              }}
            >
              10
            </li>
            <li
              onClick={() => {
                setDistance(25);
                setDropdownSwitch((prev) => !prev);
              }}
            >
              25
            </li>
            <li
              onClick={() => {
                setDistance(50);
                setDropdownSwitch((prev) => !prev);
              }}
            >
              50
            </li>
            <li
              onClick={() => {
                setDistance(100);
                setDropdownSwitch((prev) => !prev);
              }}
            >
              100
            </li>
            <li
              onClick={() => {
                setDistance(200);
                setDropdownSwitch((prev) => !prev);
              }}
            >
              200
            </li>
          </ul>
        </div>
      </section>
      <section className="data">
        {/* here I will map throught the API and if filter exists result will be filterd by the filter */}
        <ShopCard
          id={1}
          img="shopIMg.png"
          name="Planet 13"
          location="Woodland Hills, CA, 1.2 Miles Away"
          assignment="Medical, Recreation"
          isOrder="Order Online"
          info="Open 24/7, Delivery and Pickup Available"
        />
        <ShopCard
          id={2}
          img="shopIMg.png"
          name="Planet 13"
          location="Woodland Hills, CA, 1.2 Miles Away"
          assignment="Medical, Recreation"
          isOrder="Order Online"
          info="Open 24/7, Delivery and Pickup Available"
        />
        <ShopCard
          id={3}
          img="shopIMg.png"
          name="Planet 13"
          location="Woodland Hills, CA, 1.2 Miles Away"
          assignment="Medical, Recreation"
          isOrder="Order Online"
          info="Open 24/7, Delivery and Pickup Available"
        />
      </section>
    </section>
  );
}

export default Filters;
