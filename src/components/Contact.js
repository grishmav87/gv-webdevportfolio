import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <section className="contact pt-3 pb-3">
      <Container>
        <h2>Get in touch!</h2>

        <Row className="contact-info pt-2 pb-3">
          <Col>
            <a
              href="https://www.linkedin.com/in/grishma-vadlamani/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </Col>
          <Col>
            <a
              href="https://github.com/grishmav87"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </Col>
          <Col>
            <a href="mailto:grishma.vadlamani@gmail.com">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
          </Col>
        </Row>
        <p>
          <FontAwesomeIcon icon={faCopyright} /> 2023 All rights reserved
        </p>
      </Container>
    </section>
  );
}
