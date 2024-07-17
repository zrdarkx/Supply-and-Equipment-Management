import { Button, Modal } from "flowbite-react";

const SemModal = ({ open, handleClose, children, title }) => {
  return (
    <Modal show={open} onClose={handleClose}>
      <Modal.Header>
        <h1>{title}</h1>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button className="w-full">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SemModal;
