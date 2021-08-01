import React, { useEffect } from "react";
import {
  Card,
  CardGroup,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchProduct } from "../../redux/Product/ProductAction";
import "./Style.css";

function ProductCard(search) {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchSearchProduct(search)(dispatch);
  }, []);

  const productsInfo = useSelector((state) => state.products);
  console.log("here", productsInfo.products);

  return productsInfo.loading ? (
    <h2>Loading</h2>
  ) : productsInfo.error ? (
    <h2>{productsInfo.error}</h2>
  ) : (
    <div>
      <h2>some card here</h2>
      <Container>
        <CardGroup className="flex">
          {productsInfo &&
            productsInfo.products &&
            productsInfo.products.data &&
            productsInfo.products.data.products &&
            productsInfo.products.data.products.map((product) => (
              <Row className="card-space">
                <Col xs={12} md={3} lg={3}>
                  <Card style={{ width: "12rem" }}>
                    <Card.Img
                      variant="top"
                      src={product.imageUrls[0]}
                      alt="picturehere"
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Price: {product.price} VND</ListGroupItem>
                      <ListGroupItem>Rating</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href="./pages/SingleProduct">Detail</Card.Link>
                      <Card.Link href="#">Buy</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
        </CardGroup>
      </Container>
    </div>
  );
}

export default ProductCard;
