import React from "react";
import "./Cart.css";
import CartDesign from "../../components/Cart-Design/CartDesign";

const Cart = () => {
  return (
    <>
      <div className="cart-header">
        <div className="container">
          <h1>Cart</h1>
        </div>
      </div>
      <CartDesign />
    </>
  );
};

export default Cart;
