import React from "react";
import "./CraftedMaterial.css";
import { food_list } from "../../assets/assets";
import Card from "../Card/Card";
import Explore from "../Explore-Btn/Explore";
function CraftedMaterial() {
  return (
    <div id="crafted" className="crafted">
      <div className="container">
        <div className="crafted-cont">
          <div className="crafted-info">
            <h2>
              Crafted with
              <br />
              excellent material.
            </h2>
            <p className="crafted-paragraph">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <Explore>Explore</Explore>
          </div>
          <ul className="card-list">
            {food_list.map((item) => (
              <Card {...item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CraftedMaterial;
