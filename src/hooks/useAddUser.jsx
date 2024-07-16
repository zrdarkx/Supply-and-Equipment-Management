import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const useAddUser = () => {
  const addUser = (data) => {
    const res = validateData(data);

    if (res.error) {
      return res;
    }

    const usersRef = collection(db, "users");
    delete data.confirmPassword;
    addDoc(usersRef, { ...data, createdAt: serverTimestamp() });

    return res;
  };

  const validateData = (data) => {
    if (data.password !== data.confirmPassword) {
      return { error: true, message: "Password don't match" };
    } else {
      return { error: false, message: "Successfully Registered" };
    }
  };

  return { addUser };
};

export default useAddUser;
