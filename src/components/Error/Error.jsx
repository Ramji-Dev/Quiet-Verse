import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

function Error() {
  return (
    <div className='error-con'>
        <h6 className='error-msg'>404 Page Not Found</h6>
        <Link to={'/'}><h6 className='back-home'>Go back Home</h6></Link>
    </div>
  )
}

export default Error