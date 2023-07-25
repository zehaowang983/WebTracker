import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Paginate({ currentPage, totalPages, onPageChange, loading, ...props }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevPage = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <>
      {totalPages > 1 && (
        <div className="flex items-center justify-between pb-4 md:py-4 text-sm font-semibold">
          <div className="md:pl-4">
            Page{" "}
            <span className="text-slate-400">{currentPage}</span> of{" "}
            <span className="text-slate-400">{totalPages}</span>
          </div>
          <div>
            <button
              disabled={loading || isFirstPage}
              type="button"
              onClick={handlePrevPage}
              className="inline-flex items-center py-2 px-3 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-slate-500 hover:bg-slate-600 focus:outline-none focus:border-slate-700 focus:shadow-outline-slate active:bg-slate-700 transition ease-in-out duration-150"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
              Prev
            </button>
            <button
              disabled={loading || isLastPage}
              type="button"
              onClick={handleNextPage}
              className="ml-3 inline-flex items-center py-2 px-3 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-slate-500 hover:bg-slate-600 focus:outline-none focus:border-slate-700 focus:shadow-outline-slate active:bg-slate-700 transition ease-in-out duration-150"
            >
              Next
              <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Paginate;
