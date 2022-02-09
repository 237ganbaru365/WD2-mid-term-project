import React from "react";

import classes from "../../css/ProductListItem.module.css";

const ProductListItem = (props) => {
  return (
    <div>
      <div className={classes["product-item__img"]}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={classes["product-item__info"]}>
        <h3 className={classes["product-item__heading"]}>{props.name}</h3>
        <p className={classes["product-item__price"]}>${props.price}</p>
      </div>
    </div>
  );
};

export default ProductListItem;
