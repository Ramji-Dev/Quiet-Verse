import React, { useEffect, useRef } from 'react'
import { books } from '../../bookData'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import './Shop.css'
import { Link } from 'react-router-dom'

function Shop() {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    let shopRef = useRef(null);

    useGSAP(() => {
        gsap.to('.book-con', {
            // delay: 1,
            opacity: 1
        })
    }, {scope: shopRef.current})

    
    
  return (
    <div className='shop-con' ref={shopRef} >
        {
            books.map(({id, name, image, price}) => {
                return (
                    <div key={id} className='book-con'>
                        <Link to={`/shop/${id}`}>
                            <img src={image} alt={name} className='shop-img' />
                            <div className="book-details">
                                <h5 className='name-price'>{name} • ${price}</h5>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Shop