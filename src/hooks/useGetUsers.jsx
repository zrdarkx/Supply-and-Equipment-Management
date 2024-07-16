import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const useGetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "users");
    onSnapshot(collectionRef, (snapshot) => {
      const output = [];
      snapshot.docs.forEach((doc) => {
        output.push({ ...doc.data(), id: doc.id });
      });
      setUsers(output);
    });
  }, []);

  return { users };
};

export default useGetUsers;
