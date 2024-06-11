import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExpCards from "./ExpCards";
import Particle from "../Particle";
import Verizon from "../../Assets/Experiences/Verizon.png";
import PromizeIT from "../../Assets/Experiences/PromizeIT.jpg";

function Experience() {
  return (
    <Container fluid className="exp-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work Experience</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="exp-card">
            <ExpCards
              imgPath={Verizon}
              isBlog={false}
              title="Software Developer"
              years="FEB 2020 - JUNE 2022"
              description="This role provided me with an invaluable opportunity to explore and master a range of tools such as Postman, SonarQube, Jenkins.
              One of the most impactful projects I worked on involved developing a user interface for Verizon representatives, aimed at streamlining the process of answering customer queries. My specific responsibility was to design and develop the UI for payment and adjustment-related tabs. Utilizing technologies like React, Redux, and Java, I focused on enhancing the application's readability. This effort significantly reduced the average handling time for customer queries by 6%, demonstrating the tangible impact of our work.
              In another project, I delved into backend development, collaborating with a team to build Spring Boot microservices for the billing pod. My role was multifaceted, involving the construction of microservices, consumption of REST endpoints, and writing unit test cases for Java classes. I also ensured our code met high standards by performing rigorous Sonar checks. Throughout this project, I maintained consistent communication with the project manager to ensure our API system aligned with project expectations.
              This role was not just about technical development; it also involved embracing Agile methodologies. Working in iterative development cycles, we received regular feedback from stakeholders, allowing us to make timely adjustments and improvements. This approach highlighted the flexibility and responsiveness essential for successful software development.
              My time at Verizon was a period of significant growth and learning, where each project added a new layer of expertise and confidence to my professional journey."
           />
          </Col>

          <Col md={12} className="exp-card">
            <ExpCards
              imgPath={PromizeIT}
              isBlog={false}
              title="Internship"
              years="APRIL 2019 - MAY 2019"
              description="worked on a project titled Prediction of Automobile and House Prices using Machine Learning Algorithms (KNN). I was actively involved in all phases of the project, from data cleaning to model evaluation. I utilized various algorithms and techniques, including K-Nearest Neighbors (KNN), Linear Regression, Logistic Regression, and Decision Tree Classifier. To support the analysis and model development, I leveraged libraries such as Pandas, Numpy, Matplotlib, Seaborn, and Scikit-learn."
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;