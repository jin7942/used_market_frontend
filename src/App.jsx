import Home from './pages/Home';
import MyPage from './pages/MyPage';
import ItemDetail from './pages/ItemDetail';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemForm from './pages/ItemForm';
import Order from './pages/Order';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* 메인 페이지 */}
                <Route path='/' element={<Home />} />

                {/* 회원가입 페이지 */}
                <Route path='/signup' element={<Signup />} />

                {/* 상세 페이지 */}
                <Route path='/itemDetail' element={<ItemDetail />} />

                {/* 마이 페이지 */}
                <Route path='/myPage' element={<MyPage />} />

                {/* 상품 등록 페이지 */}
                <Route path='/item' element={<ItemForm />} />

                {/* 결제 페이지 */}
                <Route path='/order' element={<Order />} />
            </Routes>
        </Router>
    );
};

export default App;
