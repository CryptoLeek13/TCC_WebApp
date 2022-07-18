import React from 'react';
import './ShopCard.css';

function ShopCard(props) {
  return (
    <div className="card">
      <img src={require(`../../tempIMG/${props.img}`)} alt="shop"></img>
      <div className="card-shop_details">
        <h2 className="shop-name">{props.name}</h2>
        <p className="shop-location">{props.location}</p>
        <p className="shop-assignments">{props.assignment}</p>
        <p className="shop-orders">{props.isOrder}</p>
        <div className="shop-in-pill">
          <h3>{props.info}</h3>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;