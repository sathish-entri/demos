import React, { useContext, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


import Container from "react-bootstrap/Container";
import logoLight from "../../Assets/logo.png";
import logoDark from "../../Assets/logo.png";

import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
 

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  // useEffect(() => {
  //   const body = document.body;
  //   const toggle = document.querySelector(".toggle-inner");
  //   if (themename === "dark") {
  //     body.classList.add("dark-mode");
  //     toggle.classList.add("toggle-active");
  //   } else {
  //     body.classList.remove("dark-mode");
  //     toggle.classList.remove("toggle-active");
  //   }
  // }, [themename]);

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img
            src={ logoLight}
            className="img-fluid logo"
            alt="brand"
            style={{width: "48", height: "40"}}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <div className="toggleButton">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skills"
                onClick={() => updateExpanded(false)}
              >
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Nav.Item>
            {/* <div className="theme-switch">
              <div id="toggle" onClick={toggeltheme}>
                <div className="toggle-inner" />
              </div>
            </div> */}
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
