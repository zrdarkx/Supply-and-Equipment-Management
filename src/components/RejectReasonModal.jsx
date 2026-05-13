import { Button, Modal, Textarea } from "flowbite-react";
import { useState } from "react";

const RejectReasonModal = ({ open, handleClose, onReject }) => {
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    onReject(reason);
    handleClose();
    setReason("");
  };

  return (
    <Modal show={open} onClose={handleClose}>
      <Modal.Header>Motivo de Rechazo</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <Textarea
            required
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Ingrese el motivo del rechazo..."
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Enviar</Button>
        <Button color="gray" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RejectReasonModal;
