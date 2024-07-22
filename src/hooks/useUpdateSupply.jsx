import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const useUpdateSupply = () => {
  const updateSupply = (data) => {
    const docRef = doc(db, "supply", data.id);
    updateDoc(docRef, data);
  };

  return { updateSupply };
};

export default useUpdateSupply;
