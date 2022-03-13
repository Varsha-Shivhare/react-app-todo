import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Item from './Item';
import {cartContext} from './Cart';

function ContextCart() {

    const {item} = useContext(cartContext);

    return (
        <>
             <header>
                <div className='continue-shopping'>
                    <img src='./images/arrow.png'  alt='arrow' className='arrow-icon'/>
                    <h3>Continue Shopping</h3>
                </div>
                <div className='cart-icon'>
                <img src='./images/cart.png'  alt='cart' />
                <p>1</p>
                </div>
                
            </header>
            <section className='main-cart-section'>
                <h1>Shopping Cart</h1>
                <p className='total-items'>You have <span className='total-items-count'>7</span> items in your cart.</p>
                
                <div className='cart-items'>
                    <div className='cart-items-container'>
                        <Scrollbars>
                            {
                                item.map((curItem) => {
                                    return <Item key={curItem.id} {...curItem}/>
                            })
                        }                 
                           
              
                        </Scrollbars>
                    </div>
                </div>

                    <div className='card-total'>
                        <h3>Cart Total: <span>$250</span></h3>
                        <button>Checkout</button>
                    </div>

            </section>
        </>
    )
}

export default ContextCart;
