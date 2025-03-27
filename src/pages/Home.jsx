import Header from '../components/Header';
import Footer from '../components/Footer';
import ItemCard from '../components/ItemCard';
import Pagination from '../components/Pagination';
import DeveloperCard from '../components/DeveloperCard';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from '../common/api';
import PacmanLoader from 'react-spinners/PacmanLoader';

/**
 * 메인 페이지
 * @returns
 */
const Home = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [itemList, setItemList] = useState([]);

    // 아이템 리스트 조회
    // TODO: 검색 및 검색개수 구현
    useEffect(() => {
        const getItemList = async () => {
            const res = await API.get(`/items/list?page=${page}&size=12`);
            setItemList(res.data.data.itemList);
            setTotalPages(res.data.data.pageInfo.totalPages);
        };
        getItemList();
    }, [page]);

    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />

            <main className='container mt-4 flex-grow-1 pt-5 mb-5'>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                    <h1 className='mb-0'>상품 목록</h1>
                    <input type='text' className='form-control w-50 fw-bold border-2 p-2' placeholder='검색어 입력...' />
                    <Link to='/item'>
                        <button className='btn btn-dark'>상품 등록</button>
                    </Link>
                </div>

                <div className='row'>{itemList.length > 0 ? itemList.map((item) => <ItemCard key={item.seq} item={item} />) : <PacmanLoader />}</div>

                <div className='row text-center mt-4'>
                    {itemList.length > 0 ? <Pagination currentPage={page} totalPages={totalPages} onPageChange={(p) => setPage(p)} /> : <h1>텅텅텅....</h1>}
                </div>

                <div className='d-flex justify-content-center mt-5'>
                    <DeveloperCard />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
