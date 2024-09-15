import React, { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";

import "./productList.css";
import { ProductContext, ThemeContext } from "../../App";

function ProductList() {
  const themeContext = useContext(ThemeContext);
  const productContext = useContext(ProductContext);

  return (
    <section
      className="productList"
      style={{
        background: themeContext.theme === "dark" ? "black" : "white",
      }}
    >
      {productContext.products.map((item) => {
        return <ProductCard key={item.product.id} product={item.product} />;
      })}

      {productContext.products.length == 0 ? <p>Hello, there are no products to show </p> : null}
    </section>
  );
}

export default ProductList;
