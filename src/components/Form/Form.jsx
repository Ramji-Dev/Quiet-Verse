import React, { useState } from 'react'
import './Form.css'

function Form() {

    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comment: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
    }

    const handleChange = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
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
                    <input 
                    type="text" 
                    name='firstName' 
                    onChange={handleChange} 
                    value={userDetails.name} 
                    placeholder='First Name' 
                    required 
                    className='first-name'/>
                    <input 
                    type="text" 
                    name='lastName' 
                    onChange={handleChange} 
                    value={userDetails.lastName} 
                    placeholder='Last Name' 
                    className='last-name'/>
                </div>
                <input 
                type="text" 
                name='email' 
                onChange={handleChange} 
                value={userDetails.email} 
                placeholder='Email Address' 
                required 
                className="email" />
                <input 
                type="tel" 
                name='phone' 
                onChange={handleChange} 
                value={userDetails.phone} 
                placeholder='Phone Number'
                required 
                className="phone" />
            </div>
            <div className="submit">
                <textarea 
                name='comment' 
                onChange={handleChange} 
                value={userDetails.comment} 
                placeholder='Quietly connect. Share thoughts and questions gracefully.'></textarea>
                <button type='submit' className='sub-button'>
                    <i className="ri-arrow-right-line"></i>
                </button>
            </div>
        </form>
    </div>
  )
}

export default Form