import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiRedux,
  SiGit,
  SiGithub,
  SiPostman,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
// Import the VS Code icon from the 'vsc' library instead
import { VscVscode } from "react-icons/vsc";
import { FaLaptopCode, FaDatabase, FaTools } from "react-icons/fa";
import "./Profile.css";

export default function Profile() {
  const techStack = [
    {
      category: "Frontend",
      icon: <FaLaptopCode />,
      skills: [
        { name: "React", icon: <SiReact />, color: "#61DBFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        { name: "JS (ES6+)", icon: <SiJavascript />, color: "#F0DB4F" },
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
      ],
    },
    {
      category: "Backend & DB",
      icon: <FaDatabase />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "#68A063" },
        { name: "Express", icon: <SiExpress />, color: "#ffffff" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
      ],
    },
    {
      category: "Tools",
      icon: <FaTools />,
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      ],
    },
  ];

  return (
    <section id="about" className="profile-section">
      {/* Background Decor */}
      <div className="profile-glow glow-left"></div>
      <div className="profile-glow glow-right"></div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header text-center mb-5"
        >
          <span className="subtitle">Discover</span>
          <h2 className="title">
            About <span className="highlight">Me</span>
          </h2>
        </motion.div>

        <Row className="justify-content-center align-items-start gx-5 gy-5">
          {/* --- LEFT: BIO CARD --- */}
          <Col lg={5} md={12}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bio-card"
            >
              <div className="bio-header">
                <h3>Who I Am</h3>
                <div className="header-line"></div>
              </div>

              <p className="bio-text">
                Hi! I'm <strong className="text-white">Suyog Dhepe</strong>. I'm
                a passionate{" "}
                <span className="highlight">MERN Stack Developer</span> who
                bridges the gap between elegant design and robust functionality.
              </p>
              <p className="bio-text">
                I don't just write code; I build solutions. From crafting
                responsive frontends to architecting scalable backends, I thrive
                on solving complex problems with modern web technologies.
              </p>

              {/* Quick Stats Row */}
              <div className="stats-container">
                <div className="stat-box">
                  <h4 className="stat-number">10+</h4>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-separator"></div>
                <div className="stat-box">
                  <h4 className="stat-number">02+</h4>
                  <span className="stat-label">Years Exp.</span>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* --- RIGHT: TECH STACK --- */}
          <Col lg={7} md={12}>
            <div className="tech-container">
              {techStack.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="tech-category"
                >
                  <div className="category-header">
                    <span className="cat-icon">{cat.icon}</span>
                    <h5 className="cat-name">{cat.category}</h5>
                  </div>

                  <div className="skills-wrapper">
                    {cat.skills.map((skill, sIdx) => (
                      <motion.div
                        key={sIdx}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="skill-pill"
                        style={{ "--glow-color": skill.color }}
                      >
                        <span
                          className="skill-icon"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </span>
                        <span className="skill-name">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
