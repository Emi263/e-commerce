import { useContext } from "react";
import { getProductCategories } from "../../utils";
import initialProducts from "../../data/products";
import "./categories.css";
import { ProductContext, ThemeContext } from "../../App";

function Categories() {
  const categories = getProductCategories();

  const themeContext = useContext(ThemeContext);
  const productContext = useContext(ProductContext);

  const { selectedCategory } = productContext;
  // const selectedCategory = "Pitas";

  function handleSelectCategory(category) {
    productContext.setSelectedCategory(category);

    if (category === "All") return productContext.setProducts(initialProducts);

    const filteredProducts = initialProducts.filter((item) => {
      if (item.category === category) return true;

      return false;
    });
    productContext.setProducts(filteredProducts);
  }

  return (
    <div
      className="categories"
      style={{
        backgroundColor: themeContext.theme === "dark" ? "black" : "white",
        color: themeContext.theme === "dark" ? "white" : "black",
      }}
    >
      {/* <Carousel
        dots={false}
        style={{
          width: 500,
        }}
        arrows
        infinite={false}
      > */}

      {categories.map((category) => {
        return (
          <span
            onClick={() => handleSelectCategory(category)}
            style={{
              color: selectedCategory === category ? "green" : "black",
            }}
            key={category}
          >
            {category}
          </span>
        );
      })}
      {/* </Carousel> */}
    </div>
  );
}

export default Categories;
