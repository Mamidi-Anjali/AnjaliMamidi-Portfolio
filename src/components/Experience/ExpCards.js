import React from "react";
import {Card, Row, Col} from "react-bootstrap";

function ExpCards(props) {
  return (
    <Card className="exp-card-view">
      <Card.Body>
        <Row>    
          <Col xs={12} lg={3} >
            <Card.Img
              variant="top"
              src={props.imgPath}
              alt="card-img"
              thumbnail
              style={{ width: '150px', height: '80px', alignContent:"center"}}
            />
            <Card.Title
            style={{ alignContent:"center", alignItems:"start"}}>{props.title} <br />{props.years}</Card.Title>
          </Col>

          <Col xs={12} lg={9}>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>
          </Col>
        </Row>       
      </Card.Body>
    </Card>
  );
}
export default ExpCards;
