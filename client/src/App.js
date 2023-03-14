import './App.css';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login'
import Home from './components/Main/Home.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
