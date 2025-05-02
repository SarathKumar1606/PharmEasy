import React, { useState } from 'react';
import ForgotPasswordModal from './ForgotPasswordModal';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset link sent to:', email);
    setModalVisible(false); 
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button onClick={() => setModalVisible(true)} className="btn-forgot-password">
        Forgot Password?
      </button>
      {modalVisible && (
        <ForgotPasswordModal onClose={() => setModalVisible(false)}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-submit">Send Reset Link</button>
          </form>
        </ForgotPasswordModal>
      )}
    </>
  );
}

export default ForgotPasswordForm;