import React from 'react';

const ProductCard = () => {
    return (
        <div className='col-md-4 mb-3'>
            <div className='card product-card shadow-sm'>
                <img src='../../public/img/evangelion_ray_2.jpg' className='card-img-top' alt='ray' />
                <div className='card-body'>
                    <h5 className='card-title'>Im title</h5>
                    <p className='card-text'>1234원</p>
                    <button className='btn btn-dark'>자세히 보기</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
