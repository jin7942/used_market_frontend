const Header = () => {
    return (
        // Header
        <div classNameName='header'>
            <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        <img src='../../public/img/logo.svg' alt='' width='50' height='30' className='d-inline-block align-text-top' />
                        Brand Name
                    </a>

                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarTogglerDemo01'
                        aria-controls='navbarTogglerDemo01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
                        <a className='navbar-brand' href='#'>
                            Hidden brand
                        </a>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a className='nav-link active' aria-current='page' href='#'>
                                    Home
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Link
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#' tabindex='-1' aria-disabled='true'>
                                    Disabled
                                </a>
                            </li>
                        </ul>
                        <a className='navbar-text' href='#'>
                            Login
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
