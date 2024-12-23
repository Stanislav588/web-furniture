import React from "react";
import Hero from "../../components/Hero/Hero";
import "./Success.css";
import { Link } from "react-router-dom";

function Success() {
  return (
    <>
      <Hero children="Cart" />
      <div className="success">
        <div className="container">
          <div className="success-title">
            <i className="fa-solid fa-check"></i>
            <h2>Thank you!</h2>
            <p>You order was successfuly completed.</p>

            <div className="btn-end-box">
              <Link to="/shop">
                <button className="coupon-btn">Back to shop</button>
              </Link>
              <Link to="/cart">
                <button className="show-order-btn">Show your order</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
