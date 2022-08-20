import React from 'react';
import Button from '../Buttons/FilterButton/Button';
import './Filters.css';
import ShopCard from '../ShopCard/ShopCard';
import { Link } from 'react-router-dom';

function Filters() {
  const [range, setRange] = React.useState(10); //from here the api will be filtered by this value and will generate results to home page

  return (
    <section className="filters-and-data">
      <section className="filters">
        <div className="on-click-filters">
          <Button title="Open Now" />
          <Button title="Delivery" />
        </div>
        <div className="dropdown-filter">
          <p className="range-label">Distance {range} miles</p>
          <input
            type="range"
            min="10"
            max="250"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          ></input>
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
