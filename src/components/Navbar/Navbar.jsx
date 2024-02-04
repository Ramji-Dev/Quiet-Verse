import React, { useRef } from 'react'
import { Link, NavLink } from "react-router-dom"
import './Navbar.css'
import gsap, { Expo } from 'gsap'

function Navbar() {

    const menuRef = useRef(null);
    const toggleRef = useRef(null);
    const closeRef = useRef(null);
    const navLinkRef0 = useRef(null);
    const navLinkRef1 = useRef(null);
    const navLinkRef2 = useRef(null);
    const cartRef = useRef(null)

    const handleClick = () => {
            gsap.to(menuRef.current, {
                transform: 'translateX(0%)',
                ease: Expo.easeOut
            })
            toggleRef.current.style.display = 'none'
            closeRef.current.style.display = 'block'

           gsap.to([navLinkRef0.current, navLinkRef1.current, navLinkRef2.current, toggleRef.current, closeRef.current, cartRef.current], {
            color: '#FFF3E2',
           });
        }    
        
        const handleClose = () => {
            gsap.to(menuRef.current, {
                transform: 'translateX(143%)',
                ease: Expo.easeOut
            })
            toggleRef.current.style.display = 'block';
            closeRef.current.style.display = 'none';

            gsap.to([navLinkRef0.current, navLinkRef1.current, navLinkRef2.current, toggleRef.current, closeRef.current, cartRef.current], {
             color: '#9A3B3B',
            });

    }

  return (
    <div className='container'>
        
        <div className="menu-container">
            <menu ref={menuRef}>
                <div className="pages">
                    <Link><h3>Shop</h3></Link>
                    <a href='#elevate'><h3>Elevate</h3></a>
                    <a href='#library'><h3>Library</h3></a>
                    <Link><h3>Donate</h3></Link>
                    <a href='#write'><h3>Write us</h3></a>
                    <Link><h3>Sign in</h3></Link>
                </div>
                <div className="connect">
                    <a>
                        <h6 className='social-links'>
                            <span className='interact'>Connect with us</span>
                        </h6>
                    </a>
                    <a><h6 className='social-links'>Linkedin</h6></a>
                    <a><h6 className='social-links'>Twitter</h6></a>
                    <a><h6 className='social-links'>Facebook</h6></a>
                    <a><h6 className='social-links'>Instagram</h6></a>
                    <a><h6 className='social-links'>Youtube</h6></a>
                </div>
            </menu>
        </div>

        <nav>

            <div className="logo">
                <a href='#'><svg viewBox="0 0 191 191" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M96 4.5L95.5 4M113 22.5L95.5 4M113 22.5L125 10.5L144.5 30L132.5 42M113 22.5L36 99.5M95.5 4L4 96.5L21.5 114L36 99.5M55.5 119L36 99.5M55.5 119L41.5 133L58.5 150M55.5 119L132.5 42M58.5 150L46 162.5L64 180.5L77.5 167M58.5 150L136.5 72M132.5 42L149.5 59L136.5 72M154.5 90L136.5 72M154.5 90L167.5 77L187 96.5L97 186.5L77.5 167M154.5 90L77.5 167" stroke="#9A3B3B" strokeWidth="5"/></svg></a>
            </div>

            <div className="links-container">

                    <div className="links">
                        <NavLink ><h4 ref={navLinkRef0}>Shop</h4></NavLink>
                        <NavLink ><h4 ref={navLinkRef1}>Library</h4></NavLink> 
                        <NavLink ><h4 ref={navLinkRef2}>Donate</h4></NavLink>
                    </div>

                    <div className="icons">
                        <i className="ri-menu-fold-line menu-show" onClick={handleClick} ref={toggleRef}></i>
                        <i className="ri-close-fill close" onClick={handleClose} ref={closeRef}></i>
                        <NavLink><i className="ri-shopping-cart-line cart" ref={cartRef}></i></NavLink>
                    </div>
            </div>

            </nav>

    </div>
  ) 
}

export default Navbar