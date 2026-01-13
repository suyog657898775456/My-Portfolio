import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaTimes,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function NavigationBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close sidebar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Projects", path: "/projects" },

    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        className={`custom-navbar ${scrolled ? "scrolled" : ""} ${
          isOpen ? "sidebar-open" : ""
        }`}
        variant="dark"
      >
        <Container className="navbar-container">
          {/* Brand Name with Animated Logo */}
          <Navbar.Brand as={Link} to="/" className="fw-bold brand-name">
            <div className="logo-container">
              <FaCode className="logo-icon" />
              <div className="logo-text">
                <span className="brand-highlight">Suyog Dhepe</span>
                <span className="brand-dot">.dev</span>
              </div>
            </div>
          </Navbar.Brand>

          {/* Custom Toggle Button */}
          <button
            className={`navbar-toggle ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className="toggle-line line1"></span>
            <span className="toggle-line line2"></span>
            <span className="toggle-line line3"></span>
          </button>

          {/* Navigation Links - Desktop */}
          <Nav className="ms-auto align-items-center desktop-nav">
            {navItems.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <Nav.Link
                  key={i}
                  as={Link}
                  to={item.path}
                  className={`nav-item-link ${isActive ? "active" : ""}`}
                >
                  <span className="nav-text">{item.name}</span>
                  <span className="nav-hover-effect"></span>
                </Nav.Link>
              );
            })}
          </Nav>

          {/* Social Icons - Desktop */}
          <div className="social-links desktop-social">
            <a
              href="https://github.com/suyog657898775456"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
              <span className="social-tooltip">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/suyog-dhepe-a51246298/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a
              href="mailto:suyogdhepe18@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope />
              <span className="social-tooltip">Email</span>
            </a>
          </div>
        </Container>
      </Navbar>

      {/* Sidebar Overlay and Mobile Navigation */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className={`sidebar-nav ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <FaCode className="sidebar-logo-icon" />
            <span className="brand-highlight">Suyog</span>
            <span className="brand-dot">.dev</span>
          </div>
          <button
            className="close-sidebar"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-links">
            {navItems.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={i}
                  to={item.path}
                  className={`sidebar-link ${isActive ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sidebar-link-text">{item.name}</span>
                  <span className="sidebar-link-indicator"></span>
                </Link>
              );
            })}
          </nav>

          <div className="sidebar-social">
            <p className="sidebar-social-title">Connect with me</p>
            <div className="sidebar-social-icons">
              <a
                href="https://github.com/suyog657898775456"
                target="_blank"
                rel="noreferrer"
                className="sidebar-social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/suyog-dhepe-a51246298/"
                target="_blank"
                rel="noreferrer"
                className="sidebar-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:suyogdhepe18@gmail.com"
                className="sidebar-social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            <div className="sidebar-footer">
              <span className="sidebar-copyright">© 2024 Suyog Dhepe</span>
              <span className="sidebar-tagline">Full Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
