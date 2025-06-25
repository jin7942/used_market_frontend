import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Item from '../components/Item';
import API from '../common/API';

const MyPage = () => {
    const products = useState([]);
    const [sections, setSections] = useState({
        selling: false,
        purchased: false,
        sold: false,
        wishlist: false,
    });
    const [userInfo, setUserInfo] = useState([]);

    // const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const toggleSection = (sectionName) => {
        setSections((prev) => ({
            ...prev,
            [sectionName]: !prev[sectionName],
        }));
    };

    useEffect(() => {
        const getUserInfo = async () => {
            const res = await API.get('/users/info');
            setUserInfo(res.data.data);
            console.log(res.data.data);
        };
        getUserInfo();
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="container mt-5 flex-grow-1">
                <h2 className="mb-4">마이페이지</h2>

                <div className="row">
                    {/* 프로필 카드 */}
                    <div className="col-md-4">
                        <div className="card text-center shadow-sm p-3">
                            <img
                                src={`https://www.google.com/imgres?q=user%20profile%20image&imgurl=https%3A%2F%2Fuxwing.com%2Fwp-content%2Fthemes%2Fuxwing%2Fdownload%2Fpeoples-avatars%2Fman-user-circle-icon.svg&imgrefurl=https%3A%2F%2Fuxwing.com%2Fuser-profile-icon%2F&docid=UagNtViPVDBRoM&tbnid=4KA6vm06mLounM&vet=12ahUKEwikre36-YyOAxV9ffUHHbYqD6EQM3oFCIMBEAA..i&w=774&h=800&hcb=2&ved=2ahUKEwikre36-YyOAxV9ffUHHbYqD6EQM3oFCIMBEAA`}
                                className="card-img-top rounded-circle mx-auto"
                                alt="User Profile"
                                style={{ width: '100px', height: '100px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{userInfo.userNickname}</h5>
                                <h5 className="card-title">{userInfo.userEmail}</h5>
                            </div>
                        </div>

                        {/* 거래 후기 섹션 */}
                        {/* <div className="card shadow-sm p-3 mt-4"></div> */}
                    </div>

                    {/* 거래 내역 & 찜한 상품 */}
                    <div className="col-md-8">
                        <Item
                            title="판매중인 상품"
                            isVisible={sections.selling}
                            toggleVisibility={() => toggleSection('selling')}
                            products={products}
                        />
                        <Item
                            title="구매한 상품"
                            isVisible={sections.purchased}
                            toggleVisibility={() => toggleSection('purchased')}
                            products={products}
                        />
                        <Item
                            title="판매한 상품"
                            isVisible={sections.sold}
                            toggleVisibility={() => toggleSection('sold')}
                            products={products}
                        />
                        <Item
                            title="찜한 상품"
                            isVisible={sections.wishlist}
                            toggleVisibility={() => toggleSection('wishlist')}
                            products={products}
                        />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MyPage;
