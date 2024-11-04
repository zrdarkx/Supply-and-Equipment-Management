import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function ConfirmationModal({ open, handleClose, event }) {
  return (
    <>
      <Modal show={open} size="md" onClose={handleClose} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              ¿Estás seguro de que quieres eliminar esto?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={event}>
                {"Sí, estoy seguro"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
