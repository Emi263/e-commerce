import React, { createContext, useContext } from "react";

import { Avatar, Button, Card } from "antd";
import { ProductContext } from "../../App";
const { Meta } = Card;

function ProductCard(props) {
  const productContext = useContext(ProductContext);

  function handleAddProductInCart() {
    const productExists = productContext.productsInCart.some((product) => product.id === props.product.id);

    if (productExists) {
      const updatedProductsInCart = productContext.productsInCart.map((prod) => {
        if (prod.id === props.product.id) {
          return {
            ...prod,
            quantity: prod.quantity + 1,
          };
        }

        return prod;
      });

      productContext.setProductsInCart(updatedProductsInCart);

      return;
    }

    const product = {
      name: props.product.name,
      price: props.product.price,
      quantity: 1,
      id: props.product.id,
    };

    productContext.setProductsInCart([...productContext.productsInCart, product]);
  }

  function handleDecreaseProductInCart() {
    const productExists = productContext.productsInCart.some((product) => product.id === props.product.id);

    if (productExists) {
      if (currentProduct.quantity === 1) {
        const updatedProducts = productContext.productsInCart.filter((prod) => prod.id !== props.product.id);
        return productContext.setProductsInCart(updatedProducts);
      }

      const updatedProductsInCart = productContext.productsInCart.map((prod) => {
        if (prod.id === props.product.id) {
          return {
            ...prod,
            quantity: prod.quantity - 1,
          };
        }

        return prod;
      });

      return productContext.setProductsInCart(updatedProductsInCart);
    }
  }

  const currentProduct = productContext.productsInCart.find((prod) => prod?.id === props.product?.id);
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt="example" src={props.product.imageUrl} />}
    >
      <Meta
        avatar={<Avatar src={props.product.imageUrl} />}
        title={props.product.name}
        description={props.product.description}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 24,
        }}
      >
        <h3>{props.product.price} L </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Button disabled={!currentProduct} onClick={handleDecreaseProductInCart}>
            -
          </Button>
          <span>{currentProduct?.quantity || 0}</span>
          <Button onClick={handleAddProductInCart}>+</Button>
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
