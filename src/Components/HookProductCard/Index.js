import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/Product/ProductAction";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

function ProductCard() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProduct()(dispatch);
  }, [dispatch]);

  const productsInfo = useSelector((state) => state.products);

  return productsInfo.loading ? (
    <Spinner animation="border" variant="primary" />
  ) : productsInfo.error ? (
    <h2>{productsInfo.error}</h2>
  ) : (
    <div>
      <Container className="">
        <CardGroup className="card-deck">
          {productsInfo &&
            productsInfo.products &&
            productsInfo.products.data &&
            productsInfo.products.data.products &&
            productsInfo.products.data.products.map((product) => (
              <Row className="card-space">
                <Col xs={12} md={3} lg={4}>
                  <Card
                    className="space card-tiktak"
                    style={{ width: "15rem" }}
                  >
                    <Card.Img
                      variant="top"
                      src={product.imageUrls[0]}
                      alt="picture here"
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Rating {product.avgRating}</ListGroupItem>
                      <ListGroupItem>Price: {product.price} VND</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <div className="d-grid gap-2">
                        <Button
                          variant="primary"
                          href={"/products/" + product._id}
                        >
                          Detail
                        </Button>
                      </div>
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
