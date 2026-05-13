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
        status: "Pendiente",
      });
    });
  };

  const addSupplyTransaction = (supply, currentUser) => {
    const colRef = collection(db, "transaction");

    addDoc(colRef, {
      currentUser: JSON.stringify(currentUser),
      item: supply,
      createdAt: serverTimestamp(),
      status: "Pendiente",
      category: "Suministro",
    });
  };

  const addEquipmentTransaction = (equipment, currentUser) => {
    const colRef = collection(db, "transaction");

    addDoc(colRef, {
      currentUser: JSON.stringify(currentUser),
      item: equipment,
      createdAt: serverTimestamp(),
      status: "Pendiente",
      category: "Equipos",
    });
  };

  return { addTransaction, addSupplyTransaction, addEquipmentTransaction };
};

export default useAddTransaction;
