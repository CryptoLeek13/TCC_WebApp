import React from 'react';
import Button from '../Buttons/FilterButton/Button';
import Navbar from '../Navbar/Navbar';
import './ItemDetails.css';
import { useLocation } from 'react-router-dom';

function ItemDetails() {
  const { state } = useLocation();
  console.log(state); //getting props

  return (
    <section className="product-details">
      <Navbar backBtn={true} />
      <div className="product-frame">
        <img src={require(`../../tempIMG/${state.img}`)} alt=""></img>
        <div className="details-wrapper">
          <p className="shop-details-name">{state.supplier}</p>
          <p className="product-name">{state.name}</p>
          <div className="details">
            <p className="type">{state.type}</p>
            <p className="thc">{state.thc}</p>
          </div>
          <div className="price-wrapper">
            <p className="price">{state.price}</p>
            <p className="quantity">{state.quantity}</p>
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
      </section>
      <article className="description">
        {/* props description */}
        <p className="heading">Description</p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Blanditiis praesentium, voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non.
        </p>
      </article>
    </section>
  );
}

export default ItemDetails;