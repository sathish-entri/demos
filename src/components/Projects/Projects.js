import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/portfolio-image.jpeg";
import Ecart from "../../Assets/Projects/ecart.png";


import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="Learning Dashboard"
              description="This is a fully functional education website that uses React.js + Bootstrap and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
              ghLink="https://github.com/rahuljha4171/E-cart"
              demoLink="https://ecart.onrender.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website and im mention my skills set and my project."
              ghLink="https://github.com/rahuljha4171/Portfolio-Website"
              demoLink="https://rahuljha.info/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Zomato Clone"
              description="Zomato clone build with react.js, css, and bootstrap frend end and node.js express,js back end and mongodb database, it's have many features like cusines and food type based on restarent filtering"    
              demoLink="https://chat-app-rahuljha4171.vercel.app/"
            />
          </Col>

          {/* <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              title="Expense Tracker"
              description="An online expense tracker using React, Node, Express, and MongoDB as the database. It allows you to keep track of your expenses, investments, and savings. All past transactions are listed, and you can also delete them. "
              ghLink="https://github.com/rahuljha4171/Expense-Tracker"
              demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col> */}
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
