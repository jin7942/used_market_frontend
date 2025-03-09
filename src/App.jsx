import Home from './pages/Home';
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/signup' element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;
