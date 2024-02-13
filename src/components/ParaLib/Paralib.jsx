import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import './Paralib.css'

function Paralib({image, text, bg}) {

  const paraRef = useRef(null);
  const tl = useRef(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.lib-img',
        start: 'top 10%',
        end: 'top -150%',
        scrub: true,
      }
    })
    .to('.lib-img', {
      y: -180
    })

  }, {scope: paraRef.current})

  return (
        <div ref={paraRef}>
          <div className='para-lib'>
            <div className="capsule" style={{backgroundColor: `#${bg}`}}>
              <h5 className='cap-text' >{text}</h5>
            </div>
            <img src={image} alt={text} className='lib-img'/>
          </div>
        </div>
  )
}

export default Paralib