import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import type { FetchPizzasArgs, Pizza } from "./types";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async (params: FetchPizzasArgs) => {
    const { currentPage, sort, sortDirection, searchValue, categoryId } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://698b33a36c6f9ebe57bbf32b.mockapi.io/pizzaCatalog?page=${currentPage}&limit=4${!categoryId ? `&sortBy=${sort.sortProperty}&order=${sortDirection}&search=${searchValue}` : `&category=${categoryId}&sortBy=${sort.sortProperty}&order=${sortDirection}&search=${searchValue}`}`
    );
    return data;
  }
);

const Status = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
} as const;

export type Status = (typeof Status)[keyof typeof Status];

interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<Pizza[]>) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
