import "./App.css";
import Data from "./data.js";
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Cards from "./Card";

function App() {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  console.log(JSON.parse(localStorage.getItem("cart")));
  const [count, setCount] = useState(0);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  console.log(cart);
  // console.log(Cards.cart)
  const cards = Data.map((item, index) => {
    return (
      <Cards
        key={index}
        cart={cart}
        setCart={setCart}
        count={count}
        setCount={setCount}
        {...item}
      />
    );
  });

  // const hello = () => {
  //   console.log(JSON.parse(localStorage.getItem("cart")));
  // };
  return (
    <div>
      <Navbar value={cart} />
      <section className="Card--list">{cards}</section>
      {/* <button onClick={() => hello()}>hello</button> */}
    </div>
  );
}

export default App;
