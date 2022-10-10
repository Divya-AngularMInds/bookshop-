import "./App.css";
import Data from "./data.js";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Cards from "./Card";
import Cart from "./Cart";
import Login from "./login";
import { cloneDeep } from "lodash";
import axios from "axios";
import Register from "./register";
function App() {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [show, setShow] = useState(false);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  console.log(cart);
  useEffect(() => {
    axios.get("https://6343b8fc2dadea1175abc989.mockapi.io/api/all/User")
    .then((res) =>{console.log(res.data);})
  })
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

  function remove(id, count) {
    // let temparr = JSON.parse(JSON.stringify(props.cart));
    var temparr = cloneDeep(cart);
    // let temparr = props.cart;
    let index = temparr.findIndex((i) => i.id === id);

    if (temparr[index].count === 1) {
      temparr = temparr.filter((i) => i.id != id);
      setCart(temparr);
    } else {
      // let newprop = { ...props, count: count - 1 };

      temparr[index].count = temparr[index].count - 1;
      setCart(temparr);
      console.log(cart[index].count);
    

    
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Navbar value={cart} />

              <section className="Card--list">{cards}</section>
            </>
          }
        />
        <Route
          path="cart"
          element={<Cart cart={cart} setCart={setCart} handleClick={remove} />}
        />
        <Route
          path="register"
          element={<Register />}
        />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Navbar value={cart} />
    //   <section className="Card--list">{cards}</section>
    //   {/* <button onClick={() => hello()}>hello</button> */}
    // </div>
  );
}

export default App;
