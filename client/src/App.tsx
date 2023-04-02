import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import N from "./components/Nav";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Courses from "./components/courses/Courses";
import courses from "./data/courses";
import DisplayCourse from "./components/courses/DisplayCourse";

function App() {
  const courseRoutes = courses.map((course) => (
    <Route
      key={course.id}
      path={`/courses/${course.name.toLowerCase()}`}
      element={<DisplayCourse course={course} />}
    />
  ));
  return (
    <>
      <N />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        {courseRoutes}
        {/* toDo programmatically generate routes for each lesson in each course  */}
      </Routes>
    </>
  );
}

export default App;
