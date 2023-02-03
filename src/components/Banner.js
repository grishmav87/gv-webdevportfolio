import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/nautilusgears.png";

export default function Banner() {
  return (
    <section className="banner">
      <Container>
        <Row className="align-items-center pt-4 pb-4">
          <Col xs={12} md={6} xl={7}>
            <h5>Welcome!</h5>
            <h1>I'm Grishma Vadlamani</h1>
            <h2>Front end developer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={15} />
            </button>
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
