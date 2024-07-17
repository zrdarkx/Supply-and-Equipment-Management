import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const useAddOffice = () => {
  const addOffice = (officeName) => {
    const officeRef = collection(db, "offices");
    addDoc(officeRef, {
      officeName,
      createdAt: serverTimestamp(),
    });
  };

  return { addOffice };
};

export default useAddOffice;
