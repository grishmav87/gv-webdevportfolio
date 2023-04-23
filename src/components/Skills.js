import { Container, Button, Row, Col } from "react-bootstrap";
import CV from "../assets/Grishma_CVEd.pdf";
import procreateIcon from "../assets/procreate-logo.png";
import illustratorIcon from "../assets/illustrator-logo.png";
import photoshopIcon from "../assets/photoshop-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <Container>
      <section className="about pt-3 pb-3 " id="skills">
        <h2>Skills</h2>
        <Row className="pt-3 pb-3">
          <Col>
            <div className="skills-icons">
              <FontAwesomeIcon icon={faJs} size="2x" /> <br />
              JavaScript
            </div>
          </Col>
          <Col>
            <div className="skills-icons">
              <FontAwesomeIcon icon={faReact} size="2x" />
              <br />
              React
            </div>
          </Col>
          <Col>
            <div className="skills-icons">
              <FontAwesomeIcon icon={faHtml5} size="2x" /> <br />
              HTML
            </div>
          </Col>
          <Col>
            <div className="skills-icons">
              <FontAwesomeIcon icon={faCss3Alt} size="2x" /> <br />
              CSS
            </div>
          </Col>
        </Row>
        <Row className="pt-3 pb-3">
          <Col>
            <div className="skills-icons">
              <FontAwesomeIcon icon={faBootstrap} size="2x" /> <br />
              Bootstrap
            </div>
          </Col>
          <Col>
            <div className="skills-icons">
              <img
                className="design-icon"
                src={photoshopIcon}
                alt="photoshop-logo"
              />
              <br />
              Photoshop
            </div>
          </Col>
          <Col>
            <div className="skills-icons">
              <img
                className="design-icon"
                src={illustratorIcon}
                alt="illustrator-logo"
              />
              <br />
              Illustrator
            </div>
          </Col>
          <Col>
            <div className="skills-icons">
              <img
                className="design-icon"
                src={procreateIcon}
                alt="procreate-logo"
              />
              <br />
              Procreate
            </div>
          </Col>
        </Row>
        <br />
        <Button className="contact-btn">
          <a href={CV} download>
            Download CV
          </a>
        </Button>
      </section>
    </Container>
  );
}
