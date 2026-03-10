import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { getCartFromLS } from "../../../utils/getCartFromLS";

import type { CartItem, CartSliceState } from "./types";

const { items, totalPrice } = getCartFromLS();

const initialState: CartSliceState = {
  totalPrice,
  items,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = Number(
        state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0).toFixed(2)
      );
    },

    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (!findItem) {
        return;
      }
      if (findItem.count === 1) {
        state.items = state.items.filter((obj) => obj.id !== findItem.id);
      } else {
        findItem.count--;
      }
      state.totalPrice = Number(
        state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0).toFixed(2)
      );
    },

    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);

      state.totalPrice = Number(
        state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0).toFixed(2)
      );
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
