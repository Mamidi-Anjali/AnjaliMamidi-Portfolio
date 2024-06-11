import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/About/AnjaliPicture.png";
import Tilt from "react-parallax-tilt";
import Image from 'react-bootstrap/Image';

function AboutCard() {
  return (
      <Container>
        <Row>
          <Col md={12} lg={8} className="home-about-description">
            <p className="home-about-body">
            Hi, I'm Anjali Mamidi, a passionate <b className="purple">Full Stack Web Developer.</b> I recently completed my Master's in Computer and Information Sciences at George Mason University - College of Engineering and Computing, where I was honored with the<b className="purple"> Outstanding Academic Achievement Award. </b>
            <br /> <br /> With a robust foundation in <b className="purple">Java, Python, MySQL, Spring Framework, React.js, and JavaScript, </b>I specialize in developing, managing, debugging, and deploying websites following Agile methodology.
            <br /><br />
            Before pursuing my Master’s degree, I accumulated <b className="purple">2+ years of experience </b> as a Full Stack Web Developer. I honed my skills in <b className="purple">Spring Boot, React.js, </b>and various web technologies including<b className="purple"> HTML, CSS, Bootstrap, JavaScript, and TypeScript. </b>From developing dynamic and responsive web applications to ensuring seamless data management with <b className="purple">MySQL and Cassandra DB.</b>
            <br /> <br/> I thrive on solving complex problems and embracing new technologies.
            I am committed to continuous learning and growth.

            I'm always eager to connect with fellow professionals, share insights, and explore opportunities for collaboration. Let's create something amazing together!
              </p>
          </Col>
          <Col md={12} lg={4} className="myAvtar">
            <Tilt>
              <Image src={myImg} className="img-fluid" alt="Profile" rounded/>
            </Tilt>
          </Col>
        </Row>
      </Container>
  );
}

export default AboutCard;
