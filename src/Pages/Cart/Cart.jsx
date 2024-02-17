import React, { useEffect, useRef } from 'react'
import CartItem from '../../components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { emptyCart } from '../../features/addToCart/addToCartSlice'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './Cart.css'

function Cart() {

  const books = useSelector(state => state.addToCart.cartBooks);

  const items = books.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

  const totalPrice = books.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),0);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  const ref = useRef();
  const {contextSafe} = useGSAP({scope: ref}) 

  const dispatch = useDispatch();
  const handleClick = contextSafe(() => {
    dispatch(emptyCart(books))

    gsap.to('.cart-purchase', {
      opacity: 1,
      delay: 0.3
    })

    setTimeout(() => {
      gsap.to('.cart-purchase', {
        opacity: 0
      })
    }, 2000);
  })

  return (
    <div className='cart-con' ref={ref}>
      <h6 className='cart-purchase'>Purchase Successful</h6> 
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
            <button className='buy-cart' onClick={handleClick}>Buy Quietly</button>
          </div>
        }
    </div>
  )
}

export default Cart