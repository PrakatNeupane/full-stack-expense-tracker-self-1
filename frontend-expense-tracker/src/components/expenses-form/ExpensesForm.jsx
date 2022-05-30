import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export const ExpensesForm = () => {
  return (
    <div>
      <Row className="g-3 bg-warning p-4 rounded pb-5">
        <Col md="4">
          <Form.Control
            type="text"
            className="form-control"
            placeholder="Expenses name"
          ></Form.Control>
        </Col>
        <Col md="2">
          <Form.Control
            type="number"
            className="form-control"
            placeholder="amount"
          ></Form.Control>
        </Col>
        <Col md="4">
          <Form.Control type="date" className="form-control"></Form.Control>
        </Col>
        <Col md="2">
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Col>
      </Row>
    </div>
  );
};
