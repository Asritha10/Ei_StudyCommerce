import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
import { getProductData } from "./Products";

class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.cart = React.createRef();
    this.id = props.id;
    this.quantity = props.quantity;
    this.productData = getProductData(this.id);
  }

  handleRemoveFromCart() {
    this.cart.current.deleteFromCart(this.id);
  }

  render() {
    return (
      <>
        <h3>{this.productData.Name}</h3>
        <p>Quantity: {this.quantity}</p>
        <p>${(this.quantity * this.productData.Price).toFixed(2)}</p>
        <Button size="sm" onClick={() => this.handleRemoveFromCart()}>
          Remove
        </Button>
        <hr></hr>
      </>
    );
  }
}

CartProduct.contextType = CartContext;

export default CartProduct;
