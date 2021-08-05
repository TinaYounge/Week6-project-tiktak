import React, { useState } from "react";
import { Col, Row, Spinner, Toast } from "react-bootstrap";
import { useSelector } from "react-redux";

function ToastTiktak() {
  const toastState = useSelector((state) => state.toast);
  console.log("check", toastState);
  console.log("jahhahahaaaaaaaaaa");

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return toastState.loading ? (
    <Spinner animation="border" variant="primary" />
  ) : toastState.error === undefined ? (
    <div>
      <Row>
        <Col xs={12}>
          <Toast show={showA} onClose={toggleShowA} className="bg-warning ">
            <Toast.Header className="bg-warning ">
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto text-white">Please, do again!</strong>
            </Toast.Header>
            {/* <Toast.Body className="text-white">
            Welcome to Tiktak, {registerInfo.user.data.user.name}!
          </Toast.Body> */}
          </Toast>
        </Col>
      </Row>
    </div>
  ) : toastState.state.mode === undefined ? (
    <h2></h2>
  ) : (
    <div>
      <Row>
        <Col xs={12}>
          <Toast show={showA} onClose={toggleShowA} className="bg-success ">
            <Toast.Header className="bg-success ">
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto text-white">
                Welcome to Tiktak, {toastState.state.name}!
              </strong>
            </Toast.Header>
            {/* <Toast.Body className="text-white">
              Welcome to Tiktak, {registerInfo.user.data.user.name}!
            </Toast.Body> */}
          </Toast>
        </Col>
      </Row>
    </div>
  );
}

export default ToastTiktak;
