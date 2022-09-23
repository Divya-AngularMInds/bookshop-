import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Cart from "./Cart"
export default function Cards(props) {
  function add(prop) {
    var temparr = JSON.parse(JSON.stringify(props.cart));
    console.log(temparr);
    if (temparr.find((i) => i.id === prop.id)) {
      let newprop = { ...props, count: prop.count + 1 };
      const { id, count, image1, image2, price, name, ...rest } = newprop;
      let index = temparr.findIndex((i) => i.id === prop.id);
      console.log(temparr[index]);
      temparr[index].count = temparr[index].count + 1;
      // temparr.push({ id, count, image1, image2, price, name });
      props.setCart(temparr);
    } else {
      const { id, count, image1, image2, price, name, ...rest } = props;
      temparr.push({ id, count, image1, image2, price, name });
      props.setCart(temparr);
    }
    // console.log(props.cart)
  }
  function remove(id, count) {
    // let temparr = JSON.parse(JSON.stringify(props.cart));
    let temparr = props.cart;
    let index = temparr.findIndex((i) => i.id === props.id);

    if (temparr[index].count === 1) {
      temparr = temparr.filter((i) => i.id != id);
      props.setCart(temparr);
    } else {
      // let newprop = { ...props, count: count - 1 };

      temparr[index].count = temparr[index].count - 1;
    }

    console.log(props.cart);
  }
  return (
    <div className="card--car">
      {props.image1 ? (
        <Carousel>
          <div>
            <img src={props.image1} className="card--image" />
          </div>

          {props.image2 ? (
            <div>
              <img src={props.image2} className="card--image" />
            </div>
          ) : (
            <></>
          )}
        </Carousel>
      ) : (
        "No Image Available"
      )}

      <h3 className="card--text">{props.name}</h3>
      <h3 className="card--text">{props.price}</h3>
      <div>
        <button className="card--btn" onClick={() => add(props)}>
          Add to Cart
        </button>
        <button
          className="card--btn"
          onClick={() => remove(props.id, props.count)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
