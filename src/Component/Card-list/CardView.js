import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./CardView.css";
const CardView = (props) => {
  return (
    <div>
      <Card className="user-card">
        <Card.Img src={`https://robohash.org/${props.user.id}?set=set5`} />
        <Card.Body>
          <h1>{props.user.name}</h1>
          <p className="text-center">{props.user.email}</p>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CardView;
