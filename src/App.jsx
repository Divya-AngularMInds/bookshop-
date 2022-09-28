import "./App.css";
import Data from "./data.js";
import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Cards from "./Card";

function App() {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  
  const [show, setShow] = useState(false);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  console.log(cart);
  const cards = Data.map((item, index) => {
    return (
      <Cards
        key={index}
        cart={cart}
        setCart={setCart}
        // show={show}
        // setShow={setShow}
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
