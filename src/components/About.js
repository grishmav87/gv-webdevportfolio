import { Container, Button } from "react-bootstrap";
import CV from "../assets/Grishma_CVEd.pdf";

export default function Skills() {
  return (
    <Container>
      <section className="about pt-3 pb-3 " id="about">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
