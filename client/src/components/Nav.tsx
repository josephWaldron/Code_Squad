import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Cookies from "js-cookie";
const N = () => {
  const isLoggedIn = Cookies.get("userId");
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img src="/src/assets/logo.png" alt="logo" width="60" height="60" />
        <Navbar.Brand href="/">CodeSquad</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About / Contact</Nav.Link>
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="/courses">All Courses</NavDropdown.Item>
              <NavDropdown.Item href="/courses/java">Java</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default N;
