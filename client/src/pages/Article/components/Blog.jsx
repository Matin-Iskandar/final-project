import React from "react";
import Card from "../../../components/Card";

import "../Blog.scss";
import { NavLink } from "react-router-dom";
const Blog = () => {
  return (
      <div className="blog-container">
        <section className="heading">
          <h2>The Lenny Blog </h2>
          <h6>All things recruiting:real stories,best practices </h6>
        </section>
        <main>
          <div className="lenny-blog">
            <img src="/images/blogheadingimg.svg" alt="lenny" />
            <div className="infolenny">
              <h4>
                I’m an Lenny delivery driver in Baltimore. My favorite features
                on our vans from Rivian are the air-conditioned seats and the
                screen built into the dash.
              </h4>
              <p>
                Jerome Stanline is a delivery driver for Kangaroo Direct, an
                Lenny Delivery Service Partner in the Baltimore, Maryland area.
                Follow her on a tour of her favorite features in the new
                electric delivery van
                <NavLink className="readmore-btn" to={`/article/read-more`}>
                  {" "}
                  Read more
                </NavLink>
              </p>
              <span >
                Read More <img src="/images/arrow.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="blog-card">
            <Card />
            <button className="load-more-blog-btn">Load More</button>
          </div>
        </main>
      </div>
  );
};

export default Blog;
