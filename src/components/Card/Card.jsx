import React, { useEffect } from "react";
import "./Card.css";
import { assets } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/store";
import { useSnackbar } from "notistack";

function Card({ id, item, img, name, price }) {
  const cart = useSelector((state) => state.cart.cartItems);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cart));
  }, [cart]);
  function handleAddToCart(item) {
    dispatch(addToCart(item));
    enqueueSnackbar("Added to cart successfully", { variant: "success" });
  }
  return (
    <li className="card-item active-card">
      <img className="card-img" src={img} alt={name} />
      <h2>{name}</h2>
      <span>$ {price}</span>
      <div className="cross-icon">
        {cart.some((item) => item.id === id) ? (
          <i className="fa-solid fa-circle-check"></i>
        ) : (
          <button onClick={() => handleAddToCart(item)}>
            <img className="cross" src={assets.cross} alt="cross" />
          </button>
        )}
      </div>
    </li>
  );
}

export default Card;
