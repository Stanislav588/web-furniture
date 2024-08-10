import React from "react";
import "./RecentBlog.css";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

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
const featureAnimation = {
  hidden: {
    y: 30,
  },
  visible: (custom) => ({
    y: 0,

    transition: { delay: custom * 0.1 },
  }),
};
function RecentBlog() {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-top">
          <motion.h2
            initial="hidden"
            viewport={{ amount: 0.5, once: true }}
            whileInView="visible"
            custom={1}
            variants={textAnimation}
          >
            Recent Blog
          </motion.h2>
          <motion.a
            initial="hidden"
            viewport={{ amount: 0.5, once: true }}
            whileInView="visible"
            custom={1}
            variants={ImgAnimation}
            href="#navbar"
          >
            View all posts
          </motion.a>
        </div>

        <motion.div
          initial="hidden"
          viewport={{ amount: 0.5, once: true }}
          whileInView="visible"
          custom={1}
          variants={featureAnimation}
          className="blog-items"
        >
          <div className="blog-item">
            <img src={assets.post1} alt="post1" />
            <div className="blog-description">
              <h4>First Time Home Owner Ideas</h4>
              <p>
                by <span>Kristin Watson</span> on <span>Dec 19, 2021</span>
              </p>
            </div>
          </div>
          <div className="blog-item">
            <img src={assets.post2} alt="post2" />
            <div className="blog-description">
              <h4>How To Keep Your Furniture Clean</h4>
              <p>
                by <span>Robert Fox</span> on <span>Dec 15, 2021</span>
              </p>
            </div>
          </div>
          <div className="blog-item">
            <img src={assets.post3} alt="post3" />
            <div className="blog-description">
              <h4>Small Space Furniture Apartment Ideas</h4>
              <p>
                by <span>Kristin Watson</span> on <span> Dec 12, 2021</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default RecentBlog;
