import React, { useState } from 'react';
import Login from '../pages/Login';
import { Link } from 'react-router';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        // Header
        <div className='header'>
            <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <Link to='/' className='link'>
                        <span className='navbar-brand' href='#'>
                            <img src='../../public/img/icon.svg' alt='' width='50' height='30' className='d-inline-block align-text-top' />
                            NextUse
                        </span>

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
                    </Link>

                    <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
                        <Link to='/' className='link'>
                            <span className='navbar-brand'>중고의 새로운 기준</span>
                        </Link>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link to='/' className='link'>
                                    <span className='nav-link active'>Home</span>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <span className='nav-link'>Link</span>
                            </li>
                        </ul>

                        <Link to='/signup' className='link'>
                            <span className='navbar-brand'>SignUp</span>
                        </Link>

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
