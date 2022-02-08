import React from "react";

//Compornents
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

const Products = (props) => {
  return (
    <div>
      <main>
        <ProductFilter />
        <ProductList />
      </main>
    </div>
  );
};

export default Products;
