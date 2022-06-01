import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const initialState = {
  name: "",
  amount: "",
  date: "",
};
export const ExpensesForm = ({ handleOnPost }) => {
  const [frmDt, setFrmDt] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrmDt({
      ...frmDt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnPost(frmDt);
    console.log("submit", frmDt);
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-3 bg-warning p-4 rounded pb-5">
          <Col md="4">
            <Form.Control
              required
              onChange={handleChange}
              name="name"
              type="text"
              className="form-control"
              placeholder="Expenses name"
            ></Form.Control>
          </Col>
          <Col md="2">
            <Form.Control
              required
              onChange={handleChange}
              name="amount"
              type="number"
              className="form-control"
              placeholder="amount"
            ></Form.Control>
          </Col>
          <Col md="4">
            <Form.Control
              required
              onChange={handleChange}
              name="date"
              type="date"
              className="form-control"
            ></Form.Control>
          </Col>
          <Col md="2">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Col>
        </Row>{" "}
      </Form>
    </div>
  );
};
