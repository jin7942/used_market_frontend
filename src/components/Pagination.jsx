/**
 * 페이지 네이션
 * @param {currentPage, totalPages, onPageChange} param0
 * @returns
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageRange = 5;
    const currentGroup = Math.floor(currentPage / pageRange);
    const start = currentGroup * pageRange;
    const end = Math.min(start + pageRange, totalPages);

    const pages = [];
    for (let i = start; i < end; i++) {
        pages.push(
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => onPageChange(i)}>
                    {i + 1}
                </button>
            </li>,
        );
    }

    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 0}
                        >
                            Previous
                        </button>
                    </li>

                    {pages}

                    <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages - 1}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
