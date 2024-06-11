import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  return (
    <Container fluid className="footer">
      <Row>
        <Col xs={12} className="footer-body">
          <h3><b>FIND ME ON </b></h3>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
          <ul className="footer-icons">
            <li className="footer-social-icon">
              <a
                href="https://github.com/Mamidi-Anjali"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li> &nbsp;
            
            <li className="footer-social-icon">
              <a
                href="https://www.linkedin.com/in/AnjaliMamidi/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <p style={{color:"gray"}}> { date.toDateString()}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
