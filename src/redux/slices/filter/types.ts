export interface filterSliceState {
  categoryId: number;
  currentPage: number;
  searchValue: string;
  sort: SortType;
}
export type SortType = {
  name: "популярности" | "цене" | "алфавиту";
  sortProperty: "rating" | "title" | "price";
};
