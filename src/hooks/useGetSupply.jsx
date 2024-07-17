import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const useGetSupply = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "supply");
    onSnapshot(collectionRef, (snapshot) => {
      const output = [];
      snapshot.docs.forEach((doc) => {
        output.push({ ...doc.data(), id: doc.id });
      });
      setData(output);
    });
  }, []);

  return { data };
};

export default useGetSupply;
