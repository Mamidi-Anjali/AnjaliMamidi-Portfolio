import React from "react";
import { Container} from "react-bootstrap";
import Particle from "../Particle";
import SkillsSection from './SkillsSection';
function Skills() {
  return (
    <Container fluid className="skills">
      <Particle />     
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <SkillsSection />
      </Container>
    </Container>
    
  );
  
}

export default Skills;
