import React, { useState } from "react";
import "./style.scss";
import { IoIosArrowForward } from "react-icons/io";
import Pagination from "../../components/pagination";
import Cart from "../../components/Cart";
import AddCard from "../../components/cartoptions"
import { useSelector } from "react-redux";
const Index = () => {
  const totalDiscount = 100;
  const tax = 54;

  const productState = useSelector(
    (state) => state.customerReducer.basketProducts
  );
  const [products, setProducts] = useState([]);
  const [isChecked, setIsChecked]=useState(true)
  const total = productState
    .map((product) => {
      const price = parseFloat(product.product.attributes.price * product.quantity);
      return isNaN(price) ? 0 : price;
    })
    .reduce((acc, price) => acc + price, 0);
  return (
    <div className="shopping-chart">
      <header>
        <div className="shopping-chart-header">
          <h2>Shopping Chart</h2>
          <h3>Showing your choices product</h3>
        </div>
        <div className="second-shopping-chart-header">
          <div className="pc-select">
            <label>Sort By : </label>
            <select name="Latest added" id="">
              <option value="Latest-added">Latest added</option>
            </select>
          </div>
        </div>
      </header>
      <main>
       {isChecked? <Cart/>:<AddCard/>}
        <section className="shoppingcart-second-part-desktop">
          <h2>Product Summary</h2>
          <section className="selected-products">
            {productState.map((product) => {
              return (
                <div className="product-row" key={product.product.id}>
                  <h3>{product.product.attributes.Title}</h3>
                  <span>{product.product.attributes.price}</span>
                </div>
              );
            })}
          </section>{" "}
          <hr />
          <section className="list-row">
            <h4>Total Price</h4>
            <span>${total}</span>
          </section>
          <section className="list-row">
            <h4>Total Price(Discount)</h4>
            <span>${totalDiscount}</span>
          </section>
          <section className="list-row">
            <h4>Tax & Fee</h4>
            <span>${tax}</span>
          </section>
          <hr />
          <div className="total-price">
            {" "}
            <h2>Total Price</h2>
            <span>${total + totalDiscount + tax}</span>{" "}
          </div>
          <section className="promo">
            <img src="/icons/promo.svg" />
            <div className="heading">
              <h4>Use a Promo</h4>
              <h5>Choose product to use promo</h5>
            </div>
            <IoIosArrowForward />
          </section>
          <button onClick={()=>(setIsChecked(!isChecked))}>Checkout</button>
        </section>
      </main>
      <section className="pagination">
        <Pagination />
      </section>
      <section className="shoppingcart-second-part-mobile">
        <h2>Product Summary</h2>
        <section className="selected-products">
          {productState.map((product) => {
            return (
              <div className="product-row" key={product.product.id}>
                 <h3>{product.product.attributes.Title}</h3>
                  <span>{product.product.attributes.price}</span>
              </div>
            );
          })}
        </section>{" "}
        <hr />
        <section className="list-row">
          <h4>Total Price</h4>
          <span>${total}</span>
        </section>
        <section className="list-row">
          <h4>Total Price(Discount)</h4>
          <span>${totalDiscount}</span>
        </section>
        <section className="list-row">
          <h4>Tax & Fee</h4>
          <span>${tax}</span>
        </section>
        <hr />
        <section className="total-price">
          <h2>Total Price</h2>
          <span>${total + totalDiscount + tax}</span>{" "}
        </section>
        <section className="promo">
          <div>
            <img src="/icons/promo.svg" />
            <div className="heading">
              <h4>Use a Promo</h4>
              <h6>1x shipping discount used</h6>
            </div>
          </div>
          <IoIosArrowForward />
        </section>
        <button onClick={()=>(setIsChecked(!isChecked))}>Checkout</button>

      </section>
    </div>
  );
};

export default Index;
