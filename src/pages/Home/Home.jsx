import React from "react";
import Header from "../../components/Header/Header";
import CraftedMaterial from "../../components/CraftedMaterial/CraftedMaterial";
import Service from "../../components/Service/Service";
import InteriorDesign from "../../components/InteriorDesign/InteriorDesign";
import Reviews from "../../components/Reviews/Reviews";
import RecentBlog from "../../components/RecentBlog/RecentBlog";
import { headerName } from "../../assets/assets";

function Home() {
  return (
    <>
      <Header {...headerName[0]} />
      <CraftedMaterial />
      <Service />
      <InteriorDesign />
      <Reviews />
      <RecentBlog />
    </>
  );
}

export default Home;
