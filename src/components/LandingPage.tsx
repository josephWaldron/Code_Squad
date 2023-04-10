import Cookies from "js-cookie";
import { Alert, Button, Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
//imports for images
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const LandingPage = () => {
  const isLoggedIn =
    Cookies.get("hash") !== undefined && Cookies.get("hash") !== "";
  const justOut = Cookies.get("new") !== undefined && Cookies.get("new") !== "";

  return (
    <Container className="text-center">
      {justOut && (
        <Alert variant="success" className="my-3">
          You have successfully logged out. Have a good day!
        </Alert>
      )}
      <Container className="my-5">
        <h1>Learn to Code with Engaging Lessons and Exciting Activities!</h1>
        <p className="lead">
          Beautifully designed courses to help beginners learn how to code.
        </p>
        <Button variant="primary" href={isLoggedIn ? "/courses" : "/register"}>
          Get Started
        </Button>
      </Container>
      <Carousel fade className="my-5">
        <Carousel.Item>
          <img className="d-block w-100" src={hero1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hero2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hero3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="my-5">
        <h2>How to Code</h2>
        <p>
          Learning how to code can seem like a daunting task, but with the right
          resources and mindset, anyone can do it! Here are some tips to get you
          started:
        </p>
        <ul className="list-unstyled">
          <li>Choose a language or technology to focus on</li>
          <li>Start with the basics and build a strong foundation</li>
          <li>Practice, practice, practice!</li>
          <li>Join a coding community or find a mentor for support</li>
        </ul>
      </div>
    </Container>
  );
};

export default LandingPage;
