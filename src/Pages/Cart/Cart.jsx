import React, { useEffect } from 'react'
import CartItem from '../../components/CartItem'
import { useSelector } from 'react-redux'

function Cart() {

  const book = useSelector(state => state.addToCart.cartBooks)

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div >
      {
        book.map(({id, name, image, price}) => {
          return (
            <div key={id}>
              <CartItem name={name} image={image} price={price} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart