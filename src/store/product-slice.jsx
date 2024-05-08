import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  toggleNavBar: false,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // pure function without sideEffect

    toggleHandler(state, action) {
      state.toggleNavBar = !state.toggleNavBar;
    },

    resetToggleHandler(state, action) {
      state.toggleNavBar = action.payload;
    },

    getProducts(state, action) {
      state.productData.push(action.payload);
    },
  },
});

export const { toggleHandler, resetToggleHandler, getProducts } =
  productSlice.actions;

export default productSlice.reducer;

// Thunk Function
export const fetchProducts = () => {
  return async (dispatch, state) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(getProducts(data));
  };
};
