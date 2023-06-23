const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className='flex justify-between items-center '>
        {pages.map(page => (
          <li
            key={page}
            className={`
            ${
              page === currentPage
                ? 'flex justify-centre items-center w-2 h-2 border border-solid border-cyan-600 border-s-brandy-rose-300 '
                : 'flex justify-centre items-center w-2 h-2 border border-solid border-cyan-300 border-s-brandy-rose-600'
            }`}
          >
            <a className='cursor-pointer' onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
