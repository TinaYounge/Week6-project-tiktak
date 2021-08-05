import React, { useEffect, useState } from "react";
import { Col, Row, Spinner, Toast } from "react-bootstrap";
import { useSelector } from "react-redux";

function ToastTiktak() {
  const allState = useSelector((state) => state);
  const mode = allState.toast.state.mode;
  console.log("check", mode);
  console.log(typeof mode);

  const registerInfo = useSelector((state) => state.register);

  // console.log("state", registerInfo1);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return registerInfo.loading ? (
    <Spinner animation="border" variant="primary" />
  ) : registerInfo.error === undefined ? (
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
              <strong className="me-auto text-white">
                Please, register again!
              </strong>
            </Toast.Header>
            {/* <Toast.Body className="text-white">
            Welcome to Tiktak, {registerInfo.user.data.user.name}!
          </Toast.Body> */}
          </Toast>
        </Col>
      </Row>
    </div>
  ) : registerInfo.user.message ? (
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
                Welcome to Tiktak, {registerInfo.user.data.user.name}!
              </strong>
            </Toast.Header>
            {/* <Toast.Body className="text-white">
              Welcome to Tiktak, {registerInfo.user.data.user.name}!
            </Toast.Body> */}
          </Toast>
        </Col>
      </Row>
    </div>
  ) : (
    <h2></h2>
  );
}

export default ToastTiktak;
