import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import dawnImg from "../assets/dawn-selfie.png";

export default function Banner() {
  return (
    <Container>
      <section className="banner pt-5 pb-3 " id="home">
        <Row className="align-items-center ">
          <Col xs={12} md={6} xl={6}>
            <h5>Hi!</h5>
            <h1>I'm Grishma.</h1>
            <h3>Web developer and designer</h3>
            <br />
            <p>
              I am fascinated by how things work - be it the inner workings of a
              biological organism or a human-made machine. I appreciate that a
              well-crafted mechanism is beautiful in its efficiency, and I also
              love when it is aesthetically pleasing. With my passion for
              science, technology and the arts, I'm inclined to build things
              that fulfil their intended purpose <em>and</em> look good.{" "}
            </p>
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
