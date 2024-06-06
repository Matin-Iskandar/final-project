import React, { useState, useEffect } from "react";
import { getProductById } from "../../api/product";
import { NavLink, useParams } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useDispatch } from "react-redux";
import { addProduct } from "../../ features/productsSlice";
import "./style.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getProduct() {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        setError("Failed to fetch product details.");
      }
    }
    getProduct();
  }, [productId]);
  if (error) {
    return (
      <div className="product-detail-container">
        <p>{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-container">
        <p>Loading...</p>
      </div>
    );
  }

  const imageUrl =
    import.meta.env.VITE_UPLOAD_IMAGE +
    product?.data?.attributes?.images?.data?.attributes?.url;

  return (
    <div className="product-detail-container">
      <div className="links-search">
        <ul>
          <li>
            <NavLink to={`/home`}>
              Home <img src="/images/arrow.svg" alt="" />
            </NavLink>
          </li>

          <li>
            <a href="#">{product.data.attributes.Title}</a>{" "}
            <img src="/images/arrow.svg" alt="arrow" />
          </li>
        </ul>
      </div>
      <section className="product">
        <div className="img-container">
          <>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src={imageUrl} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={imageUrl} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={imageUrl} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={imageUrl} />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img className="slider-img" src={imageUrl} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slider-img" src={imageUrl} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slider-img" src={imageUrl} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="slider-img" src={imageUrl} />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
        <div className="details">
          <h2>{product.data.attributes.Title}</h2>
          <section className="detail-rating">
            <span>{product.data.attributes.rating}</span>
            <img src="/icons/rating.svg" alt="" />
          </section>{" "}
          <p>${product.data.attributes.price}</p>
          <span>{product.data.attributes.description}</span>
          <hr />
          <div className="product-variant">
            <h3>Product Variant</h3>
            <div className="select">
              <div className="type">
                <h4>Type</h4>
                <select name="Type" id="Type">
                  <option value="type"> {product.data.attributes.type}</option>
                  <option value="type"> Premium</option>
                  <option value="type"> Wired</option>
                </select>
              </div>
              <div className="color">
                <h4>Color</h4>
                <select name="Color" id="Color">
                  <option value="type"> {product.data.attributes.color}</option>
                  <option value="type"> Red</option>
                  <option value="type">White</option>
                </select>
              </div>
            </div>
          </div>
          <div className="btns">
            <a href={`/shopping-cart`}> Buy Now</a>
            <button
              onClick={() => {
                const currentProducts = JSON.parse(
                  localStorage.getItem("product") ?? "[]"
                );
                const productFromStorage = currentProducts.find(
                  (p) => p.id === product.data.id
                );
                if (productFromStorage) {
                  productFromStorage.quantity += 1;
                  localStorage.setItem(
                    "product",
                    JSON.stringify(currentProducts)
                  );
                } else {
                  localStorage.setItem(
                    "product",
                    JSON.stringify([
                      ...currentProducts,
                      { product:{...product.data}, quantity: 1 },
                    ])
                  );
                }
                dispatch(addProduct({ product: product.data }));
              }}
            >
              <CiShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </section>
      <main>
        <section className="main-nav">
          <span>Detail Product</span>
          <span> Merchant</span>
          <span> Reviews</span>
          <span> Related Product</span>
        </section>
        <h2>{product.data.attributes.Title}</h2>
        <p>{product.data.attributes.description}</p>
        <section className="specifications">
          <section className="specification">
            <h3>Spesification</h3>
            <section>
              <ul className="spesification-detail">
                <li>Brand</li>
                <li>Type</li>
                <li>Resolution</li>
                <li>Max Speed </li>
                <li>Max Acceleration </li>
              </ul>
              <ul className="spesification-names">
                <li>Logitech</li>
                <li>Wired</li>
                <li>100-25600 dpi</li>
                <li>
                  <IoIosArrowForward />
                  40G2
                </li>

                <li>
                  <IoIosArrowForward />
                  300 IPS
                </li>
              </ul>
            </section>
          </section>
          <section className="in-the-box">
            <h3>In The Box</h3>
            <h5>
              <img src="/icons/greendone.svg" />{" "}
              <span>UG502 X LIGHTSPEED Wireless Gaming Mouse</span>
            </h5>
            <h5>
              <img src="/icons/greendone.svg" />
              <span>DPI-Shift button cover</span>
            </h5>
            <h5>
              <img src="/icons/greendone.svg" />
              <span>USB-C charging cable</span>
            </h5>
            <h5>
              <img src="/icons/greendone.svg" />
              <span>LIGHTSPEED USB-A receiver</span>
            </h5>
            <h5>
              <img src="/icons/greendone.svg" />
              <span>USB extension cable</span>
            </h5>
            <h5>
              <img src="/icons/greendone.svg" />
              <span>User Documentation</span>
            </h5>
          </section>

          <section className="system-reguired">
            <h3>System Required</h3>
            <h5>- USB port download</h5>
            <h5>- Internet access for optional software</h5>
            <h5>- Windows® 10 or later</h5>
            <h5>- macOS 10.14 or later</h5>
          </section>
        </section>
        <hr />
        <div className="merchant-info">
          <div>
            <h2>Merchant Information</h2>
            <div>
              <img src="/images/logotech.png" />
              <div className="merc-info-heading">
                <h5>Logitech Indonesia</h5>
                <span>Jakarta Pusat</span>
                <div className="a-links">
                  <a>Top Rated Merchant</a>
                  <a>Best Merchant</a>
                </div>
              </div>
            </div>
          </div>
          <div className="merc-btns">
            <button>
              <IoChatboxEllipsesOutline className="merc-btn" />
              Chat
            </button>
            <button>
              <CiShop className="merc-btn" />
              Visit Merchant
            </button>
          </div>
        </div>
        <hr />
        <section className="product-reviews">
          <h3>Product Reviews</h3>
          <div className="diagram">
            <img
              className="desktop-diagram"
              src="/images/ratingsch.svg"
              alt=""
            />
            <img
              className="phone-diagram"
              src="/images/ratingsch1.svg"
              alt=""
            />
          </div>
          <h3>Review List</h3>
          <div className="review-list">
            <div className="filter">
              <div className="review-filter">
                <h2>Reviews Filter</h2>
                <hr />
                <h3>Rating</h3>
                <label>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>{" "}
                  <span>
                    {" "}
                    <img src="/icons/rating.svg" alt="rating" /> 5
                  </span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Bike"
                  ></input>
                  <img src="/icons/rating.svg" alt="rating" /> 4
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <img src="/icons/rating.svg" alt="rating" /> 3
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>{" "}
                  <img src="/icons/rating.svg" alt="rating" /> 2
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>{" "}
                  <img src="/icons/rating.svg" alt="rating" /> 1
                </label>
                <hr />
                <h3>Review Topics</h3>
                <label>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>{" "}
                  <span>Product Quality</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>{" "}
                  <span>Seller Services</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>{" "}
                  <span>Product Price</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>{" "}
                  <span>Shipment </span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>{" "}
                  <span>Match with Description </span>
                </label>
              </div>
            </div>
            <section className="review">
              <div className="review-btns">
                <section>
                  <button>All Reviews</button>
                  <button>With Photo & VIdeo</button>
                  <button>With Description</button>
                </section>
                <img src="/icons/filter.svg" alt="" />
              </div>
              <section className="comment">
                <div className="rating">
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                </div>
                <h4>This is amazing product I have.</h4>
                <span>July 2, 2020 1:04 PM</span>
                <section className="desicion">
                  <div className="client">
                    <img src="/icons/profile-photo.svg " alt="" />
                    <h5>Darlene Robertson</h5>
                  </div>
                  <div className="btns">
                    <button>
                      <AiOutlineLike />
                    </button>
                    <button>
                      <AiOutlineDislike />
                    </button>
                  </div>
                </section>
              </section>
              <hr />
              <section className="comment">
                <div className="rating">
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                </div>
                <h4>This is amazing product I have.</h4>
                <span>July 2, 2020 1:04 PM</span>
                <section className="desicion">
                  <div className="client">
                    <img src="/icons/profile-photo.svg " alt="" />
                    <h5>Darlene Robertson</h5>
                  </div>
                  <div className="btns">
                    <button>
                      <AiOutlineLike />
                    </button>
                    <button>
                      <AiOutlineDislike />
                    </button>
                  </div>
                </section>
              </section>
              <hr />
              <section className="comment">
                <div className="rating">
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                </div>
                <h4>This is amazing product I have.</h4>
                <span>July 2, 2020 1:04 PM</span>
                <section className="desicion">
                  <div className="client">
                    <img src="/icons/profile-photo.svg " alt="" />
                    <h5>Darlene Robertson</h5>
                  </div>
                  <div className="btns">
                    <button>
                      <AiOutlineLike />
                    </button>
                    <button>
                      <AiOutlineDislike />
                    </button>
                  </div>
                </section>
              </section>
              <hr />
              <section className="comment">
                <div className="rating">
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                  <img src="/icons/rating.svg" />
                </div>
                <h4>This is amazing product I have.</h4>
                <span>July 2, 2020 1:04 PM</span>
                <section className="desicion">
                  <div className="client">
                    <img src="/icons/profile-photo.svg " alt="" />
                    <h5>Darlene Robertson</h5>
                  </div>
                  <div className="btns">
                    <button>
                      <AiOutlineLike />
                    </button>
                    <button>
                      <AiOutlineDislike />
                    </button>
                  </div>
                </section>
              </section>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
