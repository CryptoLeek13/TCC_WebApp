import React from 'react';
import Button from '../../components/Buttons/FilterButton/Button';
import Navbar from '../../components/Navbar/Navbar';
import './ItemDetails.css';
import { useLocation } from 'react-router-dom';

function ItemDetails(props) {
  // const { state } = useLocation();
  // console.log(state); //getting props
  //use params to receive productID and send query to api for matching product

  return (
    <section className="product-details">
      <Navbar backBtn={true} />
      <div className="product-frame-wrapper">
        <div className="product-frame">
          <img src={require(`../../tempIMG/Rectangle.png`)} alt=""></img>
          <div className="details-wrapper">
            <p className="shop-details-name">Planet 13</p>
            <p className="product-name">Blueberry Pie</p>
            <div className="details">
              <p className="type">Indica</p>
              <p className="thc">26% THC</p>
            </div>
            <div className="price-wrapper">
              <p className="price">$60.00</p>
              <p className="quantity">Per 1/8 oz</p>
            </div>
            <button className="order">Order Now</button>
          </div>
        </div>
        <section className="profiles">
          <p className="heading">Profile</p>
          <div className="profiles-wrapper">
            <div className="profile">Flower</div>
            <div className="profile">Effects</div>
          </div>
        </section>
        <article className="description">
          {/* props description */}
          <p className="heading">Description</p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas, At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas.
          </p>
        </article>
        <aside className="about">
          <img src={require('../../tempIMG/about.png')} alt="710labs"></img>
          <p className="heading">About the Dispo</p>
          <p>
            {/* props info */}
            710 Labs is more than industry OGS, They're standard-setting,
            award-winning innovators and artists obsessed with quality,
            expertise, and evolving the cannabis craft. They go above and beyond
            to deliver the best f#!$ing product you'll ever try.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default ItemDetails;
