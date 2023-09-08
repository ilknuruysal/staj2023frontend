import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../components/cartItems";
const initialState = {
  cartItems: [],
  amount: 2,
  total: 0,
  bag: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateBag: (state, action) => {
      state.bag = action.payload;
    },
    updateCartItems: (state, action) => {
      console.log(action.payload);
      state.cartItems = action.payload;
      state.isLoading = false;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.bag = cartItem.bag + 1;

      //cartItem.productStock = cartItem.productStock + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.bag = cartItem.bag - 1;
    },
    calculateTotals: (state) => {
      let bag = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        bag += item.bag;
        total += item.bag * item.productPrice;
      });
      state.bag = bag;
      state.total = total;
    },
  },
});

//console.log(cartSlice);
export const {
  updateCartItems,
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  updateBag,
} = cartSlice.actions;
export default cartSlice.reducer;
