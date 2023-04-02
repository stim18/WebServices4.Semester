//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Neck from './components/Neck';
import Biceps from './components/Biceps';
import Chest from './components/Chest';
import Triceps from './components/Triceps';
import Middle_B from './components/Middle_back';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/neck" element={<Neck />} />
            <Route path="/chest" element={<Chest />} />
            <Route path="/biceps" element={<Biceps />} />
            <Route path="/middle_back" element={<Middle_B />} />
            <Route path="/triceps" element={<Triceps />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;






