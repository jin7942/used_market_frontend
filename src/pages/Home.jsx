import Header from '../components/Header';
import Footer from '../components/Footer';
import ItemCard from '../components/ItemCard';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import API from '../common/API';
import PacmanLoader from 'react-spinners/PacmanLoader';
import config from '../common/_config';

/**
 * 메인 페이지
 * @returns
 */
const Home = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [itemList, setItemList] = useState([]);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    // 디바운싱 로직
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);
        // 300ms 후에 search 상태를 debouncedSearch로 반영

        return () => {
            clearTimeout(handler); // 이전 타이핑 중이면 타이머 취소
        };
    }, [search]);

    // 아이템 리스트 조회
    useEffect(() => {
        const getItemList = async () => {
            const res = await API.get(`/items/list?page=${page}&size=12&search=${debouncedSearch}`);
            setItemList(res.data.data.itemList);
            setTotalPages(res.data.data.pageInfo.totalPages);
            setPage(res.data.data.pageInfo.page);
        };
        getItemList();
    }, [page, debouncedSearch]);

    const onChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            {config.SERVER_STATUS !== 'MAIN' && (
                <div className="container mt-4">
                    <div className="alert alert-warning text-center fw-bold" role="alert">
                        현재 서비스 점검 중입니다. <strong>상품 조회는 가능</strong>하지만,{' '}
                        <strong>상품 등록 및 수정 기능은 일시 중단</strong>되었습니다.
                        <br />
                        불편을 드려 죄송합니다. 빠른 시일 내에 복구하겠습니다.
                    </div>
                </div>
            )}

            <main className="container mt-4 flex-grow-1 pt-5 mb-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="mb-0">상품 목록</h1>
                    <input
                        type="text"
                        className="form-control w-50 fw-bold border-2 p-2"
                        placeholder="검색어 입력..."
                        value={search}
                        onChange={onChange}
                    />
                    {config.SERVER_STATUS === 'MAIN' && (
                        <Link to="/item">
                            <button className="btn btn-dark">상품 등록</button>
                        </Link>
                    )}
                </div>

                <div className="row">
                    {itemList.length > 0 ? (
                        itemList.map((item) => <ItemCard key={item.seq} item={item} />)
                    ) : (
                        <PacmanLoader />
                    )}
                </div>

                <div className="row text-center mt-4">
                    {itemList.length > 0 ? (
                        <Pagination
                            currentPage={page}
                            totalPages={totalPages}
                            onPageChange={(p) => setPage(p)}
                        />
                    ) : (
                        <h1>텅텅텅....</h1>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
