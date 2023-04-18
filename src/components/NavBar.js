import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }
  function toggleTheme(event) {
    event.preventDefault();
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand className="navbar-dark" href="#home">
          Grishma Vadlamani
        </Navbar.Brand>

        <Navbar.Toggle
          className="navbar-dark"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-dark">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={onUpdateActiveLink}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={onUpdateActiveLink}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={onUpdateActiveLink}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={onUpdateActiveLink}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className={theme}>
          <div className="theme-btn" onClick={toggleTheme}>
            Change theme
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
