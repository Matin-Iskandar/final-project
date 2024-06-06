import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default index;
