import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-glow-top"></div>

      <Container>
        <Row className="align-items-center justify-content-between g-4">
          {/* --- Brand / Copyright --- */}
          <Col md={4} className="text-center text-md-start">
            <h5 className="footer-brand">
              Suyog<span className="brand-dot">.</span>dev
            </h5>
            <p className="copyright-text">
              © {currentYear} Suyog Dhepe. <br className="d-md-none" />
              All Rights Reserved.
            </p>
          </Col>

          {/* --- Quick Links (Optional, good for UX) --- */}
          <Col md={4} className="text-center">
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </Col>

          {/* --- Socials & Built With --- */}
          <Col md={4} className="text-center text-md-end">
            <div className="footer-socials">
              <a
                href="https://github.com/suyog657898775456"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/suyog-dhepe-a51246298/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:suyogdhepe18@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>

            <small className="built-with">
              Built with <FaHeart className="heart-icon" /> and React
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
