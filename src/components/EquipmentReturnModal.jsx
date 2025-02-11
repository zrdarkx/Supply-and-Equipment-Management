// EquipmentReturnModal.jsx
import { Button, Modal, Textarea } from "flowbite-react";
import { useState } from "react";

const EquipmentReturnModal = ({ open, handleClose, onReturn }) => {
  const [observation, setObservation] = useState("");

  const handleSubmit = () => {
    onReturn(observation);
    handleClose();
    setObservation("");
  };

  return (
    <Modal show={open} onClose={handleClose}>
      <Modal.Header>Observaciones de Devolución de Equipos</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <Textarea
            required
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            placeholder="Ingrese las observaciones de la devolución..."
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Enviar Observación</Button>
        <Button color="gray" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EquipmentReturnModal;
