import React from "react";
import './Navbar.css'
// import {cart} from "./Card"
export default function Navbar({value}) {
    return (
      <nav className="sticky-top d-flex justify-content-between hero">
        <h1>Book Shop</h1>
        <button className="nav--btn">{value?.length}</button>
      </nav>
    );
}