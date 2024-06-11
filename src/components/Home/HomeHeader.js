import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/ResumeAnjaliMamidi.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function HomeHeader() {

  return (
    <Container fluid className="cv-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", height:"55px" , fontSize:"23px"}}
        >
            <AiOutlineDownload />
            &nbsp;Download CV
        </Button>
        </Row>
        <Row>
            <Col md={12} className="home-about-social">
                <ul className="home-about-social-links">
                    <li className="social-icons">
                        <a
                        href="https://github.com/Mamidi-Anjali"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.linkedin.com/in/AnjaliMamidi/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <FaLinkedinIn />
                        </a>
                    </li>           
                </ul>
            </Col>
        </Row>
    </Container>

  );
}

export default HomeHeader;
