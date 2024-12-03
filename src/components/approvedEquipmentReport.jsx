import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import moment from "moment";
import { Button } from "flowbite-react";
import { HiDownload } from "react-icons/hi";
import { usePDF } from "react-to-pdf";
import SemModal from "./semModal";

const ApprovedEquipmentReport = ({ title, size, open, handleClose }) => {
  const [transactions, setTransactions] = useState([]);
  const { toPDF, targetRef } = usePDF({
    filename: "approved_equipment_report.pdf",
  });

  const fetchApprovedTransactions = async () => {
    const db = getFirestore();
    const q = query(
      collection(db, "transaction"),
      where("category", "==", "Equipos"),
      where("status", "==", "Aprobado")
    );

    const querySnapshot = await getDocs(q);
    const fetchedTransactions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTransactions(fetchedTransactions);
  };

  useEffect(() => {
    fetchApprovedTransactions();
  }, []);

  return (
    <SemModal title={title} size={size} open={open} handleClose={handleClose}>
      <div ref={targetRef} className="container mx-auto p-4">
        {transactions.map((transaction) => {
          const user = JSON.parse(transaction.currentUser);
          const equipmentItems = transaction.item;

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

              <h3 className="mt-2 font-semibold">Equipos Solicitados:</h3>
              {equipmentItems.map((item, index) => (
                <div key={index} className="border p-2 mt-1">
                  <p>
                    <strong>Nombre:</strong> {item.name}
                  </p>
                  <p>
                    <strong>Descripción:</strong> {item.description}
                  </p>
                  <p>
                    <strong>Fecha Aprobada:</strong>{" "}
                    {moment(transaction.reviewDate.toDate()).format(
                      "DD/MM/YYYY HH:mm"
                    )}
                  </p>
                  <p>
                    <strong>Aprobado Por:</strong> {transaction.reviewBy}
                  </p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <Button onClick={() => toPDF()} className="w-full mt-4 py-3 mr-5">
        Descargar <HiDownload className="mx-3" size={20} />
      </Button>
    </SemModal>
  );
};

export default ApprovedEquipmentReport;
