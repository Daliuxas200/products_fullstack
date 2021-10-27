import React from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';

const Pagination = ({ page, maxPages, changePage, loading }) => {
  const isDisabled = (loading) => {
    return loading ? 'disabled' : '';
  };
  const generatePagination = () => {
    const paginationElements = [];
    for (let x = 1; x <= maxPages; x++) {
      if (x === 1 || (x >= page - 3 && x <= page + 3) || x === maxPages) {
        if (x !== 1 && x !== maxPages && (x === page - 3 || x === page + 3)) {
          paginationElements.push(
            <span className="pagination__dots" key={x}>
              ...
            </span>
          );
        } else {
          paginationElements.push(
            <span
              className={`pagination__number ${
                page === x ? 'active' : ''
              } ${isDisabled(loading)}`}
              key={x}
              onClick={() => changePage(x)}
            >
              {x}
            </span>
          );
        }
      }
    }
    return paginationElements;
  };

  return (
    <nav className="pagination">
      <div className="pagination__numbers">
        {page !== 1 && (
          <BsChevronLeft
            className={`pagination__arrow pagination__arrow--left ${isDisabled(
              loading
            )}`}
            onClick={() => changePage(page - 1)}
          />
        )}
        {generatePagination()}
        {page !== maxPages && (
          <BsChevronRight
            className={`pagination__arrow pagination__arrow--right ${isDisabled(
              loading
            )}`}
            onClick={() => changePage(page + 1)}
          />
        )}
      </div>
    </nav>
  );
};

export default Pagination;
