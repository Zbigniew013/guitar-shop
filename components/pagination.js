const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 18/8

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className='flex gap-2 justify-center font-antonio text-fuchsia-blue-800'>
        {pages.map(page => (
          <a
            key={page}
            className='cursor-pointer'
            onClick={() => onPageChange(page)}
          >
            <li
              className={
                page === currentPage
                  ? 'flex justify-centre items-center w-8 h-8 border border-solid rounded-md border-fuchsia-blue-700 bg-orchid-300 justify-center'
                  : 'flex justify-centre items-center w-8 h-8 border border-solid rounded-md border-fuchsia-blue-700 justify-center'
              }
            >
              {page}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
