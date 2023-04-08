import Cookies from "js-cookie";
import { Alert, Button, Container } from "react-bootstrap";

const LandingPage = () => {
  const isLoggedIn =
    Cookies.get("hash") !== undefined && Cookies.get("hash") !== "";
  const justOut = Cookies.get("new") !== undefined && Cookies.get("new") !== "";

  return (
    <Container>
      {justOut && (
        <Alert variant="success" className="my-3">
          You have successfully logged out. Have a good day!
        </Alert>
      )}

      <Container className="my-5">
        <h1>Learn to code with engaging lessons and exciting activities!</h1>
        <p>Beautifully designed courses to help beginners learn how to code.</p>
        <Button variant="primary" href={isLoggedIn ? "/courses" : "/register"}>
          Get Started
        </Button>
      </Container>
    </Container>
  );
};

export default LandingPage;
