import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Button from '../components/Buttons/FilterButton/Button';
import Navbar from '../components/Navbar/Navbar';
import ShopCard from '../components/ShopCard/ShopCard';

function ShopPage() {
  const { state } = useLocation();
  const idOfShop = state;
  console.log(idOfShop);
  //here I will send query to api with the ID of clicked shop (ID received through location) to get all data

  return (
    <div>
      <Navbar backBtn={true} />
      <section className="selected-shop">
        <div className="selected-shop-card">
          <img src={require('../tempIMG/shopIMg.png')} alt="shop"></img>
          <div className="card-shop_details">
            <h3 className="shop-name">Planet 13</h3>
            <p className="shop-location">Woodland Hills, CA, 1.2 Miles Away</p>
            <div className="shop-in-pill">
              <h4>
                Open 24/7 <br /> Delivery and Pickup Available
              </h4>
            </div>
            <div className="contact">
              <a href="tel:999999999" className="call-btn">
                Call
              </a>
              <a href="" className="dir-btn">
                Dir. Icon
              </a>
            </div>
          </div>
        </div>
        <div className="hours-of-operation">
          <h3>Hours of Operation</h3>
          <div className="hours-grid">
            <div className="days">
              <p>Moday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
            </div>
            <div className="hours">
              <p>12:00am - 12:00am</p>
              <p>12:00am - 12:00am</p>
              <p>12:00am - 12:00am</p>
              <p>12:00am - 12:00am</p>
              <p>12:00am - 12:00am</p>
              <p>12:00am - 12:00am</p>
              <p>12:00am - 12:00am</p>
            </div>
          </div>
        </div>
        {/* For now I will use hard coded example later the data will be received from api */}
      </section>
      <section className="products-section">
        <div className="shop-filters">
          {/* here I will be filtering all products received from api and if filter is not set then default set will be passed down to display */}
          <div className="product">
            <p>Products</p>
          </div>
          <div className="sort-by">
            <p>Sort By</p>
          </div>
        </div>
        <h2>All Products</h2>
        <section className="flowers">
          {/* items filtered or not will be displayed here */}
          <h3>Flower</h3>
          <div className="items-wrapper">
            <div className="item">
              <img src={require('../tempIMG/Rectangle.png')} />
              <p className="item-title">Hybrid Flower</p>
              <p className="item-taste">Lava Cake by Sweet Dirt</p>
              <p className="item-thc">22.9%</p>
              <Button title="Details" />
            </div>
            <div className="item">
              <img src={require('../tempIMG/Rectangle.png')} />
              <p className="item-title">Hybrid Flower</p>
              <p className="item-taste">Lava Cake by Sweet Dirt</p>
              <p className="item-thc">22.9%</p>
              <Button title="Details" />
            </div>
            <div className="item">
              <img src={require('../tempIMG/Rectangle.png')} />
              <p className="item-title">Hybrid Flower</p>
              <p className="item-taste">Lava Cake by Sweet Dirt</p>
              <p className="item-thc">22.9%</p>
              <Button title="Details" />
            </div>
            <div className="item">
              <img src={require('../tempIMG/Rectangle.png')} />
              <p className="item-title">Hybrid Flower</p>
              <p className="item-taste">Lava Cake by Sweet Dirt</p>
              <p className="item-thc">22.9%</p>
              <Button title="Details" />
            </div>
            <div className="item">
              <img src={require('../tempIMG/Rectangle.png')} />
              <p className="item-title">Hybrid Flower</p>
              <p className="item-taste">Lava Cake by Sweet Dirt</p>
              <p className="item-thc">22.9%</p>
              <Button title="Details" />
            </div>
            <div className="item">
              <img src={require('../tempIMG/Rectangle.png')} />
              <p className="item-title">Hybrid Flower</p>
              <p className="item-taste">Lava Cake by Sweet Dirt</p>
              <p className="item-thc">22.9%</p>
              <Button title="Details" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ShopPage;
