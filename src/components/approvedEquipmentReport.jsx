import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import moment from "moment";
import { Button, Modal } from "flowbite-react";
import { HiDownload } from "react-icons/hi";
import { usePDF } from "react-to-pdf";

const ApprovedEquipmentReport = ({ title, size, open, handleClose }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { toPDF, targetRef } = usePDF({
    filename: "approved_equipment_report.pdf",
  });

  const fetchApprovedTransactions = async () => {
    setLoading(true);
    setError(null);
    try {
      const db = getFirestore();
      const q = query(
        collection(db, "transaction"),
        where("category", "==", "Equipos"),
        where("status", "in", ["Aprobado", "Entregado", "Devuelto"])
      );

      const querySnapshot = await getDocs(q);
      const fetchedTransactions = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(fetchedTransactions);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching transactions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      fetchApprovedTransactions();
    }
  }, [open]);

  if (loading) {
    return (
      <Modal show={open} size={size} popup={true} onClose={handleClose}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <p className="text-center">Cargando...</p>
        </Modal.Body>
      </Modal>
    );
  }

  if (error) {
    return (
      <Modal show={open} size={size} popup={true} onClose={handleClose}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <p className="text-center text-red-500">Error: {error}</p>
        </Modal.Body>
      </Modal>
    );
  }

  if (!transactions || transactions.length === 0) {
    return (
      <Modal show={open} size={size} popup={true} onClose={handleClose}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <p className="text-center">
            No hay transacciones aprobadas, entregadas o devueltas.
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <Modal show={open} size={size} popup={true} onClose={handleClose}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div ref={targetRef} className="container mx-auto p-4">
          {transactions.map((transaction) => {
            let user;
            try {
              user = JSON.parse(transaction.currentUser);
            } catch (parseError) {
              console.error("Error parsing currentUser:", parseError);
              user = {
                firstName: "Error",
                lastName: "Usuario",
                contact: "N/A",
                email: "N/A",
                office: "N/A",
              };
            }

            const equipmentItems = transaction.item || [];

            const approvalDate = transaction.approvedDate
              ? moment(transaction.approvedDate.toDate()).format(
                  "DD/MM/YYYY HH:mm"
                )
              : "N/A";

            return (
              <div key={transaction.id} className="border-b-2 mb-4 p-4">
                <h2 className="font-semibold text-lg">
                  Solicitante: {user.firstName} {user.lastName}
                </h2>
                <p>
                  <strong>Contacto:</strong> {user.contact}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Oficina:</strong> {user.office}
                </p>
                <p>
                  <strong>Aprobado Por:</strong>{" "}
                  {transaction?.reviewBy || "N/A"}
                </p>
                <p>
                  <strong>ID de Transacción:</strong> {transaction.id}
                </p>
                <p>
                  <strong>Fecha Aprobada:</strong> {approvalDate}
                </p>
                {/* Display Transaction Category */}
                <p>
                  <strong>Categoría:</strong> {transaction.category}
                </p>

                <h3 className="mt-2 font-semibold">Equipos Solicitados:</h3>
                <div className="flex flex-wrap">
                  {equipmentItems.map((item, index) => (
                    <span key={index} className="mr-2 mb-1">
                      {item?.name || "N/A"}
                      {index < equipmentItems.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => toPDF()} className="w-full mt-4 py-3 mr-5">
          Descargar <HiDownload className="mx-3" size={20} />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApprovedEquipmentReport;
