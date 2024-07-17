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

function App() {
  const { currentUser } = useSemStore();
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/transaction"
          element={true ? <Transaction /> : <Login />}
        />
        <Route path="/offices" element={true ? <Offices /> : <Login />} />
        <Route path="/supply" element={true ? <Supply /> : <Login />} />
        <Route path="/equipment" element={true ? <Equipment /> : <Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
