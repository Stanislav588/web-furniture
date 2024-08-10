import React from "react";
import "./Services.css";
import Header from "../../components/Header/Header";
import Service from "../../components/Service/Service";
import { headerName } from "../../assets/assets";
function Services() {
  return (
    <>
      <Header {...headerName[2]} />
      <Service />
    </>
  );
}

export default Services;
