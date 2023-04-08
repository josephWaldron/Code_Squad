import Cookies from "js-cookie";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import courses from "../data/courses";
import logo from "../assets/logo.png";

const N = () => {
  const isLoggedIn =
    Cookies.get("hash") !== undefined && Cookies.get("hash") !== "";
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="logo"
            width="60"
            height="60"
            className="d-inline-block align-top me-2"
          />
          <span className="h4 mb-0">CodeSquad</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="px-3">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="px-3">
              About / Contact
            </Nav.Link>
            <NavDropdown
              title="Courses"
              id="basic-nav-dropdown"
              className="px-3"
            >
              <NavDropdown.Item href="/courses">All Courses</NavDropdown.Item>
              {courses.map((course, index) => (
                <NavDropdown.Item
                  key={index}
                  href={`/courses/${course.name}`}
                  disabled={!course.complete}
                  className="px-3"
                >
                  {course.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {isLoggedIn ? (
              <Nav.Link href="/profile" className="px-3">
                Profile
              </Nav.Link>
            ) : (
              <Nav.Link href="/login" className="px-3">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default N;
