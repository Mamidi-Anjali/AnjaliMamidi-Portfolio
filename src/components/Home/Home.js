import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import About from "../About/About";
import HomeHeader from "../Home/HomeHeader";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Home() {

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              <h1 className="heading-name">
                <strong> ANJALI MAMIDI</strong>
              </h1>
              <h1 className="heading-name">Full Stack Developer</h1><br></br>
            </Col>
          </Row>
        </Container>
        <HomeHeader />
      </Container>
      <About />  
    </section>
  );
}

export default Home;
