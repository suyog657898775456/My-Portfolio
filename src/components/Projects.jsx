import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Projects.css";

export default function Projects() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  const projects = [
    {
      name: "Direct Market Access For Farmers",
      description:
        "A full-stack app allowing farmers to sell produce directly to buyers, removing middlemen and improving profits.",
      role: "Worked on both frontend & backend — implemented REST APIs, ML recommendations & UI components.",
      technologies:
        "React.js, Node.js, Express.js, MongoDB, Machine Learning API, Weather API",
      image: `${process.env.PUBLIC_URL}/images/project 1.png`,
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "My Journey",
      description:
        "A CRUD web app to manage hotel listings. Users can create, read, update and delete data securely.",
      role: "Built backend APIs, MongoDB integration, and user authentication system.",
      technologies: "React.js, Node.js, Express.js, MongoDB, Bootstrap",
      image: `${process.env.PUBLIC_URL}/images/project 3.png`,
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Suyog Rating App",
      description:
        "Rate your favorite stores! A MERN project with real-time DB and JWT Authentication.",
      role: "Focused on UI, rating logic, and backend communication.",
      technologies: "React.js, Node.js, Express.js, MongoDB, JWT Auth",
      image: `${process.env.PUBLIC_URL}/images/project 2.png`,
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Suyog AI ChatBot",
      description:
        "An AI chatbot built using OpenAI API and Streamlit with real-time intelligent responses.",
      role: "Integrated OpenAI API with Streamlit UI and Python backend.",
      technologies: "Python, Streamlit, OpenAI API",
      image: `${process.env.PUBLIC_URL}/images/project 4.png`,
      liveLink:
        "https://suyog657898775456-ai-chatbot-by-suyog--smartagentui26-jrmhhz.streamlit.app/",
      githubLink: "#",
    },
  ];

  return (
    <section className="projects-section py-5">
      <Container>
        <h2 className="section-title mb-5 text-center text-dark">
          My Projects
        </h2>

        <Row>
          {projects.map((project, index) => (
            <Col md={4} sm={6} key={index} className="mb-4">
              <motion.div
                className={`flip-card ${
                  flippedIndex === index ? "flipped" : ""
                }`}
              >
                <div className="flip-card-inner">
                  {/* FRONT SIDE */}
                  <div className="flip-card-front">
                    <Card className="project-card shadow-sm border-0 h-100">
                      <Card.Img
                        variant="top"
                        src={project.image}
                        alt={project.name}
                        className="project-img"
                      />
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <h5>{project.name}</h5>
                        <Button
                          variant="primary"
                          className="mt-2"
                          onClick={() => handleFlip(index)}
                        >
                          Details
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>

                  {/* BACK SIDE */}
                  <div className="flip-card-back p-4">
                    <h4>{project.name}</h4>

                    <p>
                      <strong>Description:</strong> {project.description}
                    </p>
                    <p>
                      <strong>My Role:</strong> {project.role}
                    </p>

                    <div className="tech-icons mb-3">
                      {project.technologies.split(", ").map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-3 mt-3 flex-wrap">
                      <Button
                        variant="primary"
                        href={project.liveLink}
                        target="_blank"
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="dark"
                        href={project.githubLink}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    </div>

                    <Button
                      variant="outline-light"
                      className="mt-3"
                      onClick={() => handleFlip(index)}
                    >
                      ✕ Close
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
