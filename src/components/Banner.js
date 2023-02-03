import { Container, Row, Col } from "react-bootstrap";

export default function Banner() {
  return (
    <section className="banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome!</span>
            <h1>I'm Grishma Vadlamani</h1>
            <h2>Front-end developer</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
