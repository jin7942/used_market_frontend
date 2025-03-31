import React from 'react';
import ItemCardSmall from './ItemSmall';
import { useState, useEffect } from 'react';
import API from '../common/api';

// MyPage
const ItemSection = ({ title, isVisible, toggleVisibility }) => {
    const [products, setProducts] = useState([]);

    const requestUrl = (title) => {
        switch (title) {
            case '판매중인 상품':
                return '/items/selling';
            case '구매한 상품':
                return '/orders/info';
            case '판매한 상품':
                return '/items/sold';
            case '찜한 상품':
                return '/orders/wishlist';
            default:
                return '';
        }
    };
    useEffect(() => {
        const getList = async () => {
            const res = await API.get(requestUrl(title));
            setProducts(res.data.data);
        };
        getList();
    }, [title]);

    return (
        <div className='card shadow-sm p-3 mb-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <h4>{title}</h4>
                <button className='btn btn-outline-primary' onClick={toggleVisibility}>
                    {isVisible ? '숨기기 -' : '보기 +'}
                </button>
            </div>
            {isVisible && (
                <div className='row '>
                    <ItemCardSmall products={products} />
                </div>
            )}
        </div>
    );
};

export default ItemSection;
