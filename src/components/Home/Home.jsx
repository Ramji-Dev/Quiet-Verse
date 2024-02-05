import React, { useRef } from 'react'
import './Home.css'
import gsap, { Expo} from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react'
import Book from '../Book';
import Showcase from '../Showcase';
import Heartful from '../Heartful';
import Library from '../Library';
import Form from '../Form';
import Socials from '../Socials';
gsap.registerPlugin(ScrollTrigger);

function Home() {

    const allRef = useRef(null);
    const tl = useRef([null],[null],[null]);
    // const tl1 = useRef(null);
    
    useGSAP(() => {
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
                // markers: {
                //     startColor: "purple",
                //     endColor: "fuchsia",
                // }
            }
        })

        gsap.to('.line-text', {
            opacity: 1,
            delay: 1,
            scrollTrigger: {
                scroller: 'body',
                trigger: '.line-text',
                start: 'top 80%',
                // markers: 1,      
            }
        })

        tl.current[0] = gsap.timeline({
            scrollTrigger: {
                scroller: 'body',
                trigger: '.saying-one',
                start: 'center 70%',
                end: 'center 60%',
                // markers: 1,
            }
        })
        .to('.saying-one', {
            x: '10%',
            duration: 1,
            ease: Expo,
            opacity: 1
        },'transition')
        .to('.saying-two', {
            x: '-15%',
            duration: 1,
            ease: Expo,
            opacity: 1
        },'transition')

        // tl.current = gsap.timeline()
        tl.current[1] = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-container, .sayings, .library-head',
                start: 'center+=6% 60%',
                end: 'center+=6% -20%',
                // markers: 1,
                scrub: 0.1
            }
        }).to('.home-container', {
            backgroundColor: '#611D1B',
        },'transition').to('.sayings, .library-head', {
            color: '#FFF3E2'
        },'transition')

        tl.current[2] = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-container',
                start: 'center+=9% -100%',
                end: 'center+=9% -200%',
                // markers: {
                //         startColor: '#adff2d',
                //         endColor: '#242424'
                //     },
                    scrub: 0.1
                }
            })
            .to('.home-container', {
                backgroundColor: '#FFF3E2'
            },'transition').to('.about', {
            color: '#9A3B3B',

            },'transition')

        gsap.to('.quiet', {
            scale: 1,
            opacity: 1,
            delay: 4,
            scrollTrigger: {
                trigger: '.quiet',
                start: 'bottom-=3% 100%',
                end: 'bottom-=3% 80%',
                // markers: {
                //     startColor: '#adff2d',
                //     endColor: '#242424',
                //     fontSize: '2vw'
                // },
                scrub: 0.1
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

            <div className="line" id='elevate'>
                <h5 className='text-mind'>Mind</h5>
                <hr />
                <h5 className='line-text text-heart'>Heart</h5>
            </div>
            
            <Heartful />

            <div className="pointer"><h6 className='purchase'>PURCHASE</h6></div>
            <div className="book-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={cursorRef}> 
                <Book image={'./images/invisible.webp'} name={'Seeing what’s invisible'} price={15}/>
                <Book image={'./images/elder.webp'} name={'The Elder-Led Church'} price={65}/>
                <Book image={'./images/flex.webp'} name={'flex'} price={45}/>
                <Book image={'./images/earner.webp'} name={'CONFESSION'} price={95}/>
                <Book image={'./images/sales.webp'} name={'Leading Sales Development'} price={49}/>
                <Book image={'./images/circle.webp'} name={'The Thirteenth Circle'} price={25}/>
            </div>

            <div className="thought" >
                <p className='sayings'>
                    <span className='saying-one'>With every book lies a world</span>
                    <span className='saying-two'>Waiting to be discovered.</span>
                </p>
            </div>

            <Library />
            <div className="library-p">
            <p className='about'>
            <span>This is where we curate a sanctuary of words. Our library transcends pages, offering</span> 
            <span> a haven where stories breathe, ideas flourish, and minds find timeless refuge.</span>
            </p>
            </div>
            <Form />
            
        <Socials />

            <div className="quiet">
                <svg className='footer-logo' viewBox="0 0 191 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M96 4.5L95.5 4M113 22.5L95.5 4M113 22.5L125 10.5L144.5 30L132.5 42M113 22.5L36 99.5M95.5 4L4 96.5L21.5 114L36 99.5M55.5 119L36 99.5M55.5 119L41.5 133L58.5 150M55.5 119L132.5 42M58.5 150L46 162.5L64 180.5L77.5 167M58.5 150L136.5 72M132.5 42L149.5 59L136.5 72M154.5 90L136.5 72M154.5 90L167.5 77L187 96.5L97 186.5L77.5 167M154.5 90L77.5 167" stroke="#9A3B3B" strokeWidth="2"/>
                </svg>
            </div>

    </div>
  )
}

export default Home