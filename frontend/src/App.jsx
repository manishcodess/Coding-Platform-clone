import { Routes, Route } from "react-router-dom";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import Homepage from "./assets/pages/Homepage";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </>
  );
}

export default App;
