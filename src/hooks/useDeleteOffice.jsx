import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const useDeleteOffice = () => {
  const deleteOffice = (id) => {
    const docRef = doc(db, "offices", id);
    deleteDoc(docRef);
  };

  return { deleteOffice };
};

export default useDeleteOffice;
