import Home from './pages/Home';
import MyPage from './pages/MyPage';
import ProductDetail from './pages/ProductDetail';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/signup' element={<Signup />} />

                <Route path='/productDetail' element={<ProductDetail />} />

                <Route path='/myPage' element={<MyPage />} />
            </Routes>
        </Router>
    );
};

export default App;
