import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams(); // URL에서 상품 ID 가져오기

    return (
        <div className='d-flex flex-column min-vh-100'>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className='container mt-5 flex-grow-1'>
                <div className='row'>
                    {/* 상품 이미지 */}
                    <div className='col-md-6 d-flex align-items-end'>
                        <img src='../../public/img/evangelion_ray_2.jpg' className='img-fluid rounded' alt='상품 이미지' />
                    </div>

                    {/* 상품 정보 */}
                    <div className='col-md-6 d-flex flex-column justify-content-between'>
                        <div>
                            <h2>상품 제목 (ID: {id})</h2>
                            <h4 className='text-danger'>₩100,000</h4>
                            <h5>판매자 ID</h5>
                            <p>상품 설명: 이곳에 상품 설명이 들어갑니다. 상태가 좋고 사용감이 적습니다.</p>
                        </div>

                        {/* 버튼을 이미지 하단과 같은 라인에 정렬 */}
                        <div className='d-flex justify-content-end'>
                            <button className='btn btn-primary me-2'>채팅하기</button>
                            <button className='btn btn-outline-secondary'>찜하기</button>
                        </div>
                    </div>
                </div>

                {/* 자세히 보기 */}
                <div className='row mt-5 mb-5 justify-content-center'>
                    <div className='col-10 mb-3'>
                        <img src='../../public/img/evangelion_ray_2.jpg' className='img-fluid rounded w-100' alt='큰 상품 이미지' />
                    </div>
                    <div className='col-10 mb-3'>
                        <img src='../../public/img/evangelion_ray_2.jpg' className='img-fluid rounded w-100' alt='큰 상품 이미지' />
                    </div>
                </div>

                {/* 상품 추천 */}
                <h2>상품 추천</h2>
                <hr />
                <div className='row'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ProductDetail;
