import React from "react";
import { Form, Row } from "react-bootstrap";

export const Login = () => {
  return (
    <Row className="login-comp mt-3">
      <Form>
        <h3>Welcome back</h3>
        <hr />
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </Row>
  );
};
