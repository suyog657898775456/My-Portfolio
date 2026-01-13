import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaArrowDown,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import "./Home.css";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Replace with your actual Google Drive link
    const resumeUrl =
      "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section id="home" className={`hero-section ${isLoaded ? "loaded" : ""}`}>
      {/* Background Elements */}
      <div className="hero-bg-overlay">
        <div className="glow-blob blob-1"></div>
        <div className="glow-blob blob-2"></div>
        <div className="glass-grid"></div>
      </div>

      {/* Main Content Container */}
      <Container className="hero-content-container">
        <Row className="align-items-center h-100">
          {/* Left Content Area */}
          <Col lg={7} md={12} className="hero-text-col">
            <div className="content-wrapper">
              <div className="status-badge fade-in-up delay-0">
                <span className="pulse-dot"></span>
                Available for new projects
              </div>

              <h1 className="hero-title fade-in-up delay-1">
                Hi, I'm <span className="gradient-text">Suyog Dhepe</span>
                <span className="wave-emoji">👋</span>
              </h1>

              <div className="type-wrapper fade-in-up delay-2">
                <FaCode className="type-icon" />
                <TypeAnimation
                  sequence={[
                    "Building Scalable Web Apps",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "React.js Specialist",
                    2000,
                    "Crafting Modern UI/UX",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="type-text"
                />
              </div>

              <p className="hero-description fade-in-up delay-3">
                I transform concepts into seamless digital experiences.
                Specializing in
                <strong> React</strong>, <strong>Node.js</strong>, and modern
                web technologies, I build software that is fast, accessible, and
                visually stunning.
              </p>

              <div className="tech-mini-bar fade-in-up delay-3">
                <span>Stack:</span>
                <div className="tech-icons">
                  <SiReact title="React" />
                  <SiNodedotjs title="Node.js" />
                  <SiMongodb title="MongoDB" />
                  <SiTypescript title="TypeScript" />
                  <SiJavascript title="JavaScript" />
                  <SiNextdotjs title="Next.js" />
                </div>
              </div>

              <div className="hero-buttons fade-in-up delay-4">
                <button
                  className="btn-modern primary"
                  onClick={handleScrollToProjects}
                >
                  View Work <FaRocket className="btn-icon" />
                </button>
                <button
                  className="btn-modern secondary"
                  onClick={downloadResume}
                >
                  Download CV <FaFileDownload className="btn-icon" />
                </button>
              </div>

              <div className="hero-socials fade-in-up delay-5">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>

          {/* Right Image Area */}
          <Col lg={5} md={12} className="hero-image-col">
            <div className="profile-wrapper fade-in-right delay-3">
              <div className="profile-card-glass">
                <div className="float-card card-1">
                  <FaLaptopCode />
                  <span>Developer</span>
                </div>
                <div className="float-card card-2">
                  <span className="code-dot"></span>
                  <span>Clean Code</span>
                </div>

                <div className="image-blob-mask">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/suyog2.png`}
                    alt="Suyog Dhepe"
                    className="profile-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://ui-avatars.com/api/?name=Suyog+Dhepe&background=0D8ABC&color=fff&size=500`;
                    }}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="scroll-indicator-modern" onClick={handleScrollToProjects}>
        <span>Scroll</span>
        <FaArrowDown className="bounce" />
      </div>
    </section>
  );
}
