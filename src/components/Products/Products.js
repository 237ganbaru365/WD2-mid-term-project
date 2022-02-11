import React, { useState } from "react";

//Compornents
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

//Styles
import classes from "../../css/Products.module.css";

const Products = (props) => {
  const [filteredArr, setFilteredArr] = useState(props.items);

  const filteredHandler = (event) => {
    const newFilteredArr = props.items.filter((item) => {
      return item.label.toUpperCase() === event.target.innerText;
    });
    if (event.target.innerText === "ALL") {
      setFilteredArr(props.items);
    } else {
      setFilteredArr(newFilteredArr);
    }
  };

  return (
    <main className={classes["wrapper"]}>
      <ProductFilter items={props.items} filteredHandler={filteredHandler} />
      <ProductList
        items={filteredArr}
        handleAddToCart={props.handleAddToCart}
      />
    </main>
  );
};

export default Products;
