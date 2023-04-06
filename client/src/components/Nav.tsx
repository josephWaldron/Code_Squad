import Cookies from "js-cookie";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import courses from "../data/courses";

const N = () => {
  const isLoggedIn =
    Cookies.get("hash") !== undefined && Cookies.get("hash") !== "";
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img src="logo.png" alt="logo" width="60" height="60" />
        <Navbar.Brand href="/">CodeSquad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About / Contact</Nav.Link>
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="/courses">All Courses</NavDropdown.Item>
              {courses.map((course, index) => (
                <NavDropdown.Item
                  key={index}
                  href={`/courses/${course.name}`}
                  disabled={!course.complete} // Add disabled prop
                >
                  {course.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {isLoggedIn ? (
              <Nav.Link href="/profile">Profile</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default N;
