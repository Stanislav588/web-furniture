import { motion } from "framer-motion";
import React from "react";
import { assets } from "../../assets/assets";
import "./Service.css";

const textAnimation = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};
const featureAnimation = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};
const ImgAnimation = {
  hidden: {
    x: 40,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};
function Service() {
  return (
    <div className="service">
      <div className="container">
        <div className="service-info">
          <div className="service-title">
            <motion.h2
              initial="hidden"
              viewport={{ amount: 0.5, once: true }}
              whileInView="visible"
              custom={1}
              variants={textAnimation}
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial="hidden"
              viewport={{ amount: 0.5, once: true }}
              whileInView="visible"
              custom={1}
              variants={textAnimation}
              className="service-description"
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </motion.p>

            <motion.div
              initial="hidden"
              viewport={{ amount: 0.5, once: true }}
              whileInView="visible"
              custom={3}
              variants={featureAnimation}
              className="service-list-1"
            >
              <div className="service-item">
                <img src={assets.truck} alt="truck" />
                <h4 className="service-name">Fast & Free Shipping</h4>
                <p className="service-desc">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
              <div className="service-item">
                <img src={assets.bag} alt="bag" />
                <h4 className="service-name">Easy to Shop</h4>
                <p className="service-item-desc">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              viewport={{ amount: 0.5, once: true }}
              whileInView="visible"
              custom={4}
              variants={featureAnimation}
              className="service-list-2"
            >
              <div className="service-item">
                <img src={assets.support} alt="support" />
                <h4 className="service-name">24/7 Support</h4>
                <p className="service-desc">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
              <div className="service-item">
                <img src={assets.returnIcon} alt="return" />
                <h4 className="service-name">Hassle Free Returns</h4>
                <p className="service-desc">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </motion.div>
          </div>
          <img className="yellow" src={assets.yellowDot} alt="yellowDot" />
          <motion.img
            initial="hidden"
            viewport={{ amount: 0.5, once: true }}
            whileInView="visible"
            custom={2}
            variants={ImgAnimation}
            className="service-img"
            src={assets.whyChoose}
            alt="whyIcon"
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
