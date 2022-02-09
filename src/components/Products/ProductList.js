import React from "react";

import ProductListItem from "./ProductListItem";

import classes from "../../css/ProductList.module.css";

const ProductList = (props) => {
  return (
    <section className={classes["product-grid"]}>
      {props.items.map((item) => (
        <div className="product-item">
          <ProductListItem
            key={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
          />
        </div>
      ))}
    </section>
  );
};

export default ProductList;
