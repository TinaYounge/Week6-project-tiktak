import React, { useEffect } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Spinner,
  Container,
  ButtonGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../redux/Product/ProductAction";
import CountButton from "../Countbutton/Index";
import "./Style.css";
function DetailProduct(id) {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchSingleProduct(id)(dispatch);
  }, [id, dispatch]);
  const detailProducts = useSelector((state) => state.products);
  const detailProduct = detailProducts.products;
  // let stock = { stock: 10 };
  // if (detailProduct.data) {
  //   return { ...stock, stock: detailProduct.data.product.stock };
  // }
  console.log(id);
  return detailProduct.loading ? (
    <h2>Loading</h2>
  ) : detailProduct.error ? (
    <h2>{detailProduct.error}</h2>
  ) : detailProduct && detailProduct.data && detailProduct.data.product ? (
    <Container className="card-tiktak margin-top">
      <Row>
        <Col xs={12} md={4} lg={4}>
          <Card.Img src={detailProduct.data.product.imageUrls[0]} />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <Card.Body>
            <Card.Title className=" margin-top">
              {detailProduct.data.product.name}
            </Card.Title>
            <Card.Text>{detailProduct.data.product.description}</Card.Text>
            <Card.Text>
              Rating: {detailProduct.data.product.avgRating}
              {""}
              <span style={{ color: "red" }}>
                {" "}
                Price: {detailProduct.data.product.price} VND
              </span>
            </Card.Text>
            <CountButton productId={id} />
            <div className="lg">
              <Button variant="primary">Buy</Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  ) : (
    <center>
      <Spinner animation="border" variant="primary" />
    </center>
  );
}

export default DetailProduct;
