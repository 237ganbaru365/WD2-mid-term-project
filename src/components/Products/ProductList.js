import React from "react";

import ProductListItem from "./ProductListItem";

import classes from "../../css/ProductList.module.css";

const ProductList = (props) => {
  return (
    <section>
      <div className={classes["product-grid"]}>
        {props.items.map((item) => (
          <ProductListItem
            key={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            info={item.info}
            handleAddToCart={props.handleAddToCart}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
