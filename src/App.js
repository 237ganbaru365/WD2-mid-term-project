import React, { useState } from "react";

//Components
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";

//Styles
import classes from "./css/App.module.css";
import "./css/app.css";

//Test Data
const DUMMY_DRINKS = [
  {
    id: "b1",
    category: ["all", "beer"],
    name: "Reid + Reid Native Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/8zzZTwEfv3aLwKWV%7CNative.jpg",
    price: 65.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.<br/>After a two year mission to forage the landscapes of NZ for aromatic native plants that best compliment a classic dry gin, the brothers settled on Kawakawa, Manuka and Horopito making it a quintessential New Zealand gin. <br/>Tasting Notes: Juniper and floral notes followed by citrus. Peppery and ginger spice on the palate and a vibrant, aromatic finish.",
  },
  {
    id: "b2",
    category: ["all", "beer"],
    name: "Reid + Reid Native Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/8zzZTwEfv3aLwKWV%7CNative.jpg",
    price: 65.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.<br/>After a two year mission to forage the landscapes of NZ for aromatic native plants that best compliment a classic dry gin, the brothers settled on Kawakawa, Manuka and Horopito making it a quintessential New Zealand gin. <br/>Tasting Notes: Juniper and floral notes followed by citrus. Peppery and ginger spice on the palate and a vibrant, aromatic finish.",
  },
  {
    id: "b3",
    category: ["all", "beer"],
    name: "Reid + Reid Native Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/8zzZTwEfv3aLwKWV%7CNative.jpg",
    price: 65.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.<br/>After a two year mission to forage the landscapes of NZ for aromatic native plants that best compliment a classic dry gin, the brothers settled on Kawakawa, Manuka and Horopito making it a quintessential New Zealand gin. <br/>Tasting Notes: Juniper and floral notes followed by citrus. Peppery and ginger spice on the palate and a vibrant, aromatic finish.",
  },
  {
    id: "b4",
    category: ["all", "beer"],
    name: "Reid + Reid Native Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/8zzZTwEfv3aLwKWV%7CNative.jpg",
    price: 65.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.<br/>After a two year mission to forage the landscapes of NZ for aromatic native plants that best compliment a classic dry gin, the brothers settled on Kawakawa, Manuka and Horopito making it a quintessential New Zealand gin. <br/>Tasting Notes: Juniper and floral notes followed by citrus. Peppery and ginger spice on the palate and a vibrant, aromatic finish.",
  },
  {
    id: "b5",
    category: ["all", "beer"],
    name: "Reid + Reid Native Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/8zzZTwEfv3aLwKWV%7CNative.jpg",
    price: 65.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.<br/>After a two year mission to forage the landscapes of NZ for aromatic native plants that best compliment a classic dry gin, the brothers settled on Kawakawa, Manuka and Horopito making it a quintessential New Zealand gin. <br/>Tasting Notes: Juniper and floral notes followed by citrus. Peppery and ginger spice on the palate and a vibrant, aromatic finish.",
  },
  {
    id: "b6",
    category: ["all", "beer"],
    name: "Reid + Reid Native Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/8zzZTwEfv3aLwKWV%7CNative.jpg",
    price: 65.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.<br/>After a two year mission to forage the landscapes of NZ for aromatic native plants that best compliment a classic dry gin, the brothers settled on Kawakawa, Manuka and Horopito making it a quintessential New Zealand gin. <br/>Tasting Notes: Juniper and floral notes followed by citrus. Peppery and ginger spice on the palate and a vibrant, aromatic finish.",
  },
  {
    id: "b7",
    category: ["all", "beer"],
    name: "Reid + Reid Native Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/8zzZTwEfv3aLwKWV%7CNative.jpg",
    price: 65.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.<br/>After a two year mission to forage the landscapes of NZ for aromatic native plants that best compliment a classic dry gin, the brothers settled on Kawakawa, Manuka and Horopito making it a quintessential New Zealand gin. <br/>Tasting Notes: Juniper and floral notes followed by citrus. Peppery and ginger spice on the palate and a vibrant, aromatic finish.",
  },
  {
    id: "b8",
    category: ["all", "beer"],
    name: "Reid + Reid Native Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/8zzZTwEfv3aLwKWV%7CNative.jpg",
    price: 65.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.<br/>After a two year mission to forage the landscapes of NZ for aromatic native plants that best compliment a classic dry gin, the brothers settled on Kawakawa, Manuka and Horopito making it a quintessential New Zealand gin. <br/>Tasting Notes: Juniper and floral notes followed by citrus. Peppery and ginger spice on the palate and a vibrant, aromatic finish.",
  },
  {
    id: "b9",
    category: ["all", "beer"],
    name: "Reid + Reid Native Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/8zzZTwEfv3aLwKWV%7CNative.jpg",
    price: 65.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.<br/>After a two year mission to forage the landscapes of NZ for aromatic native plants that best compliment a classic dry gin, the brothers settled on Kawakawa, Manuka and Horopito making it a quintessential New Zealand gin. <br/>Tasting Notes: Juniper and floral notes followed by citrus. Peppery and ginger spice on the palate and a vibrant, aromatic finish.",
  },
  {
    id: "b10",
    category: ["all", "beer"],
    name: "Reid + Reid Native Gin 700mL 42%",
    img: "https://cdn.chec.io/merchants/17951/assets/8zzZTwEfv3aLwKWV%7CNative.jpg",
    price: 65.0,
    info: "Hand crafted and small batch distilled in a bespoke copper pot still, Reid + Reid Native Gin is a unique New Zealand gin created in Martinborough by Stew and Chris Reid.<br/>After a two year mission to forage the landscapes of NZ for aromatic native plants that best compliment a classic dry gin, the brothers settled on Kawakawa, Manuka and Horopito making it a quintessential New Zealand gin. <br/>Tasting Notes: Juniper and floral notes followed by citrus. Peppery and ginger spice on the palate and a vibrant, aromatic finish.",
  },
];

function App() {
  return (
    <div>
      <div className={classes.hero}></div>
      <div className={classes.navbar} id="nav"></div>
      <Cart />
      <Products items={DUMMY_DRINKS} />
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
