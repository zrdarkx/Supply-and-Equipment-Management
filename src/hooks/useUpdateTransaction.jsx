import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const useUpdateTransaction = () => {
  const approveTransaction = async (transactionID, currentUser, items) => {
    const transRef = doc(db, "transaction", transactionID);

    updateDoc(transRef, {
      status: "Aprobado",
      reviewBy: currentUser.firstName + " " + currentUser.lastName,
      reviewDate: serverTimestamp(),
    });

    const handleMinusQuantity = async (item) => {
      const itemRef = doc(db, item.category, item.id);
      const docSnap = await getDoc(itemRef);
      const output = docSnap.data();
      updateDoc(itemRef, { quantity: output.quantity - 1 });
    };

    items.map((item) => {
      handleMinusQuantity(item);
    });
  };

  const rejectTransaction = (transactionID, currentUser) => {
    const transRef = doc(db, "transaction", transactionID);
    updateDoc(transRef, {
      status: "Rechazado",
      reviewBy: currentUser.firstName + " " + currentUser.lastName,
    });
  };

  return { approveTransaction, rejectTransaction };
};

export default useUpdateTransaction;
