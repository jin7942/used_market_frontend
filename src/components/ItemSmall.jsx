import React from 'react';

const ItemCardSmall = () => {
    return (
        <div className='col'>
            <div className='card'>
                <img src='../../public/img/evangelion_ray_2.jpg' className='card-img-top' alt='상품 이미지' />
                <div className='card-body text-center'>
                    <h6 className='card-title'>상품명</h6>
                    <p className='text-muted'>₩100,000</p>
                </div>
            </div>
        </div>
    );
};

export default ItemCardSmall;
