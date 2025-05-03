import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pharmacyLogo from '../assets/pharmacy-logo.jpeg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <img src={pharmacyLogo} alt="PharmaCare Logo" className="footer-logo" />
          <h2 className="footer-title">PharmaCare</h2>
        </div>

        {/* Newsletter Signup Section */}
        <div className="newsletter-section">
          <h4 className="newsletter-title">Stay Updated</h4>
          <p>Get health tips and exclusive offers delivered to your inbox.</p>
          <Form className="newsletter-form">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <Button variant="primary" className="newsletter-button">
              Subscribe
            </Button>
          </Form>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><Link to="/blog">Health Blog</Link></li>
              <li><Link to="/pharmacists">Talk to Pharmacists</Link></li>
              <li><Link to="/drugs">Drug Info</Link></li>
            </ul>
          </div>
        </div>

  
        <div className="footer-bottom">
          <p>&copy; 2025 PharmaCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;