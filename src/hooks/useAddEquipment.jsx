import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const useAddEquipment = () => {
  const addEquipment = (data) => {
    const collectionRef = collection(db, "equipment");

    addDoc(collectionRef, {
      ...data,
      createdAt: serverTimestamp(),
      category: "equipment",
    });
  };

  return { addEquipment };
};

export default useAddEquipment;
