import React from "react";
import "./cart.css";
import Navbar from "./Navbar";
export default function Cart(props) {
  let total = 0 ;
  const cards = props.cart.map((i) => {
    console.log(i);
    total = total + (i.count * i.price)
    console.log(total);
    
    return (
      <div key={i.id} className="cart--card gap-5">
        <div>
          <img src={i.image1} className="cart--img" />
        </div>
        <div>
          <h2 style={{color: `linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)`}}>{i.name}</h2>
        </div>
        <div>
          <h2>{i.count}</h2>
        </div>
        <div><h2>{i.price}</h2></div>
        
        <div>
          <button className="btn" onClick={() => props.handleClick(i.id, i.count)}>Remove from Cart</button>
        </div>
      </div>
    );
  });
  return (
    <>
      <Navbar value={props.cart} />
      <div>
        <h2 className="total">{total}</h2>
      </div>
      {props.cart.length > 0 ? (
        <>
          <section className="mt-5">{cards}</section>
        </>
      ) : (
        <h2>No Books in Cart</h2>
      )}
    </>
  );
}
