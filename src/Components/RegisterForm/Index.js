import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

function RegisterForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit" onClick={() => dispatch(state)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
