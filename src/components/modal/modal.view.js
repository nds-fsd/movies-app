import React from 'react';
import styles from './modal.module.css';

const Modal = ({ open, handleCloseModal, children }) => open ? (
  <>
    <div className={styles._overlay} />
    <div className={styles._container}>
      <span onClick={handleCloseModal}>X</span>
      {children}
    </div>
  </>
) : null;

export default Modal;
