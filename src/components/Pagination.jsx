const Pagination = () => {
    return (
        <div className='d-flex justify-content-center'>
            <nav aria-label='...'>
                <ul className='pagination'>
                    <li className='page-item disabled'>
                        <a className='page-link' href='#' aria-disabled='true'>
                            Previous
                        </a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href='#'>
                            1
                        </a>
                    </li>
                    <li className='page-item active' aria-current='page'>
                        <a className='page-link' href='#'>
                            2
                        </a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href='#'>
                            3
                        </a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' href='#'>
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
