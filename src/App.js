import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Portfolio from './components/portfolio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Portfolio />} />
      </Routes>
    </Router>
    );
}

export default App;
