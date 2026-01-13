import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email Me",
      value: "suyogdhepe18@gmail.com",
      link: "mailto:suyogdhepe18@gmail.com",
      color: "#6366f1",
    },
    {
      icon: <FaPhone />,
      title: "Call Me",
      value: "+91 8010124700",
      link: "tel:+918010124700",
      color: "#10b981",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Maharashtra, India",
      link: "#",
      color: "#ec4899",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-glow"></div>

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header text-center mb-5"
        >
          <span className="subtitle">Get in Touch</span>
          <h2 className="title">
            Contact <span className="highlight">Me</span>
          </h2>
          <p className="section-desc">
            I am currently available for freelance work and internship
            opportunities.
            <br />
            Feel free to reach out via email or phone.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <Row className="justify-content-center g-4 mb-5">
          {contactInfo.map((item, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.a
                href={item.link}
                target={item.link === "#" ? "_self" : "_blank"}
                rel="noreferrer"
                className="contact-card-link"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="contact-card-glass">
                  <div className="icon-wrapper" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <h4 className="contact-title">{item.title}</h4>
                  <p className="contact-value">{item.value}</p>
                </div>
              </motion.a>
            </Col>
          ))}
        </Row>

        {/* Social Connect Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="social-footer text-center"
        >
          <div className="divider-line"></div>
          <h5 className="social-heading">Connect on Social Media</h5>
          <div className="social-icons-row">
            <a
              href="https://github.com/suyog657898775456"
              target="_blank"
              rel="noreferrer"
              className="social-circle"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/suyog-dhepe-a51246298/"
              target="_blank"
              rel="noreferrer"
              className="social-circle"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
