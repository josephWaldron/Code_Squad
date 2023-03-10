import React from "react";
import LandingPage from "./components/landingPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import LoginPage from "./components/login";
import SignUp from "./components/create-account";
import Profile from "./components/profile";
import Courses from "./components/courses/courses";
import JavaLessons from "./components/courses/javaCourse/javaModules";
import About from "./components/about";
import JavaLesson1 from "./components/courses/javaCourse/javaLessons/javaLesson1";

function App() {
  return (
    <>
      <NavBar isLoggedIn />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn />} />
        <Route path="/create-account" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/java" element={<JavaLessons />} />
        <Route path="/About" element={<About />} />
        <Route path="/courses/java/lesson1" element={<JavaLesson1 />} />
      </Routes>
    </>
  );
}

export default App;
