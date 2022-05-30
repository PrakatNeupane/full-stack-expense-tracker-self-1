import React from "react";
import { ListGroup } from "react-bootstrap";

export const CustomTable = () => {
  return (
    <div className="mt-5 fs-3">
      <ListGroup variant="" className="custom-list">
        <ListGroup.Item>
          <span className="title">TV</span>
          <span className="cost">$234</span>
        </ListGroup.Item>
        <ListGroup.Item>sdf</ListGroup.Item>
        <ListGroup.Item>sdf</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
