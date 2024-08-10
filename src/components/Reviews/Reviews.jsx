import React from "react";
import "./Reviews.css";
import { reviews } from "../../assets/assets";

function Reviews() {
  return (
    <div className="reviews">
      <div className="container">
        <h1 className="reviews-title">Testimonials</h1>
        {reviews.map(({ id, desc, name, img, job }) => (
          <div key={id} className="reviews-item">
            <p>{desc}</p>
            <span className="left">
              <i className="fa-solid fa-angle-left"></i>
            </span>
            <span className="right">
              <i className="fa-solid fa-angle-right"></i>
            </span>
            <span></span>
            <img src={img} alt="person" />
            <h4>{name}</h4>
            <span>{job}</span>
          </div>
        ))}
        <div className="btn-bottom">
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
