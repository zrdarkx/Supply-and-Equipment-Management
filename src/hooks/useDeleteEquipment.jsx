import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const useDeleteEquipment = () => {
  const deleteEquipment = (id) => {
    const docRef = doc(db, "equipment", id);
    deleteDoc(docRef);
  };

  return { deleteEquipment };
};

export default useDeleteEquipment;
