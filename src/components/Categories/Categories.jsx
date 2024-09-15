import React from "react";
import { getProductCategories } from "../../utils";

import "./categories.css";

function Categories() {
  const categories = getProductCategories();

  return (
    <div className="categories">
      {categories.map((category) => {
        return <span key={category}>{category}</span>;
      })}
    </div>
  );
}

export default Categories;
