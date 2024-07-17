import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const useAddSupply = () => {
  const addSupply = (data) => {
    const collectionRef = collection(db, "supply");
    addDoc(collectionRef, { ...data, createdAt: serverTimestamp() });
  };

  return { addSupply };
};

export default useAddSupply;
