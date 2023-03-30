import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import N from "./components/Nav";
import Profile from "./components/Profile";
import Register from "./components/Register";

function App() {
  return (
    <>
      <N />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
