import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store";
export const cartStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
