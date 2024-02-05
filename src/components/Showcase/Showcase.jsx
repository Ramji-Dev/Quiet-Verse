import React from 'react'
import './Showcase.css'
function Showcase() {
  return (
    <div>
        <div className="showcase">
                <div className="image-con">
                    <img src="./images/orphaned.webp" alt="orphaned" className='orphaned'/>
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