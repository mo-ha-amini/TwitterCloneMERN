import './App.css';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Register from './component/Auth/Register';
import Login from './component/Auth/Login'

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Header/> */}
      <Routes>

        
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>
      {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
