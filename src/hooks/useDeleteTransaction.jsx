import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const useDeleteTransaction = () => {
  const deleteTransaction = (id) => {
    const docRef = doc(db, "transaction", id);
    return deleteDoc(docRef)
      .then(() => {
        console.log("Transacción eliminada exitosamente:", id);
        return true; // Indica que la eliminación fue exitosa
      })
      .catch((error) => {
        console.error("Error al eliminar la transacción:", error);
        return false; // Indica que la eliminación falló
      });
  };

  return { deleteTransaction };
};

export default useDeleteTransaction;
