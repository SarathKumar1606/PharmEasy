import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Medicines from './pages/Medicines';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Cart from './pages/Cart';
import "slick-carousel/slick/slick.css";
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import './App.css';


// ...




function App() {
 const location = useLocation();
 useEffect(() => {
  window.scrollTo(0, 0);
},[location]);
  return (
    <div className='app'>
      <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
        </Routes>
      <Footer />
   </div>
  );
}

export default App;