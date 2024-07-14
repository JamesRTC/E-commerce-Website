import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.cart.find(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size,
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
      } else {
        state.cart.push(action.payload);
      }
    },

    editItem(state, action) {
      const existingItem = state.cart.find(
        (item) => item.productId === action.payload.productId,
      );

      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
        existingItem.size = action.payload.size;
        existingItem.totalPrice =
          existingItem.quantity * existingItem.unitPrice;
      }
    },
    deleteItem(state, action) {
      const { productId, size } = action.payload;
      state.cart = state.cart.filter(
        (item) => !(item.productId === productId && item.size === size),
      );
    },

    increaseItemQuantity(state, action) {
      const { productId, size } = action.payload;
      const item = state.cart.find(
        (item) => item.productId === productId && item.size === size,
      );
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      const { productId, size } = action.payload;
      const item = state.cart.find(
        (item) => item.productId === productId && item.size === size,
      );
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        if (item.quantity === 0) {
          state.cart = state.cart.filter(
            (cartItem) =>
              cartItem.productId !== productId || cartItem.size !== size,
          );
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  editItem,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);
