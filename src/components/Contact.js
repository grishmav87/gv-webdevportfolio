import { Container, Row, Col, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <Container>
      <section className="contact pt-3 pb-3" id="contact">
        <h2>Get in touch!</h2>

        <Row className="contact-info pt-2 pb-3">
          <Col>
            <Button className="contact-btn">
              <a
                href="https://www.linkedin.com/in/grishma-vadlamani/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </Button>
          </Col>
          <Col>
            <Button className="contact-btn">
              <a
                href="https://github.com/grishmav87"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </Button>
          </Col>
          <Col>
            <Button className="contact-btn">
              <a href="mailto:grishma.vadlamani@gmail.com">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </a>
            </Button>
          </Col>
        </Row>
        <footer className="pt-4">
          <FontAwesomeIcon icon={faCopyright} /> 2023 All rights reserved{" "}
          <a
            href="https://github.com/grishmav87/gv-webdevportfolio"
            target="_blank"
            rel="noreferrer"
          >
            (Open-source code)
          </a>
        </footer>
      </section>
    </Container>
  );
}
