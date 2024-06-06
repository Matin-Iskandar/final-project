import React,{useState} from "react";
import Navbar from "../../components/Navbar";
import "./style.scss";
import { FaFacebookF } from "react-icons/fa";

const Register = () => {
  const initialUser={email:"", password:"",usernames:""}
  const [user,setUser] =useState(initialUser);
  const handleChange=({target})=>{
    const {name,value}=target;
    setUser((currentUser)=>({...currentUser,[name]:value}))}
  return (
    <div className="register-container">
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
      </section>
      <div className="featured">
        <h5>Featured Category</h5>{" "}
        <button className="detail">View Detail</button>
      </div>
      <div className="register-container-main">
        <h2>Sign Up</h2>
        <form>
          <label className="name">Name</label>
          <input type="text" placeholder="Enter your phone number or email" />
          <label>Surname</label>
          <input type="text" placeholder="Enter your phone number or email" />
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" />
          <p>
            Already have an account?
            <a href={`/login`}>Sign In</a>
          </p>
          <button className="sign-up">Sign Up</button>
          <section className="or-other-method">
            <hr />
            <span>Or using other method</span>
          </section>
          <button className="face">
            <FaFacebookF className="face-icon"/> <span> Sign Up with Facebook</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
