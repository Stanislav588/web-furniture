import React, { useState } from "react";
import "./PlaceOrder.css";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { accordionItems } from "../../assets/assets";
import useTotalPrice from "../../hooks/useTotalPrice";
import { useSelector } from "react-redux";

function PlaceOrder() {
  const cartStore = useSelector((state) => state.cart.cartItems);
  const [paragraph, setParagraph] = useState(false);
  const { totalAmount } = useTotalPrice();
  function handleOpenAccordion(index) {
    setParagraph((prevIndex) => (prevIndex === index ? null : index));
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <>
      <div className="order">
        <div className="container">
          <div className="checkout-border">
            <p>
              Returning customer? <a href="#navbar">Click here</a> to login
            </p>
          </div>

          <div className="checkout-row">
            <form className="billing-form">
              <h2>Billing Details</h2>
              <div className="billing-info">
                <div className="form-group">
                  <label>Country</label>
                  <select className="form-control">
                    <option value="1">Select a country</option>
                    <option value="2">bangladesh</option>
                    <option value="3">Algeria</option>
                    <option value="4">Afghanistan</option>
                    <option value="5">Ghana</option>
                    <option value="6">Albania</option>
                    <option value="7">Bahrain</option>
                    <option value="8">Colombia</option>
                    <option value="9">Ukraine</option>
                    <option value="10">Norway</option>
                    <option value="11">Danmark</option>
                  </select>
                </div>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input id="firstName" type="text" className="input" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="surname">Last Name</label>
                    <input id="surname" type="text" className="input" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input id="company" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="adress">Adress</label>
                  <input id="adress" type="text" placeholder="Street address" />
                </div>
                <div className="form-adress">
                  <input
                    id="adress-2"
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />
                </div>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="country">State / Country</label>
                    <input id="country" type="text" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="post">Post / Zip</label>
                    <input id="post" type="text" />
                  </div>
                </div>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="email">Email adress</label>
                    <input id="email" type="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="number">Phone</label>
                    <input id="number" type="number" />
                  </div>
                </div>

                <div className="billing-bottom-row">
                  <input id="checkbox" type="checkbox" />
                  <label htmlFor="new-acc">Create an account?</label>
                </div>
                <div className="billing-bottom-row">
                  <input type="checkbox" />
                  <label>Ship To A Different Address?</label>
                </div>

                <div className="order-notes">
                  <p>Order Notes</p>
                  <textarea placeholder="Write your notes here..."></textarea>
                </div>
              </div>
            </form>

            <div className="coupon">
              <h2>Coupon Code</h2>
              <div className="coupon-info">
                <p>Enter your coupon code if you have one</p>
                <div className="coupon-form">
                  <input id="coupon" type="text" placeholder="Coupon Code" />
                  <button type="submit" className="coupon-btn">
                    Apply
                  </button>
                </div>
              </div>

              <div className="your-order">
                <h2>Your order</h2>
                <div className="your-order-info">
                  <table className="table-order">
                    <thead>
                      <tr className="tr">
                        <th>Product</th>
                        <th>Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cartStore.map((item) => {
                        return (
                          <>
                            <tr key={item.id}>
                              <td>
                                {item.productName}
                                <strong> {item.quantity} x</strong>
                              </td>
                              <td>${item.price}</td>
                            </tr>
                          </>
                        );
                      })}

                      <tr>
                        <td>
                          <strong>Card subtotal</strong>
                        </td>
                        <td>$ {totalAmount}</td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Order total</strong>
                        </td>
                        <td>
                          <strong>
                            $ {totalAmount === 0 ? 0 : totalAmount + 10}
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {accordionItems.map((item, index) => {
                    return (
                      <>
                        <div
                          onClick={() => handleOpenAccordion(index)}
                          className="coupon-border"
                        >
                          <h3 onClick={() => setParagraph(!paragraph)}>
                            {item.name}
                          </h3>
                          <div className="border-show">
                            {paragraph === index && (
                              <p className="border-paragraph">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </>
                    );
                  })}

                  <Link to="/success">
                    <button className="coupon-btn">Place order</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
