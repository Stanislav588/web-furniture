import React from "react";
import "./Explore.css";
import { Link } from "react-router-dom";
function Explore({ children }) {
  return (
    <>
      <Link to="shop">
        <button className="explore">{children}</button>
      </Link>
    </>
  );
}

export default Explore;
