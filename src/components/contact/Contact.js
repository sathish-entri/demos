import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./contact.css"
import gmail from "../../Assets/gmail_logo.png";
import Phone from "../../Assets/phone-icon-isolated-glassy-blue-round-button-abstract-illustration-phone-icon-glassy-blue-round-button-104746620.webp";
import linkedin from "../../Assets/linkedIn_PNG8.png"
import "../Projects/project.css";
import ContactCards from "./ContactCards";

function Contact() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Contact <strong className="Fluorescent-Blue">me </strong>
        </h1>
        {/* <p>Here are a few projects I've worked on recently.</p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} >
          <Col md={6} lg={4} className="project-card contact-view">
        
            <ContactCards
              imgPath={gmail}
              title="GMAIL"
              title2="abishsathish2002@gmail.com"
              // ghLink="https://github.com/rahuljha4171/E-cart"
              demoLink="abishsathish2002@gmail.com"
            />
          </Col>

          <Col md={6} lg={4} className="project-card contact-view">
            <ContactCards
              imgPath={linkedin}
              title="LINKEDIN"
              title2="https://www.linkedin.com/in/
sathish-chandrasekar-1107a730a"
              // ghLink="https://github.com/rahuljha4171/Portfolio-Website"
              demoLink="https://www.linkedin.com/in/
sathish-chandrasekar-1107a730a"
            />
          </Col>
          <Col md={6} lg={4} className="project-card contact-view">
            <ContactCards
              imgPath={Phone}
              title="PHONE"
              title2="8925158025"    
              demoLink="8925158025"
            />
          </Col>

          
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Contact;
