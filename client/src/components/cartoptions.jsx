import React from "react";
import "./cartoptions.scss";
const CartComponents = () => {
  return (
    <div className="cart-components-container">
      <div className="select-card">
        <h2>Shopping Cart</h2>
        <label>
          <input type="radio" name="imgsel" id="" />
          <div className="img-container">
            {" "}
            <img src="/icons/paypal1.svg" alt="" />
          </div>
          <div className="cart-infos">
            <h3>Paypall</h3>
            <span>yelenastacia99@gmail.com </span>
          </div>
        </label>
        <hr />
        <label>
          <input type="radio" name="imgsel" id="" />
          <div className="img-container">
            {" "}
            <img src="/icons/stripe1.svg" alt="" />
          </div>
          <div className="cart-infos">
            <h3>Stripe</h3>
            <span> 8329 3288 823 ****</span>
          </div>
        </label>
        <hr />
        <label>
          <input type="radio" name="imgsel" id="" />
          <div className="img-container">
            {" "}
            <img src="/icons/payoneer1.svg" alt="" />
          </div>
          <div className="cart-infos">
            <h3>Payoneer</h3>
            <span> 8329 3288 823 ****</span>
          </div>
        </label>
      </div>
      <div className="add-debit-card">
        <h2>Add Debit Card</h2>
        <form action="">
          <section>
            <h3>Holder Name</h3>
            <input type="text" name="" id="" placeholder="Enter your name" />
          </section>

          <section>
            <h3> Card Number</h3>
            <input type="text" placeholder="0000-0000-0000-0000" />
          </section>

          <section>
            <h3>Expiry Date</h3>
            <input type="date" />
          </section>

          <section>
            <h3>CVV</h3>
            <input type="text" placeholder="Enter your cvv" />
          </section>
        </form>
          <div className="cart-options-btns">
            <button>Cancel</button>
            <button><a href={"/checkout-success"}>Checkout</a></button>
          </div>
      </div>
    </div>
  );
};

export default CartComponents;
