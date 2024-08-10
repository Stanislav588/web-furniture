import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

function Header({ name }) {
  return (
    <div id="header" className="header">
      <div className="container">
        <div className="header-bottom">
          <div className="modern-interior">
            <h1>{name}</h1>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="buttons">
              <button>
                <a className="shop-btn" href="#crafted">
                  Shop Now
                </a>
              </button>

              <button className="explore-btn">Explore</button>
            </div>
          </div>
          <div className="coach">
            <img src={assets.coach} alt="coach" />
          </div>
          <img className="lightdot" src={assets.lightDot} alt="dot" />
        </div>
      </div>
    </div>
  );
}

export default Header;
