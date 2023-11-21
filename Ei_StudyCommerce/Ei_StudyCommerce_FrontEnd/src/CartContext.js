// CartContext.js
import { createContext, useState } from "react";
import { Pro, getProductData } from "./Products";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function applyDiscount(product) {
    const specialOffer = product.specialOffer;
    let discountedQuantity = product.quantity;

    if (specialOffer === "buyOneGetOneFree") {
      discountedQuantity = Math.ceil(product.quantity / 2);
    } else if (specialOffer === "twentyPercentOff") {
      discountedQuantity = Math.ceil((product.quantity * 80) / 100);
    }

    return discountedQuantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      // product is in cart
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: applyDiscount(product) + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: applyDiscount(product) - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => currentProduct.id !== id)
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.forEach((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.Price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
