import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { UserForm } from "../../redux/Register/RegisterAction";

function RegisterForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log("tate", state);
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
        <Button
          variant="primary"
          type="submit"
          onClick={() => dispatch(UserForm(state))}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
