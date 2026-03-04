import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

type PaginationProps = {
  currentPage: number;
  onChangePage: (number: number) => void;
};

const Pagination = ({ currentPage, onChangePage }: PaginationProps) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={2}
      forcePage={currentPage - 1}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
