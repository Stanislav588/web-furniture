import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./ShopCards.css";
import { StoreContext } from "../../context/StoreContext";
function ShopCards() {
  const [change, setChange] = useState(false);
  const { shopCards, cartItems, addToCart } = useContext(StoreContext);
  return (
    <div className="shop-cards">
      <div className="container">
        <ul className="shop-cards-list">
          {shopCards.map(({ id, name, img, price }) => (
            <li
              key={id}
              className={`shop-card-item ${cartItems[id] ? "active-card" : ""}`}
            >
              <img className="shop-card-img" src={img} />
              <h2>{name}</h2>
              <span>${price}</span>
              <div className="cross-icon">
                {cartItems[id] ? (
                  <i className="fa-solid fa-circle-check"></i>
                ) : (
                  <img
                    onClick={() => addToCart(id)}
                    src={assets.cross}
                    alt="cross"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShopCards;
