import ProductCard from '../components/ProductCard';
import styles from '../styles/pages/Home.module.css';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h1>상품 목록</h1>
            <div className={styles.productList}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default Home;
