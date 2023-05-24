import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Portfolio from './components/portfolio'
import Proprioception from './pages/proprioception'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/proprioception' element={<Proprioception />} />
      </Routes>
    </Router>
    );
}

export default App;
