//import logo from './logo.svg';
import './App.css';
import Nav from './components2/Nav';
import UserID from './components2/UserID';
import Home from './components2/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/training/all" element={<UserID />} />
            <Route path="/home" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;