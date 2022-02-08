import React, { useState } from "react";

//Components
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";

//Styles
import classes from "./App.module.css";
import "./css/app.css";

function App() {
  //navbarのcartボタンを押した時に再レンダー
  const [] = useState("");

  //categoryボタンを押した時にfilterかける -> それをpropsでProductsとProductFilterに渡す
  const [] = useState("");

  //

  return (
    <div>
      <div className={classes.hero}></div>
      <div className={classes.navbar} id="nav">
        {/* 最初からカートボタンはnavバーに表示されていて、クリックによって開く、閉じる*/}
      </div>
      {/* ------> */}
      <Cart />
      <Products />
      {/* ------> */}
      <footer className={classes.footer}>
        <img
          src="https://shop.reidandreid.co.nz/img/reidreid-logo.3292d1b3.svg"
          alt="logo"
        />
        <p>© Copyright 2022 Fumina CICCC .</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
