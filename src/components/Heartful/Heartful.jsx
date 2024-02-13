import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import './Heartful.css'

function Heartful() {

  const heartRef = useRef(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.quote, .leaf-heart', {
      opacity: 1,
      stagger: 0.3,
      duration: 1,
      delay: 1 ,
      scrollTrigger: {
          scroller: 'body',
          trigger: 'img',
          start: '120% 75%',
          // markers:1
      }
  })

 },{scope: heartRef.current})

  return (
    <div className='heart-con'  ref={heartRef}>
        <div className="heart">
                <div className="quote">
                    <p className='feeling'>Elevate minds, inspire hearts. Our books spark profound insights, fostering growth, resilience, and a lasting impact on readers.</p>
                    <cite className='wise'>~ A Wise Man</cite>
                </div>
                <img src="./images/heart.webp" alt="heart" className='leaf-heart'/>
            </div>
    </div>
  )
}

export default Heartful