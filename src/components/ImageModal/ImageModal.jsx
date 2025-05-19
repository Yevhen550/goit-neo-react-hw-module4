import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ data, onClose }) => {
  return (
    <Modal
      isOpen={!!data}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img src={data.urls.regular} alt={data.alt_description} />
    </Modal>
  );
};

export default ImageModal;
