import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Pro } from "./Products";
import Card from "./Card";

class A extends Component {
  render() {
    return (
      <>
        <h1 align="center">Shop</h1>
        <Row xs={1} md={3} className="g-4">
          {Pro.map((product, idx) => (
            <Col align="center" key={idx}>
              <Card product={product} />
              {/* <h1>
                {product.id}
                {product.Name}
              </h1> */}
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default A;
