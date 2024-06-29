import { useEffect } from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ isVisible, onClose }) => {
  // Close the modal when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === "modal-background") {
        onClose();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div id="modal-background" className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <h2>Welcome to Our Website!</h2>
        <p>We have some exciting updates for you.</p>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
