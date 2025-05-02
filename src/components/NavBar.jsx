import { Link } from 'react-router-dom';
import './NavBar.css';
import pharmacyLogo from '../assets/pharmacy-logo.jpeg';
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
     
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={pharmacyLogo} alt="PharmaCare Logo" className="navbar-logo" />
          <span className="brand-name">PharmaCare</span>
        </Link>

 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <GiHamburgerMenu/>
        </button>

       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className="nav-link1" to="/">Home</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link1" to="/medicines">Medicines</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link1" to="/cart">
                Cart
              </Link>
              </li>
            <li className="nav-item ">
              <Link className="nav-link1" to="/about">About</Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-item btn-login me-2" to="/login">Login</Link>


            </li>
            <li className="nav-item">
            <Link className="nav-item btn-signup" to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
