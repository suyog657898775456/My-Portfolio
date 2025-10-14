import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

export default function NavigationBar() {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="custom-navbar shadow-sm py-3"
      variant="dark"
    >
      <Container>
        {/* Brand Name */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 brand-name">
          <span className="brand-highlight">Suyog Dhepe</span>
          <span className="brand-dot"> .Portfolio</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Navigation Links */}
          <Nav className="ms-auto align-items-center">
            {["Home", "Profile", "Projects", "Contact"].map((page, i) => {
              const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <Nav.Link
                  key={i}
                  as={Link}
                  to={path}
                  className={`nav-item-link ${isActive ? "active" : ""}`}
                >
                  {page}
                </Nav.Link>
              );
            })}

            {/* Social Icons */}
            <div className="d-flex ms-3">
              <a
                href="https://github.com/suyog657898775456"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/suyog-dhepe-a51246298/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:suyogdhepe18@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
