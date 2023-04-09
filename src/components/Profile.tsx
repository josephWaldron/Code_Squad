import Cookies from "js-cookie";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import getUser from "../hooks/getUser";
import ProgressBar from "./Progress";
import courses from "../data/courses";
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
    <Container>
      <Card className="my-4">
        <Card.Header>
          <h3>Profile</h3>
        </Card.Header>
        <Card.Body>
          {justIn && (
            <Alert variant="success" className="my-2">
              You have successfully logged in. Welcome!
            </Alert>
          )}
          {user && (
            <h4 className="my-3">
              Welcome {user.firstName} {user.lastName}!
            </h4>
          )}
          {error && <p>Error: {error}</p>}
          {courses.map((course) => {
            if (course.complete) {
              return (
                <React.Fragment key={course.id}>
                  <ProgressBar course={course} />
                  <Button
                    variant="primary"
                    className="my-2"
                    href={`/courses/${course.name.toLowerCase()}`}
                  >
                    Continue {course.name}
                  </Button>
                </React.Fragment>
              );
            }
          })}
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <Button variant="danger" onClick={handleLogout}>
                Log Out
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Profile;
