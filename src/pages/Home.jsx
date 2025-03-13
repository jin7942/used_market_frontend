import Header from '../components/Header';
import Footer from '../components/Footer';
import ItemCard from '../components/ItemCard';
import Pagination from '../components/Pagination';
import DeveloperCard from '../components/DeveloperCard';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='d-flex flex-column min-vh-100'>
            {/* Header */}
            <Header />

            <main className='container mt-4 flex-grow-1 pt-5 mb-5'>
                {/* title */}
                <div className='d-flex justify-content-between align-items-center mb-4'>
                    <h1 className='mb-0'>상품 목록</h1>
                    <input type='text' className='form-control w-50 fw-bold border-2 p-2' placeholder='검색어 입력...' />
                    <Link to='/item'>
                        <button className='btn btn-dark'>상품 등록</button>
                    </Link>
                </div>

                {/* Item list */}
                <div className='row'>
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
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
