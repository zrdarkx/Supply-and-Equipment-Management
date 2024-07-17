import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSemStore } from "./zustand/store";
import Offices from "./pages/offices";

function App() {
  const { currentUser } = useSemStore();
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offices" element={true ? <Offices /> : <Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
