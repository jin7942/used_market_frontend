import Home from './pages/Home';
import MyPage from './pages/MyPage';
import ItemDetail from './pages/ItemDetail';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/signup' element={<Signup />} />

                <Route path='/ItemDetail' element={<ItemDetail />} />

                <Route path='/myPage' element={<MyPage />} />
            </Routes>
        </Router>
    );
};

export default App;
