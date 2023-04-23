import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [theme, setTheme] = useState("light");

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
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="navbar-dark" href="#home">
          Grishma Vadlamani
        </Navbar.Brand>

        <Navbar.Toggle
          className="navbar-dark"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-dark mt-3 mb-3">
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
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={onUpdateActiveLink}
            >
              Skills
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

        <div className="theme-btn" onClick={toggleTheme}>
          Change theme
        </div>
      </Container>
    </Navbar>
  );
}
