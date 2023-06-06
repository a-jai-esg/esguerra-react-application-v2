import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/formStyles.css";

export default function Login() {
  return (
    <>
      <div className="form">
        <h1>Registration</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter you chosen email address</Form.Label>
            <br />
            <Form.Control
              className="textboxes"
              type="email"
              placeholder="Enter email"
            />
            <br />
            <Form.Text className="form_fields text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Choose a password</Form.Label>
            <br />
            <Form.Control
              className="textboxes"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm your password</Form.Label>
            <br />
            <Form.Control
              className="textboxes"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              className="form_fields text-muted"
              type="checkbox"
              label="By registering, you agree to the terms and conditions"
            />
          </Form.Group>
          <br />
          <br />
          <Button variant="flat" size="xxl" type="submit">
            Register!
          </Button>
        </Form>
      </div>
    </>
  );
}
