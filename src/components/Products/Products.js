import React from "react";

//Compornents
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

const Products = (props) => {
  return (
    <main>
      <ProductFilter />
      <ProductList items={props.items} />
    </main>
  );
};

export default Products;
