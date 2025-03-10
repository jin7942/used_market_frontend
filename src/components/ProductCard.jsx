import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div className='col-md-4 mb-3'>
            <Link to='/productDetail' className='text-decoration-none text-dark'>
                <div className='card product-card shadow-sm'>
                    <img src='/img/evangelion_ray_2.jpg' className='card-img-top' alt='ray' />
                    <div className='card-body'>
                        <h5 className='card-title'>Im title</h5>
                        <p className='card-text'>1234원</p>
                        <button className='btn btn-dark'>자세히 보기</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
