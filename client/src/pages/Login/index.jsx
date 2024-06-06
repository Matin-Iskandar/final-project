import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./style.scss";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Login = () => {
  
  return (
    <div className="login-container">
      <Navbar />
      <section className="heading">
        <div className="first-part-heading">
          <h2>Upgrade Your Wardrobe With Our Collection</h2>
          <p>
            Eget neque aenean viverra aliquam tortor diam nunc. Dis pellentesque
            lectus quis velit fusce aenean nunc dui consectetur. Eu lorem est
            ullamcorper nisl amet non mollis.
          </p>
          <div className="heading-btns">
            <button>Buy Now</button>
            <button>View Detail</button>
          </div>
        </div>
        <div className="second-part-heading">
          <img src="/images/homeHeading.png" alt="heading-img" />
          <img src="/images/homeheadingimg.svg" alt="" />
        </div>
      </section>{" "}
      <div className="login-container-main">
        <h2>Sign In</h2>
        <form>
          <label className="name">Phone Number or Email</label>
          <input type="text" placeholder="Enter your phone number or email" />

          <label className="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <NavLink to={"/home"}>
            {" "}
            <button className="sign-up">Sign in</button>
          </NavLink>
          <section className="or-other-method">
            <hr />
            <span>Or using other method</span>
          </section>
          <button className="face">
            <FaFacebookF className="face-icon" />{" "}
            <span> Sign In with Facebook</span>
          </button>
        </form>
      </div>
      <div className="featured">
        <h5>Featured Category</h5>{" "}
        <button className="detail">View Detail</button>
      </div>
    </div>
  );
};

export default Login;
