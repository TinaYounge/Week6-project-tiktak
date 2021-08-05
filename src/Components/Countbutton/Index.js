import React, { useEffect, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { sendCount } from "../../redux/Count/CountAction";

function CountButton(productId, stock) {
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  console.log("1", stock);

  const handleDecrease = (number) => {
    if (number >= 1) {
      number = number - 1;
      setNumber(number);
    }
  };
  const handleIncrease = (number) => {
    if (number < 100) {
      number = number + 1;
      setNumber(number);
    }
  };
  useEffect(() => {
    dispatch(sendCount(number, productId));
    console.log("check", number);
  }, [number, dispatch, productId]);

  console.log(number);
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="light" onClick={() => handleDecrease(number)}>
          -
        </Button>
        <Button variant="light">{number}</Button>
        <Button variant="light" onClick={() => handleIncrease(number)}>
          +
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default CountButton;
