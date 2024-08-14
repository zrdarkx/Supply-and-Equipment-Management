import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const useUpdateTransaction = () => {
  const approveTransaction = async (
    transactionID,
    itemID,
    category,
    currentUser
  ) => {
    const transRef = doc(db, "transaction", transactionID);
    const itemRef = doc(db, category, itemID);
    const docSnap = await getDoc(itemRef);
    const item = docSnap.data();
    updateDoc(transRef, {
      status: "Approve",
      reviewBy: currentUser.firstName + " " + currentUser.lastName,
    });
    updateDoc(itemRef, { quantity: item.quantity - 1 });
  };

  const rejectTransaction = (transactionID, currentUser) => {
    const transRef = doc(db, "transaction", transactionID);
    updateDoc(transRef, {
      status: "Rejected",
      reviewBy: currentUser.firstName + " " + currentUser.lastName,
    });
  };

  return { approveTransaction, rejectTransaction };
};

export default useUpdateTransaction;
