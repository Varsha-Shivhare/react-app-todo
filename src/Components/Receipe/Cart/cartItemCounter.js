import React from 'react';
import './Cart.css';

function cartItemCounter() {
  return (
      <>
        <div classNameName="counter">
            <div classNameName="btn">+</div>
            <div classNameName="count">2</div>
            <div classNameName="btn">-</div>

        <div className="prices">
            <div className="amount">$2.99</div>
            <div className="save"><u>Save for later</u></div>
            <div className="remove"><u>Remove</u></div>
        </div>
    </div>
    <hr>  
        <div className="checkout">
        <div className="total">
        <div>
        <div className="Subtotal">Sub-Total</div>
        <div className="items">2 items</div>
        </div>
        <div className="total-amount">$6.18</div>
        </div>
        <button className="button">Checkout</button>
        </div>
        </hr>
      </>
    
  
  )
}

export default cartItemCounter;