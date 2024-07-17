import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSemStore } from "./zustand/store";

function App() {
  const { currentUser } = useSemStore();
  console.log(currentUser);
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={currentUser ? <Dashboard /> : <Login />}
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
