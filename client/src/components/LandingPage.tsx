import Cookies from "js-cookie";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const LandingPage = () => {
  const isLoggedIn =
    Cookies.get("hash") !== undefined && Cookies.get("hash") !== "";
  const justOut = Cookies.get("new") !== undefined && Cookies.get("new") !== "";
  return (
    <>
      {justOut && (
        <Alert>You have successfully logged out. Have a good day!</Alert>
      )}
      <h1>Learn to code with engaging lessons and exciting activities!</h1>
      <p>Beautifully designed courses to help beginners learn how to code.</p>

      {isLoggedIn ? (
        <Button variant="primary" href="/courses">
          Get Started
        </Button>
      ) : (
        <Button variant="primary" href="/register">
          Get Started
        </Button>
      )}
    </>
  );
};

export default LandingPage;
