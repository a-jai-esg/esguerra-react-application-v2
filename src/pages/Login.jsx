import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  const fields = [
    {
      label: "Email Address",
      controlId: "formBasicEmail",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      controlId: "formBasicPassword",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  const [emailAddress, setEmailAddress] = useState("Hello, Welcome to");
  const [password, setPassword] = useState("Ariana");

  return (
    <>
      <div className="form">
        <h1>Login</h1>
        <Form>
          {fields.map((field) => {
            return (
              <Form.Group className="mb-3" controlId={field.controlId}>
                <Form.Label>{field.label}</Form.Label>
                <br />
                <Form.Control
                  className="textboxes"
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={(e) => {
                    if (field.type === "email") {
                      setEmailAddress(e.target.value);
                    } else {
                      setPassword(e.target.value);
                    }
                  }}
                />
                <br />
              </Form.Group>
            );
          })}
          <Form.Group
            className="form_fields text-muted"
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <br />
          <Button variant="flat" size="xxl" type="submit">
            Log In!
          </Button>
          <h3>{emailAddress}</h3>
          <h3>{password}</h3>
        </Form>
      </div>
    </>
  );
}
