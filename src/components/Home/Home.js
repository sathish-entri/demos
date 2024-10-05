import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// import ScrollToTop from "../ScrollToTop/ScrollToTop";
// import Lottie from "lottie-react";
// import SpaceBoy from "../../LottieFiles/coder.json"

// import Type from "./Type";
import "./home.css";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home() {
  return (
    <section>
      <h2>efoujh oeh h  hfu</h2>
      {/* <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                   👋🏻
                
               
              </h1>

              <h1 className="heading-name"> I'M
                <strong className="main-name"> Sathish Chandrasekar</strong>
              </h1>

              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            
             
               <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
      <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/sathish-entri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="mailto:abishsathish2002@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/
sathish-chandrasekar-1107a730a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dead.programer/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container> */}
      {/* <ScrollToTop /> */}
      {/* <About /> */}
    </section>
  );
}

export default Home;
