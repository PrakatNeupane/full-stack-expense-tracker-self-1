import React, { useRef, useState } from "react";
import { Form, Row, Button, Spinner, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../helpers/axiosHelper";

export const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSumbit = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      return alert("Please enter the email and password");
    }
    setLoading(true);
    const { data } = await postLogin({ email, password });
    // console.log(data);
    setLoading(false);

    // if login success, store user data in session storage and redirect to the dashboard page
    if (data.status === "success") {
      const { name, email, _id } = data.user;
      sessionStorage.setItem("user", JSON.stringify({ email, name, _id }));
      setError("");
      navigate("/dashboard");
      return;
    }

    // show error message
    setError(data.message);
  };
  return (
    <Row className="login-comp mt-3">
      <Form>
        <h3>Welcome back</h3>
        <hr />
        {loading && <Spinner animation="border" variant="primary" />}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button onClick={handleSumbit} variant="primary">
          Login
        </Button>
        <div className="text-end">
          New here? <Link to="/register">Register</Link>
        </div>
      </Form>
    </Row>
  );
};
