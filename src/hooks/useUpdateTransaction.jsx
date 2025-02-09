import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const useUpdateTransaction = () => {
  const approveTransaction = async (transactionID, currentUser, items) => {
    const transRef = doc(db, "transaction", transactionID);

    await updateDoc(transRef, {
      status: "Aprobado",
      reviewBy: currentUser.firstName + " " + currentUser.lastName,
      approvedDate: serverTimestamp(),
    });

    const handleMinusQuantity = async (item) => {
      const itemRef = doc(db, item.category, item.id);
      const docSnap = await getDoc(itemRef);
      const output = docSnap.data();

      updateDoc(itemRef, { quantity: output.quantity - item.quantity });
    };

    items.map((item) => {
      handleMinusQuantity(item);
    });
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

  const deliverTransaction = async (transactionID, currentUser, item) => {
    const transRef = doc(db, "transaction", transactionID);
    await updateDoc(transRef, {
      status: "Entregado",
      deliveredBy: currentUser.firstName + " " + currentUser.lastName,
      deliveredDate: serverTimestamp(),
    });

    // Restar la cantidad del inventario
    const itemRef = doc(db, item.category, item.id);
    const docSnap = await getDoc(itemRef);
    const output = docSnap.data();

    await updateDoc(itemRef, { quantity: output.quantity - item.quantity });
  };

  const returnTransaction = async (transactionID, currentUser, item) => {
    const transRef = doc(db, "transaction", transactionID);

    // Actualizar estado
    await updateDoc(transRef, {
      status: "Devuelto",
      returnedBy: currentUser.firstName + " " + currentUser.lastName,
      returnedDate: serverTimestamp(),
    });

    // Incrementar cantidad de equipos
    const itemRef = doc(db, item.category, item.id);
    const docSnap = await getDoc(itemRef);
    const output = docSnap.data();
    await updateDoc(itemRef, { quantity: output.quantity + item.quantity });
  };

  return {
    approveTransaction,
    rejectTransaction,
    deliverTransaction,
    returnTransaction,
  };
};

export default useUpdateTransaction;
