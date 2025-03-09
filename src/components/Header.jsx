import React, { useState } from 'react';
import Login from '../pages/Login';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        // Header
        <div className='header'>
            <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        <img src='../../public/img/icon.svg' alt='' width='50' height='30' className='d-inline-block align-text-top' />
                        NextUse
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
                            중고의 새로운 기준
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
                        </ul>

                        {/* Login modal */}
                        <button
                            onClick={() => {
                                setIsModalOpen(true);
                            }}
                            className='btn btn-secondary'
                        >
                            Login
                        </button>
                        <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
