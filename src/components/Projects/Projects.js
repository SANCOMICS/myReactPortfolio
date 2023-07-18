import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BEACON Safety/Emergency App"
              description="react native expo managed mobile application project. 
              it record video with both the front and the back camera when activated,
               as well as the users location and personal information, 
               it then send this information to emergency contacts at the end of a countdown timer that started on activation"
              ghLink="https://github.com/SANCOMICS/Projecttrain"
              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ICADEMY E-Learning Platform"
              description="A digital hub used for educational content and resources, it will be providing interactive courses and progress tracking for learners. It promotes collaboration and communication among students, their Guardians and instructors without leaving the comfort of their environment, accessible on mobile devices for convenience."
              ghLink="https://github.com/nexinch/icademy"
                     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Musango Bus Management System"
              description="It is an online bus ticketing management system which is web-based. the platform enables users to book and manage bus tickets conveniently. It streamlines the booking process, offers seat selection, bus selection, journey selection, and provides digital boarding passes for a smooth travel experience."
              ghLink="https://github.com/soumyajit4419/Plant_AI" 
              // correct the github link
            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
