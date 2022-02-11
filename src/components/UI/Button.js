import React from "react";

import classes from "../../css/Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.filteredHandler} className={classes["button"]}>
      {props.children}
    </button>
  );
};

export default Button;
