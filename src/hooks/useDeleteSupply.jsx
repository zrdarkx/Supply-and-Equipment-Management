import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const useDeleteSupply = () => {
  const deleteSupply = (id) => {
    const docRef = doc(db, "supply", id);
    deleteDoc(docRef);
  };

  return { deleteSupply };
};

export default useDeleteSupply;
