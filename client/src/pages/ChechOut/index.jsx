import React from "react";
import "./style.scss";
const Index = () => {
  return (
    <div className="payment-method-container">
      <div className="heading">
        <section className="heading2">
          <section className="first-part">
            <h2 className="portable">Checkout</h2>
            <h2 className="mob">Shopping Chart</h2>
            <p>Showing your chosen products</p>
          </section>
          <section className="second-part">
            <label>Sort by:</label>
            <select name="Sort by:" id="">
              sort by
              <option value="">Last Added</option>
            </select>
          </section>
        </section>

        <main>
          <section className="main">
            <div className="select-payment-method">
              <div className="payment-method">
                <h3 className="portable">Shipping Address</h3>
                <h3 className="mob">Shipping Address</h3>
                <div className="shipping-adress">
                  <img src="/icons/location.svg" />
                  <div className="adress-info">
                    <h4>
                      Gofanny Karina <span>Main Adress</span>
                    </h4>{" "}
                    <span>081277939572</span>
                    <span>2021 Royalty Boulevard Portland, OR 98199</span>
                  </div>
                </div>
                <button>Other Adress</button>
              </div>
              <div className="add-card">
                <h2>Selected Product</h2>
                <div className="add-card-form">
                  <section>
                    <h3>Holder Name</h3>
                    <input type="text" placeholder="Enter your name" />
                  </section>
                  <section>
                    <h3>Card Number</h3>
                    <input
                      type="text"
                      placeholder="0000 - 0000 - 0000 - 0000"
                    />
                  </section>
                  <section>
                    <h3>Expiry Date</h3>
                    <input type="text" placeholder="Select expiry date" />
                    <a href="">
                      <img src="icons/calendar.svg" alt="" />
                    </a>
                  </section>
                  <section>
                    <h3>CVV</h3>
                    <input type="text" placeholder="Enter your cvv" />
                  </section>
                </div>
                <div className=" add-card-btns">
                  <button className="desktop cancel"> Cancel</button>
                  <button className="desktop ">Checkout</button>
                  <button className="phone "> Add Now</button>
                  <button className="phone cancel">Discard</button>
                </div>
              </div>
            </div>
            <div className="product-summary">
              <h3>Product Summary</h3>
              <ul className="heavy">
                <li>
                  <span>product</span> <span> price</span>
                </li>
                <li>
                  <span>product</span> <span>price</span>
                </li>
                <li>
                  <span>product</span> <span>price</span>
                </li>
              </ul>
              <hr />
              <ul className="light">
                <li>
                  <span>Total Price</span> <span> price</span>
                </li>
                <li>
                  <span>Total Price(Discount)</span>
                  <span> price</span>
                </li>
                <li>
                  <span>Tax & Fee</span>
                  <span> price</span>
                </li>
              </ul>
              <div className="total">
                <h3>Total Price</h3> <span>price</span>
              </div>
              <section className="total-price">
                <p>
                  <img src="/icons/shape.png" alt="icon" />
                  <span>
                    <h3>Promo applied</h3>
                    <p>1x shipping discount used</p>
                  </span>
                </p>
              </section>
              <button className="checkout"> Checkout</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
