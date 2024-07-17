import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const useUpdateOffice = () => {
  const updateOffice = (id, name) => {
    const docRef = doc(db, "offices", id);
    updateDoc(docRef, { officeName: name });
  };

  return { updateOffice };
};

export default useUpdateOffice;
