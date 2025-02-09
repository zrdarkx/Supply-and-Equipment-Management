import {
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
  runTransaction,
} from "firebase/firestore";
import { db } from "../../firebase";

const useUpdateTransaction = () => {
  const approveTransaction = async (transactionID, currentUser, items) => {
    const transRef = doc(db, "transaction", transactionID);

    await updateDoc(transRef, {
      status: "Aprobado",
      reviewBy: currentUser.firstName + " " + currentUser.lastName,
      approvedDate: serverTimestamp(),
    });

    // La aprobación no modifica el inventario.
  };

  const rejectTransaction = async (transactionID, currentUser, reason) => {
    const transRef = doc(db, "transaction", transactionID);
    await updateDoc(transRef, {
      status: "Rechazado",
      reviewBy: currentUser.firstName + " " + currentUser.lastName,
      rejectedDate: serverTimestamp(),
      rejectionReason: reason,
    });
  };

  const deliverTransaction = async (transactionID, currentUser, items) => {
    const transRef = doc(db, "transaction", transactionID);

    try {
      await runTransaction(db, async (transaction) => {
        const transDoc = await transaction.get(transRef);
        if (!transDoc.exists()) {
          throw new Error("Transaction does not exist!");
        }

        // 1. FASE DE LECTURA: Recopilar todos los datos necesarios
        const itemsToUpdate = [];
        for (const item of items) {
          const itemRef = doc(db, item.category, item.id);
          const itemDoc = await transaction.get(itemRef);
          if (!itemDoc.exists()) {
            throw new Error(`Item ${item.id} does not exist!`);
          }
          const itemData = itemDoc.data();
          const currentQuantity = Number(itemData.quantity);
          const borrowedQty = Number(item.borrowedQuantity); // Usar borrowedQuantity

          if (currentQuantity < borrowedQty) {
            throw new Error(
              `Not enough quantity available for item ${item.id}!`
            );
          }

          // Almacena la información, incluyendo borrowedQuantity
          itemsToUpdate.push({
            ref: itemRef,
            newQuantity: currentQuantity - borrowedQty, // Restar borrowedQuantity
            borrowedQuantity: borrowedQty,
          });
        }

        // 2. FASE DE ESCRITURA: Actualizar la transacción y los items
        transaction.update(transRef, {
          status: "Entregado",
          deliveredBy: currentUser.firstName + " " + currentUser.lastName,
          deliveredDate: serverTimestamp(),
        });

        for (const itemUpdate of itemsToUpdate) {
          transaction.update(itemUpdate.ref, {
            quantity: itemUpdate.newQuantity,
          });
        }
      });

      console.log("Transaction successfully delivered!");
    } catch (error) {
      console.error("Error delivering transaction:", error);
      throw error; // Re-lanza el error
    }
  };

  const returnTransaction = async (transactionID, currentUser, items) => {
    const transRef = doc(db, "transaction", transactionID);

    try {
      await runTransaction(db, async (transaction) => {
        const transDoc = await transaction.get(transRef);
        if (!transDoc.exists()) {
          throw new Error("Transaction does not exist!");
        }

        // 1. FASE DE LECTURA (solo para equipos)
        const itemsToUpdate = [];
        for (const item of items) {
          if (item.category === "equipment") {
            const itemRef = doc(db, item.category, item.id);
            const itemDoc = await transaction.get(itemRef);
            if (!itemDoc.exists()) {
              throw new Error(`Item ${item.id} does not exist!`);
            }
            const itemData = itemDoc.data();
            const currentQuantity = Number(itemData.quantity);
            const borrowedQty = Number(item.borrowedQuantity); // Usar borrowedQuantity

            // Almacena la información, incluyendo borrowedQuantity
            itemsToUpdate.push({
              ref: itemRef,
              newQuantity: currentQuantity + borrowedQty, // Sumar borrowedQuantity
              borrowedQuantity: borrowedQty,
            });
          }
        }

        // 2. FASE DE ESCRITURA
        transaction.update(transRef, {
          status: "Devuelto",
          returnedBy: currentUser.firstName + " " + currentUser.lastName,
          returnedDate: serverTimestamp(),
        });

        for (const itemUpdate of itemsToUpdate) {
          transaction.update(itemUpdate.ref, {
            quantity: itemUpdate.newQuantity,
          });
        }
      });

      console.log("Transaction successfully returned!");
    } catch (error) {
      console.error("Error returning transaction:", error);
      throw error; // Re-lanza el error
    }
  };

  return {
    approveTransaction,
    rejectTransaction,
    deliverTransaction,
    returnTransaction,
  };
};

export default useUpdateTransaction;
