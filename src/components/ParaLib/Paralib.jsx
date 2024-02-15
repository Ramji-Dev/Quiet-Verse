import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import './Paralib.css'
gsap.registerPlugin(ScrollTrigger, useGSAP);

function Paralib({image, text, bg}) {

  const paraRef = useRef();
  const tl = useRef();
  
  useGSAP(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '.capsule',
          start: 'top 80%',
          end: 'top -150%',
          scrub: true,
          // markers: 1
        }
      })
      .to('.capsule', {
        y: 180
      })
  }, {scope: paraRef})

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