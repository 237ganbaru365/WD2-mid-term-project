import React from "react";

const ProductListItem = (props) => {
  return (
    <div className="product-item__content">
      <div className="product-item__img">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="product-item__info">
        <h3>{props.name}</h3>
        <p>${props.price}</p>
      </div>
    </div>
  );
};

export default ProductListItem;
