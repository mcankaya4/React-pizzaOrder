import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  // cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: "Vegetale",
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
    {
      pizzaId: 11,
      name: "Spinach and Mushroom",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload: newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload: pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload: pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;

      if (!item.quantity)
        state.cart = state.cart.filter((i) => i.pizzaId !== item.pizzaId);
    },
    decreaseItemQuantity(state, action) {
      // payload: pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
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
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

// Performan için reselect kullandık.
export const getTotalCartPrice = createSelector([getCart], (cart) =>
  cart.reduce((sum, item) => sum + item.totalPrice, 0),
);
export const getTotalCartQuantity = createSelector([getCart], (cart) =>
  cart.reduce((sum, item) => sum + item.quantity, 0),
);
export const isInCart = (pizzaId) =>
  createSelector([getCart], (cart) =>
    cart.some((item) => item.pizzaId === pizzaId),
  );
export const getCartItemQuantity = (pizzaId) =>
  createSelector([getCart], (cart) => {
    const item = cart.find((item) => item.pizzaId === pizzaId);
    return item ? item.quantity : 0;
  });
