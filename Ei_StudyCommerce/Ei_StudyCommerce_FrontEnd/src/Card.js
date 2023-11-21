import React, { Component } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { useContext } from "react";

class ProdCard extends Component {
  constructor(props) {
    super(props);
    this.product = props.product;
    this.cart = useContext(CartContext);
    this.productQuantity = this.cart.getProductQuantity(this.product.id);
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.product.Name}</Card.Title>
          <Card.Text>Rs.{this.product.Price}</Card.Text>
          {this.productQuantity > 0 ? (
            <>
              <Form as={Row}>
                <Form.Label column="true" sm="6">
                  In Cart: {this.productQuantity}
                </Form.Label>
                <Col sm="6">
                  <Button
                    sm="6"
                    onClick={() => this.cart.addOneToCart(this.product.id)}
                    className="mx-2">
                    +
                  </Button>
                  <Button
                    sm="6"
                    onClick={() => this.cart.removeOneFromCart(this.product.id)}
                    className="mx-2">
                    -
                  </Button>
                </Col>
              </Form>
              <Button
                variant="danger"
                onClick={() => this.cart.deleteFromCart(this.product.id)}
                className="my-2">
                Remove from cart
              </Button>
            </>
          ) : (
            <Button
              variant="primary"
              onClick={() => this.cart.addOneToCart(this.product.id)}>
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default ProdCard;
