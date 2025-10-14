import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Profile.css";

export default function Profile() {
  const skills = [
    { name: "React.js", level: 90, color: "#61DBFB" },
    { name: "Node.js / Express", level: 85, color: "#3C873A" },
    { name: "MongoDB", level: 80, color: "#4DB33D" },
    { name: "JavaScript / ES6+", level: 95, color: "#F0DB4F" },
    { name: "HTML & CSS", level: 95, color: "#E34F26" },
    { name: "Bootstrap / React-Bootstrap", level: 90, color: "#563D7C" },
  ];

  return (
    <section className="profile-section py-5">
      <Container>
        {/* Overview */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="section-title mb-3">About Me</h2>
              <p className="overview">
                Hi, I am <span className="highlight">Suyog Dhepe</span>, a
                passionate{" "}
                <span className="highlight">MERN Stack Developer</span>. I
                specialize in building{" "}
                <span className="highlight">scalable web applications</span>
                with modern UI/UX, writing clean code, and delivering solutions
                efficiently. I love solving problems and continuously learning
                new technologies.
              </p>
            </motion.div>
          </Col>

          <Col md={6} className="text-center">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/MERN-Stack.png`}
                alt="MERN Stack"
                className="profile-tech-img"
              />
            </motion.div>
          </Col>
        </Row>

        {/* Skills */}
        <h2 className="section-title mb-4 text-center">My Skills</h2>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col xs={6} sm={4} md={3} key={index} className="mb-4 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={buildStyles({
                    pathColor: skill.color,
                    textColor: "#0d6efd",
                    trailColor: "#e0e0e0",
                    textSize: "16px",
                  })}
                />
                <h6 className="mt-2">{skill.name}</h6>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
