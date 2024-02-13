import React from 'react'
import { useDispatch } from 'react-redux'
import './CartItem.css'
import { removeBookFromCart } from '../../features/addToCart/addToCartSlice';
import { increaseCartQuantity, decreaseCartQuantity } from '../../features/addToCart/addToCartSlice'

function CartItem({id, name, price, image, quantity}) {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeBookFromCart(id))
    }

    const handleQuantity = (e) => {
        if (e.target.id === 'cart-increase') {
          dispatch(increaseCartQuantity({quantity, id}));
        } else if (e.target.id === 'cart-decrease') {
          dispatch(decreaseCartQuantity({quantity, id}));
        }
      }

  return (
    <div className='cart-item-con'>
        <div className="cart-item">
            <img src={image} alt={name} className="cart-book-img" />

            <div className="quantity-shipping">
                <div className="cart-book-details">
                    <h5 className='cart-book-name'>{name}</h5>
                    <div className="cart-price-and-delete">
                        <h5 className='cart-book-price'>${price}</h5>
                        <i className="ri-delete-bin-7-line" onClick={() => handleClick(id)}></i>
                    </div>
                    <div className="cart-quantity">
                    <h5 className='cart-buy-book-quantity'>Quantity :</h5>
                    <div className="cart-change-quantity">
                        <button className='cart-change-btn'>
                            <h5 className='cart-decrease' id='cart-decrease' onClick={handleQuantity}>-</h5>
                        </button>
                        <h5 className='cart-real-quantity'>{quantity}</h5>
                        <button className='cart-change-btn'>
                            <h5 className='cart-increase' id='cart-increase' onClick={handleQuantity}>+</h5>
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