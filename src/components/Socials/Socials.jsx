import React from 'react'
import './Socials.css'

function Socials() {
  return (
    <div className='social-comp'>
        <div className="social-con">    
            <div className="linkedin">
                <div className="box">
                    <h5 className='s-media'>LinkedIn</h5>
                </div>
                <h5 className="s-media1">LinkedIn</h5>
            </div>
            <div className="twitter">
                <div className="box">
                    <h5 className='s-media'>Twitter</h5>
                </div>
                <h5 className="s-media1">Twitter</h5>
            </div>
            <div className="facebook">
                <div className="box">
                    <h5 className='s-media'>Facebook</h5>
                </div>
                <h5 className="s-media1">Facebook</h5>
            </div>
            <div className="insta">
                <div className="box">
                    <h5 className='s-media'>Instagram</h5>
                </div>
                <h5 className="s-media1">Instagram</h5>
            </div>
            <div className="youtube">
                <div className="box">
                    <h5 className='s-media'>Youtube</h5>
                </div>
                <h5 className="s-media1">Youtube</h5>
            </div>
        </div>  
    </div>
  )
}

export default Socials