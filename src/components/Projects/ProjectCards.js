import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsEye } from "react-icons/bs";
// import { View } from "@react-pdf/renderer";

function ProjectCards(props) {
  return (
    <Card className="project-card-view  h-100">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{height:"225px"}}/>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; {"GitHub"}
            {/* {props.isBlog ? "Blog" : "GitHub"} */}
          </Button>
          
          {props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" style={{ marginLeft: "10px" }}>
          <BsEye /> &nbsp;
          {"LiveDemo"}
          </Button>
          )}
        </div>

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
