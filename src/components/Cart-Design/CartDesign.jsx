import React from "react";
import "./CartDesign.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseValue,
  increaseValue,
  removeFromCart,
} from "../../redux/store";
import useTotalPrice from "../../hooks/useTotalPrice";
import { useSnackbar } from "notistack";

const CartDesign = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartStore = useSelector((state) => state.cart.cartItems);
  const { totalAmount } = useTotalPrice();
  function handleRemoveFromCart(product) {
    dispatch(removeFromCart(product));
    const currentStorage = JSON.parse(localStorage.getItem("cart-items")) || [];
    const updatedCart = currentStorage.filter((item) => item.id !== product);
    localStorage.setItem("cart-items", JSON.stringify(updatedCart));
    enqueueSnackbar("Deleted from cart successfully", { variant: "success" });
  }

  return (
    <div className="cart-design">
      <div className="container">
        <div className="cart-wrapper">
          {cartStore.length === 0 ? (
            <h1 className="show-message !">Your cart is empty 🧐</h1>
          ) : (
            <>
              <div className="cart-items-title">
                <h3 className="cart-title">Image</h3>
                <h3 className="cart-title">Product</h3>
                <h3 className="cart-title">Price</h3>
                <h3 className="cart-title">Quantity</h3>
                <h3 className="cart-title">Remove</h3>
              </div>{" "}
              <hr className="hr" />
            </>
          )}

          <div className="cart-list">
            {cartStore.map((product, index) => {
              return (
                <>
                  <div key={index} className="cart-item">
                    <img src={product.img} alt={product.productName} />
                    <div>
                      <h5>{product.productName}</h5>
                    </div>
                    <span>$ {product.price}</span>
                    <div className="total">
                      <button
                        onClick={() =>
                          dispatch(decreaseValue({ id: product.id }))
                        }
                      >
                        -
                      </button>
                      <p className="quantity">{product.quantity}</p>

                      <button
                        onClick={() =>
                          dispatch(increaseValue({ id: product.id }))
                        }
                      >
                        +
                      </button>
                    </div>

                    <button onClick={() => handleRemoveFromCart(product.id)}>
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <hr />
                </>
              );
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
              <strong>$ {totalAmount}</strong>
            </div>
            <div className="total-value">
              <span>Total</span>
              <strong>$ {totalAmount === 0 ? 0 : totalAmount + 10}</strong>
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
