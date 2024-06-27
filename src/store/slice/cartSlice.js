import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    CartData: window.sessionStorage.getItem("cardData")
      ? JSON.parse(window.sessionStorage.getItem("cardData"))
      : [],
  },
  reducers: {
    cartDatas: (state, action) => {
      state.CartData = action.payload;
      console.log(action.payload);
      window.sessionStorage.setItem("cardData", JSON.stringify(state.CartData));
    },
  },
});
export const { cartDatas } = cart.actions;
export default cart.reducer;
