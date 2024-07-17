import { Button, Modal } from "flowbite-react";

const SemModal = ({ open, handleClose, children, title, size }) => {
  return (
    <Modal size={size} show={open} onClose={handleClose}>
      <Modal.Header>
        <h1>{title}</h1>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default SemModal;
