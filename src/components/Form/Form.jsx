import React from 'react'
import './Form.css'

function Form() {

    const handleSubmit = (e) => {
        console.log('e');
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit} className="form-con">
            <div className="write">
                <h5 className='form-head'>Write Us</h5>
                <hr className='form-line'/>
            </div>
            <div className="form-dets">
                <div className="name">
                    <input type="text" placeholder='First Name' className='first-name'/>
                    <input type="text" placeholder='Last Name' className='last-name'/>
                </div>
                <input type="text" placeholder='Email Address' className="email" />
                <input type="tel" placeholder='Phone Number' className="phone" />
            </div>
            <div className="submit">
                <textarea placeholder='Quietly connect. Share thoughts and questions gracefully.'></textarea>
                <button type='submit'>
                    <i className="ri-arrow-right-line"></i>
                </button>
            </div>
        </form>
    </div>
  )
}

export default Form