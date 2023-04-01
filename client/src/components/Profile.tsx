import Cookies from "js-cookie";
import { Alert, Button } from "react-bootstrap";
import getUser from "../hooks/getUser";
import ProgressBar from "./Progress";
import courses from "../data/courses";
import { Course } from "./courses/Courses";
import React from "react";

const Profile = () => {
  const { user, error } = getUser();
  if (error == "noCookie") {
    return (
      <Alert variant="danger">
        Please <Alert.Link href="/login">Log in</Alert.Link> or
        <Alert.Link href="/register"> Register</Alert.Link> to view this page.
      </Alert>
    );
  }
  const justIn = Cookies.get("new") !== undefined && Cookies.get("new") !== "";
  const handleLogout = () => {
    Cookies.remove("hash");
    const expirationTime = new Date(Date.now() + 5000); // Set expiration time 5 seconds from now
    Cookies.set("new", "true", { expires: expirationTime });
    window.location.href = "/";
  };
  return (
    <>
      {justIn && (
        <Alert variant="success">
          You have successfully logged in. Welcome!
        </Alert>
      )}
      {user && (
        <h1>
          Welcome {user.firstName} {user.lastName}!
        </h1>
      )}
      {error && <p>Error: {error}</p>}
      {courses.map((course) => {
        if (course.complete) {
          return (
            <React.Fragment key={course.id}>
              <ProgressBar course={course} />
              <Button href={`/courses/${course.name.toLowerCase()}`}>
                Continue {course.name}
              </Button>
            </React.Fragment>
          );
        }
      })}

      <Button onClick={handleLogout}>Log Out</Button>
    </>
  );
};

export default Profile;
