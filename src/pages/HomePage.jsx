import React from "react";
import Header from "../components/Header/Header";
import Categories from "../components/Categories/Categories";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductList from "../components/ProductList/ProductList";

function HomePage() {
  return (
    <div>
      <Header />
      <Categories />
      <ProductList />
    </div>
  );
}

export default HomePage;
