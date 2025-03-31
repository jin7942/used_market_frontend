import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import API from '../common/api';
import util from '../common/util';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ItemCardSmall from '../components/ItemSmall';

const Order = () => {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    const handlePayment = async () => {
        const confirmed = window.confirm('결제 하시겠습니까?');
        if (!confirmed) return;

        const itemSeqList = products.map((product) => {
            return product.seq;
        });

        const res = await API.post('/orders/pay', itemSeqList);
        if (res.data.data) {
            alert('결제가 완료 되었습니다.');
            navigate('/myPage');
        } else {
            alert('결제가 실패 하였습니다.');
        }
    };

    useEffect(() => {
        const getWishlist = async () => {
            const res = await API.get('/orders/wishlist');
            const items = res.data.data;
            setProducts(items);

            const total = items.reduce((sum, item) => sum + item.itemPrice, 0);
            setTotalPrice(total);
        };

        getWishlist();
    }, []);

    return (
        <div className='d-flex flex-column min-vh-100'>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className='container mt-5 flex-grow-1'>
                <h2 className='mb-4'>결제 페이지</h2>

                <div className='row'>
                    {/* 좌측 - 상품 리스트 (비율 7) */}
                    <div className='col-md-7'>
                        <div className='card shadow-sm p-3'>
                            <h4 className='mb-3'>구매할 상품 목록</h4>
                            <ul className='list-group'>
                                <ItemCardSmall products={products} />
                            </ul>
                        </div>
                    </div>

                    {/* 우측 - 결제 정보 (비율 3) */}
                    <div className='col-md-3'>
                        <div className='card shadow-sm p-4'>
                            <h4 className='mb-3'>결제 금액</h4>
                            <div className='d-flex justify-content-between'>
                                <span>상품 총액</span>
                                <span>₩ {util.formatPrice(totalPrice)} 원</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>배송비</span>
                                <span>₩ 3000 원</span>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <h5>
                                    <strong>총 결제 금액</strong>
                                </h5>
                                <h5 className='text-danger'>
                                    <strong>₩ {util.formatPrice(totalPrice + 3000)} 원</strong>
                                </h5>
                            </div>
                            <button className='btn btn-success w-100 mt-3' onClick={handlePayment}>
                                결제하기
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* footer */}
            <Footer />
        </div>
    );
};

export default Order;
