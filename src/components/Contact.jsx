// File: src/components/Contact.jsx
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "suyogdhepe18@gmail.com",
      link: "mailto:suyogdhepe18@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 8010124700",
      link: "tel:+911234567890",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Suyog Dhepe",
      link: "https://www.linkedin.com/in/suyog-dhepe-a51246298/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "Suyog Dhepe",
      link: "https://www.linkedin.com/in/suyog-dhepe-a51246298/",
    },
  ];

  return (
    <section className="contact-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="section-title mb-5 text-center">Contact Me</h2>
        </motion.div>

        <Row className="justify-content-center">
          {contacts.map((contact, index) => (
            <Col md={3} sm={6} xs={12} className="mb-4" key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="contact-card text-center shadow-sm h-100">
                  <Card.Body>
                    <div className="contact-icon mb-3">{contact.icon}</div>
                    <Card.Title>{contact.label}</Card.Title>
                    <Card.Text>
                      <a href={contact.link} target="_blank" rel="noreferrer">
                        {contact.value}
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
