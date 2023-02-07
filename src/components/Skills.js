import { Row, Col, Container } from "react-bootstrap";
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
    <section className="skill">
      <Container>
        <Row className=" pt-4 pb-4">
          <h2>Skills</h2>

          <Col xs={3} md={2} xl={1}>
            <div className="skills-icons">
              <FontAwesomeIcon icon={faJs} size="2x" /> <br />
              JavaScript
            </div>
          </Col>
          <Col xs={3} md={2} xl={1}>
            <div className="skills-icons">
              <FontAwesomeIcon icon={faReact} size="2x" />
              <br />
              React
            </div>
          </Col>

          <Col xs={3} md={2} xl={1}>
            <div className="skills-icons">
              <FontAwesomeIcon icon={faHtml5} size="2x" /> <br />
              HTML
            </div>
          </Col>
          <Col xs={3} md={2} xl={1}>
            <div className="skills-icons">
              <FontAwesomeIcon icon={faCss3Alt} size="2x" /> <br />
              CSS
            </div>
          </Col>

          <Col xs={3} md={2} xl={1}>
            <div className="skills-icons">
              <FontAwesomeIcon icon={faBootstrap} size="2x" /> <br />
              Bootstrap
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
