import React from "react";

//Compornents
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

//Styles
import classes from "../../css/Products.module.css";

const Products = (props) => {
  return (
    <main className={classes["wrapper"]}>
      <ProductFilter items={props.items} />
      <ProductList
        items={props.items}
        handleAddToCart={props.handleAddToCart}
      />
    </main>
  );
};

export default Products;
