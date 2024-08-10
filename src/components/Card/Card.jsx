import React, { useContext } from "react";
import "./Card.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
function Card({ id, img, name, price }) {
  const { addToCart, cartItems } = useContext(StoreContext);
  return (
    <li className={`card-item ${cartItems[id] ? "active-card" : ""}`}>
      <img className="card-img" src={img} alt={name} />
      <h2>{name}</h2>
      <span>${price}</span>
      <div className="cross-icon">
        {cartItems[id] ? (
          <i className="fa-solid fa-circle-check"></i>
        ) : (
          <img
            className="cross"
            onClick={() => addToCart(id)}
            src={assets.cross}
            alt="cross"
          />
        )}
      </div>
    </li>
  );
}

export default Card;
