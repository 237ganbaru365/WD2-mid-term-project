import React from "react";

//Components
import Button from "@material-ui/core/Button";

//Styles
import classes from "../../css/ProductListItem.module.css";

const ProductListItem = (props) => {
  return (
    <div className={classes["product-item"]}>
      <div className={classes["product-item__contents"]}>
        <div className={classes["product-item__img"]}>
          <img src={props.img} alt={props.name} />
        </div>
        <div className={classes["product-item__mask"]}>
          <p>{props.info}</p>
          <Button
            className={classes["primary-btn"]}
            onClick={() => props.handleAddToCart(props.item)}
          >
            add to cart
          </Button>
        </div>
        <div className={classes["product-item__info"]}>
          <h3 className={classes["product-item__heading"]}>{props.name}</h3>
          <p className={classes["product-item__price"]}>${props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
