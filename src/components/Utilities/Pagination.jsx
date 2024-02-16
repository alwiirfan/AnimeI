import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export default function Pagination({ page, setPage, lastPage }) {
  // setelah next/prev maka akan auto scroll ke atas
  function scrollTop() {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // go to first page
  function handleToFirstPage() {
    setPage(1);
    scrollTop();
  }

  // go to last page
  function handleToLastPage() {
    setPage(lastPage);
    scrollTop();
  }

  //previous page
  function handlePrevPage() {
    setPage((prev) => prev - 1);
    scrollTop();
  }

  //next page
  function handleNextPage() {
    setPage((next) => next + 1);
    scrollTop();
  }

  return (
    <>
      <div className="w-full flex justify-center items-center gap-4">
        <button
          onClick={handleToFirstPage}
          className=" text-color-primary hover:text-color-accent hover:scale-105 transition-all"
        >
          Go to First Page
        </button>
        <p className="font-bold text-color-primary">|</p>
        <button
          onClick={handleToLastPage}
          className=" text-color-primary hover:text-color-accent hover:scale-105 transition-all"
        >
          Go to Last Page
        </button>
      </div>
      <div className="flex justify-center items-center py-4 gap-4 text-color-dark md:text-2xl text-xl">
        {page <= 1 ? null : (
          <div
            onClick={handlePrevPage}
            className="flex justify-around items-center bg-color-primary hover:scale-110 hover:text-color-accent md:w-40 md:h-10 w-20 h-10"
          >
            <button className="transition-all hover:scale-110">
              <CaretLeft size={30} />
            </button>
          </div>
        )}
        <p className="font-bold text-color-primary">
          {page} of {lastPage}
        </p>
        {page >= lastPage ? null : (
          <div
            onClick={handleNextPage}
            className="flex justify-around items-center bg-color-primary hover:scale-110 hover:text-color-accent md:w-40 md:h-10 w-20 h-10"
          >
            <button className="transition-all hover:scale-110">
              <CaretRight size={30} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
