import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Portfolio from './components/portfolio'
import Proprioception from './pages/proprioception'
import Badminton from './pages/badminton'
import Tetris from './pages/tetris'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/proprioception' element={<Proprioception />} />
        <Route path='/badminton' element={<Badminton />} />
        <Route path='/tetris' element={<Tetris />} />
      </Routes>
    </Router>
    );
}

export default App;
