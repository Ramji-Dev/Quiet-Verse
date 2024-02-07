import React from 'react'
import { useParams } from 'react-router-dom'
import {books} from '../../bookData'
import './BookPage.css'

function BookPage() {
    const { book } = useParams();
    
    const bookDetails = books.find((item) => item.id === book)
    
    const {name, title, price, image} = bookDetails

  return (
    <div className='bookpage-con'>

      <div className="buy-book">
        <img src={`.${image}`} alt={name} className='buy-book-image'/>
      </div>

      <div className="buy-book-dets">
        <div className="book-name">
          <h5 className='buy-book-name'>{name}</h5>
        </div>
        <div className="book-title">
          <h5 className='buy-book-title'>{title}</h5>
        </div>
        
        <div className="price-quantity-con">
          <div className="book-price">
            <h5 className='buy-book-price-text'>Price :</h5>
            <h5 className='buy-book-price'>$ {price}</h5>
          </div>

          <div className="quantity">
            <h5 className='buy-book-quantity'>Quantity :</h5>
            <div className="change-quantity">
              <button className='change-btn'>
                <h5 className='decrease'>-</h5>
              </button>
              <h5 className='real-quantity'>453</h5>
              <button className='change-btn'>
                <h5 className='increase'>+</h5>
              </button>
            </div>
          </div>
        </div>

        <div className="shipping">
          <h5 className='shipping-details'><span className='shipping-span'>Quietly ships within </span> 3-4 business days</h5>
        </div>

        <div className="buttons">
          <button className='add'>Add to cart</button>
          <button className='buy'>Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default BookPage