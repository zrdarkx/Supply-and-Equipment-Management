import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const useGetTransaction = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const collectionRef = collection(db, "transaction");
    const queryRef = query(collectionRef, orderBy("createdAt"));
    onSnapshot(queryRef, (snapshot) => {
      const output = [];
      snapshot.docs.forEach((doc) => {
        output.push({ ...doc.data(), id: doc.id });
      });
      setData(output);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};

export default useGetTransaction;
