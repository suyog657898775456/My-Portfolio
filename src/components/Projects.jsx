// File: src/components/Projects.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Projects.css";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      name: "Direct Market Access For Farmers",
      description:
        "A full-stack app allowing farmers to sell produce directly to buyers, removing middlemen and improving profits.",
      role: "Worked on both frontend and backend — implemented REST APIs, integrated ML recommendations, and UI components.",
      technologies:
        "React.js, Node.js, Express.js, MongoDB, Machine Learning API, Weather API",
      image: `${process.env.PUBLIC_URL}/images/project 1.png`,
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "My Journey",
      description:
        "A CRUD web app to manage hotel listings. Users can create, read, update, and delete data with secure authentication.",
      role: "Built backend APIs, MongoDB integration, and user authentication system.",
      technologies: "React.js, Node.js, Express.js, MongoDB, Bootstrap",
      image: `${process.env.PUBLIC_URL}/images/project 2.png`,
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Suyog Rating App",
      description:
        "Rate your favorite stores out of 5! A full MERN stack project with secure login and real-time database storage.",
      role: " Full-Stack Focused on UI, rating logic, and backend communication.",
      technologies: "React.js, Node.js, Express.js, MongoDB, JWT Auth",
      image: `${process.env.PUBLIC_URL}/images/project 3.png`,
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Suyog AI ChatBot",
      description:
        "An interactive AI chatbot built with OpenAI and Streamlit for intelligent real-time conversations.",
      role: "Integrated OpenAI API with Python backend and built an intuitive UI with Streamlit.",
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="section-title mb-5 text-center text-dark">
            My Projects
          </h2>
        </motion.div>

        <Row>
          {projects.map((project, index) => (
            <Col md={4} sm={6} key={index} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="position-relative"
              >
                <Card className="project-card shadow-lg border-0 h-100 overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.name}
                    className="project-img"
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    className="overlay d-flex flex-column justify-content-center align-items-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h5 className="text-white fw-bold mb-3">{project.name}</h5>
                    <Button
                      variant="light"
                      onClick={() => handleShow(project)}
                      className="fw-semibold"
                    >
                      Details
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* ✅ Animated Slide-Up Modal */}
        <AnimatePresence>
          {showModal && selectedProject && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="custom-modal-overlay"
            >
              <motion.div
                className="custom-modal"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "100vh" }}
                transition={{ type: "spring", stiffness: 90, damping: 15 }}
              >
                <div className="modal-header-custom d-flex justify-content-between align-items-center">
                  <h4 className="text-white mb-0">{selectedProject.name}</h4>
                  <Button
                    variant="outline-light"
                    size="sm"
                    onClick={handleClose}
                  >
                    ✕
                  </Button>
                </div>
                <div className="modal-body-custom p-4">
                  <motion.img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="img-fluid rounded mb-4 shadow"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <p className="mb-3 text-secondary">
                    <strong>Description:</strong> {selectedProject.description}
                  </p>
                  <p className="mb-3 text-secondary">
                    <strong>My Role:</strong> {selectedProject.role}
                  </p>
                  <p className="mb-4 text-secondary">
                    <strong>Technologies Used:</strong>{" "}
                    {selectedProject.technologies}
                  </p>
                  <div className="d-flex gap-3">
                    <Button
                      variant="primary"
                      href={selectedProject.liveLink}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="dark"
                      href={selectedProject.githubLink}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
