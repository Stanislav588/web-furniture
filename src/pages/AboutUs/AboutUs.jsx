import React from "react";
import Header from "../../components/Header/Header";
import Service from "../../components/Service/Service";
import Reviews from "../../components/Reviews/Reviews";
import { motion } from "framer-motion";
import { aboutCards, headerName } from "../../assets/assets";

import "./AboutUs.css";
const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};
function AboutUs() {
  return (
    <>
      <Header {...headerName[1]} />
      <Service />
      <div className="about-us">
        <div className="container">
          <div className="about-title">
            <motion.h2
              initial="hidden"
              viewport={{ amount: 0.5 }}
              whileInView="visible"
              custom={1}
              variants={textAnimation}
            >
              Our Team
            </motion.h2>
          </div>
          <div className="about-list">
            {aboutCards.map(
              ({ id, description, name, img, personImg, job }) => (
                <motion.li
                  key={id}
                  initial="hidden"
                  viewport={{ amount: 0.5 }}
                  whileInView="visible"
                  custom={1}
                  variants={textAnimation}
                  className="about-item"
                >
                  <img src={img} alt={personImg} />
                  <div className="about-link">
                    <a href="#header" className="about-name">
                      {name}
                    </a>
                  </div>
                  <span className="about-job">{job}</span>
                  <p>{description}</p>
                  <a className="about-btn" href="#header">
                    Learn More
                  </a>
                </motion.li>
              )
            )}
          </div>
        </div>
      </div>
      <Reviews />
    </>
  );
}

export default AboutUs;
