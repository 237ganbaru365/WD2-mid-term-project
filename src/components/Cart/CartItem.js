import React from "react";

const CartItem = (props) => {
  return (
    <div className="cart__content">
      <div className="cart-list">
        <div className="cart-list__img"></div>
        <div className="cart-list__content">
          <h3>{props.title}</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
