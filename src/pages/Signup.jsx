import React from 'react';
import './Signup.css';//updated cases
import signupImage from '../assets/signup.png'; // Update the path if needed



function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Signup</h2>
        <p>Create your account to get started!</p>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" className="btn-signup-submit">Create Account</button>
        </form>
      </div>
      <div className="signup-image">
        <img src={signupImage} alt="Signup" />
      </div>
    </div>
  );
}

export default Signup;