// File: src/components/Profile.jsx
import { motion } from "framer-motion";
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";
import "./Profile.css";

export default function Profile() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "JavaScript / ES6+", level: 95 },
    { name: "HTML & CSS", level: 95 },
    { name: "Bootstrap / React-Bootstrap", level: 90 },
  ];

  return (
    <section className="profile-section py-5">
      <Container>
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="section-title mb-4">About Me</h2>
          <p className="overview mb-5">
            I am Suyog Dhepe, a passionate Full Stack MERN developer. I
            specialize in building scalable web applications with modern UI/UX,
            writing clean code, and delivering solutions efficiently. I love
            solving problems and continuously learning new technologies.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="section-title mb-4">Skills</h2>
          <Row>
            {skills.map((skill, index) => (
              <Col md={6} key={index} className="mb-4">
                <Card className="skill-card shadow-sm">
                  <Card.Body>
                    <Card.Title>{skill.name}</Card.Title>
                    <ProgressBar
                      now={skill.level}
                      label={`${skill.level}%`}
                      animated
                      striped
                      variant="info"
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}
