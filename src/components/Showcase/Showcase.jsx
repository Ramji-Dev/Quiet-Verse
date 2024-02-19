import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Showcase.css'
gsap.registerPlugin(ScrollTrigger, useGSAP)

function Showcase() {

  const showCaseRef = useRef()

  useGSAP(() => {

    gsap.to('.orphaned, .image-context', {
      opacity: 1,
      stagger: 0.3,
      duration: 1,
      delay: 0.3 ,
      scrollTrigger: {
          scroller: 'body',
          trigger: 'img',
          start: 'top 75%',
          end: 'top 10%'
      }
    }, {scope: showCaseRef})
  })

  const handleLoad = () => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000)
  }

  return (
    <div>
        <div className="showcase" ref={showCaseRef}>
                <div className="image-con">
                    <img src="./images/orphaned.webp" alt="orphaned" className='orphaned' onLoad={handleLoad}/>
                </div>
                <div className="image-context">
                    <div className='description' >
                    <h2>“Orphaned”</h2>
                        <div className='desc-con'>
                        <p className='book-desc'><span className='title'>A Daughter's Resilience</span> <br />
                        chronicles a compelling odyssey of loss and survival. Join the protagonist on a heartfelt journey through adversity, self-discovery, and the triumph of the human spirit.</p>
                        <cite>~ Cailen Wells</cite>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Showcase