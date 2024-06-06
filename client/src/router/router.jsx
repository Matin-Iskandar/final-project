import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../pages/Layout";
import ProductDetail from "../pages/ProductDetail";
import CheckOut from "../pages/ChechOut";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import ShoppingCart from "../pages/ShoppingChart";
import Article from "../pages/Article";
import SearchResult from "../pages/SearchResult";
import Home from "../pages/HomePage";
import ReadMore from "../pages/Article/components/ReadMore";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/product-detail/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/check-out",
        element: <CheckOut />,
      },
      {
        path: "/checkout-success",
        element: <CheckoutSuccess />,
      },
      {
        path: "/search-result/:categoryId",
        element: <SearchResult />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/article/read-more",
        element: <ReadMore />,
      },
    ],
  },
]);
