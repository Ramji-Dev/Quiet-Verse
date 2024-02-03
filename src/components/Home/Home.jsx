import React, { useRef } from 'react'
import './Home.css'
import gsap, { Expo, Power4} from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react'
import Book from '../Book';
import Showcase from '../Showcase/Showcase';
gsap.registerPlugin(ScrollTrigger);

function Home() {

    const allRef = useRef(null);
    // // const tl = useRef(null);
    
    useGSAP(() => {
        // tl.current = gsap.timeline()
        gsap.to('h1', {
            opacity: 1,
            duration:1,
            delay: 0.4,
            stagger: 0.3
        })
        
        gsap.to('.orphaned, .image-context', {
            opacity: 1,
            stagger: 0.3,
            duration: 1,
            delay: 0.3 ,
            scrollTrigger: {
                scroller: 'body',
                trigger: 'img',
                start: 'top 75%',
                end: 'top 10%',
                // markers:1
            }
        })
        
        gsap.to('hr', {
            width: '100%',
            duration: 1.5,
            ease: Expo,
            opacity: 1,
            scrollTrigger: {
                scroller: 'body', 
                trigger: 'hr',
                start: 'top 80%',
                // markers: 1
            }
        })

        gsap.to('.line-text', {
            opacity: 1,
            delay: 1,
            scrollTrigger: {
                scroller: 'body',
                trigger: '.line-text',
                start: 'top 79%',
                // markers: 1
            }
        })

        gsap.to('.quote, .leaf-heart', {
            opacity: 1,
            stagger: 0.3,
            duration: 1,
            delay: 1 ,
            scrollTrigger: {
                scroller: 'body',
                trigger: 'img',
                start: '140% 75%',
                end: '140% 10%',
                // markers:1
            }
        })

        gsap.to('.saying-one', {
            x: '10%',
            duration:1,
            ease: Expo,
            opacity: 1,
            scrollTrigger: {
                scroller: 'body',
                trigger: '.saying-one, .saying-two',
                start: 'center 70%',
                markers: 1  
            }
        })
        
        gsap.to('.saying-two', {
            x: '-15%',
            duration:1,
            ease: Expo,
            opacity: 1,
            scrollTrigger: {
                scroller: 'body',
                trigger: '.saying-one, .saying-two',
                start: 'center 70%',
            }
        })

    }, {scope: allRef.current})

    const cursorRef = useRef(null);

    const { contextSafe } = useGSAP({scope: allRef})

    const handleMouseMove = contextSafe((e) => {
        gsap.to('.pointer', {
            top: e.pageY,
            left: e.pageX,
            opacity: 1,
            scale: 1
        })
    })  

    const handleMouseLeave = contextSafe((e) => {
        gsap.to('.pointer', {
            top: e.pageY,
            left: e.pageX,
            opacity: 0,
            scale: 0
        })
    })  
    
    
    return (
        <div className="home-container" ref={allRef} >
            <div className='heading'>
                <h1>“Discover</h1>
                <h1>Simplicity in</h1>
                <h1>Every Page”</h1>
            </div>

            <Showcase />

            <div className="line">
                <h5>Mind</h5>
                <hr />
                <h5 className='line-text'>Heart</h5>
            </div>
            <div className="heart">
                <div className="quote">
                    <p className='feeling'>Elevate minds, inspire hearts. Our books spark profound insights, fostering growth, resilience, and a lasting impact on readers.</p>
                    <cite className='wise'>~ A Wise Man</cite>
                </div>
                <img src="./images/heart1.png" alt="heart" className='leaf-heart'/>
            </div>

            <div className="pointer"><h6 className='purchase'>PURCHASE</h6></div>
            <div className="book-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={cursorRef}> 
                <Book image={'./images/invisible.webp'} name={'Seeing what’s invisible'} price={15}/>
                <Book image={'./images/elder.webp'} name={'The Elder-Led Church'} price={65}/>
                <Book image={'./images/flex.webp'} name={'flex'} price={45}/>
                <Book image={'./images/earner.webp'} name={'CONFESSION'} price={95}/>
                <Book image={'./images/sales.webp'} name={'Leading Sales Development'} price={49}/>
                <Book image={'./images/circle.webp'} name={'The Thirteenth Circle'} price={25}/>
            </div>

            <div className="thought">
                <p className='sayings'>
                    <span className='saying-one'>With every book lies a world</span>
                    <span className='saying-two'>Waiting to be discovered.</span>
                </p>
            </div>

            <div className="test"></div>

    </div>
  )
}

export default Home