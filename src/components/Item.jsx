import React from 'react';
import ItemCardSmall from './ItemSmall';

const ItemSection = ({ title, isVisible, toggleVisibility }) => (
    <div className='card shadow-sm p-3 mb-4'>
        <div className='d-flex justify-content-between align-items-center'>
            <h4>{title}</h4>
            <button className='btn btn-outline-primary' onClick={toggleVisibility}>
                {isVisible ? '숨기기 -' : '보기 +'}
            </button>
        </div>
        {isVisible && (
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                {[...Array(3)].map((_, index) => (
                    <ItemCardSmall key={index} />
                ))}
            </div>
        )}
    </div>
);

export default ItemSection;
