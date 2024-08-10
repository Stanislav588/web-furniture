import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-subscribe">
          <span>
            <img src={assets.outline} alt="outline" />
          </span>
          <h3>Subscribe to Newsletter</h3>
        </div>

        <form className="footer-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <a href="#!">
            <i className="fa-solid fa-paper-plane"></i>
          </a>
        </form>

        <a href="#!" className="logo">
          Furni
        </a>
        <div className="footer-general">
          <div className="footer-left">
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
            <ul className="footer-left-list">
              <li>
                <a href="#navbar">
                  <span className="fa-brands fa-facebook-f"> </span>
                </a>
              </li>
              <li>
                <a href="#navbar">
                  <span className="fa-brands fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="#navbar">
                  <span className="fa-brands fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="#navbar">
                  <span className="fa-brands fa-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-right-container">
            <ul className="footer-list">
              <li className="footer-right-item">
                <a href="#navbar">About us</a>
              </li>
              <li className="footer-right-item">
                <a href="#navbar">Services</a>
              </li>
              <li className="footer-right-item">
                <a href="#navbar">Blog</a>
              </li>
              <li className="footer-right-item">
                <a href="#navbar">Contact us</a>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-right-item">
                <a href="#navbar">Support</a>
              </li>
              <li className="footer-right-item">
                <a href="#navbar">Knowledge base</a>
              </li>
              <li className="footer-right-item">
                <a href="#navbar">Live chat</a>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-right-item">
                <a href="#navbar">Jobs</a>
              </li>
              <li className="footer-right-item">
                <a href="#navbar">Our team</a>
              </li>
              <li className="footer-right-item">
                <a href="#navbar">Leadership</a>
              </li>
              <li className="footer-right-item">
                <a href="#navbar">Privacy Policy</a>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-right-item">
                <a href="#navbar">Nordic Chair</a>
              </li>
              <li className="footer-right-item">
                <a href="#navbar">Kruzo Aero</a>
              </li>
              <li className="footer-right-item">
                <a href="#navbar">Ergonomic Chair</a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="footer-description">
          <p className="footer-copyright">
            Copyright ©2024. All Rights Reserved. — Designed with love by
            <span> Untree.co</span> Distributed By ThemeWagon
          </p>
          <div className="footer-desc-right">
            <a href="#navbar">Terms & Conditions</a>
            <a href="#navbar">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
