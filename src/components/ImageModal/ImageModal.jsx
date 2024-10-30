/* eslint-disable react/prop-types */
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ modalIsOpen, closeModal, article }) => {
  Modal.setAppElement("#root");
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.85)",
    },
    content: {
      padding: "0",
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div className={styles.container}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.div}>
          <img
            className={styles.img}
            src={article.urls.regular}
            alt={article.alt_description}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
