import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const useUpdateEquipment = () => {
  const updateEquipment = (data) => {
    const docRef = doc(db, "equipment", data.id);
    updateDoc(docRef, data);
  };

  return { updateEquipment };
};

export default useUpdateEquipment;
