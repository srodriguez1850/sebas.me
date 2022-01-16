import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './components/home'
import Research from './components/research'
import Portfolio from './components/portfolio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/research' element={<Research />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
    );
}

export default App;
