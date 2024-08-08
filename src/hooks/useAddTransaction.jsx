import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const useAddTransaction = () => {
  const addTransaction = (supply, equipment, currentUser) => {
    const colRef = collection(db, "transaction");

    const res = supply.concat(equipment);

    res.map((item) => {
      addDoc(colRef, {
        currentUser: JSON.stringify(currentUser),
        item,
        createdAt: serverTimestamp(),
        status: "Pending",
      });
    });
  };

  return { addTransaction };
};

export default useAddTransaction;
