import React, { useState } from "react";
import { Form, Row, Button, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postRegister } from "../../helpers/axiosHelper";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const Register = () => {
  const [formDt, setFormDt] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [res, setRes] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target; // name is the name we have set below to the input field
    setFormDt({
      ...formDt,
      [name]: value,
    });
    // video 10 - 1 hr 40 min
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // call api using axios
    const { data } = await postRegister(formDt);
    setRes(data);
    setIsLoading(false);
  };
  //   console.log(res.status, res.message);
  return (
    <Row className="login-comp mt-3">
      <Form onSubmit={handleOnSubmit}>
        <h3>Register To Join Us</h3>
        <hr />
        {isLoading && <Spinner variant="primary" animation="border" />}

        {res.message && (
          <Alert variant={res.status === "success" ? "success" : "danger"}>
            {res.message}
          </Alert>
        )}
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            required
            onChange={handleOnChange}
            type="text"
            name="name"
            placeholder="Enter full name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>

          <Form.Control
            required
            onChange={handleOnChange}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            onChange={handleOnChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Register
        </Button>
        <div className="text-end">
          Already a member? <Link to="/">Login</Link>
        </div>
      </Form>
    </Row>
  );
};
