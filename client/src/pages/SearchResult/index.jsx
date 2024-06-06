import React, { useState, useEffect } from "react";
import { getProducts } from "../../api/products";
import { NavLink, useParams } from "react-router-dom";
import { getCategories } from "../../api/category";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import "./style.scss";
const Index = () => {
  const [categories, setCategories] = useState([]);
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [isArrowDown, setIsArrowDown] = useState(true);
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [priceSortOption, setPriceSortOption] = useState(null);
  useEffect(() => {
    async function getAllCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    getAllCategories();
  }, []);
  useEffect(() => {
    async function getAllProducts() {
      const data = await getProducts({
        categoryId,
        priceGte: priceRange.min,
        priceLte: priceRange.max,
        currentPage,
        priceSortOption,
        // searchItem,
      });
      setProducts(data);
      setPagination(data.meta.pagination);
    }

    getAllProducts();
  }, [currentPage, priceRange, categoryId, priceSortOption]);
  const handleArrow = () => {
    setIsArrowDown(!isArrowDown);
  };
  const handlePreviousPage = () => {
    if (pagination.page > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const firstRange = () => {
    setPriceRange({ min: 200, max: 500 });
  };
  const secondRange = () => {
    setPriceRange({ min: 0, max: 200 });
  };
  const thirdRange = () => {
    setPriceRange({ min: 1000, max: 1500 });
  };

  const currentCategory = categories.data?.find(
    (category) => category.id === parseInt(categoryId)
  );
  return (
    <div className="search-result-container">
      <div className="links-search">
        <ul>
          <li>
            <NavLink to={"/home"}>
              Home <img src="/images/arrow.svg" alt="" />
            </NavLink>
          </li>

          <li>
            {currentCategory ? (
              <a>{currentCategory.attributes.title}</a>
            ) : (
              <span>Loading...</span>
            )}
            <img src="/images/arrow.svg" alt="arrow" />
          </li>
        </ul>
      </div>
      <div className="heading">
        <div className="fist-part-search-result">
          <h2>
            Showing product for “
            {currentCategory ? (
              <a>{currentCategory.attributes.title}</a>
            ) : (
              <span>Loading...</span>
            )}
            ”
          </h2>
          <h3>Showing 1 - 60 Products</h3>
        </div>
        <div className="second-part-search-result">
          <label>Sort by:</label>
          <button
            onClick={() => {
              setPriceSortOption("desc");
            }}
          >
            <IoIosArrowDown />
          </button>
          <button
            onClick={() => {
              setPriceSortOption("asc");
            }}
          >
            {" "}
            <IoIosArrowUp />
          </button>
          <section className="result-link-btns">
            <a href="">
              <img src="/icons/filter.svg" alt="filter" />
            </a>
            <a className="element-select" href="">
              <img
                className="element"
                src="/icons/element-3.svg"
                alt="element"
              />
            </a>
            <a href="">
              <img src="/icons/menu.svg" alt="burger" />
            </a>
          </section>
        </div>
      </div>
      <main>
        <div className="product-filter">
          <div>
            <h2>Filter Option</h2>
            <hr />
            <h3>Best Filter</h3>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>
                <img src="/icons/rating.svg" alt="rating" /> 4 stars or upper
              </span>
            </label>
            <label>
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Bike"
              ></input>
              <span>Same-day delivery</span>
            </label>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>COD </span>
            </label>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>Discount </span>
            </label>
            <hr />
            <h3>Location</h3>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>Bandung</span>
            </label>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>Jakarta</span>
            </label>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>Medan</span>
            </label>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>Surabaya </span>
            </label>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>Jogja </span>
            </label>
            <button className="normal-filter-btn">Show All</button>
            <hr />
            <h3>Category</h3>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>Electronic </span>
            </label>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>Fashion </span>
            </label>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>Action Figure </span>
            </label>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>Book </span>
            </label>
            <label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span>Gaming </span>
            </label>
          </div>
          <button className="normal-filter-btn">Show All Categories</button>
          <hr />
          <div className="price-race-heading">
            <h3>Price Range</h3>
            {isArrowDown ? (
              <button className="arrow-down arrow-btn-filter">
                <IoIosArrowDown onClick={handleArrow} />
              </button>
            ) : (
              <button className="arrow-up arrow-btn-filter">
                <IoIosArrowUp onClick={handleArrow} />
              </button>
            )}
          </div>
          <section
            className={isArrowDown ? "filter-prices" : "filter-prices-none"}
          >
            <section className="usd-select">
              <select name="USD-max-price" id="USD-max-price">
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
                <option value="STERLING">STERLING</option>
              </select>
              <div className="divider-for-section">|</div>
              <input
                type="number"
                placeholder="Minimum Price"
                onChange={(e) =>
                  setPriceRange((prev) => ({ ...prev, min: e.target.value }))
                }
              />
            </section>
            <section className="usd-select">
              <select name="USD-max-price" id="USD-max-price">
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
                <option value="STERLING">STERLING</option>
              </select>
              <div className="divider-for-section">|</div>
              <input
                type="number"
                placeholder="Minimum Price"
                onChange={(e) =>
                  setPriceRange((prev) => ({ ...prev, max: e.target.value }))
                }
              />
            </section>

            <button onClick={firstRange} className="price-range-btns">
              $200-$500
            </button>
            <button onClick={secondRange} className="price-range-btns">
              $0-$200
            </button>
            <button onClick={thirdRange} className="price-range-btns">
              $500-$1500
            </button>
          </section>
        </div>
        <div className="product-list">
          {products.data?.map((product) => (
            <a
              className="product-card"
              key={product.id}
              href={`/product-detail/${product.id}`}
            >
              <div className="product-img-container">
                <div className="product-card-container">
                  <img className="heart-product" src="/heart.svg" />
                </div>
                {console.log(product.attributes?.images?.data?.attributes.url)}
                <img
                  className="product-img"
                  src={
                    import.meta.env.VITE_UPLOAD_IMAGE +
                    product.attributes?.images?.data?.attributes.url
                  }
                  alt="product"
                />
              </div>
              <div className="card-heading">
                <h2>{product.attributes.Title} </h2>
                <h3>${product.attributes.price}</h3>
              </div>
              <h5>{product.attributes.description}</h5>
              <h4>
                <img src="/icons/rating.svg" alt="" />{" "}
                {product.attributes.rating}
              </h4>
            </a>
          ))}
        </div>
      </main>
      <div className="btns">
        <button
          onClick={handlePreviousPage}
          disabled={pagination?.page <= 0}
          className="btn-arrow "
        >
          <IoIosArrowBack />
        </button>
        {new Array(pagination?.pageCount).fill("").map((page, index) => {
          return (
            <button
              className={
                currentPage == index + 1 ? "active" : "pagination-btn "
              }
              key={index}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={handleNextPage}
          disabled={pagination?.page == 2}
          className="btn-arrow"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Index;
