import React from 'react';
import './forgotPasswordModal.css';

function ForgotPasswordModal({ children, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Forgot Password</h2>
          <span className="modal-close" onClick={() => { 
  console.log('Close button clicked'); 
  onClose(); 
}}>
  &times;
</span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}



export default ForgotPasswordModal;