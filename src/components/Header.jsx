import React, { useState, useEffect } from 'react';
import Login from '../pages/Login';
import { Link, useNavigate } from 'react-router-dom';

// TODO: 헤더에 사용자 정보 표시
const Header = () => {
    // 모달 상태값
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 로그인 상태값
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const navigate = useNavigate();

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    // 로그아웃 함수
    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate('/');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    return (
        <header className='header mb-5'>
            <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    {/* 브랜드 로고 및 이름 */}
                    <Link to='/' className='navbar-brand'>
                        <img src='/img/icon.svg' alt='Logo' width='50' height='30' className='d-inline-block align-text-top' />
                        NextUse
                    </Link>

                    {/* 모바일 토글 버튼 */}
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

                    {/* 네비게이션 메뉴 */}
                    <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
                        {/* 데스크톱에서는 브랜드 메시지, 모바일에서는 collapse 내부에 추가 */}
                        <Link to='/' className='navbar-brand d-lg-none'>
                            중고의 새로운 기준
                        </Link>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link active'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <span className='nav-link'>Chat</span>
                            </li>
                        </ul>

                        {/* 회원가입 및 로그인 버튼 */}
                        <div className='d-flex align-items-center'>
                            {isLoggedIn ? (
                                <>
                                    <Link to='/myPage' className='nav-link'>
                                        <span className='nav-item text-white'>{userInfo.userNickname} 님</span>
                                        <button className='btn btn-secondary ms-2'>MyPage</button>
                                    </Link>
                                    <div className='nav-link'>
                                        <button className='btn btn-secondary ms-2' onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link to='/signup' className='nav-link'>
                                        <button className='btn btn-secondary ms-2'>SignUp</button>
                                    </Link>
                                    <button onClick={() => setIsModalOpen(true)} className='btn btn-secondary ms-2'>
                                        Login
                                    </button>
                                </>
                            )}
                        </div>
                        <Login isOpen={isModalOpen} setIsLoggedIn={setIsLoggedIn} onClose={() => setIsModalOpen(false)} />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
