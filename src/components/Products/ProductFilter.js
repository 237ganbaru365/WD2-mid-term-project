import React from "react";
import Button from "../UI/Button";

import classes from "../../css/ProductFilter.module.css";

const ProductFilter = (props) => {
  const map = props.items.map((item) => item.label);
  const newItems = [...new Set(map)];

  return (
    <div className={classes["filter"]}>
      <ul className={classes["filter-field"]}>
        <li className={classes["filter-item"]}>
          <Button>all</Button>
        </li>
        {newItems.map((newItem) => {
          return (
            <li className={classes["filter-item"]} key={newItem}>
              <Button>{newItem}</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductFilter;
