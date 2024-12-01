import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart-items")) || [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, img, productName, price } = action.payload;
      const foundItem = state.cartItems.find((item) => item.id === id);
      if (foundItem) {
        foundItem.quantity += 1;
      } else {
        state.cartItems.push({
          img,
          productName,
          id,
          price,
          quantity: 1,
        });
      }
    },
    updateCart(state, action) {
      state.cartItems = action.payload;
    },
    increaseValue(state, action) {
      const { id, price } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item.quantity < 50) {
        item.quantity += 1;
      }
    },
    decreaseValue(state, action) {
      const { id } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  decreaseValue,
  updateCart,
  removeFromCart,
  increaseValue,
} = cartSlice.actions;
export default cartSlice.reducer;
