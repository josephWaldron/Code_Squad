import React, { useState, useEffect } from "react";
import LandingPage from "./components/landingPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import LoginPage from "./components/login";
import SignUp from "./components/create-account";
import Profile from "./components/profile";
import Courses from "./components/courses/courses";
import JavaLessons from "./components/courses/javaCourse/javaModules";
import About from "./components/about";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/create-account" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <div>
              <h1>Welcome to the Home Page!</h1>
            </div>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/java" element={<JavaLessons />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
