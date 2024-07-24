import { Button, Modal } from "flowbite-react";

const SemModal = ({ open, handleClose, children, title, size, dark }) => {
  return (
    <Modal size={size} show={open} onClose={handleClose}>
      {dark ? (
        <>
          <Modal.Header className="bg-slate-900">
            <h1 className="text-white">{title}</h1>
          </Modal.Header>
          <Modal.Body className="bg-slate-950">{children}</Modal.Body>
        </>
      ) : (
        <>
          <Modal.Header>
            <h1>{title}</h1>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default SemModal;
