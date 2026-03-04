import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SortType = {
  name: "популярности" | "цене" | "алфавиту";
  sortProperty: "rating" | "title" | "price";
};

interface filterSliceState {
  categoryId: number;
  currentPage: number;
  searchValue: string;
  sort: SortType;
}

const initialState: filterSliceState = {
  categoryId: 0,
  currentPage: 1,
  searchValue: "",
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setCurrentPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
