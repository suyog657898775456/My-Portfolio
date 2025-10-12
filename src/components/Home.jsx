import { motion } from "framer-motion";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  return (
    <section className="home-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-5 mb-md-0">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="fw-bold display-5 mb-3 text-dark">
                Hi, I’m <span className="text-primary">Suyog Dhepe</span>
              </h1>
              <h3 className="fw-semibold text-secondary mb-4">
                Full Stack Developer (MERN)
              </h3>
              <p className="lead text-muted mb-4">
                Passionate about building scalable web applications and
                delivering seamless user experiences.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button variant="primary" size="lg" href="/projects">
                  View My Projects
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  href="https://drive.google.com/file/d/1zvOkFZXbjlfs93_arTI094e_o1hxuv4O/view?usp=sharing"
                  target="_blank"
                >
                  Download Resume
                </Button>
              </div>

              <div className="d-flex align-items-center gap-3 mt-4">
                <a
                  href="https://github.com/yourgithub"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/yourlinkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </Col>

          {/* ✅ RIGHT SIDE IMAGE FIXED */}
          <Col md={6} className="text-center">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={`${process.env.PUBLIC_URL}/images/suyog2.png`}
                alt="Suyog Dhepe"
                roundedCircle
                className="profile-img shadow-lg"
                fluid
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
