import React from "react";
import "./styles.css";
import Sto from "./Store";
import Suc from "./Suc";
import Cal from "./Cal";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./CartContext";

class App extends React.Component {
  render() {
    return (
      <CartProvider>
        <Container>
          <div className="App">
            <Nav />
            <BrowserRouter>
              <Routes>
                <Route index element={<Sto />} />
                <Route path="/success" element={<Suc />} />
                <Route path="/cancel" element={<Cal />} />
              </Routes>
            </BrowserRouter>
          </div>
        </Container>
      </CartProvider>
    );
  }
}

export default App;
