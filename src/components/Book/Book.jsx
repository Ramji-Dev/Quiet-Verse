import React, { useRef } from 'react'
import gsap, { Expo, Power4} from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);
import './Book.css'

function Book({image, name, price}) {
    
  const allRef = useRef(null);

  useGSAP(() => {
    gsap.to('.anime', {
      opacity: 1,
      duration: 1.5,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.anime',
        start: 'center 85%',
        end: 'center 70%',
        // markers: 1,
        // toggleActions: "play none none resume"
      }
    })
    
  }, {scope: allRef.current})

  return (
      <div className='product' ref={allRef}>
        <div className="anime">
          <div className="image">
              <img src={image} alt="flex" className='product-image'/>
          </div>
          <div className="text">
              <h6 className='book-detials'>{name} • ${price}</h6>
          </div>
        </div>
    </div>
  )
}

export default Book