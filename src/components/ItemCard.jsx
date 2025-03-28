import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
    return (
        <div className='col-md-4 mb-3'>
            <Link to={`/item/detail/${item.seq}`} className='text-decoration-none text-dark'>
                <div className='card Item-card shadow-sm'>
                    <img src={`${item.imgUploadPath}${item.imgUploadUuidName}`} className='card-img-top' alt={item.itemTitle} />
                    <div className='card-body'>
                        <h5 className='card-title'>{item.itemTitle}</h5>
                        <p className='card-text'>{item.itemPrice}</p>
                        <button className='btn btn-dark'>자세히 보기</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ItemCard;
