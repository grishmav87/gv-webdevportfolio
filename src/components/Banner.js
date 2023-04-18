import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import dawnImg from "../assets/dawn-selfie.png";

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

export default function Banner() {
  return (
    <Container>
      <section className="banner pt-5 pb-3 " id="home">
        <Row className="align-items-center ">
          <Col xs={12} md={6} xl={7}>
            <h5>Hi!</h5>
            <h1>I'm Grishma,</h1>
            <h3>Web designer and developer</h3>
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
            <Button className="mt-2 contact-btn">
              <a href="#contact">
                Let's connect <ArrowRightCircle size={15} />
              </a>
            </Button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={dawnImg}
              alt="dawn-img"
              className="header-img img-fluid  pt-4"
            />
          </Col>
        </Row>{" "}
      </section>
    </Container>
  );
}
