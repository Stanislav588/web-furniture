import React from "react";
import "./Contact.css";
import Header from "../../components/Header/Header";
import { headerName } from "../../assets/assets";
function Contact() {
  return (
    <>
      <Header {...headerName[4]} />
      <div className="contact">
        <div className="container">
          <div className="general">
            <div className="contact-info-list">
              <div className="contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  43 Raymouth Rd. Baltemoer,
                  <br />
                  London 3910
                </p>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <p>info@yourdomain.com</p>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <a href="+1 294 3925 3939">+1 294 3925 3939</a>
              </div>
            </div>

            <div className="wrapper">
              <form className="contact-form" action="">
                <div className="input-wrapper">
                  <div className="form-group">
                    <div className="input-box">
                      <h3>First name</h3>
                      <input className="first-name" type="text" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-box">
                      <h3>Last name</h3>
                      <input className="last-name" type="text" required />
                    </div>
                  </div>
                </div>

                <div className="input-box">
                  <h3>Email adress</h3>
                  <input type="text" required />
                </div>
                <div className="input-box">
                  <h3>Message</h3>
                  <textarea size="250" type="text" required />
                </div>
              </form>
            </div>
            <a className="form-btn" href="#navbar">
              Send Message
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
