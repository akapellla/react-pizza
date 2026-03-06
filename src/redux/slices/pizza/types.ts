import type { SortType } from "../filter/types";

export type FetchPizzasArgs = {
  currentPage: number;
  sort: SortType;
  sortDirection: string;
  searchValue: string;
  categoryId: number;
};

export type Pizza = {
  id: string;
  category: number;
  imageUrl: string;
  price: number;
  rating: number;
  sizes: number[];
  title: string;
  types: number[];
};
