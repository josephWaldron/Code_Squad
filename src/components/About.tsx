import { Container, Row, Col, Button } from "react-bootstrap";
import josephImage from "../assets/josephImg.jpg";
import LiamImage from "../assets/Linked In Pic (liam).jpg";
import Theodore from "../assets/teddy.jpg";
import AlexisImage from "../assets/Alexis.jpg";


export const About = () => {
  return (
    <>
      <header className="py-5 text-center bg-dark">
        <Container>
          <h1 className="text-success">About</h1>
        </Container>
      </header>
      <section className="py-5">
        <Container>
          <Row className="gx-5">
            <Col md>
              <article>
                <h2 className="mb-4">About the site</h2>
                <p className="lead">
                  CodeSquad is an interactive and fun website where people of
                  all ages and skill levels can learn more about coding in
                  various different languages, with hands on exercises and real
                  world examples. Our goal is to teach as many people as
                  possible about the extravagant world of coding. We provide a
                  fun, easy to use interface that allows users to track their
                  progress and see how much they have learned. All in all,
                  CodeSquad is here to help sharpen coding skills and learn the
                  basics of many different languages.
                </p>
              </article>
            </Col>
          </Row>
          <h1>About the creators</h1>
          <br />
          {/* Copy this and add your own stuff */}
          <Row>
            <Col md>
              <img
                width={140}
                src={josephImage}
                alt="Joseph"
                className="img-fluid rounded-circle mb-4"
              />
              <h2 className="mb-4">Joseph Waldron</h2>
            </Col>
            <Col md>
              <p className="lead">Full Stack Engineer | Kean University</p>
              <Button
                variant="success"
                target="_blank"
                href="https://github.com/josephWaldron"
              >
                Github
              </Button>{" "}
              <Button
                variant="info"
                href="https://portfolio-site-delta-seven.vercel.app/"
                target="_blank"
              >
                Portfolio
              </Button>
            </Col>
          </Row>
          {/* Copy this and add your own stuff */}
          <br></br>
          <br></br>
          <Row>
            <Col md>
              <img
                width={140}
                src={AlexisImage}
                alt="Alexis"
                className="img-fluid rounded-circle mb-4"
              />
              <h2 className="mb-4">Alexis Balbuena</h2>
            </Col>
            <Col md>
              <p className="lead">Computer Science | Kean University</p>
              <Button
                variant="success"
                target="_blank"
                href="https://www.linkedin.com/in/alexis-balbuena-a497b0252/"
              >
                Linkedin
              </Button>{" "}
              <Button
                variant="info"
                href="https://github.com/Alexis2400"
                target="_blank"
              >
                Github
              </Button>
            </Col>
          </Row>
          {/* Copy this and add your own stuff */}
          <br></br>
          <br></br>
          <Row>
            <Col md>
              <img
                width={140}
                src={LiamImage}
                alt="Liam"
                className="img-fluid rounded-circle mb-4"
              />
              <h2 className="mb-4">Liam Lidlow</h2>
            </Col>
            <Col md>
              <p className="lead">Computer Science Cyber Security | Kean University</p>
              <Button
                variant="success"
                target="_blank"
                href="https://www.linkedin.com/in/liam-lidlow-0054a7247/"
              >
                Linkedin
              </Button>{" "}
            </Col>
          </Row>
          <br />
          {/* Copy this and add your own stuff */}
          <Row>
            <Col md>
              <img
                width={140}
                src={Theodore}
                alt="Joseph"
                className="img-fluid rounded-circle mb-4"
              />
              <h2 className="mb-4">Theodore Awa</h2>
            </Col>
            <Col md>
              <p className="lead">Computer Science Cyber Security | Kean University</p>
              <Button
                variant="success"
                target="_blank"
                href="https://github.com/teddycybersecurity"
              >
                Github
              </Button>{" "}
              <Button
                variant="info"
                href="https://www.linkedin.com/in/teddy-awa-39921588//"
                target="_blank"
              >
                Linkedin
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
