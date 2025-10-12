import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function NavigationBar() {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="shadow-sm py-3"
    >
      <Container>
        {/* Brand Name */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4 text-uppercase text-primary"
        >
          Suyog Dhepe<span className="text-light"> .Portfolio</span>
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
                  className={`mx-2 ${
                    isActive ? "text-primary fw-semibold" : "text-light"
                  }`}
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
                className="text-light me-3 fs-5"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/suyog-dhepe-a51246298/"
                target="_blank"
                rel="noreferrer"
                className="text-light me-3 fs-5"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:suyogdhepe18@gmail.com"
                className="text-light fs-5"
              >
                <FaEnvelope />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
