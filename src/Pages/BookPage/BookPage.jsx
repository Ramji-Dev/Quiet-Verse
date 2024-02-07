import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import {books} from '../../bookData'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './BookPage.css'

function BookPage() {
    const { book } = useParams();
    
    const bookDetails = books.find((item) => item.id === book)
    
    const {name, title, price, image} = bookDetails

    const bookPageRef = useRef(null);
    const buttonRef = useRef(null);

    const { contextSafe } = useGSAP({scope: bookPageRef.current})

    const handleMouseMove = contextSafe((e) => {
      gsap.to('.ball', {
        top: e.clientY,
        left: e.clientX,
        scale: 0.5,
        opacity: 1
      })
    })

    const handleMouseLeave = contextSafe((e) => {
      gsap.to('.ball', {
        top: e.clientY,
        left: e.clientX,
        scale: 1,
        opacity: 0
      })
    })

  return (
    <div className='bookpage-con' ref={bookPageRef.current}>

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
          <button className='add'  onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <svg className='ball' width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="#EABA8D"/>
            <circle cx="100" cy="100" r="73.4375" fill="#EAD08D"/>
            <circle cx="100" cy="100" r="48.4375" fill="#EAE68D"/>
            <circle cx="100" cy="100" r="26.5625" fill="#B6EA8D"/>
          </svg>
            Add to cart</button>
          <button className='buy' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default BookPage