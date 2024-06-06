import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="first-part">
          <h3>
           <NavLink to={"/home"}><img src="/icons/logo.svg" alt="Logo" /></NavLink> 
          </h3>
          <p>
            The biggest marketplace managed by ideologist corp,which provides
            various kinds of daily needs and hobbies
          </p>
        </div>
        <div>
          <div className="second-part">
            <div className="about">
              <div className="about-first">
                <h2>About Lenny</h2>
                <ul>
                  <li>
                    <a href="#">Information</a>
                  </li>
                  <li>
                    <a href="#">Store Lactor</a>
                  </li>
                  <li>
                    <a href="#">Bulk Purchase</a>
                  </li>
                  <li>
                    <a href="#">Alteration Service</a>
                  </li>
                  <li>
                    <a href="#">Gift Delivery Service</a>
                  </li>
                  <li>
                    <a href="#">Live Station</a>
                  </li>
                </ul>
              </div>
              <div className="about-lenny">
                <h2>About lenny</h2>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Return Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="account">
              <div>
                <h2>Account</h2>
                <ul>
                  <li>
                    <a href="#">Membership</a>
                  </li>
                  <li>
                    <a href="#"> Adress</a>
                  </li>
                  <li>
                    <a href="#">Cupons</a>
                  </li>
                </ul>
              </div>
              <div className="contact">
                <h2>Contact Us</h2>
                <ul>
                  <li>
                    <a href="#">For Lenny Consumer Complaint Services</a>
                  </li>
                  <li>
                    <a href="#">(684)55-0103 and curtis.weaver@example.com</a>
                  </li>
                  <li>
                    <a href="#">Customers Complaint Services</a>
                  </li>
                  <li>
                    <a href="#">
                      Directorate Generate of the Republic of Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="#">(480)55-0103</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h6>COPYRIGHT&#169; LENNY CO,LTD,ALL RIGHTS RESERVED.</h6>
        <div>
          <span>Terms of use </span>
          <span>Privacy Policy </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
