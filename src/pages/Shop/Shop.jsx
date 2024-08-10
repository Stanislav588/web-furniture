import React from "react";
import "./Shop.css";
import ShopCards from "../../components/ShopCards/ShopCards";
import "./Shop.css";
import Hero from "../../components/Hero/Hero";
function Shop() {
  return (
    <>
      <Hero children="Shop" />
      <ShopCards />;
    </>
  );
}

export default Shop;
