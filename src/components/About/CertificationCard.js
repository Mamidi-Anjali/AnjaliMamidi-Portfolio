import React from "react";
import Card from 'react-bootstrap/Card';
import { BsEye } from "react-icons/bs";
import { Button } from "react-bootstrap";

function CertificationCard(props) {
  return (
    <Card className="certificates-card-view h-100">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"  style={{height:"250px"}}/>
      <Card.Body className="d-flex flex-column">
      <Card.Text className="flex-grow-1">
            {props.text}
      </Card.Text>
      <Button variant="primary" href={props.pdfLink} target="_blank">
          <BsEye />
          View 
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
