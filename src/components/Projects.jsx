// File: src/components/Projects.jsx
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Projects.css";

export default function Projects() {
  // Replace with your project details
  const projects = [
    {
      name: "Direct Market Accsses For Farmers",
      description:
        "A Full- Stack Project where farmers can directly sell there items which removes middleman profit and get right profit to formeer.",
      image: `${process.env.PUBLIC_URL}/images/project 1.png`,
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "My Journey",
      description:
        "Where you can see the hotels amd perform CRUD Operation. mainly focused on backend part and intergrating APIs .",
      image: `${process.env.PUBLIC_URL}/images/project 3.png`,
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Suyog Rating App",
      description:
        "Full-Stack Project where you can give ratings to an store out of 5 and with Authentication and data is store in MongoDB.",
      image: `${process.env.PUBLIC_URL}/images/project 2.png`,
      liveLink: "#",
      githubLink: "#",
    },
    {
      name: "Suyog AI ChatBot",
      description:
        "A real-time chat application Ask AnyThing Using Open Ai for Result.",
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
          <h2 className="section-title mb-5">My Projects</h2>
        </motion.div>

        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="project-card shadow-lg h-100">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.name}
                    className="project-img"
                  />
                  <Card.Body>
                    <Card.Title>{project.Direct}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="d-flex gap-2">
                      <Button
                        variant="outline-primary"
                        href={project.liveLink}
                        target="_blank"
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outline-primary"
                        href={project.githubLink}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    </div>
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
