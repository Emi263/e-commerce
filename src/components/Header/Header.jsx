import { MoonOutlined, ShoppingCartOutlined, SunOutlined } from "@ant-design/icons";
import { Badge, Input, Modal, Switch } from "antd";

import "./header.css";
import { useContext, useState } from "react";
import { ProductContext, ThemeContext } from "../../App";
import initialProducts from "../../data/products";

function Header() {
  const themeContext = useContext(ThemeContext);
  const productContext = useContext(ProductContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function onChange(checked) {
    if (checked) {
      themeContext.setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      themeContext.setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  function filterProductListOnChange(e) {
    const value = e.target.value;

    if (value === "") {
      return productContext.setProducts(initialProducts);
    }

    const filteredProducts = productContext.products.filter((item) => {
      if (item.product.name.toLowerCase().includes(value.toLowerCase())) return true;

      return false;
    });

    productContext.setProducts(filteredProducts);
  }

  const numberOfProductsInCart = productContext.productsInCart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );

  const totalPrice = productContext.productsInCart.reduce(
    (acc, currentProd) => acc + currentProd.quantity * currentProd.price,
    0
  );

  return (
    <header
      style={{
        backgroundColor: themeContext.theme === "light" ? "white" : "black",
        color: themeContext.theme === "light" ? "black" : "white",
      }}
    >
      <img src={themeContext.theme === "light" ? "./logo-light.svg" : "./logo-dark.svg"} />
      <Input
        onChange={filterProductListOnChange}
        style={{ width: 300, padding: 12 }}
        placeholder="Search for a product"
        allowClear
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <Switch
          style={{
            background: themeContext.theme === "dark" ? "green" : "blue",
          }}
          checkedChildren={<SunOutlined />}
          unCheckedChildren={<MoonOutlined />}
          defaultChecked={themeContext.theme === "light"}
          onChange={onChange}
        />

        <Badge count={numberOfProductsInCart}>
          <ShoppingCartOutlined
            onClick={() => setIsModalOpen(true)}
            style={{
              fontSize: 30,
              color: themeContext.theme === "dark" ? "white" : "black",
            }}
          />
        </Badge>

        <Modal title="Basic Modal" open={isModalOpen} onOk={() => {}} onCancel={() => setIsModalOpen(false)}>
          {productContext.productsInCart.map((prod) => {
            return (
              <li key={prod.id}>
                {prod.name} x {prod.quantity} {"-----"}
                {prod.quantity * prod.price}L
              </li>
            );
          })}
          <br />
          <hr />
          Total: {totalPrice}L
        </Modal>
      </div>
    </header>
  );
}

export default Header;
