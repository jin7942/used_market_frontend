import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import DeveloperCard from '../components/DeveloperCard';

const Home = () => {
    return (
        <div className='d-flex flex-column min-vh-100'>
            {/* Header */}
            <Header />

            <main className='container mt-4 flex-grow-1 pt-5 mb-5'>
                {/* title */}
                <h1 className='text-left mb-4'>상품 목록</h1>

                {/* product list */}
                <div className='row'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

                {/* Pagination */}
                <div className='row text-center mt-4'>
                    <Pagination />
                </div>

                {/* Developer Card */}
                <div className='d-flex justify-content-center mt-5'>
                    <DeveloperCard />
                </div>
            </main>

            {/* footer */}
            <Footer />
        </div>
    );
};

export default Home;
