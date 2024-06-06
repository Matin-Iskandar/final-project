import React, { useEffect } from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  removeProduct,
  setProducts,
  addProduct,
} from "../ features/productsSlice";

const Cart = () => {
  const products = useSelector((state) => state.customerReducer.basketProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("product")) || [];
    dispatch(setProducts(storedProducts));
  }, []);

  const handleRemoveProduct = (product) => {
    const currentProducts = JSON.parse(localStorage.getItem("product")) || [];
    const updatedProducts = currentProducts.filter(
      (p) => p.product.id !== product.product.id
    );
    localStorage.setItem("product", JSON.stringify(updatedProducts));
    dispatch(removeProduct(product));
  };

  const handleAddProduct = (product) => {
    const currentProducts = JSON.parse(localStorage.getItem("product")) || [];
    const productFromStorage = currentProducts.find(
      (p) => p.product.id === product.product.id
    );
    if (productFromStorage) {
      productFromStorage.quantity += 1;
    } else {
      currentProducts.push({ product: { ...product.product }, quantity: 1 });
    }
    localStorage.setItem("product", JSON.stringify(currentProducts));
    dispatch(addProduct({ product: product.product }));
  };
  return (
    <section className="cart-container">
      <div className="heading">
        <img src="/images/logotech.png" alt="company-logo" />
        <div className="heading-info">
          <h2>Logitech Indonesia</h2>
          <h3>Central Jakarta</h3>
        </div>
      </div>
      <div className="cart-items">
        {products.map((product) => (
          <div key={product.product.id} className="cart-item">
            <div className="item-info">
              <input type="checkbox" id="" />
              <div className="cart-image-container">
                {console.log(
                      )}
                <img
                  src={
                    import.meta.env.VITE_UPLOAD_IMAGE +
                    product.product.attributes?.images?.data?.attributes?.url
                  }
                  alt={product.product.attributes.Title}
                />
              </div>
              <div className="cart-product-info-container">
                <h4>{product.product.attributes.Title}</h4>
                <h6>{product.product.attributes.description}</h6>
                <p>${product.product.attributes.price}</p>
              </div>
            </div>
            <div className="cart-btns">
              <div className="quantities-btns">
                <button>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => handleAddProduct(product)}>+</button>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemoveProduct(product)}
              >
                <img src="/icons/trash.svg" alt="" />
              </button>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
