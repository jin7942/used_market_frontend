import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Item from '../components/Item';

const MyPage = () => {
    const [sections, setSections] = useState({
        selling: false,
        purchased: false,
        sold: false,
        wishlist: false,
    });

    const toggleSection = (sectionName) => {
        setSections((prev) => ({
            ...prev,
            [sectionName]: !prev[sectionName],
        }));
    };

    return (
        <div className='d-flex flex-column min-vh-100'>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className='container mt-5 flex-grow-1'>
                <h2 className='mb-4'>마이페이지</h2>

                <div className='row'>
                    {/* 프로필 카드 */}
                    <div className='col-md-4'>
                        <div className='card text-center shadow-sm p-3'>
                            <img
                                src='/img/evangelion_ray_2.jpg'
                                className='card-img-top rounded-circle mx-auto'
                                alt='User Profile'
                                style={{ width: '100px', height: '100px' }}
                            />
                            <div className='card-body'>
                                <h5 className='card-title'>사용자 이름</h5>
                                <p className='text-muted'>user@example.com</p>
                                <button className='btn btn-primary'>프로필 수정</button>
                            </div>
                        </div>

                        {/* 거래 후기 섹션 */}
                        <div className='card shadow-sm p-3 mt-4'>
                            <h4>거래 후기</h4>
                            <ul className='list-group'>
                                <li className='list-group-item'>👍 "빠르고 친절한 거래였습니다!"</li>
                                <li className='list-group-item'>⭐ "상품 상태가 설명과 같았어요."</li>
                                <li className='list-group-item'>✅ "다시 거래하고 싶은 판매자입니다."</li>
                            </ul>
                        </div>
                    </div>

                    {/* 거래 내역 & 찜한 상품 */}
                    <div className='col-md-8'>
                        <Item title='판매중인 상품' isVisible={sections.selling} toggleVisibility={() => toggleSection('selling')} />
                        <Item title='구매한 상품' isVisible={sections.purchased} toggleVisibility={() => toggleSection('purchased')} />
                        <Item title='판매한 상품' isVisible={sections.sold} toggleVisibility={() => toggleSection('sold')} />
                        <Item title='찜한 상품' isVisible={sections.wishlist} toggleVisibility={() => toggleSection('wishlist')} />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MyPage;
