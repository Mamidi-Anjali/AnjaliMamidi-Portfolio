import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import CertificationCard from "./CertificationCard";
import Oracle from "../../Assets/Certificates/Oracle-Java-SE17.pdf";
import OraclePic from "../../Assets/Certificates/Oracle.png";
import BOOTSTRAP from "../../Assets/Certificates/BOOTSTRAP.pdf";
import BootstrapPic from "../../Assets/Certificates/BootstrapPic.png";
import ReactPdf from "../../Assets/Certificates/React.pdf";
import ReactPic from "../../Assets/Certificates/ReactPic.png";
import Python from "../../Assets/Certificates/python_basic.pdf";
import PythonPic from "../../Assets/Certificates/PythonPic.png";
import PbSolving from "../../Assets/Certificates/problem_solving_basic.pdf";
import PbSolvingPic from "../../Assets/Certificates/ProblemSolvingPic.png";


function Certificates() {
  return (
    <Container fluid className="certificates-section">
      <Particle />
      <Container>
        <p style={{ color: "white" }}>
          Here are a few Certifications I've taken on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={6} lg={4} className="certificates-card">
            <CertificationCard
              imgPath={OraclePic}
              isBlog={false}
              text="Oracle Certified Professional : Java SE 17 Developer"
              pdfLink={Oracle}
            />
          </Col>
          <Col xs={6} lg={4} className="certificates-card">
            <CertificationCard
              imgPath={PythonPic}
              isBlog={false}
              text="HackerRank : Python"
              pdfLink={Python}
            />
          </Col>
          <Col xs={6} lg={4} className="certificates-card">
            <CertificationCard
              imgPath={PbSolvingPic}
              isBlog={false}
              text="HackerRank : Problem Solving"
              pdfLink={PbSolving}
            />
          </Col>
          <Col xs={6} lg={4} className="certificates-card">
            <CertificationCard
              imgPath={ReactPic}
              isBlog={false}
              text="PluralSight: React-The Big Picture"
              pdfLink={ReactPdf}
            />
          </Col>
          <Col xs={6} lg={4} className="certificates-card">
            <CertificationCard
              imgPath={BootstrapPic}
              isBlog={false}
              text="Coursera : Front-End Web UI Frameworks and Tools: Bootstrap 4"
              pdfLink={BOOTSTRAP}
            />
          </Col>


        </Row> 
      </Container>
    </Container>
    
  );
}

export default Certificates;
