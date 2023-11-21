import React, { Component } from "react";
import { Button, Container, Navbar, Modal, ModalBody } from "react-bootstrap";
import { CartContext } from "./CartContext";
import CartProduct from "./CartProduct";

class Nav extends Component {
  static contextType = CartContext;

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  checkout = async () => {
    const { items } = this.context;
    await fetch("http://localhost:8080/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  render() {
    const { items } = this.context;
    const productsCount = items.reduce((sum, Pro) => sum + Pro.quantity, 0);

    return (
      <>
        <Navbar expand="sm">
          <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={this.handleShow}>
              Cart ({productsCount} Items)
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <ModalBody>
            {productsCount > 0 ? (
              <>
                <p>Items in your cart:</p>
                <hr></hr>
                {items.map((currentProduct, idx) => (
                  <CartProduct
                    key={idx}
                    id={currentProduct.id}
                    quantity={currentProduct.quantity}></CartProduct>
                ))}

                <h1>Total: {this.context.getTotalCost().toFixed(2)}</h1>
                <Button variant="success" onClick={this.checkout}>
                  Purchase items!
                </Button>
              </>
            ) : (
              <h1>There are no items in your cart!</h1>
            )}
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Nav;
