import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      const existing = state.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.qty += 1; // increase qty if already exists
      } else {
        state.push({ ...action.payload, qty: 1 }); // add with qty=1 if new
      }
    },

    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IncreaseQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },
    DecreaseQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
  },
});

export const { AddItem, RemoveItem, IncreaseQty, DecreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;
