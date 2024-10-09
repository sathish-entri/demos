import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/mypicture2.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{backgroundColor:"white"}}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em"}} data-aos="fade-right">
              <strong className="primary-header"> ABOUT </strong> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              Hi, i'm a <span className="primary-header">
               Sathish Chandrasekar 
              </span>{" "}
              and i am from Nagapattinam, Tamil Nadu, India.
              <br />
              <br />Proficient in <span style={{fontSize:"bolder",color:"black"}}>MERN STACK</span>{" "}
              <span className="primary-header">JAVASCRIPT, HTML, CSS, BOOTSTRAP, REACT, NODE, EXPRESS</span> and love to learn
              new things.
              <br />
              <br />I am pursing my {" "}
              
                <span className="primary-header">Msc Computer Science </span>
              form <span className="primary-header">Thiruthangal Nadar Art's and Science</span>
              <br />and i have completed <span className="primary-header">Bsc Computer Science</span>in <span className="primary-header">Egs Pillay Art's and Science.</span>
              <br />
              
              <br />
              Recently completed my training {" "}
              <span className="primary-header">Full Stack Web Development </span> in {" "}
              <span className="primary-header">Entri Elevant </span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
