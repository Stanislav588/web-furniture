import React from "react";
import "./InteriorDesign.css";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import Explore from "../Explore-Btn/Explore";

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
    y: 10,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};
function InteriorDesign() {
  return (
    <div className="design">
      <div className="container">
        <motion.div
          initial="hidden"
          viewport={{ amount: 0.5, once: true }}
          whileInView="visible"
          variants={featureAnimation}
          custom={1}
          className="design-info"
        >
          <div className="images">
            <img className="green-dot" src={assets.greenDot} alt="greenDot" />
            <img className="grid-1" src={assets.imgGrid1} alt="grid-1" />
            <div className="small-images">
              <img className="grid-2" src={assets.imgGrid2} alt="grid-2" />
              <img className="grid-2" src={assets.whyChoose} alt="grid-2" />
            </div>
          </div>

          <div className="design-right">
            <h2 className="design-title">
              We Help You Make Modern Interior Design
            </h2>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </p>

            <ul className="design-list">
              <li>
                <p>Donec vitae odio quis nisl dapibus malesuada</p>
              </li>
              <li>
                <p>Donec vitae odio quis nisl dapibus malesuada</p>
              </li>
              <li>
                <p>Donec vitae odio quis nisl dapibus malesuada</p>
              </li>
              <li>
                <p>Donec vitae odio quis nisl dapibus malesuada</p>
              </li>
            </ul>
            <Explore>Explore</Explore>
          </div>
        </motion.div>

        <div className="popular-products">
          <motion.div
            initial="hidden"
            viewport={{ amount: 0.5 }}
            whileInView="visible"
            variants={textAnimation}
            custom={1}
            className="popular-product"
          >
            <img src={assets.product1} alt="chair1" />

            <div className="popular-item">
              <h4>Nordic Chair</h4>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <button>
                <a className="read-btn" href="#!">
                  Read more
                </a>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            viewport={{ amount: 0.5 }}
            whileInView="visible"
            variants={textAnimation}
            custom={2}
            className="popular-product"
          >
            <img src={assets.product2} alt="chair2" />

            <div className="popular-item">
              <h4>Nordic Chair</h4>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <button>
                <a className="read-btn" href="#!">
                  Read more
                </a>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            viewport={{ amount: 0.5 }}
            whileInView="visible"
            variants={textAnimation}
            custom={3}
            className="popular-product"
          >
            <img src={assets.product3} alt="chair3" />

            <div className="popular-item">
              <h4>Nordic Chair</h4>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <button>
                <a className="read-btn" href="#!">
                  Read more
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default InteriorDesign;
