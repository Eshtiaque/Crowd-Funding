import ReactPaginate from 'react-paginate';

const Pagination = ({ setCurrentPage, totalData }) => {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <ReactPaginate
        className='flex items-center gap-5  ms-8 lg:pt-3 md:pt-3 pt-3 pb-3'
        pageClassName='block border-2 border-gray-500 text-white px-3 rounded hover:bg-yellow-500 hover:border-yellow-500 hover:text-white cursor-pointer'
        activeClassName='bg-yellow-500 border-yellow-500 text-white'
        nextLabel=''
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalData}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;