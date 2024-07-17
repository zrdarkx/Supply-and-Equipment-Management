import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const useGetOffices = () => {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "offices");
    onSnapshot(collectionRef, (snapshot) => {
      const output = [];
      snapshot.docs.forEach((doc) => {
        output.push({ ...doc.data(), id: doc.id });
      });
      setOffices(output);
    });
  }, []);

  return { offices };
};

export default useGetOffices;
