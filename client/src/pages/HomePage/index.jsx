import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getCategories } from "../../api/category";
import "./style.scss";
import Pagination from "../../components/pagination";

const index = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getAllCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    getAllCategories();
  }, []);
  return (
    <div className="container">
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
      <main>
        <section className="featured-category">
          <div className="featured-category-heading">
            <h2>Fetatured Category</h2> <button>View Detail</button>
          </div>
          <div className="scrollbar">
            {categories?.data?.map((category) => {
              return (
                <NavLink
                  to={`/search-result/${category.id}`}
                  className="product-card"
                  key={category.id}
                >
                  <img
                    src={
                      import.meta.env.VITE_UPLOAD_IMAGE + category.attributes.img.data[0].attributes.url
                    }
                    alt="product"
                  />
                  <h3>{category.attributes.title}</h3>
                  <h5>{category.attributes.productcount}k products</h5>
                </NavLink>
              );
            })}
          </div>
        </section>

        <section className="pagination">
          <Pagination />
        </section>
        <section className="recommended-product">
          <img src="/images/tablet.svg" alt="tablet" />
          <div className="recommedended-part-two">
            <h2>Ipad Air Gen 5</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
              sapien quam risus sed diam.
            </p>
            <div className="tablet-btns">
              <button>Buy $900</button>
              <a href={`/`}> Buy Now</a>
              <button>View Detail</button>
            </div>
          </div>
        </section>
        <section className="lenny-article">
          <section className="home-article-heading">
            <h2>Lenny’s Article</h2>
            <NavLink to={`/article`}>
              <button>View Detail</button>
            </NavLink>
          </section>

          <div className="home-articles">
            <div className="home-article">
              <img src="/images/articlekomp.svg" alt="komp" />
              <label>22 Dec 2022</label>
              <h2>Make your desk more neat and beautiful</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam
                scelerisque pharetra id. Maecenas diam eu amet cras
              </p>
            </div>
            <div className="home-article">
              <img src="/images/articlewoman.svg" alt="woman" />
              <label>22 Dec 2022</label>
              <h2>What are the fashion trend in 2023?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam
                scelerisque pharetra id. Maecenas diam eu amet cras
              </p>
            </div>
            <div className="home-article">
              <img src="/images/articlebook.svg" alt="book" />
              <label>22 Dec 2022</label>
              <h2>What are the fashion trend in 2023?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam
                scelerisque pharetra id. Maecenas diam eu amet cras
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default index;
