import React, { useRef } from 'react'
import { Link, NavLink } from "react-router-dom"
import './Navbar.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useSelector } from 'react-redux'

function Navbar() {

    const isCartEmpty = useSelector(state => state.addToCart.isCartEmpty);

    const ref = useRef();

    const { contextSafe } = useGSAP({scope: ref});

    const handleClick = contextSafe(() => {
        gsap.to('menu', {
            transform: 'translateX(0%)',
            ease: 'expo'
        });

        gsap.to('.menu-show', {
            display: 'none'
        }, 'anime');

        gsap.to('.close', {
            display: 'block'
        }, 'anime')

        gsap.to('.anime-link, .menu-show, .close, .cart', {
            color: '#FFF3E2'
        })
    })
    
    const handleClose = contextSafe(() => {
        gsap.to('menu', {
            transform: 'translateX(143%)',
            ease: 'expo'
        });

        gsap.to('.menu-show', {
            display: 'block'
        }, 'anime');

        gsap.to('.close', {
            display: 'none'
        }, 'anime')

        gsap.to('.anime-link, .menu-show, .close, .cart', {
            color: '#9A3B3B'
        })
    })

  return (
    <div className='container' ref={ref}>
        
        <div className="menu-container">
            <menu>
                <div className="pages">
                    <Link to={'shop'} onClick={handleClose}><h3>Shop</h3></Link>
                    <a href='/#elevate' onClick={handleClose}><h3>Elevate</h3></a>
                    <a href='/#library' onClick={handleClose}><h3>Library</h3></a>
                    <Link onClick={handleClose}><h3>Donate</h3></Link>
                    <a href='#write' onClick={handleClose}><h3>Write us</h3></a>
                    <Link onClick={handleClose}><h3>Sign in</h3></Link>
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

            <div className="logo" onClick={handleClose}>
                <Link to={'/'}><svg className='nav-svg' viewBox="0 0 191 191" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='new-svg' d="M96 4.5L95.5 4M113 22.5L95.5 4M113 22.5L125 10.5L144.5 30L132.5 42M113 22.5L36 99.5M95.5 4L4 96.5L21.5 114L36 99.5M55.5 119L36 99.5M55.5 119L41.5 133L58.5 150M55.5 119L132.5 42M58.5 150L46 162.5L64 180.5L77.5 167M58.5 150L136.5 72M132.5 42L149.5 59L136.5 72M154.5 90L136.5 72M154.5 90L167.5 77L187 96.5L97 186.5L77.5 167M154.5 90L77.5 167" strokeWidth="5"/></svg></Link>
            </div>

            <div className="links-container">

                    <div className="links">
                        <NavLink to={'shop'}><h4 className='anime-link'>Shop</h4></NavLink>
                        <a href='/#library'><h4 className='anime-link'>Library</h4></a> 
                        <NavLink ><h4 className='anime-link'>Donate</h4></NavLink>
                    </div>

                    <div className="icons">
                        <i className="ri-menu-fold-line menu-show" onClick={handleClick}></i>
                        <i className="ri-close-fill close" onClick={handleClose}></i>
                        <Link to={'cart'}>
                            <div className="cart-icon-con">
                                <div className="cart-dets" style={isCartEmpty ? {opacity: 0} : {opacity: 1}}></div>
                                <i className="ri-shopping-cart-line cart"></i>
                            </div>
                        </Link>
                    </div>
            </div>

            </nav>

    </div>
  ) 
}

export default Navbar