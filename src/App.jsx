import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSemStore } from "./zustand/store";
import Offices from "./pages/offices";
import Transaction from "./pages/transcation";
import Supply from "./pages/supply";
import Equipment from "./pages/equipment";
import MasterRecords from "./pages/masterRecords";

function App() {
  const { currentUser } = useSemStore();
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/master-records" element={<MasterRecords />} />

        <Route
          path="/transaction"
          element={true ? <Transaction /> : <Login />}
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
