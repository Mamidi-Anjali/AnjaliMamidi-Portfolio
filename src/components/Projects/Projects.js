import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TicTacToe from "../../Assets/Projects/TictactoePicture.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import StudentSurvey from "../../Assets/Projects/StudentSurvey.png";
import FrequentFlyer from "../../Assets/Projects/FrequentFlyer.png";
import MonthlyTasks from "../../Assets/Projects/MonthlyTasks.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={MonthlyTasks}
              isBlog={false}
              title="Monthly Tasks Planner"
              description="The website is used to plan and track the progress of the monthly tasks. It allows users to create a task ,edit and delete it. The created tasks are categorized based on month and displayed. The frontend of the application is developed using React JS and the backend of the application is developed using JAVA and Springboot"
              ghLink="https://github.com/Mamidi-Anjali/MonthlyChallengeApplication"
            />
          </Col>

          <Col xs={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="TIC-TAC-TOE"
              description="This project is a web-based implementation of the classic Tic-Tac-Toe game using React js. The game allows two players to take turns placing their respective markers (crosses and circles) on a 3x3 grid. The first player to align three of their markers horizontally, vertically, or diagonally wins the game. The game includes a simple user interface with interactive elements and provides feedback for game actions."
              ghLink="https://github.com/Mamidi-Anjali/TIC-TAC-TOE"
              demoLink ="https://tictactoe-game-website.netlify.app/"
            />
          </Col>

          <Col xs={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Anjali Mamidi - Portfolio"
              description="This personal portfolio website is a showcase of my skills, projects, and experiences as a full-stack web developer. Developed using React.js, the website features a modern, responsive design and provides detailed information about my background, technical expertise, and accomplishments."
              ghLink="https://github.com/Mamidi-Anjali/AnjaliMamidi-Portfolio"
              demoLink ="https://anjali-mamidi.netlify.app/"
            />
          </Col>

          <Col xs={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={StudentSurvey}
              isBlog={false}
              title="Prospective Student Feedback Application"
              description=" Developed a full-stack web application using Angular and Spring Boot with JPA, providing a seamless survey experience 
for prospective students. Integrated RESTful APIs for efficient form submissions and data retrieval. Employed JPA for 
robust and scalable database interactions. "
              ghLink="https://github.com/Mamidi-Anjali/ProspectiveStudentFeedbackApplication"
            />
          </Col>
          <Col  xs={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={FrequentFlyer}
              isBlog={false}
              title="Frequent Flyer Program: Database and Application Development"
              description="Designed ER diagrams and translated them into relational schemas for a Frequent Flyer database. Wrote SQL queries and developed a Java application using JDBC. Implemented a 3-tier enterprise model with server-side Java Servlets and JSPs, and an Android client app for a complete end-to-end database application."
              ghLink="https://github.com/Mamidi-Anjali/FrequentFlyerApplication"
            />
          </Col>
{/* 
          <Col  xs={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Mamidi-Anjali/AnjaliMamidi-Portfolio"
            />
          </Col>

          <Col xs={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/Mamidi-Anjali/AnjaliMamidi-Portfolio"
            />
          </Col>

          <Col xs={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/Mamidi-Anjali/AnjaliMamidi-Portfolio"
            />
          </Col>

          <Col xs={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Mamidi-Anjali/AnjaliMamidi-Portfolio"
            />
          </Col>*/}
        </Row> 
      </Container>
    </Container>
  );
}

export default Projects;
