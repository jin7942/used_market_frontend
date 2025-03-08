import React from 'react';
import styles from '../styles/components/ProductCard.module.css';

const ProductCard = () => {
    return (
        <div className={styles.ProductCard}>
            <img src='../../public/img/evangelion_ray_2.jpg' alt='ray' className={styles.productImage} />
            <h3>test</h3>
            <p>test원</p>
        </div>
    );
};

export default ProductCard;
