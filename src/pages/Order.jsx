import Header from '../components/Header';
import Footer from '../components/Footer';

const Order = () => {
    // 샘플 상품 데이터
    const products = [
        { id: 1, title: '상품 제목 1', price: 120000, seller: '판매자A', image: '../../public/img/evangelion_ray_2.jpg' },
        { id: 2, title: '상품 제목 2', price: 150000, seller: '판매자B', image: '../../public/img/evangelion_ray_2.jpg' },
        { id: 3, title: '상품 제목 3', price: 90000, seller: '판매자C', image: '../../public/img/evangelion_ray_2.jpg' },
    ];

    // 총 결제 금액 계산
    const totalPrice = products.reduce((acc, item) => acc + item.price, 0);
    const shippingFee = 3000;
    const finalPrice = totalPrice + shippingFee;

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
                                {products.map((product) => (
                                    <li key={product.id} className='list-group-item d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <img
                                                src={product.image}
                                                alt='상품 이미지'
                                                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', marginRight: '15px' }}
                                            />
                                            <div>
                                                <h5 className='mb-1'>{product.title}</h5>
                                                <p className='text-muted'>
                                                    판매자: <strong>{product.seller}</strong>
                                                </p>
                                            </div>
                                        </div>
                                        <h5 className='text-primary'>₩ {product.price.toLocaleString()}</h5>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 우측 - 결제 정보 (비율 3) */}
                    <div className='col-md-3'>
                        <div className='card shadow-sm p-4'>
                            <h4 className='mb-3'>결제 금액</h4>
                            <div className='d-flex justify-content-between'>
                                <span>상품 총액</span>
                                <span>₩ {totalPrice.toLocaleString()}</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <span>배송비</span>
                                <span>₩ {shippingFee.toLocaleString()}</span>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <h5>
                                    <strong>총 결제 금액</strong>
                                </h5>
                                <h5 className='text-danger'>
                                    <strong>₩ {finalPrice.toLocaleString()}</strong>
                                </h5>
                            </div>
                            <button className='btn btn-success w-100 mt-3'>결제하기</button>
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
