import React from 'react';
import { Link } from 'react-router-dom';
import util from '../common/util';

const ItemCard = ({ item }) => {
    return (
        <div className='col-md-4 mb-3'>
            <Link to={`/item/detail/${item.seq}`} className='text-decoration-none text-dark'>
                <div className='card Item-card shadow-sm'>
                    <img src={`${item.imgUploadPath}${item.imgUploadUuidName}`} className='card-img-top' alt={item.itemTitle} />
                    <div className='card-body'>
                        <h5 className='card-title'>{item.itemTitle}</h5>
                        <p className='card-text'>{util.formatPrice(item.itemPrice)} 원</p>
                        <button className='btn btn-dark'>자세히 보기</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ItemCard;
