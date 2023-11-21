// Products.js
const Pro = [
  {
    id: "price_1MDYR8SIqQO61hDBiYeTvCOe",
    Name: "Coffee",
    Price: 300,
    specialOffer: "buyOneGetOneFree",
  },
  {
    id: "price_1MDYRPSIqQO61hDBv5nRmkzP",
    Name: "Sunglasses",
    Price: 9.99,
    specialOffer: "none",
  },
  {
    id: "price_1MDYRkSIqQO61hDBxukBSttG",
    Name: "Camera",
    Price: 39.99,
    specialOffer: "twentyPercentOff",
  },
];

function getProductData(id) {
  let ProductData = Pro.find((product) => product.id === id);

  if (ProductData === undefined) {
    console.log("No id" + id);
    return undefined;
  }
  return ProductData;
}

export { Pro, getProductData };
