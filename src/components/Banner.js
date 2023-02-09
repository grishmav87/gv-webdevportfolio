import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/nautilusgears.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

export default function Banner() {
  return (
    <section className="banner">
      <Container>
        <Row className="align-items-center pt-2 pb-2">
          <Col xs={12} md={6} xl={7}>
            <h5>Welcome!</h5>
            <h1>I'm Grishma,</h1>
            <h2>Front end developer</h2>
            <Row>
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
              <Col>
                <div className="skills-icons">
                  <FontAwesomeIcon icon={faBootstrap} size="2x" /> <br />
                  Bootstrap
                </div>
              </Col>
            </Row>
            <Button className="mt-2" onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={15} />
            </Button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={headerImg}
              alt="header-img"
              className="header-img img-fluid"
            ></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
