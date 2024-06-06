import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

import "./Main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);
