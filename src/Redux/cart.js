import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 41,
      name: `MILLED STRIPE ATTICUS SUIT`,
      size: 50,
      color: "black",
      price: 6550,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {},
    deleteItem(state, action) {},
    increaseItemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
    clearCart(state, action) {},
  },
});
