import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ShopCard.css';

function ShopCard(props) {
  const navigate = useNavigate();
  const toDetails = () => {
    navigate(`/shop${props.id}`, { state: props.id });
  };
  return (
    <div className="card" onClick={toDetails}>
      <img src={require(`../../tempIMG/${props.img}`)} alt="shop"></img>
      <div className="card-shop_details">
        <h3 className="shop-name">{props.name}</h3>
        <p className="shop-location">{props.location}</p>
        <p className="shop-assignments">{props.assignment}</p>
        <p className="shop-orders">{props.isOrder}</p>
        <div className="shop-in-pill">
          <h4>{props.info}</h4>
          <h4>{props.delivery}</h4>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
