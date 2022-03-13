import React from 'react'
import './Cart.css';

const Item = ({id, title, price, img, quantity}) => {
    return (
        <>
            <div className='items-info'>         
                <div className='product-img'>
                    <img src={img} alt='' />
                </div>
                <div className='title'>
                    <h2>{title}</h2>
                </div>
                <div className='add-minus-quantity'>
                    <i className="fas fa-minus minus"></i>
                    <input type='text' placeholder={quantity} />
                    <i className="fas fa-plus add"></i>
                </div>
                <div className='price'>
                    <h3>{price}</h3>
                </div>
                <div className='remove-item'>
                    <i className="fas fa-trash-alt remove" onClick={removeItem(id)}></i>
                </div>
            </div>
        </>
    )
}

export default Item;
