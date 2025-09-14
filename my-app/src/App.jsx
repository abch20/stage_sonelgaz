import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./signin";
import SignUp from "./Login";
import Home from "./Home";
import Setting from "./Setting";
import Help from "./Help";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/index" element={<Home />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </div>
  );
}
