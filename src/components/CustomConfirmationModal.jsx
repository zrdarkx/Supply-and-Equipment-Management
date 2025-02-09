// CustomConfirmationModal.jsx
import { Modal, Button } from "flowbite-react";

const CustomConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  return (
    <Modal show={isOpen} size="md" onClose={onClose}>
      <Modal.Header>Confirmación</Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">{message}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="gray" onClick={onClose}>
          Cancelar
        </Button>
        <Button color="primary" onClick={onConfirm}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomConfirmationModal;
