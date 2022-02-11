import React from "react";

//Components
import Button from "@material-ui/core/Button";

//Styles
import classes from "../../css/CartItem.module.css";

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className={classes["cart-item__wrapper"]}>
      <div className={classes["cart-item__contents"]}>
        <h3>{item.name}</h3>
        <div className={classes["cart-item__detail"]}>
          <div className={classes["infomation"]}>
            <p>Price: ${item.price}</p>
            <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
          </div>
          <div className={classes["button"]}>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => removeFromCart(item.id)}
            >
              -
            </Button>
            <p>{item.amount}</p>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() => addToCart(item)}
            >
              +
            </Button>
          </div>
        </div>
      </div>
      <img src={item.img} alt={item.title} />
    </div>
  );
};

export default CartItem;
