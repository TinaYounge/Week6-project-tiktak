import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchSearchProduct } from "../../redux/Product/ProductAction";

function SearchBox() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  console.log("seracg", search);
  useEffect(() => {
    fetchSearchProduct(search)(dispatch);
  }, []);
  return (
    <div>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Example: CTO"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Form.Label column sm="2">
            <Button onClick={() => fetchSearchProduct(search)(dispatch)}>
              Search
            </Button>
          </Form.Label>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchBox;
