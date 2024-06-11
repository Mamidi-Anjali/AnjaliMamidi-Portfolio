import React, { useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import TechStack from "../Skills/TechStack";

const SkillStars = ({ level }) => {
  const totalLevels = 5;
  return (
    <div className="d-flex align-items-center">
      {[...Array(totalLevels)].map((_, index) => (
        <div
          key={index}
          style={{
            width: '20px',
            height: '20px',
            margin: '0 2px',
            backgroundColor: index < level ? '#318CE7' : '#e0e0e0',
            borderRadius: '3px'
          }}
        />
      ))}
    </div>
  );
};

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Technical Skills');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container className="skills-section">
      <Row>
        <Col md={12} lg={5} className="skills-list">
          <ListGroup>
            {Object.keys(TechStack).map((category, index) => (
              <ListGroup.Item className='skill-card-view'
                key={index}
                active={category === selectedCategory}
                onClick={() => handleCategoryClick(category)}
                style={{ cursor: 'pointer' }}
              >
                {category}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={12} lg={1} >
          <br />
          <br />
        </Col>
        <Col md={12} lg={5}>
          <h2 className="skills-selected">{selectedCategory}</h2>
          <Row>
            {TechStack[selectedCategory].map((skill, index) => (
              <Col key={index} xs={12} className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">{skill.name}</h5>
                  <SkillStars level={skill.level} />
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsSection;
