import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Footer from './components/Footer';

import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
    <BrowserRouter>
      <NavbarComponent/>
      <Routes className="page-default ">
        <Route path = '/' element = {<Home />} />
        <Route path = '/experience' element = {<Experience />} />

      </Routes>
      <Footer/>
      
    </BrowserRouter>
    </div>

  );
}

export default App;
