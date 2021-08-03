import React, { useEffect } from "react";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../redux/Product/ProductAction";

function DetailProduct(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSingleProduct(id)(dispatch);
  }, [id, dispatch]);
  const detailProducts = useSelector((state) => state.products);
  const detailProduct = detailProducts.products;
  return detailProduct.loading ? (
    <h2>Loading</h2>
  ) : detailProduct.error ? (
    <h2>{detailProduct.error}</h2>
  ) : detailProduct && detailProduct.data && detailProduct.data.product ? (
    <div>
      <Row>
        <Col xs={12} md={5} lg={6}>
          <Card.Img
            variant="top"
            src={detailProduct.data.product.imageUrls[0]}
          />
        </Col>
        <Col xs={12} md={5} lg={6}>
          <Card.Body>
            <Card.Title>{detailProduct.data.product.name}</Card.Title>
            <Card.Text>{detailProduct.data.product.description}</Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Col>
      </Row>
    </div>
  ) : (
    <center>
      <Spinner animation="border" variant="primary" />
    </center>
  );
}

export default DetailProduct;
