import React, { useState } from "react";

//Components
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

//Styles
import classes from "./css/App.module.css";

//Test Data
const DUMMY_DRINKS = [
  {
    id: "b1",
    label: "spilits",
    name: "Reid + Reid Native Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/8zzZTwEfv3aLwKWV%7CNative.jpg",
    price: 65.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.",
  },
  {
    id: "b2",
    label: "spilits",
    name: "Reid + Reid Barrel Aged Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/kjx7r7YZXKmZYY6n%7CBarrel%20Aged.jpg",
    price: 75.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.",
  },
  {
    id: "b3",
    label: "spilits",
    name: "Reid + Reid Rev Dawson Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/44YUB63k1w0iR08l%7CRev%20Dawson.jpg",
    price: 65.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.",
  },
  {
    id: "b4",
    label: "spilits",
    name: "Reid + Reid Bitter Aperitivo 700mL 25%",
    img: "https://cdn.chec.io/merchants/17951/assets/x8d382utirX9u60h%7CBitter%20Aperitivo.jpg",
    price: 55.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.",
  },
  {
    id: "b5",
    label: "wine",
    name: "Reid + Reid Red Vermouth 375mL 17%",
    img: "https://cdn.chec.io/merchants/17951/assets/SNooUupJYhh9xTWc%7CKahu-Vermouth-2.jpg",
    price: 29.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.",
  },
  {
    id: "b6",
    label: "spilits",
    name: "Reid + Reid Martinborough Cup 700mL 29%",
    img: "https://cdn.chec.io/merchants/17951/assets/dcDKw89Y6F0rzwC2%7CVermouth.jpg",
    price: 59.5,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.",
  },
  {
    id: "b7",
    label: "spilits",
    name: "Reid + Reid Dry Vermouth",
    img: "https://cdn.chec.io/merchants/17951/assets/3IgvSCGpw7T67NUF%7CMartinborough%20Cup.jpg",
    price: 38.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.",
  },
  {
    id: "b8",
    label: "merch",
    name: "Original long T shirts",
    img: "https://luppolobrewing.ca/wp-content/uploads/2020/12/Sweatshirt-1.jpg",
    price: 28.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.",
  },
  {
    id: "b9",
    label: "merch",
    name: "Original Sweat shirts",
    img: "https://luppolobrewing.ca/wp-content/uploads/2020/12/Hoodie-1.jpg",
    price: 35.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.",
  },
  {
    id: "b10",
    label: "merch",
    name: "Original Knit Cap",
    img: "https://luppolobrewing.ca/wp-content/uploads/2020/12/Toque-1.jpg",
    price: 20.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.",
  },
];

function App() {
  //カートの開閉
  const [cartOpen, setCartOpen] = useState(false);
  //カート内の商品、初期値は空配列
  const [cartItems, setCartItems] = useState([]);

  //カートに追加した商品の合計
  const getTotalItems = (items) => {
    items.reduce((ack, item) => ack + item.amount, 0);
  };

  //カート追加ハンドラー
  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      //1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      //First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  //カート削除ハンドラー
  const handleRemoveFromCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  };

  return (
    <div className={classes.app}>
      <div className={classes.hero}></div>
      <nav className={classes["nav-bar"]}>
        <p className={classes["top-logo"]}>
          <img
            src="https://shop.reidandreid.co.nz/img/reidreid-logo-white.a1ac2918.svg"
            alt="logo"
          />
        </p>
        <IconButton
          onClick={() => setCartOpen(true)}
          className={classes.muButton}
        >
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
      </nav>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Products items={DUMMY_DRINKS} handleAddToCart={handleAddToCart} />
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
