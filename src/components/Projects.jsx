import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      name: "Direct Market Access",
      category: "Full Stack / MERN",
      description:
        "A revolutionary platform connecting farmers directly to buyers. Features include real-time ML price recommendations, inventory management, and secure payment gateways.",
      technologies: ["React", "Node.js", "MongoDB", "ML API", "Stripe"],
      image: `${process.env.PUBLIC_URL}/images/project 1.png`,
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Hotel Management System",
      category: "Backend System",
      description:
        "A robust CRUD application for hotel listings. Handles complex booking logic, user authentication, and administrative dashboards for property management.",
      technologies: ["React", "Express", "MongoDB", "JWT", "Bootstrap"],
      image: `${process.env.PUBLIC_URL}/images/project 3.png`,
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Store Rating App",
      category: "Interactive UI",
      description:
        "A social rating platform for local businesses. Users can rate, review, and filter stores. Implements real-time database updates and secure authentication.",
      technologies: ["React", "Node.js", "Redux", "JWT Auth"],
      image: `${process.env.PUBLIC_URL}/images/project 2.png`,
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Suyog AI ChatBot",
      category: "Artificial Intelligence",
      description:
        "An intelligent conversational agent powered by OpenAI. Capable of context-aware responses and deployed via Streamlit for rapid interaction.",
      technologies: ["Python", "Streamlit", "OpenAI API", "NLP"],
      image: `${process.env.PUBLIC_URL}/images/project 4.png`,
      liveLink:
        "https://suyog657898775456-ai-chatbot-by-suyog--smartagentui26-jrmhhz.streamlit.app/",
      githubLink: "#",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-bg-glow"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header text-center mb-5"
        >
          <span className="subtitle">My Portfolio</span>
          <h2 className="title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-desc">
            A selection of projects that demonstrate my skills in solving
            real-world problems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col lg={6} md={12} key={index}>
                <motion.div variants={cardVariants} className="project-card">
                  {/* Image Area */}
                  <div className="card-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="project-image"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/600x400/0f172a/6366f1?text=Project+Image";
                      }}
                    />
                    <div className="card-overlay">
                      <div className="overlay-links">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="icon-btn"
                          title="View Code"
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="icon-btn"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="card-content">
                    <div className="card-meta">
                      <span className="category-tag">
                        <FaCode className="me-1" /> {project.category}
                      </span>
                    </div>

                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-desc">{project.description}</p>

                    <div className="tech-stack">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}
