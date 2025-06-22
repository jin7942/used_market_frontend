import React, { useState, useEffect } from 'react';
import Login from '../pages/Login';
import { Link, useNavigate } from 'react-router-dom';
import API from '../common/API';
import util from '../common/util';

const Header = () => {
    const navigate = useNavigate();
    // 모달 상태값
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 로그인 상태값
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    // 로그인 사용자 정보
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    // 장바구니 카운트
    const [countWishlist, setCountWishlist] = useState(0);
    // 알림 카운트
    const [countNotification, setCountNotification] = useState(0);
    // 알림 목록
    const [notificationList, setNotificationList] = useState([]);

    // 로그아웃 함수
    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate('/');
    };

    // 드롭다운 알림 조회 함수
    const handleDropdownOpen = async () => {
        try {
            const res = await API.get('/notification/getListIsReadFalse');
            setNotificationList(res.data.data);
        } catch (e) {
            console.error(e);
        }
    };

    // 알림 전체 읽음 처리
    const handleMarkAllAsRead = async () => {
        try {
            const notificationSeqList = notificationList.map((noti) => noti.seq);
            await API.post('/notification/markAsRead', notificationSeqList);
            setNotificationList([]);
            setCountNotification(0);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);

        if (token) {
            const getWishlistCount = async () => {
                const res = await API.get('/orders/wishlist/count');
                setCountWishlist(res.data.data);
            };
            const getNotificationCount = async () => {
                const res = await API.get('/notification/count');
                setCountNotification(res.data.data);
            };

            getNotificationCount();
            getWishlistCount();
        }
    }, []);

    return (
        <>
            <header className="header mb-5">
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        {/* 브랜드 로고 및 이름 */}
                        <Link to="/" className="navbar-brand">
                            <img
                                src="/img/icon.svg"
                                alt="Logo"
                                width="50"
                                height="30"
                                className="d-inline-block align-text-top"
                            />
                            NextUse
                        </Link>

                        {/* 모바일 토글 버튼 */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01"
                            aria-controls="navbarTogglerDemo01"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* 네비게이션 메뉴 */}
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            {/* 데스크톱에서는 브랜드 메시지, 모바일에서는 collapse 내부에 추가 */}
                            <Link to="/" className="navbar-brand d-lg-none">
                                중고의 새로운 기준
                            </Link>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {/* <span className="nav-link">Chat</span> */}
                                </li>
                            </ul>

                            {/* 회원가입 및 로그인 버튼 */}
                            <div className="d-flex align-items-center">
                                {isLoggedIn ? (
                                    <>
                                        {/* 로그인 상태에서만 보임 */}
                                        {/* 닉네임 */}
                                        <Link to="/myPage" className="nav-link">
                                            <span className="nav-item text-white">
                                                {userInfo.userNickname} 님{' '}
                                            </span>
                                        </Link>
                                        {/* 장바구니 */}
                                        <Link to="/order">
                                            <span className="nav-item text-white ms-2">
                                                {' '}
                                                장바구니{' '}
                                            </span>
                                            <span className="nav-item text-danger">
                                                <strong> [{countWishlist}]</strong>{' '}
                                            </span>
                                        </Link>
                                        {/* 알림 */}
                                        <div className="nav-item dropdown me-3">
                                            <span
                                                className="nav-link dropdown-toggle ms-2 text-white"
                                                role="button"
                                                id="notificationDropdown"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                onClick={handleDropdownOpen}
                                            >
                                                알림
                                                <strong className="text-danger ms-2">
                                                    [{countNotification}]
                                                </strong>
                                            </span>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="notificationDropdown"
                                            >
                                                {notificationList.length > 0 ? (
                                                    <>
                                                        {notificationList.map((noti) => (
                                                            <Link
                                                                key={noti.seq}
                                                                to={`/item/detail/${noti.itemSeq}`}
                                                                className="text-decoration-none text-dark"
                                                            >
                                                                <li className="dropdown-item d-flex justify-content-between align-items-center">
                                                                    <span className="text-truncate">
                                                                        {noti.notificationMessage}
                                                                    </span>
                                                                    <small className="text-muted ms-3">
                                                                        {util.formatTime(
                                                                            noti.updateDT,
                                                                        )}
                                                                    </small>
                                                                    <h2>{noti.itemSeq}</h2>
                                                                </li>
                                                            </Link>
                                                        ))}
                                                        <li>
                                                            <hr className="dropdown-divider" />
                                                        </li>
                                                        <li className="text-center">
                                                            <button
                                                                className="btn btn-sm btn-outline-secondary w-100"
                                                                onClick={handleMarkAllAsRead}
                                                            >
                                                                전체 읽음
                                                            </button>
                                                        </li>
                                                    </>
                                                ) : (
                                                    <li>
                                                        <span className="dropdown-item text-muted">
                                                            알림이 없습니다
                                                        </span>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>

                                        {/* 마이페이지 */}
                                        <Link to="/myPage" className="nav-link">
                                            <button className="btn btn-secondary ms-2">
                                                MyPage
                                            </button>
                                        </Link>

                                        {/* 로그아웃 */}
                                        <div className="nav-link">
                                            <button
                                                className="btn btn-secondary ms-2"
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/signup" className="nav-link">
                                            <button className="btn btn-secondary ms-2">
                                                SignUp
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="btn btn-secondary ms-2"
                                        >
                                            Login
                                        </button>
                                    </>
                                )}
                            </div>
                            <Login
                                isOpen={isModalOpen}
                                setIsLoggedIn={setIsLoggedIn}
                                onClose={() => setIsModalOpen(false)}
                            />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
