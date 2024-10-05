import React from "react";
import { Container} from "react-bootstrap";

import Techstack from "../About/./Techstack";

import Toolstack from "../About/Techstack"
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "../About/about.css";


function Skills() {
  return (
    <Container fluid className="about-section" style={{paddingTop:160}}>
      <Container>
        <h1 data-aos="fade-right">
          <span className="primary-header">Skillset</span> I Work With
        </h1>

        <div data-aos="fade-up">
          <Techstack />
        </div>

        <h1 data-aos="fade-right">
          <span className="primary-header">Tools</span> I use
        </h1>
        <div data-aos="fade-up">
          <Toolstack data-aos="fade-up" />
        </div>

        {/* <Github /> */}
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Skills;
