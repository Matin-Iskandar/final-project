import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useSelector } from "react-redux";
const Navbar = () => {
  const productState=useSelector((state) => state.customerReducer.basketProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [isActiveHelperMenu, setIsActiveHelperMenu] = useState(false);
  const categories = [
    "All Categories",
    "Book",
    "Electronics",
    "Clothing",
    "Fashion",
    "Action Figure",
    "Gaming",
  ];

   const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
const handleHelperMenu = () => {
  setIsActiveHelperMenu(!isActiveHelperMenu)
}
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for ${searchTerm} in category ${category}`);
  };
  return (
    <Container className="nav-container">
     
      <div className={isActiveHelperMenu?"helper-menu":"helper-menu-none"}>
        <div className="helper-heading">
          <img  src="/icons/profile-photo.svg" />
          <span>
            <h3>Yelena Stacia</h3>
            <p>Platinum Member</p>
          </span>
          <hr />
        </div>
        <div className="helper-wallet">
          <h4>Wallet</h4>
          <label>
            <section>
              <img src="/icons/helper1.svg" />

              <h5>Lenny Balance</h5>
            </section>
            <h5>$928.28</h5>
          </label>
          <label>
            <section>
              <img src="/icons/helper2.svg" />

              <h5>Lenny Coins</h5>
            </section>
            <h5>0.092</h5>
          </label>
        </div>
        <hr />
        <div className="helper-men">
          <h4>Menu</h4>
          <label>
            <img src="/icons/helper3.svg" />
            <h5>Purchase</h5>{" "}
          </label>
          <label>
            <img src="/icons/helper4.svg" />
            <h5>Wishlist</h5>{" "}
          </label>
          <label>
            <img src="/icons/helper5.svg" />
            <h5>Settings </h5>{" "}
          </label>
        </div>
        <hr />
        <section className="sing-out">
          <img src="/icons/helper6.svg" />
          <h6>Sign Out</h6>
        </section>
      </div>
      <div className="nav-logo">
        <NavLink to={"/home"}>
          <img src="/icons/logo.svg" alt="Logo" />
        </NavLink>
      </div>
      <div className="nav-search">
        <form onSubmit={handleSubmit}>
          <select
            value={category}
            onChange={handleCategoryChange}
            id="select-tag"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Seacrh on lenny..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search">
            <img src="/icons/search.svg" alt="" />
          </button>
        </form>
      </div>
      <div className="nav-links">
        <NavLink to={`/shopping-cart`} href="#" className="shopping-cart">
          <span>{productState.length}</span>
          <img src="/icons/shopping-cart.svg" alt="shopping-cart" />
        </NavLink>
        <a href="#">
          <img src="/icons/notification.svg" alt="notification" />
        </a>
        <a href="#">
          <img src="/icons/inbox.svg" alt="inbox" className="inbox" />
        </a>
        <img
          src="/icons/profile-photo.svg"
          className="pp"
          alt="profile-photo"
          onClick={handleHelperMenu}
        />
        <button>
          <RxHamburgerMenu className="hamburger" />
        </button>
      </div>
    </Container>
  );
};

export default Navbar;
