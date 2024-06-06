import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import "./pagination.scss"
function App() {
  const perPage = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [popularProducts, setPopularProducts] = useState([]);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    async function getAllProducts() {
      const data = await getProducts({
        page,
        totalPages,
      });
      setTotalPages(data.total_pages);
      setUserList([...userList, ...data.data]);
      setPopularProducts(data);
      setLoading(false);
    }

    getAllProducts();
  }, [page]);

  return (
    <div className="Pagination">
      <h2 className='pagination-heading' >Popular Product on Lenny </h2>
<h3 className='pagination-heading' >Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in</h3>
      <div className="product-list">
          {popularProducts.data?.map((product) => (
            <a
              className="product-card"
              key={product.id}
              href={`/product-detail/${product.id}`}
            >
              <div className="product-img-container">
                <div className="product-card-container">
                  <img className="heart-product" src="/heart.svg" />
                </div>
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
      <div className="clearfix">

      {totalPages !== page && <button className="btn-load-more" onClick={() => setPage(page + 1)}>{loading ? 'Loading...' : 'Load More'}</button>}
      </div>

    </div>
  );
}

export default App;
