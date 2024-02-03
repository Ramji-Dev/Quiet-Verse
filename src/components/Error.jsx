import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        <h1>404 Page Not Found</h1>
        <Link to={'/'}>Go back Home</Link>
    </div>
  )
}

export default Error