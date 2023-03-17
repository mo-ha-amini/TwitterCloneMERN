import './App.css';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login'
import Home from './components/Main/Home.js';
import Profile from './components/Main/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
