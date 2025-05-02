import React, { useState } from 'react';
import './Login.css';
import loginImage from '../assets/login.png';
import ForgotPasswordModal from './ForgotPasswordModal';

function Login() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log('Opening modal...');
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log('Closing modal...');
    setModalOpen(false);
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <p>Welcome back! Please login to your account.</p>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" className="btn-login-submit">Login</button>
          <div className="mt-3">
            <button
              type="button"
              className="forgot-link"
              onClick={handleOpenModal}
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>

      {/* Forgot Password Modal */}
      {isModalOpen && (
        <ForgotPasswordModal onClose={handleCloseModal}>
          <form>
            <div className="mb-3">
              <label className="form-label">Enter your email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn-submit">
                Send Reset Link
              </button>
              <button
                type="button"
                className="btn-cancel"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </ForgotPasswordModal>
      )}
    </div>
  );
}

export default Login;