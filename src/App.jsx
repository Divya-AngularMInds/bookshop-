import './App.css'
import Data from './data.js'
import React,{useState} from 'react'
import Navbar from './Navbar'
import Cards from './Card'




function App() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
console.log(cart)
  // console.log(Cards.cart)
  const cards = Data.map((item, index) => {
    return (
      <Cards
        key= {index}
        cart={cart}
        setCart={setCart}
        count={count}
        setCount={setCount}
        {...item}
      
      />
    )
  })

  return (
    <div>
      <Navbar value={cart} />
      <section className="Card--list">{cards}</section>
    </div>
  );
}

export default App
