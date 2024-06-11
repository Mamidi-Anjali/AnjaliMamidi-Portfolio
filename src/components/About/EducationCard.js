import React from "react";
import { Row,Col,Container } from "react-bootstrap";
import { HiAcademicCap } from "react-icons/hi";

function EducationCard() {
  return (
    <Container>
        <Row className="education-row">
            <Col xs={12} md={3} className="education-col-heading">
            <h3><HiAcademicCap /> &nbsp; Masters</h3>
                <h3> Aug 2022 - May 2024</h3>
            </Col>
            <Col xs={12} md={9} className="education-col-content">
                <p> Master of Science -  Computer Science</p>
                <p> George Mason University</p>
                <i> Fairfax, Virginia, USA</i>
            </Col>
        </Row>
        <br/>
        <br/>
        <Row className="education-row">
            <Col xs={12} md={3} className="education-col-heading">
            <h3><HiAcademicCap /> &nbsp; Bachelors</h3>
            <h3> July 2016 - May 2020</h3>
            </Col>
            <Col xs={12} md={9}  className="education-col-content">
            <p> Bachelor of Technology - Computer Science and Engineering</p>
            <p> GITAM Deemed to be University</p>
            <i> Hyderabad, Telangana, India</i>
            </Col>
        </Row>
        <br/>
        <br/>
    </Container>
  );
}

export default EducationCard;
