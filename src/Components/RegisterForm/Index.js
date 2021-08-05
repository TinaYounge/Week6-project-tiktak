import React, { useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/Register/RegisterAction";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Style.css";
function RegisterForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="d-flex justify-content-center blue">Tiktak</h2>
      <div className="d-flex justify-content-center">
        <Form className="">
          <Form.Group className="mb-3" controlId="formBasicName">
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
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <div className="d-grid gap-2">
            <Button
              size="lg"
              variant="primary"
              onClick={() => dispatch(registerUser(state))}
            >
              Register
            </Button>
          </div>
        </Form>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <p>
          Already have an account?<Nav.Link href="./login">Log-in</Nav.Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
