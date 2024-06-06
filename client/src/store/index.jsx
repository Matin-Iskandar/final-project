import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../ features/productsSlice";
export const store = configureStore({
  reducer: {
    customerReducer,
  },
});


