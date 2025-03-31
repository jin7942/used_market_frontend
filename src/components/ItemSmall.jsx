import React from 'react';
import util from '../common/util';
import { Link } from 'react-router-dom';

const ItemCardSmall = ({ products }) => {
    return (
        <ul className='list-group'>
            {products?.map((product) => (
                <li key={product.seq} className='list-group-item d-flex justify-content-between align-items-center'>
                    <Link to={`/item/detail/${product.seq}`} className='text-decoration-none text-dark'>
                        <div className='d-flex align-items-center'>
                            <img
                                src={`${product.imgUploadPath}${product.imgUploadUuidName}`}
                                alt={product.itemDescription}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    marginRight: '15px',
                                }}
                            />
                            <div>
                                <h5 className='mb-1'>{product.itemTitle}</h5>
                                <p className='text-muted'>
                                    판매자: <strong>{product.userNickname}</strong>
                                </p>
                            </div>
                        </div>
                    </Link>
                    <div className='text-end'>
                        <h5 className='text-primary'>₩ {util.formatPrice(product.itemPrice)} 원</h5>
                        <span className='text-dark'>{util.formatDate(product.updateDT)}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ItemCardSmall;
