import React, { useEffect } from 'react';


const Modal = ({ onClose, largeImageURL}) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  
    return (
      <div className="Overlay" onClick={handleClose}>
        <div className="Modal">
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }


export default Modal;