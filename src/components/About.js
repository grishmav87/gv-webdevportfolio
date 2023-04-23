import { Container, Button } from "react-bootstrap";
import CV from "../assets/Grishma_CVEd.pdf";

export default function Skills() {
  return (
    <Container>
      <section className="about pt-3 pb-3 " id="about">
        <h2>About</h2>
        <p>
          I am fascinated by how things work - be it the inner workings of a
          biological organism or a human-made machine. I appreciate that a
          well-crafted mechanism is beautiful in its efficiency, and I also love
          when it is aesthetically pleasing. With my passion for science,
          technology and the arts, I'm inclined to build things that fulfil
          their intended purpose <em>and</em> look good.{" "}
        </p>
        <Button className="contact-btn">
          <a href={CV} download>
            Download CV
          </a>
        </Button>
      </section>
    </Container>
  );
}
