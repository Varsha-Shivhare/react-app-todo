import React from 'react';
import './Cart.css';
//import cartItemCounter from './cartItemCounter';
// <cartItemCounter />
function Cart() {
  return (
      <div className="cartBody">
      <div className="Cart-Container">
      <div className="Header">
        <h3 className="Heading">Shopping Cart</h3>
        <h5 className="Action">Remove all</h5>
        </div>
        <div className="Cart-Items">
            <div className="image-box">
                <img src="" alt="image" style={{ height: "120px" }} />
            </div>
            <div className="about">
                <h1 className="title">Apple Juice</h1>
                <h3 className="subtitle">250ml</h3>
                <img src="" alt="image" style={{ height:"30px" }}/>
            </div>
            <div className="counter"></div>
            <div className="prices"></div>
           
            </div>

            
      </div>
      
      </div>
    
  )
}

export default Cart;