import Home from './pages/Home';
import MyPage from './pages/MyPage';
import ItemDetail from './pages/ItemDetail';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemForm from './pages/ItemForm';
import Order from './pages/Order';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import config from './common/_config';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const eventSource = new EventSource(
                `${config.BASE_URL}/notification/sse/connect?token=${token}`,
            );

            eventSource.addEventListener('notify', (e) => {
                const payload = JSON.parse(e.data);
                toast.info(
                    <span>
                        <strong>{payload.data.notificationMessage}</strong>
                    </span>,
                    {
                        onClick: () => navigate(`/item/detail/${payload.data.itemSeq}`),
                    },
                );
            });

            eventSource.onerror = () => {
                eventSource.close();
            };

            return () => {
                eventSource.close(); // 언마운트 시 정리
            };
        }
    }, [navigate]);

    return (
        <>
            <Routes>
                {/* 메인 페이지 */}
                <Route path="/" element={<Home />} />

                {/* 회원가입 페이지 */}
                <Route path="/signup" element={<Signup />} />

                {/* 상세 페이지 */}
                <Route path="/item/detail/:itemSeq" element={<ItemDetail />} />

                {/* 마이 페이지 */}
                <Route path="/myPage" element={<MyPage />} />

                {/* 상품 등록 페이지 */}
                <Route path="/item" element={<ItemForm />} />

                {/* 결제 페이지 */}
                <Route path="/order" element={<Order />} />
            </Routes>
            <ToastContainer position="top-right" autoClose={5000} />
        </>
    );
};

export default App;
