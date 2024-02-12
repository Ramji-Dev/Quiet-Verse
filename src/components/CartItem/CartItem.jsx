import React from 'react'
import './CartItem.css'

function CartItem({name, price, image}) {

  return (
    <div className='cart-item-con'>
        <div className="cart-item">
            <img src={image} alt={name} className="cart-book-img" />

            <div className="quantity-shipping">
                <div className="cart-book-details">
                    <h5 className='cart-book-name'>{name}</h5>
                    <div className="cart-price-and-delete">
                        <h5 className='cart-book-price'>${price}</h5>
                        <i className="ri-delete-bin-7-line"></i>
                    </div>
                    <div className="cart-quantity">
                    <h5 className='cart-buy-book-quantity'>Quantity :</h5>
                    <div className="cart-change-quantity">
                        <button className='cart-change-btn'>
                            <h5 className='cart-decrease'>-</h5>
                        </button>
                        <h5 className='cart-real-quantity'>1</h5>
                        <button className='cart-change-btn'>
                            <h5 className='cart-increase'>+</h5>
                        </button>
                    </div>
                </div>
                </div>

                <div className="cart-shipping">
                <h5 className='cart-shipping-details'><span className='cart-shipping-span'>Quietly ships within </span> 3-4 business days</h5>
                </div>    
            </div>
        </div>    
    </div>
  )
}

export default CartItem