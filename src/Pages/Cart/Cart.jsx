import React, { useEffect } from 'react'
import CartItem from '../../components/CartItem'
import { useSelector } from 'react-redux'
import './Cart.css'

function Cart() {

  const books = useSelector(state => state.addToCart.cartBooks)

  const items = books.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

  const totalPrice = books.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),0);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className='cart-con'>
      <div className="cart-book">
        {
          books.map(({id, name, image, price, quantity}) => {
            return (
              <div key={id}>
                <CartItem id={id} name={name} image={image} price={price} quantity={quantity} />
              </div>
            )
          })
        }
      </div>

        {
          books.length > 0 &&
          <div className="button-price">
            <div className="cart-total">
                  <h6 className='subtotal'>Subtotal ({items} items): ${totalPrice}</h6>
            </div>
            <button className='buy-cart'>Buy Quietly</button>
          </div>
        }
    </div>
  )
}

export default Cart