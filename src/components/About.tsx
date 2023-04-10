import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <>
      <header className="py-5 text-center bg-light">
        <Container>
          <h1 className="text-success">About / Contact</h1>
        </Container>
      </header>
      <section className="py-5">
        <Container>
          <Row className="gx-5">
            <Col md>
              <article>
                <h2 className="mb-4">About</h2>

                <p className="lead">
                  CodeSquad is an interactive and fun website where people of
                  all ages and skill levels can learn more about coding in
                  various different languages, with hands on exercises and real
                  world examples. Our goal is to teach as many people as possible
                  about the extravagant world of coding. We provide a fun, easy
                  to use interface that allows users to track their progress and
                  see how much they have learned. All in all, CodeSquad is here
                  to help sharpen coding skills and learn the basics of many
                  different languages.
                </p>
              </article>
            </Col>
            <Col md>
              <article>
                <h2 className="mb-4">Contact</h2>

                <p className="lead">
                  Reach out to the CodeSquad team anytime by contacting the
                  following email address: example@kean.edu, or contact us at
                  7328675309. Our team will get back to you as soon as possible.
                  Thank you for learning with CodeSquad, and have a great day!
                </p>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
