import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;