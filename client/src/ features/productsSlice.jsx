import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketProducts: [],
  search:[],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.basketProducts = action.payload;
    },
    removeProduct: (state, action) => {
      state.basketProducts = state.basketProducts.filter(
        (item) => item.product.id !== action.payload.product.id
      );
    },
    addProduct: (state, action) => {
      const existingProduct = state.basketProducts.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.basketProducts.push({ ...action.payload, quantity: 1 });
        existingProduct.basketProducts.push(product)
      }
    },

  },
});

export const { setProducts, removeProduct, addProduct } = productsSlice.actions;

export default productsSlice.reducer;
