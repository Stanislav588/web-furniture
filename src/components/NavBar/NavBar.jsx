import React, { useState, useRef, useContext, useEffect } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./NavBar.css";
import { CSSTransition } from "react-transition-group";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

function NavBar({ login, setLogin }) {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [openMenu, setOpenMenu] = useState(false);
  const [home, setHome] = useState("home");

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (openMenu) setTimeout(() => setOpenMenu(false), 80);
  });

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [openMenu]);

  return (
    <div id="navbar" className="navbar">
      <CSSTransition
        in={openMenu}
        classNames="alert"
        timeout={500}
        unmountOnExit
      >
        <div className={`menu ${openMenu ? "active-menu" : ""}`} ref={menuRef}>
          <ul className="menu-list">
            <Link onClick={() => setOpenMenu(false)} to="/">
              Home
            </Link>

            <Link onClick={() => setOpenMenu(false)} to="/about">
              About us
            </Link>
            <Link onClick={() => setOpenMenu(false)} to="/shop">
              Shop
            </Link>
            <Link onClick={() => setOpenMenu(false)} to="/services">
              Services
            </Link>

            <Link onClick={() => setOpenMenu(false)} to="/blog">
              Blog
            </Link>
            <Link onClick={() => setOpenMenu(false)} to="/contact-us">
              Contact us
            </Link>
          </ul>
        </div>
      </CSSTransition>

      <div className="container">
        <div className="navbar-content">
          <Link to="/">
            <h1>Furni</h1>
          </Link>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link
                onClick={() => setHome("home")}
                className={home === "home" ? "style" : ""}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                onClick={() => setHome("shop")}
                className={home === "shop" ? "style" : ""}
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                onClick={() => setHome("about")}
                className={home === "about" ? "style" : ""}
                to="/about"
              >
                About us
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                onClick={() => setHome("services")}
                className={home === "services" ? "style" : ""}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                onClick={() => setHome("blog")}
                className={home === "blog" ? "style" : ""}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                onClick={() => setHome("contact")}
                className={home === "contact" ? "style" : ""}
                to="/contact-us"
              >
                Contact us
              </Link>
            </li>
          </ul>

          <div className="user-icons">
            <img
              className="user-icon"
              onClick={() => setLogin(true)}
              src={assets.user}
              alt="user"
            />

            <div className="navbar-cart-icon">
              <Link to="/cart">
                <img className="cart-icon" src={assets.cart} alt="cart" />
              </Link>

              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
          </div>

          {openMenu ? (
            <i
              onClick={() => setOpenMenu(false)}
              className="fa-solid fa-xmark"
            ></i>
          ) : (
            <i
              onClick={() => setOpenMenu(!openMenu)}
              className="fa-solid fa-bars"
            ></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
