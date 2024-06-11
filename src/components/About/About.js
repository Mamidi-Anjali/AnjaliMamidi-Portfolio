import React from "react";
import { Container } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AboutCard from "./AboutCard";
import EducationCard from "./EducationCard";
import Certificates from "./Certificates";
function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Tabs
      defaultActiveKey="About"
      id="fill-tab-example"
      className="mb-3"
      fill
      >
      <Tab eventKey="About" title="ABOUT ME" >
        <AboutCard/>
      </Tab>
      <Tab eventKey="Education" title="EDUCATION">
      <EducationCard />
      </Tab>
      <Tab eventKey="Certifications" title="CERTIFICATIONS">
      <Certificates />
      </Tab>
    </Tabs>   
    </Container>
  );
}
export default About;
