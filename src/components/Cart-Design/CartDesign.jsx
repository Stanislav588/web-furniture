import React, { useContext, useState } from "react";
import "./CartDesign.css";

import { StoreContext } from "../../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";

const CartDesign = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const {
    cartItems,
    food_list,
    removeAllFromCart,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);
  return (
    <div className="cart-design">
      <div className="container">
        <div className="cart-wrapper">
          <div className="cart-items-title">
            <h3 className="cart-title">Image</h3>
            <h3 className="cart-title">Product</h3>
            <h3 className="cart-title">Price</h3>
            <h3 className="cart-title">Quantity</h3>
            <h3 className="cart-title">Total</h3>
            <h3 className="cart-title">Remove</h3>
          </div>
          <hr className="hr" />
          <div className="cart-list">
            {food_list.map(({ id, img, nameProduct, price }) => {
              if (cartItems[id] > 0) {
                return (
                  <>
                    <div key={id} className="cart-item">
                      <img src={img} alt={nameProduct} />
                      <div>
                        <h5>{nameProduct}</h5>
                      </div>
                      <span>${price}</span>
                      <div className="total">
                        <button onClick={() => removeFromCart(id)}>-</button>
                        <input
                          className="total-input"
                          type="text"
                          value={cartItems[id]}
                          onChange={(event) => setValue(event.target.value)}
                        />
                        <button onClick={() => addToCart(id)}>+</button>
                      </div>
                      <span>${price * cartItems[id]}</span>
                      <i
                        onClick={() => removeAllFromCart(id)}
                        className="fa-solid fa-xmark"
                      ></i>
                    </div>
                    <hr />
                  </>
                );
              }
            })}
          </div>
        </div>

        <div className="cart-row">
          <div className="cart-left">
            <div className="btn-container">
              <a href="#!" className="update-cart">
                Update Cart
              </a>
              <Link to="/shop" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
            <div className="coupon">
              <h2>Coupon</h2>
              <p>Enter your coupon code if you have one.</p>
              <div className="coupon-flex">
                <input type="text" placeholder="Coupon Code" />
                <a className="apply-coupon" href="#!">
                  Apply Coupon
                </a>
              </div>
            </div>
          </div>

          <div className="cart-right">
            <div className="cart-total">
              <h2>CART TOTALS</h2>
              <hr />
            </div>
            <div className="sub-total">
              <span>Subtotal</span>
              <strong>${getTotalCartAmount()}</strong>
            </div>
            <div className="total-value">
              <span>Total</span>
              <strong>
                $
                {getTotalCartAmount() === 0
                  ? getTotalCartAmount()
                  : getTotalCartAmount() + 2}
              </strong>
            </div>

            <button onClick={() => navigate("/order")} className="checkout-btn">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDesign;
