import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { cloneDeep } from "lodash";
// import Cart from "./Cart"
export default function Cards(props) {
  function add(props) {
    // var temparr = JSON.parse(JSON.stringify(props.cart));
    var temparr = cloneDeep(props.cart);

    // console.log(temparr);
    if (temparr && temparr.find((i) => i.id === props.id)) {
      // let newprop = { ...props, count: props.count + 1 };
      // const { id, count, image1, image2, price, name, ...rest } = newprop;
      let index = temparr.findIndex((i) => i.id === props.id);
      // console.log(temparr[index]);
      temparr[index].count = temparr[index].count + 1;
      props.setCart(temparr);
    } else {
      const { id, count, image1, image2, price, name, ...rest } = props;
      temparr.push({ id, count, image1, image2, price, name,});
      props.setCart(temparr);
    }
    // console.log(props.cart)
  }
  function remove(id, count) {
    // let temparr = JSON.parse(JSON.stringify(props.cart));
    var temparr = cloneDeep(props.cart);
    // let temparr = props.cart;
    let index = temparr.findIndex((i) => i.id === props.id);

    if (temparr[index].count === 1) {
      temparr = temparr.filter((i) => i.id != id);
      props.setCart(temparr);
    } else {
      // let newprop = { ...props, count: count - 1 };

      temparr[index].count = temparr[index].count - 1;
      props.setCart(temparr);
      console.log(props.cart[index].count);

    }

    
    
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
      <div className="flex">
        {props.cart.find((i) => i.id === props.id) ? (
          <>
            <button
              className="card--btn"
              onClick={() => remove(props.id, props.count)}>
              -
            </button>
            <button className="card--btn">
              {props.cart[props.cart.findIndex((i) => i.id === props.id)].count}
            </button>
            <button className="card--btn" onClick={() => add(props)}>
              +
            </button>
          </>
        ) : (
          <button className="card--btn" onClick={() => add(props)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
